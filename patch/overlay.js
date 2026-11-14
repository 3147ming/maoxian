// 烬影·墨刃 — 战斗/氛围/UI 补丁层（不修改主体构建）
// 所有改动通过 window.__game 运行时挂载，保持原包可回滚。

(() => {
  // 诊断：环形缓冲记录运行期错误与启动耗时，发布版也保留（只读导出）
  const diag = window.__inkDiag || (window.__inkDiag = { errors: [], boot: null, quality: null, fps: 0 });
  if (!Array.isArray(diag.errors)) diag.errors = [];
  if (!window.__inkDiagHooked) {
    window.__inkDiagHooked = true;
    const pushError = (kind, message, stack) => {
      diag.errors.push({
        t: Math.round(performance.now()),
        kind,
        message: String(message || '').slice(0, 400),
        stack: String(stack || '').slice(0, 800),
      });
      if (diag.errors.length > 30) diag.errors.shift();
    };
    window.addEventListener('error', e => pushError('error', e.message, e.error?.stack || `${e.filename}:${e.lineno}:${e.colno}`));
    window.addEventListener('unhandledrejection', e => pushError('rejection', e.reason?.message || e.reason, e.reason?.stack));
  }

  // 契约校验：主包缺失关键字段时降级为「不加载补丁」，原版游戏继续可玩
  const requiredKeys = ['world', 'camera', 'input', 'ui', 'update', 'player'];
  const game = window.__game;
  const missing = !game ? requiredKeys : requiredKeys.filter(k => !game[k]);
  if (!game || missing.length) {
    console.error('[BM] window.__game 契约缺失:', game ? missing.join(',') : 'window.__game');
    if (!window.__BM_RETRY_TIMER && !window.__BM_INSTALLED) {
      let tries = 0;
      window.__BM_RETRY_TIMER = setInterval(() => {
        tries++;
        const g = window.__game;
        if (g && g.world && g.update) {
          clearInterval(window.__BM_RETRY_TIMER);
          window.__BM_RETRY_TIMER = null;
          import(new URL('./overlay.js?retry=' + tries, import.meta.url).href).catch(() => {});
        } else if (tries >= 10) {
          clearInterval(window.__BM_RETRY_TIMER);
          window.__BM_RETRY_TIMER = null;
          console.error('[BM] 补丁层放弃加载，原版功能不受影响');
        }
      }, 500);
    }
    return;
  }

  // HMR / 重复注入单例保护：已安装则直接返回，避免重复绑定事件与重复创建 DOM
  if (window.__BM_INSTALLED) {
    console.warn('[BM] overlay already installed, skip duplicate init');
    return;
  }
  window.__BM_INSTALLED = true;

  // ---------------------------------------------------------------- 全局配置
  const CONFIG = {
    input: {
      light: ['KeyJ'],
      heavy: ['MouseRight'],
      dodge: ['KeyK'],
      sprint: ['ShiftLeft', 'ShiftRight'],
      jump: ['Space'],
      parry: ['KeyC'],
      stance: ['KeyV'],
      lock: ['KeyL'],
      transform: ['KeyF'],
      view: ['KeyO'],
      invertY: true,
      spells: ['Digit1', 'Digit2', 'Digit3'],
      move: {
        up: ['KeyW', 'ArrowUp'],
        down: ['KeyS', 'ArrowDown'],
        left: ['KeyA', 'ArrowLeft'],
        right: ['KeyD', 'ArrowRight'],
      },
    },
    player: {
      light: [
        { dmg: 13, reach: 96, arc: 2.4, startup: 0.10, active: 0.06, recovery: 0.20, stamina: 5, poise: 12, lunge: 9, moveScale: 0.35, kb: 60 },
        { dmg: 15, reach: 90, arc: 2.2, startup: 0.08, active: 0.06, recovery: 0.18, stamina: 5, poise: 14, lunge: 8, moveScale: 0.40, kb: 60 },
        { dmg: 24, reach: 112, arc: 1.2, startup: 0.18, active: 0.08, recovery: 0.30, stamina: 7, poise: 32, lunge: 12, moveScale: 0.22, kb: 110 },
        { dmg: 32, reach: 128, arc: 3.0, startup: 0.24, active: 0.10, recovery: 0.42, stamina: 8, poise: 48, lunge: 16, moveScale: 0.15, kb: 150 },
      ],
      heavy: [
        { name: '劈棍', cost: 35, dmg: 46, reach: 110, arc: 1.1, startup: 0.38, active: 0.12, recovery: 0.55, stamina: 18, poise: 70, lunge: 12 },
        { name: '立棍', cost: 45, dmg: 16, reach: 105, arc: Math.PI * 2, startup: 0.30, active: 0.90, recovery: 0.45, stamina: 22, poise: 25, lunge: 0 },
        { name: '戳棍', cost: 30, dmg: 38, reach: 170, arc: 0.45, startup: 0.22, active: 0.12, recovery: 0.40, stamina: 15, poise: 50, lunge: 55 },
      ],
      beast: [
        { dmg: 26, reach: 130, arc: 2.6, startup: 0.08, active: 0.06, recovery: 0.16, lunge: 10, poise: 20 },
        { dmg: 30, reach: 120, arc: 2.2, startup: 0.07, active: 0.06, recovery: 0.16, lunge: 9, poise: 24 },
        { dmg: 40, reach: 140, arc: 2.8, startup: 0.14, active: 0.08, recovery: 0.24, lunge: 14, poise: 40 },
      ],
      force: { gainPerHit: 7, multiBonus: 2, maxPerSwing: 14, decayDelay: 4, decayRate: 4, comboDecay: 0.12, comboMin: 0.45, comboReset: 1.5, enhancedThreshold: 70, enhancedCost: 70 },
      stamina: { delay: 0.6, sprintDrain: 12, sprintDelay: 0.15, exhaustClear: 25, lockMax: 1.5 },
      jump: { stamina: 12, velocity: 6.8, gravity: 20 },
      chi: { delay: 1.0, lockMax: 2.0 },
      parry: { min: 0.16, max: 0.30, stamina: 10, cd: 0.75, successForce: 30, counterTime: 1.5 },
      spells: [
        { name: '定身', cost: 30, cd: 12 },
        { name: '移形闪', cost: 20, cd: 8 },
        { name: '护身法', cost: 40, cd: 18 },
      ],
      shield: { ratio: 0.5, duration: 8 },
      transform: { duration: 12, cost: 50, damageTimeLoss: 0.02, endRadius: 180, endDamage: 70 },
    },
    boss: {
      phases: {
        1: { posture: 120, decay: 6, tempo: 0.9, slamChance: 0, weakMult: 1.5, breakMult: 1.35 },
        2: { posture: 100, decay: 8, tempo: 0.6, slamChance: 0.28, weakMult: 1.5, breakMult: 1.35 },
        3: { posture: 80, decay: 10, tempo: 0.4, slamChance: 0.45, weakMult: 1.6, breakMult: 1.4 },
      },
      breakTime: 1.2,
      postureDamageScale: 1.2,
      postureMaxPerHit: 40,
      slamDamage: 34,
      slamRadius: 175,
      weakTime: 2.5,
    },
    ai: {
      tokens: 2,
      ringBase: 140,
      ringMin: 80,
      shrinkPerSec: 10,
      expandPerSec: 25,
      idleThreshold: 2.5,
      feintBase: 0.30,
      pincerMin: 0.45,
      pincerMax: 0.70,
      directorInterval: 2,
      orbitDistance: 92,
      secondaryDistance: 62,
    },
    difficulty: {
      normal: { aiSpeed: 1.0, feint: 0.30, forceGain: 1.0, staminaCost: 1.0, chiCost: 1.0 },
      hard: { aiSpeed: 1.2, feint: 0.45, forceGain: 0.85, staminaCost: 1.15, chiCost: 1.15 },
    },
    graphics: {
      high: { shafts: 4, bloom: 0.38, emberInterval: 0.18, particleCap: 260, detail: 1.0 },
      medium: { shafts: 2, bloom: 0.30, emberInterval: 0.26, particleCap: 160, detail: 0.55 },
      low: { shafts: 0, bloom: 0.18, emberInterval: 0.40, particleCap: 80, detail: 0 },
    },
    perf: { auto: true, minFps: 45, sampleSec: 1.5, downgradeAfter: 2 },
    ui: { combatFade: 6.0, lowHpFilter: true, bossEdge: true, touch: 'auto' },
    render: { surfaceDetail: true, wetness: 0.22, detailStrength: 1.0, exposure: 1.16, hemiBoost: 1.22 },
    camera: { mode: 'first', eyeHeight: 1.58, fov: 68 },
    impact: {
      light: { stop: 0.028, scale: 0.10, shake: 3, zoom: 1.2, roll: 0.006, dur: 0.07 },
      heavy: { stop: 0.085, scale: 0.04, shake: 12, zoom: 4.0, roll: 0.016, dur: 0.13 },
      enhanced: { stop: 0.130, scale: 0.02, shake: 18, zoom: 6.0, roll: 0.022, dur: 0.17 },
      parry: { stop: 0.300, scale: 0.12, shake: 10, zoom: 3.0, roll: 0.010, dur: 0.12 },
      transform: { stop: 0.060, scale: 0.06, shake: 10, zoom: 3.0, roll: 0.012, dur: 0.12 },
      boss: { stop: 0.050, scale: 0.06, shake: 5, zoom: 1.6, roll: 0.008, dur: 0.10 },
    },
    audio: { external: {} },
  };
  const DEFAULT_INPUT = JSON.parse(JSON.stringify(CONFIG.input));

  // 加载本地自定义键位
  try {
    const saved = JSON.parse(localStorage.getItem('inkblade_keybinds') || 'null');
    if (saved && typeof saved === 'object') {
      for (const key of Object.keys(CONFIG.input)) {
        if (key === 'invertY') continue;
        if (saved[key] !== undefined) CONFIG.input[key] = saved[key];
      }
    }
  } catch (e) {
    console.warn('[BM] keybind load failed', e);
  }
  window.__BM_CONFIG = CONFIG;

  const STATE = {
    stance: 0,
    pending: [],
    sequences: [],
    patchedPlayer: null,
    patchedBoss: null,
    enemySeen: new WeakSet(),
    world: null,
    weather: 'mist',
    shafts: [],
    shaftMaterials: [],
    bossCaptured: false,
    lastAttack: '',
    lastHit: null,
    transformSource: null,
    transformScale: 1,
    hud: null,
    frameId: 0,
    lastCombat: 0,
    difficulty: 'normal',
    quality: 'high',
    qualityAuto: true,
    fps: 0,
    fpsAcc: 0,
    fpsFrames: 0,
    fpsLow: 0,
    fpsEl: null,
    fpsVisible: false,
    hudAcc: 0,
    tipIdx: 0,
    tipMove: 0,
    tipsDone: false,
    tipEl: null,
    lockTarget: null,
    touch: false,
    tpPitch: 0.42,
    audioBuffers: {},
    audioElements: {},
    bindCapture: null,
    keyPanel: null,
    cameraMode: 'first',
    fpRig: null,
    fpStaff: null,
    fpArms: null,
    fpTime: 0,
    invCat: 'all',
    invSel: null,
    interactEl: null,
    reticleEl: null,
  };

  STATE.cameraMode = CONFIG.camera.mode === 'third' ? 'third' : 'first';
  const BASE_FOV = game.camera && game.camera.fov ? game.camera.fov : 50;
  // 原版 pitch 范围 0.07~1.05 是第三人称环绕高度；第一人称以 0.56 为水平视线中心，
  // 并放大俯仰幅度，保证能低头看到脚下与近身敌人。
  const FP_PITCH_CENTER = 0.56;
  const FP_PITCH_SCALE = 1.6;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const WORLD_SCALE = 1 / 32;
  const Vec3 = game.camera?.position?.constructor || null;
  const tmpVec = Vec3 ? new Vec3() : { x: 0, y: 0, z: 0, copy() { return this; }, project() { return this; } };

  // ---------------------------------------------------------------- 构造器反取
  function harvest(scene) {
    const C = { Mesh: null, Box: null, Cyl: null, Plane: null, StdMat: null, Group: null };
    scene.traverse(o => {
      if (o.isMesh) {
        C.Mesh = C.Mesh || o.constructor;
        const gt = o.geometry && o.geometry.type;
        if (gt === 'BoxGeometry') C.Box = C.Box || o.geometry.constructor;
        if (gt === 'CylinderGeometry') C.Cyl = C.Cyl || o.geometry.constructor;
        if (gt === 'PlaneGeometry') C.Plane = C.Plane || o.geometry.constructor;
        if (o.material && o.material.isMeshStandardMaterial) {
          C.StdMat = C.StdMat || o.material.constructor;
        }
      }
      if (o.isGroup) C.Group = C.Group || o.constructor;
    });
    return C;
  }
  const C = harvest(game.world.scene);

  // 画质档位：读取上次保存的选择（手动切换会锁定，自动降档不锁定）
  try {
    const savedQ = JSON.parse(localStorage.getItem('inkblade_quality') || 'null');
    if (savedQ && CONFIG.graphics[savedQ.level]) {
      STATE.quality = savedQ.level;
      STATE.qualityAuto = savedQ.auto !== false;
    }
  } catch (e) {
    console.warn('[BM] quality load failed', e);
  }
  try {
    STATE.tipsDone = localStorage.getItem('inkblade_tips_done') === '1';
  } catch (e) { /* storage 不可用时每次都提示 */ }
  function saveQuality(level, auto) {
    STATE.quality = level;
    STATE.qualityAuto = auto;
    try {
      localStorage.setItem('inkblade_quality', JSON.stringify({ level, auto }));
    } catch (e) { /* storage 不可用时忽略 */ }
  }
  function effectiveDetail() {
    if (!CONFIG.render.surfaceDetail) return 0;
    const gq = CONFIG.graphics[STATE.quality] || CONFIG.graphics.high;
    return CONFIG.render.detailStrength * (gq.detail ?? 1);
  }

  const detailUniforms = {
    uDetail: { value: effectiveDetail() },
    uWet: { value: CONFIG.render.wetness },
  };

  // 输入映射：让原引擎的固定按键查询也能响应 CONFIG 中的自定义键位
  function wrapInput(input) {
    if (!input || input.__bmMapped) return;
    input.__bmMapped = true;
    const origPressed = input.wasPressed.bind(input);
    const origAny = input.wasAnyPressed.bind(input);
    const origDown = input.isDown.bind(input);
    const pressedAny = list => (list || []).some(c => origPressed(c));

    input.wasPressed = code => {
      if (code === 'Space') return origPressed('Space');
      if (code === 'KeyJ') return origPressed('KeyJ') || pressedAny(CONFIG.input.light);
      const m = /^Digit([123])$/.exec(code);
      if (m) return origPressed(code) || pressedAny([CONFIG.input.spells[Number(m[1]) - 1]]);
      return origPressed(code);
    };
    input.wasAnyPressed = arr => {
      if (arr && (arr.includes('Space') || arr.includes('ShiftLeft'))) {
        // 原引擎在这里查询闪避；Space 已改为跳跃，只返回配置的闪避键
        return pressedAny(CONFIG.input.dodge);
      }
      return origAny(arr);
    };
    input.isDown = code => {
      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        return origDown(code) || CONFIG.input.sprint.some(c => origDown(c));
      }
      if (code === 'KeyJ') {
        return origDown(code) || CONFIG.input.light.some(c => origDown(c));
      }
      return origDown(code);
    };

    const held = list => (list || []).some(c => input.keys.has(c));
    Object.defineProperty(input, 'moveX', {
      configurable: true,
      get() {
        const mv = CONFIG.input.move;
        return (held(mv.right) ? 1 : 0) - (held(mv.left) ? 1 : 0);
      }
    });
    Object.defineProperty(input, 'moveY', {
      configurable: true,
      get() {
        const mv = CONFIG.input.move;
        return (held(mv.down) ? 1 : 0) - (held(mv.up) ? 1 : 0);
      }
    });
  }
  wrapInput(game.input);


  // ---------------------------------------------------------------- 音效 / 镜头
  function playSfx(g, name, fallback) {
    const url = CONFIG.audio.external[name];
    if (url) {
      try {
        const el = STATE.audioElements[name] || (STATE.audioElements[name] = new Audio(url));
        el.currentTime = 0;
        el.volume = 0.75;
        el.play().catch(() => {});
        return true;
      } catch (e) {
        // 外部音频失败时回退到合成音
      }
    }
    if (typeof fallback === 'function') fallback();
    return false;
  }

  function audioImpact(g, kind, stone) {
    const a = g && g.audio;
    if (!a || !a.ctx) return;
    const now = performance.now();
    if (kind === 'light' && now - (STATE.lastImpactAt || 0) < 35) return;
    STATE.lastImpactAt = now;

    const name = stone ? 'hit_stone' : 'hit_flesh';
    if (playSfx(g, name, null)) return;

    const v = 0.9 + Math.random() * 0.25;
    a.noise(0.07, 0.18 * v, 'lowpass', 700, 0.9, 90);
    a.tone(68 + Math.random() * 6, 0.12, 'sine', 0.18 * v, 34);
    a.noise(0.035, 0.14 * v, 'highpass', 1800, 1, 700);
    if (stone) {
      a.tone(260, 0.18, 'triangle', 0.08 * v, 170);
      a.noise(0.16, 0.035 * v, 'bandpass', 1200, 1.4, 420, 0.04);
    } else {
      a.noise(0.20, 0.03 * v, 'lowpass', 520, 0.8, 160, 0.05);
    }
    if (kind === 'heavy' || kind === 'enhanced' || kind === 'transform') {
      a.tone(44, 0.22, 'sawtooth', 0.1 * v, 26);
      a.tone(320, 0.22, 'triangle', 0.05 * v, 210, 0.04);
      a.noise(0.28, 0.028 * v, 'lowpass', 400, 0.7, 120, 0.08);
    }
  }

  function cameraImpact(g, dir, cfg) {
    g.__hitT = cfg.dur;
    g.__hitDur = cfg.dur;
    g.__hitAmp = cfg.amp;
    g.__hitDir = dir;
    g.__hitRoll = cfg.roll;
  }

  function impact(g, dir, kind, stone) {
    const cfg = CONFIG.impact[kind] || CONFIG.impact.light;
    const amp = 0.012 + Math.max(0, cfg.shake) * 0.0045;
    g.slowmo?.(cfg.stop, cfg.scale);
    g.shake?.(cfg.shake);
    g.punchZoom?.(cfg.zoom);
    cameraImpact(g, dir, { amp, roll: cfg.roll, dur: cfg.dur });
    audioImpact(g, kind, stone);
  }

  const origCamera = game.updateCamera.bind(game);
  game.updateCamera = dt => {
    origCamera(dt);

    // 第一人称：在原有相机更新之后接管眼高与朝向
    if (STATE.cameraMode === 'first' && game.mode === 'playing') {
      const pl = game.player;
      if (pl && !pl.dead && !pl.__transformT && pl.model?.group) {
        STATE.fpTime += dt;
        const pos = pl.model.group.position;
        const eye = CONFIG.camera.eyeHeight + (pos.y || 0);
        const lookPitch = clamp((game.pitch || 0) - FP_PITCH_CENTER, -0.49, 0.49) * FP_PITCH_SCALE;
        const cp = Math.cos(lookPitch);
        const sp = Math.sin(lookPitch);
        const cy = Math.cos(game.yaw || 0);
        const sy = Math.sin(game.yaw || 0);
        game.camera.position.set(pos.x, eye, pos.z);
        game.camera.lookAt(pos.x + cy * cp, eye + sp, pos.z + sy * cp);
        pl.facing = game.yaw;
        pl.model.group.visible = false;

        const rig = STATE.fpRig || ensureFpRig(game);
        if (rig) {
          // Three.js 只渲染场景图内的对象，相机需挂到当前场景才能显示手持模型
          const scene = game.world?.scene;
          if (scene && game.camera.parent !== scene) scene.add(game.camera);
          rig.visible = true;
          // ---- 长棍 / 双臂动作（全部在第一人称相机钩子内推进，保证每帧更新）
          const t = STATE.fpTime;
          const spd = Math.hypot(pl.__vx || 0, pl.__vy || 0);
          const glide = clamp(spd / 140, 0, 1);
          const moving = spd > 8;
          const bob = moving
            ? Math.sin(t * (7 + glide * 6)) * (0.005 + glide * 0.011)
            : Math.sin(t * 1.9) * 0.0035;
          const sway = moving ? Math.cos(t * (3.5 + glide * 3)) * (0.002 + glide * 0.005) : 0;

          let rigX = 0.34 + sway;
          let rigY = -0.50 + bob;
          let rigZ = -0.66;
          let rotX = 0;
          let rotY = 0;
          let rotZ = 0;
          let fovKick = 0;
          const ease = x => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

          if (pl.__airborne) rigY += clamp(-(pl.__jumpVy || 0) * 0.006, -0.05, 0.05);
          if (pl.dodgeT > 0) {
            const dk = clamp(pl.dodgeT / 0.32, 0, 1);
            rotZ += dk * 0.55;
            rigX -= dk * 0.07;
            rigY -= dk * 0.05;
            rotX -= dk * 0.12;
          }

          if (pl.__fpDur > 0) {
            pl.__fpT = (pl.__fpT || 0) + dt;
            const u = clamp(pl.__fpT / pl.__fpDur, 0, 1);
            const kind = pl.__fpKind;
            if (u >= 1) {
              pl.__fpDur = 0;
              pl.__fpKind = '';
            } else if (kind === 'light' || kind === 'heavy' || kind === 'enhanced') {
              if (kind === 'enhanced') {
                // 蓄力横扫：大幅抡圆后砸落
                const a = ease(clamp(u / 0.40, 0, 1));
                const b = ease(clamp((u - 0.40) / 0.22, 0, 1));
                const c = ease(clamp((u - 0.62) / 0.38, 0, 1));
                rotY = a * 0.95 - b * 3.4 + c * 2.3;
                rotX = -a * 0.85 + b * 1.55 - c * 0.7;
                rotZ = a * 0.5 - b * 1.1 + c * 0.55;
                rigY += a * 0.04 - b * 0.08;
                rigX += a * 0.05 - b * 0.12;
                fovKick = 5.5 * Math.sin(Math.PI * u);
              } else if (kind === 'heavy') {
                const a = ease(clamp(u / 0.42, 0, 1));
                const b = ease(clamp((u - 0.42) / 0.20, 0, 1));
                const c = ease(clamp((u - 0.62) / 0.38, 0, 1));
                rotX = -a * 1.35 + b * 2.25 - c * 0.9;
                rotY = a * 0.32 - b * 0.55 + c * 0.23;
                rotZ = -a * 0.18 + b * 0.42 - c * 0.24;
                rigY += a * 0.035 - b * 0.07;
                fovKick = 4.0 * Math.sin(Math.PI * u);
              } else {
                // 轻击：起手小幅回拉，随后快速横挥
                const a = ease(clamp(u / 0.30, 0, 1));
                const b = ease(clamp((u - 0.30) / 0.22, 0, 1));
                const c = ease(clamp((u - 0.52) / 0.48, 0, 1));
                rotY = a * 0.50 - b * 1.35 + c * 0.85;
                rotX = -a * 0.42 + b * 0.85 - c * 0.43;
                rotZ = a * 0.22 - b * 0.52 + c * 0.30;
                fovKick = 2.2 * Math.sin(Math.PI * u);
              }
            }
          }

          if (pl.__fpCastT > 0) {
            pl.__fpCastT = Math.max(0, pl.__fpCastT - dt);
            const k = Math.sin(clamp(pl.__fpCastT / 0.35, 0, 1) * Math.PI);
            rotX -= k * 0.35;
            rotY += k * 0.30;
            rotZ += k * 0.25;
            rigY += k * 0.035;
            fovKick = Math.max(fovKick, k * 2.4);
          }
          if (pl.__fpParryT > 0) {
            pl.__fpParryT = Math.max(0, pl.__fpParryT - dt);
            const k = Math.sin(clamp(pl.__fpParryT / 0.3, 0, 1) * Math.PI);
            rotZ += k * 1.15;
            rotX += k * 0.22;
            rigX -= k * 0.05;
          }

          rig.position.set(rigX, rigY, rigZ);
          rig.rotation.set(rotX, rotY, rotZ);

          const arms = STATE.fpArms;
          if (arms) {
            arms.armR.rotation.x = -0.12;
            arms.armL.rotation.x = -0.12;
            arms.handL.position.set(0, 0, -1.12);
            if (pl.__fpCastT > 0) {
              const k = Math.sin(clamp(pl.__fpCastT / 0.35, 0, 1) * Math.PI);
              arms.armL.rotation.x -= k * 0.35;
              arms.handL.position.z -= k * 0.12;
            }
          }

          const fovTarget = CONFIG.camera.fov + fovKick;
          if (Math.abs(game.camera.fov - fovTarget) > 0.05) {
            game.camera.fov = fovTarget;
            game.camera.updateProjectionMatrix?.();
          }
        }
      } else if (pl && pl.dead) {
        // 死亡时恢复模型，交还原有第三人称死亡镜头
        if (pl.model?.group && !pl.__transformT) pl.model.group.visible = true;
        if (STATE.fpRig) STATE.fpRig.visible = false;
      }
    }

    if (game.__hitT > 0) {
      game.__hitT -= dt;
      const k = Math.max(0, game.__hitT / game.__hitDur);
      const amp = game.__hitAmp * k * k;
      const side = game.__hitDir + Math.PI / 2;
      const c = game.camera;
      if (c) {
        c.position.x += Math.cos(side) * amp;
        c.position.z += Math.sin(side) * amp;
        c.position.y += amp * 0.4;
        c.rotation.z += (game.__hitRoll || 0) * k;
      }
    }

    // 标题 / 死亡 / 胜利界面隐藏第一人称手持模型
    if (STATE.fpRig && (game.mode !== 'playing' || game.ui.titleVisible || game.ui.deadOpen || game.ui.victoryOpen)) {
      STATE.fpRig.visible = false;
    }
  };

  // ---------------------------------------------------------------- 第一人称
  function ensureFpRig(g) {
    if (STATE.fpRig) return STATE.fpRig;
    const cam = g.camera;
    if (!cam || !C.Group || !C.Box || !C.Mesh || !C.StdMat) return null;

    const rig = new C.Group();
    rig.position.set(0.34, -0.50, -0.66);
    rig.scale.setScalar(0.72);
    rig.rotation.set(0, 0, 0);

    const wood = new C.StdMat({ color: 0x3a2f26, roughness: 0.55, metalness: 0.35, flatShading: true, emissive: 0x120c08, emissiveIntensity: 0.5 });
    const band = new C.StdMat({ color: 0x9a6a32, roughness: 0.42, metalness: 0.7, flatShading: true, emissive: 0x2a1a08, emissiveIntensity: 0.45 });
    const skin = new C.StdMat({ color: 0xb58b6a, roughness: 0.82, metalness: 0.0, flatShading: true, emissive: 0x3a2a1e, emissiveIntensity: 0.3 });
    const cloth = new C.StdMat({ color: 0x353a3e, roughness: 0.9, metalness: 0.0, flatShading: true, emissive: 0x101214, emissiveIntensity: 0.4 });

    // 握持组：棍身自右下斜向画面中央，双手与袖口沿棍身排列
    const pivot = new C.Group();
    pivot.rotation.set(0.16, 0.34, 0.02);
    rig.add(pivot);

    const shaft = new C.Mesh(new C.Box(0.032, 0.032, 1.9), wood);
    shaft.position.z = -0.95;
    pivot.add(shaft);
    for (const z of [-1.85, -0.95, -0.05]) {
      const ring = new C.Mesh(new C.Box(0.05, 0.05, 0.05), band);
      ring.position.z = z;
      pivot.add(ring);
    }

    const handR = new C.Mesh(new C.Box(0.06, 0.06, 0.11), skin);
    handR.position.set(0, 0, -0.55);
    pivot.add(handR);
    const handL = new C.Mesh(new C.Box(0.06, 0.06, 0.11), skin);
    handL.position.set(0, 0, -1.12);
    pivot.add(handL);

    const armR = new C.Mesh(new C.Box(0.07, 0.07, 0.30), cloth);
    armR.position.set(0.01, -0.05, -0.34);
    armR.rotation.x = -0.12;
    pivot.add(armR);
    const armL = new C.Mesh(new C.Box(0.07, 0.07, 0.32), cloth);
    armL.position.set(0.01, -0.05, -0.90);
    armL.rotation.x = -0.12;
    pivot.add(armL);

    cam.add(rig);
    rig.visible = false;
    STATE.fpRig = rig;
    STATE.fpStaff = pivot;
    STATE.fpArms = { armR, handR, armL, handL };
    return rig;
  }

  function setCameraMode(g, mode, silent) {
    const rig = ensureFpRig(g);
    // 构造器缺失时无法渲染手持模型，安全回退第三人称
    const first = mode === 'first' && !!rig;
    const wasFirst = STATE.cameraMode === 'first';
    STATE.cameraMode = first ? 'first' : 'third';
    CONFIG.camera.mode = STATE.cameraMode;
    if (g && first && !wasFirst) {
      STATE.tpPitch = clamp(g.pitch ?? STATE.tpPitch, 0.07, 1.05);
      g.pitch = FP_PITCH_CENTER;
    } else if (g && !first && wasFirst) {
      g.pitch = clamp(STATE.tpPitch, 0.07, 1.05);
    }
    const p = g?.player;
    if (rig) rig.visible = first && !p?.__transformT;
    if (p?.model?.group) p.model.group.visible = !first && !p.__transformT;
    if (g?.camera) {
      g.camera.fov = first ? CONFIG.camera.fov : BASE_FOV;
      g.camera.updateProjectionMatrix?.();
    }
    if (!silent && g?.fx && p) {
      g.fx.text?.(p.x, p.y - 34, first ? '第一人称' : '第三人称', '#e6dac0', 12);
    }
    return STATE.cameraMode;
  }

  function toggleCamera(g) {
    setCameraMode(g, STATE.cameraMode === 'first' ? 'third' : 'first');
  }

  // ---------------------------------------------------------------- 玩家
  const LIGHT = CONFIG.player.light;
  const HEAVY = CONFIG.player.heavy;
  const BEAST = CONFIG.player.beast;
  const SPELLS = CONFIG.player.spells;

  function diff() {
    return CONFIG.difficulty[STATE.difficulty] || CONFIG.difficulty.normal;
  }

  function addForce(p, n) {
    p.__staffForce = Math.min(100, (p.__staffForce || 0) + n);
    p.__forceT = 0;
  }

  function setFpAction(p, kind, dur) {
    p.__fpT = 0;
    p.__fpDur = Math.max(0.08, dur || 0.3);
    p.__fpKind = kind;
  }

  function lockStamina(p, dur) {
    if (!p) return;
    const max = CONFIG.player.stamina.lockMax;
    p.__staminaLock = clamp(Math.max(p.__staminaLock || 0, dur), 0, max);
  }

  function lockChi(p, dur) {
    if (!p) return;
    const max = CONFIG.player.chi.lockMax;
    p.__chiLock = clamp(Math.max(p.__chiLock || 0, dur), 0, max);
  }

  function pulse(g, which) {
    const el = document.querySelector('#bm-' + which);
    if (!el) return;
    el.classList.add('pulse');
    setTimeout(() => el.classList.remove('pulse'), 300);
  }

  function equipStaff(p) {
    const pivot = p.model && p.model.swordPivot;
    if (!pivot || pivot.__bmStaff || !C.Box || !C.Mesh || !C.StdMat) return;
    pivot.__bmStaff = true;

    for (const c of [...pivot.children]) {
      const w = c.geometry && c.geometry.parameters && c.geometry.parameters.width;
      if (c.isMesh && (w || 0) > 0.5) c.visible = false;
    }

    const mat = new C.StdMat({ color: 0x30363f, roughness: 0.62, metalness: 0.55, flatShading: true });
    const bandMat = new C.StdMat({ color: 0x8a5a2b, roughness: 0.48, metalness: 0.72, flatShading: true });
    const shaft = new C.Mesh(new C.Box(2.05, 0.055, 0.055), mat);
    shaft.position.x = 1.02;
    pivot.add(shaft);
    for (const x of [0.06, 2.0]) {
      const band = new C.Mesh(new C.Box(0.09, 0.09, 0.09), bandMat);
      band.position.x = x;
      pivot.add(band);
    }
  }

  function ensurePlayer(g) {
    const p = g.player;
    if (!p || p === STATE.patchedPlayer) return;
    STATE.patchedPlayer = p;

    p.__speedBase = p.speed;
    p.__staffForce = 0;
    p.__spirit = 0;
    p.__spiritUnlocked = localStorage.getItem('inkblade_spirit_unlock') === '1';
    p.__shield = 0;
    p.__shieldT = 0;
    p.__parryT = 0;
    p.__parryCd = 0;
    p.__counterT = 0;
    p.__guardT = 0;
    p.__moveLock = 0;
    p.__moveLockScale = 1;
    p.__staminaLock = 0;
    p.__chiLock = 0;
    p.__forceT = 99;
    p.__forceCombo = 0;
    p.__forceComboT = 0;
    p.__jumpY = 0;
    p.__jumpVy = 0;
    p.__airborne = false;
    p.__beastCd = 0;
    p.__transformT = 0;
    p.__transformModel = null;
    p.__exhausted = false;
    p.__lastMoveAngle = p.facing;
    STATE.lastCombat = g.time;

    equipStaff(p);
    if (STATE.cameraMode === 'first' && !p.__fpPitchInit) {
      p.__fpPitchInit = true;
      g.pitch = FP_PITCH_CENTER;
    }
    setCameraMode(g, STATE.cameraMode, true);

    // ---- 帧更新：冲刺、体力/法力冷却、变身计时
    const origUpdate = p.update.bind(p);
    p.update = (dt, move, facing, gg) => {
      if (move && move.len > 0) p.__lastMoveAngle = Math.atan2(move.y, move.x);

      const sprint = CONFIG.input.sprint.some(c => gg.input.keys.has(c)) && move && move.len > 0 &&
        p.stamina > 0 && !p.__exhausted && p.atkCd <= 0 && p.dodgeT <= 0 && p.__transformT <= 0;

      let scale = sprint ? 1.45 : 1;
      if (p.__moveLock > 0) scale = p.__moveLockScale;
      p.speed = p.__speedBase * scale;

      const st0 = p.stamina;
      const chi0 = p.chi;
      origUpdate(dt, move, facing, gg);
      p.speed = p.__speedBase;

      if (p.__staminaLock > 0) {
        p.__staminaLock = clamp(p.__staminaLock - dt, 0, CONFIG.player.stamina.lockMax);
        if (p.stamina > st0) p.stamina = st0;
      } else {
        p.__staminaLock = 0;
      }
      if (p.__chiLock > 0) {
        p.__chiLock = clamp(p.__chiLock - dt, 0, CONFIG.player.chi.lockMax);
        if (p.chi > chi0) p.chi = chi0;
      } else {
        p.__chiLock = 0;
      }
      if (p.stamina >= p.maxStamina) p.__staminaLock = 0;
      if (p.chi >= p.maxChi) p.__chiLock = 0;
      if (sprint) {
        p.stamina = Math.max(0, p.stamina - CONFIG.player.stamina.sprintDrain * diff().staminaCost * dt);
        lockStamina(p, CONFIG.player.stamina.sprintDelay);
      }
      if (p.stamina <= 0) p.__exhausted = true;
      if (p.__exhausted && p.stamina >= CONFIG.player.stamina.exhaustClear) p.__exhausted = false;

      p.__moveLock = Math.max(0, p.__moveLock - dt);
      p.__parryT = Math.max(0, p.__parryT - dt);
      p.__parryCd = Math.max(0, p.__parryCd - dt);
      p.__counterT = Math.max(0, p.__counterT - dt);
      p.__guardT = Math.max(0, p.__guardT - dt);
      p.__beastCd = Math.max(0, p.__beastCd - dt);
      if (p.__shieldT > 0) {
        p.__shieldT -= dt;
        if (p.__shieldT <= 0) p.__shield = 0;
      }

      p.__forceT += dt;
      if (p.__forceT > CONFIG.player.force.decayDelay) {
        p.__staffForce = Math.max(0, p.__staffForce - CONFIG.player.force.decayRate * dt);
      }
      p.__forceComboT = Math.max(0, (p.__forceComboT || 0) - dt);
      if (p.__forceComboT <= 0) p.__forceCombo = 0;

      // 跳跃：仅影响视觉高度与落地，不改变平面碰撞
      if (p.__airborne) {
        const jcfg = CONFIG.player.jump;
        p.__jumpVy -= jcfg.gravity * dt;
        p.__jumpY += p.__jumpVy * dt;
        if (p.__jumpY <= 0) {
          p.__jumpY = 0;
          p.__jumpVy = 0;
          p.__airborne = false;
        }
      }
      if (p.model?.group?.position) p.model.group.position.y = p.__jumpY || 0;

      if (p.__transformT > 0) updateTransform(p, dt, gg);
    };

    // ---- 闪避：Shift 只负责冲刺
    const origDodge = p.tryDodge.bind(p);
    p.tryDodge = (move, gg, facing) => {
      if (CONFIG.input.sprint.some(c => gg.input.pressed.has(c))) return;
      const before = p.stamina;
      origDodge(move, gg, facing);
      if (p.stamina < before) {
        lockStamina(p, CONFIG.player.stamina.delay);
        p.__moveLock = 0;
      }
    };

    p.basicAttack = gg => {
      if (p.__transformT > 0) beastLight(gg);
      else staffLight(gg);
    };
    p.castSkill = (i, gg) => castSpell(gg, i);

    // ---- 识破 / 护盾 / 立棍减伤
    const origHurt = p.takeDamage.bind(p);
    p.takeDamage = (dmg, sx, sy, gg) => {
      if (p.dead) return;
      if (p.__parryT > 0) {
        p.__parryT = 0;
        addForce(p, CONFIG.player.parry.successForce);
        p.__counterT = CONFIG.player.parry.counterTime;
        const src = findSource(gg, sx, sy);
        if (src && src.state !== 'phase') {
          src.state = 'recover';
          src.t = Math.max(src.t || 0, 1.2);
        }
        gg.fx.text(p.x, p.y - 32, '识破', '#ffe6a8', 22);
        impact(gg, Math.atan2(p.y - sy, p.x - sx), 'parry', false);
        return;
      }
      if (p.__shield > 0) {
        const absorb = Math.min(p.__shield, dmg);
        p.__shield -= absorb;
        dmg -= absorb;
        gg.fx.ring?.(p.x, p.y, 24, 60, 'rgba(255,220,150,.6)', 2, 0.25);
        if (dmg <= 0) return;
      }
      if (p.__guardT > 0) dmg *= 0.6;
      if (p.__transformT > 0 && dmg > 0) {
        p.__transformT = Math.max(0, p.__transformT - dmg * CONFIG.player.transform.damageTimeLoss);
        if (p.__transformT <= 0) endTransform(gg, p, true);
      }
      return origHurt(dmg, sx, sy, gg);
    };

    const origPerfect = p.perfectDodge.bind(p);
    p.perfectDodge = gg => {
      origPerfect(gg);
      addForce(p, 25);
      p.__counterT = 1.5;
    };

    // 世界切换时结束变身
    if (STATE.world && STATE.world !== g.world && p.__transformT > 0) endTransform(g, p, false);
  }

  function findSource(g, sx, sy) {
    if (g.boss && !g.boss.dead && Math.hypot(g.boss.x - sx, g.boss.y - sy) < 70) return g.boss;
    let best = null;
    let bd = 70;
    for (const e of g.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.x - sx, e.y - sy);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  function staffHit(g, d, dir, forceGain) {
    const p = g.player;
    let hits = 0;
    let stone = false;
    let bossHit = false;
    const dmg = d.dmg * (p.__counterT > 0 ? 1.3 : 1) * p.dmgMult();

    const inArc = (x, y, r) => {
      if (Math.hypot(x - p.x, y - p.y) > d.reach + r) return false;
      let a = Math.atan2(y - p.y, x - p.x) - dir;
      a = Math.atan2(Math.sin(a), Math.cos(a));
      return Math.abs(a) <= d.arc / 2;
    };

    for (const e of g.enemies) {
      if (e.dead || !inArc(e.x, e.y, e.r)) continue;
      const a = Math.atan2(e.y - p.y, e.x - p.x);
      e.takeDamage(dmg, a, g);
      e.kbx += Math.cos(a) * d.kb;
      e.kby += Math.sin(a) * d.kb;
      e.__poise = (e.__poise || 0) + (d.poise || 0);
      if ((d.poise || 0) >= 30 && e.__poise >= 40) {
        e.__poise = 0;
        e.state = 'recover';
        e.t = Math.max(e.t || 0, 0.8);
        g.fx.text(e.x, e.y - 30, '破势', '#ffd27a', 16);
      }
      if (p.__spiritUnlocked) p.__spirit = Math.min(100, p.__spirit + dmg * 0.08);
      hits++;
      if (e.kind !== 'wolf' && e.kind !== 'ghost') stone = true;
    }

    const b = g.boss;
    if (b && !b.dead && inArc(b.x, b.y, b.r)) {
      b.takeDamage(dmg, Math.atan2(b.y - p.y, b.x - p.x), g);
      hits++;
      bossHit = true;
      stone = true;
    }

    if (forceGain && hits > 0) {
      const combo = p.__forceCombo || 0;
      const scale = Math.max(CONFIG.player.force.comboMin, 1 - combo * CONFIG.player.force.comboDecay);
      addForce(p, Math.min(CONFIG.player.force.maxPerSwing, CONFIG.player.force.gainPerHit * hits * scale * diff().forceGain));
      p.__forceCombo = combo + 1;
      p.__forceComboT = CONFIG.player.force.comboReset;
    }
    STATE.lastHit = { hits, dmg: Math.round(dmg), force: Math.round(p.__staffForce || 0), bossHit };
    return { hits, stone, bossHit };
  }

  function staffLight(g) {
    const p = g.player;
    if (p.dead) { STATE.lastAttack = 'dead'; return; }
    if (p.atkCd > 0) { STATE.lastAttack = 'cd:' + p.atkCd.toFixed(2); return; }
    if (p.dashT > 0 || p.__transformT > 0) { STATE.lastAttack = 'busy'; return; }

    const step = p.comboWindow > 0 ? (p.comboStep + 1) % LIGHT.length : 0;
    const d = LIGHT[step];
    const staminaCost = d.stamina * diff().staminaCost;
    if (p.__exhausted || p.stamina < staminaCost) { STATE.lastAttack = 'exhausted'; pulse(g, 'stamina'); return; }

    p.stamina -= staminaCost;
    lockStamina(p, CONFIG.player.stamina.delay);
    p.comboStep = step;
    p.atkCd = d.startup + d.active + d.recovery;
    p.comboWindow = d.recovery + 0.22;
    p.swingT = p.swingMax = d.startup + d.active;
    p.__moveLock = d.startup + d.active + d.recovery;
    p.__moveLockScale = d.moveScale;
    setFpAction(p, step >= 3 ? 'heavy' : 'light', p.atkCd);

    const dir = lockAim(g, p.x, p.y, p.facing, d.reach + 16, 1.15);
    p.swingDir = dir;
    p.x += Math.cos(dir) * d.lunge;
    p.y += Math.sin(dir) * d.lunge;

    g.audio.noise(0.12, 0.07, 'bandpass', 2400, 1.2, 700);
    STATE.pending.push({
      t: d.startup,
      run: () => {
        if (g.player !== p || p.dead) return;
        const res = staffHit(g, d, dir, true);
        g.fx.slash(p.x, p.y, dir, d.reach * 0.95, step === 3 ? '#ffd7a0' : '#cfe3ea', d.arc * 0.5, 7, 0.32);
        if (res.hits) {
          const kind = res.bossHit ? 'boss' : (step >= 3 ? 'heavy' : 'light');
          impact(g, dir, kind, res.stone);
          g.fx.burst(p.x + Math.cos(dir) * d.reach * 0.7, p.y + Math.sin(dir) * d.reach * 0.7,
            { count: 10 + step * 3, color: '#ffcf9a', color2: '#fff2d0', speed: 220, size: 2.6, life: 0.34, angle: dir, spread: 1.6 });
        }
      }
    });
    STATE.lastAttack = 'queued';
  }

  function staffHeavy(g) {
    const p = g.player;
    if (!p || p.dead || p.__transformT > 0) return;
    if (g.mode !== 'playing' || g.ui.isOpen()) return;
    if (p.atkCd > 0) return;

    const kit = HEAVY[STATE.stance];
    const staminaCost = kit.stamina * diff().staminaCost;
    if (p.__exhausted || p.stamina < staminaCost) { pulse(g, 'stamina'); return; }
    if (p.__staffForce < kit.cost) { pulse(g, 'force'); return; }

    const counter = p.__counterT > 0;
    const forceCfg = CONFIG.player.force;
    const enhanced = p.__staffForce >= forceCfg.enhancedThreshold || counter;
    if (!counter) p.__staffForce -= enhanced ? forceCfg.enhancedCost : kit.cost;
    p.__counterT = 0;
    p.stamina -= staminaCost;
    lockStamina(p, CONFIG.player.stamina.delay);
    p.atkCd = kit.startup + kit.active + kit.recovery;
    p.comboWindow = 0.45;
    p.swingT = p.swingMax = kit.startup + Math.min(0.2, kit.active);
    p.__moveLock = kit.startup + kit.active + kit.recovery;
    p.__moveLockScale = 0.15;
    setFpAction(p, enhanced ? 'enhanced' : 'heavy', p.atkCd);

    const dir = lockAim(g, p.x, p.y, p.facing, kit.reach + 20, 1.15);
    p.swingDir = dir;
    g.audio.noise(0.18, 0.1, 'bandpass', 1600, 1.1, 400);
    g.audio.tone(52, 0.18, 'sine', 0.3, 30);

    const runKit = () => {
      if (g.player !== p || p.dead) return;
      if (STATE.stance === 1) {
        // 立棍：三段环身横扫（独立序列计时，避免 pending 漂移）
        p.__guardT = 0.95;
        const total = enhanced ? 4 : 3;
        STATE.sequences.push({
          t: 0,
          interval: 0.28,
          left: total,
          total,
          fn: idx => {
            if (g.player !== p || p.dead) return;
            if (idx < 3) {
              const hits = g.areaEnemies(p.x, p.y, kit.reach, kit.dmg * (counter ? 1.3 : 1), 60);
              g.fx?.ring?.(p.x, p.y, 30, kit.reach, 'rgba(255,200,120,.55)', 2, 0.22);
              g.fx?.slash?.(p.x, p.y, idx * (Math.PI * 2 / 3) + p.animT, kit.reach, '#e8d6b0', Math.PI, 8, 0.25);
              if (hits) impact(g, p.facing, 'heavy', true);
            } else {
              const hits = g.areaEnemies(p.x, p.y, kit.reach + 20, 26 * (counter ? 1.3 : 1), 180);
              g.fx?.ring?.(p.x, p.y, 20, 170, 'rgba(255,210,150,.85)', 5, 0.4);
              if (hits) { impact(g, p.facing, 'enhanced', true); g.slowmo(0.1, 0.03); }
            }
          }
        });
        return;
      }

      if (STATE.stance === 2) {
        p.x += Math.cos(dir) * kit.lunge;
        p.y += Math.sin(dir) * kit.lunge;
      }

      const res = staffHit(g, { ...kit, dmg: kit.dmg * (counter ? 1.3 : 1) }, dir, false);
      g.fx?.slash?.(p.x, p.y, dir, kit.reach * (enhanced ? 1.12 : 1), enhanced ? '#ffe0a8' : '#e6d2a8', kit.arc, enhanced ? 22 : 14, enhanced ? 0.5 : 0.36);
      if (enhanced) {
        g.fx?.slash?.(p.x, p.y, dir + 0.12, kit.reach * 1.2, '#ffd792', kit.arc * 0.8, 12, 0.42);
        g.fx?.ring?.(p.x, p.y, 20, kit.reach + 30, 'rgba(255,220,160,.6)', 3, 0.35);
      }
      g.fx.burst(p.x + Math.cos(dir) * kit.reach * 0.7, p.y + Math.sin(dir) * kit.reach * 0.7,
        { count: enhanced ? 30 : 18, color: '#ffcf9a', color2: '#fff2d0', speed: 280, size: 3.2, life: 0.5, angle: dir, spread: 1.8 });
      if (res.hits) impact(g, dir, enhanced ? 'enhanced' : (res.bossHit ? 'boss' : 'heavy'), res.stone);

      if (enhanced && STATE.stance === 0) {
        g.areaEnemies(p.x + Math.cos(dir) * 80, p.y + Math.sin(dir) * 80, 150, 18, 120);
        g.fx.ring(p.x + Math.cos(dir) * 80, p.y + Math.sin(dir) * 80, 20, 150, 'rgba(255,210,150,.85)', 5, 0.4);
      }
    };

    STATE.pending.push({ t: kit.startup, run: runKit });
  }

  // ---------------------------------------------------------------- 神通
  function nearestTarget(g, range) {
    const p = g.player;
    let best = null;
    let bd = range;
    for (const e of g.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.x - p.x, e.y - p.y);
      if (d < bd) { bd = d; best = e; }
    }
    if (g.boss && !g.boss.dead) {
      const d = Math.hypot(g.boss.x - p.x, g.boss.y - p.y);
      if (d < bd) best = g.boss;
    }
    return best;
  }

  function lockAim(g, x, y, baseAngle, range, arc) {
    const t = STATE.lockTarget;
    if (t && !t.dead) {
      const d = Math.hypot(t.x - x, t.y - y);
      if (d <= range + (t.r || 0) + 60) return Math.atan2(t.y - y, t.x - x);
    }
    return g.aimAssist(x, y, baseAngle, range, arc);
  }

  function toggleLock(g) {
    if (STATE.lockTarget && !STATE.lockTarget.dead) {
      STATE.lockTarget = null;
      g.fx?.text?.(g.player.x, g.player.y - 30, '解除', '#e6dac0', 12);
      return;
    }
    const p = g.player;
    let best = null;
    let bd = 700;
    for (const e of g.enemies || []) {
      if (!e || e.dead) continue;
      const d = Math.hypot(e.x - p.x, e.y - p.y);
      if (d < bd) { bd = d; best = e; }
    }
    if (g.boss && !g.boss.dead && Math.hypot(g.boss.x - p.x, g.boss.y - p.y) < bd) best = g.boss;
    STATE.lockTarget = best;
    if (best) g.fx?.text?.(best.x, best.y - 40, '锁定', '#e6dac0', 12);
  }

  function lockTick(g, dt) {
    const t = STATE.lockTarget;
    if (!t || t.dead || Math.hypot(t.x - g.player.x, t.y - g.player.y) > 800) {
      STATE.lockTarget = null;
      return;
    }
    const want = Math.atan2(t.y - g.player.y, t.x - g.player.x);
    let diff = want - g.yaw;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    g.yaw += diff * (1 - Math.exp(-10 * dt));
    // 第一人称按目标与眼睛的高度差俯仰，第三人称沿用原环绕高度
    const range = Math.max(1, Math.hypot(t.x - g.player.x, t.y - g.player.y)) * WORLD_SCALE;
    const wantPitch = STATE.cameraMode === 'first'
      ? FP_PITCH_CENTER + Math.atan2(0.9 - CONFIG.camera.eyeHeight, range) / FP_PITCH_SCALE
      : 0.30;
    g.pitch += (wantPitch - g.pitch) * (1 - Math.exp(-6 * dt));
  }

  function castSpell(g, i) {
    const p = g.player;
    if (!p || p.dead || p.__transformT > 0) return;
    if (g.mode !== 'playing' || g.ui.isOpen()) return;
    const S = SPELLS[i];
    const chiCost = S.cost * diff().chiCost;
    if (p.skillCd[i] > 0) { pulse(g, 'spell' + i); return; }
    if (p.chi < chiCost) { pulse(g, 'mana'); return; }

    p.chi -= chiCost;
    p.skillCd[i] = S.cd;
    lockChi(p, CONFIG.player.chi.delay);
    p.__fpCastT = 0.35;

    if (i === 0) {
      const t = nearestTarget(g, 420);
      if (!t) { pulse(g, 'spell0'); p.chi += chiCost; p.skillCd[0] = 0; return; }
      const boss = t === g.boss;
      if (t.state !== 'phase') {
        t.state = 'recover';
        t.t = boss ? (t.phase >= 3 ? 0.6 : t.phase === 2 ? 0.9 : 1.2) : 2.5;
      }
      g.fx.ring(t.x, t.y, 20, 90, 'rgba(150,230,255,.85)', 4, 0.5);
      g.fx.text(t.x, t.y - 32, '定', '#bfeaff', 22);
      g.audio.perfect();
    } else if (i === 1) {
      const dir = p.__lastMoveAngle ?? p.facing;
      const stepLen = 14;
      let sx = p.x;
      let sy = p.y;
      for (let s = 1; s <= 10; s++) {
        const nx = p.x + Math.cos(dir) * stepLen * s;
        const ny = p.y + Math.sin(dir) * stepLen * s;
        if (g.world.pointBlocked?.(nx, ny)) break;
        const c = g.world.collide(nx, ny, p.r);
        if (Math.hypot(c.x - nx, c.y - ny) > 2) break;
        sx = c.x;
        sy = c.y;
      }
      g.fx.burst(p.x, p.y, { count: 18, color: '#9fdcff', color2: '#ffffff', speed: 140, size: 3, life: 0.4 });
      p.x = sx;
      p.y = sy;
      p.invuln = Math.max(p.invuln || 0, 0.35);
      g.fx.burst(p.x, p.y, { count: 18, color: '#9fdcff', color2: '#ffffff', speed: 140, size: 3, life: 0.4 });
      g.audio.dodge();
    } else {
      p.__shield = Math.round(p.maxHp * CONFIG.player.shield.ratio);
      p.__shieldT = CONFIG.player.shield.duration;
      g.fx.ring(p.x, p.y, 20, 80, 'rgba(255,220,150,.85)', 3, 0.5);
      g.fx.text(p.x, p.y - 30, '护', '#ffe0a8', 18);
      g.audio.heal();
    }
  }

  function doJump(g) {
    const p = g.player;
    if (!p || p.dead || p.__airborne || p.__transformT > 0) return;
    const cost = CONFIG.player.jump.stamina * diff().staminaCost;
    if (p.__exhausted || p.stamina < cost) { pulse(g, 'stamina'); return; }
    p.stamina -= cost;
    lockStamina(p, CONFIG.player.stamina.delay);
    p.__jumpVy = CONFIG.player.jump.velocity;
    p.__jumpY = 0.01;
    p.__airborne = true;
    g.audio?.dodge?.();
    g.fx?.ring?.(p.x, p.y, 12, 36, 'rgba(200,190,160,.35)', 2, 0.2);
  }

  function computeParryWindow(g) {
    const p = g.player;
    const cfg = CONFIG.player.parry;
    let win = cfg.min;
    let best = null;
    let bd = 260;

    for (const e of g.enemies || []) {
      if (!e || e.dead) continue;
      const d = Math.hypot(e.x - p.x, e.y - p.y);
      if (d < bd) { bd = d; best = e; }
    }
    if (g.boss && !g.boss.dead) {
      const d = Math.hypot(g.boss.x - p.x, g.boss.y - p.y);
      if (d < bd) { bd = d; best = g.boss; }
    }

    if (best) {
      if (best === g.boss) {
        win += best.phase >= 3 ? 0.07 : best.phase === 2 ? 0.04 : 0.02;
        if (best.attack === 'slam') win += 0.04;
      } else {
        if (best.kind === 'monk') win += 0.05;
        else if (best.kind === 'ghost') win += 0.03;
        else win += 0.01;
        if (best.elite) win += 0.02;
        if (best.state === 'windup') win += 0.01;
      }
    }
    return clamp(win, cfg.min, cfg.max);
  }

  function tryParry(g) {
    const p = g.player;
    if (!p || p.dead || p.__transformT > 0) return;
    if (p.__parryCd > 0 || p.__exhausted) return;
    const cfg = CONFIG.player.parry;
    const cost = cfg.stamina * diff().staminaCost;
    if (p.stamina < cost) { pulse(g, 'stamina'); return; }
    p.stamina -= cost;
    p.__staminaLock = Math.max(p.__staminaLock || 0, CONFIG.player.stamina.delay);
    p.__parryT = computeParryWindow(g);
    p.__parryCd = cfg.cd;
    p.atkCd = Math.max(p.atkCd, 0.28);
    p.__fpParryT = 0.3;
    g.audio.noise(0.12, 0.07, 'highpass', 1400, 1, 600);
    g.fx.ring(p.x, p.y, 16, 44, 'rgba(230,210,160,.55)', 2, 0.25);
  }

  // ---------------------------------------------------------------- 精魂变身
  function disposeObject3D(obj) {
    if (!obj) return;
    obj.traverse?.(o => {
      o.geometry?.dispose?.();
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) m.dispose?.();
    });
    obj.removeFromParent?.();
  }

  function captureSpirit(g) {
    const b = g.boss;
    if (!b || !b.model || !b.model.group) return false;
    const src = b.model.group.clone(true);
    src.traverse(o => {
      if (o.isMesh) {
        if (o.geometry) o.geometry = o.geometry.clone?.() || o.geometry;
        o.material = o.material.clone();
        if (o.material.emissive) {
          o.material.emissive.setHex(0x3a120c);
          o.material.emissiveIntensity = 0.65;
        }
      }
    });
    disposeObject3D(STATE.transformSource);
    STATE.transformSource = src;
    STATE.transformScale = 0.5;
    return true;
  }

  function buildFallbackSpirit(g) {
    const p = g.player;
    const src = p.model.group.clone(true);
    src.traverse(o => {
      if (o.isMesh) {
        if (o.geometry) o.geometry = o.geometry.clone?.() || o.geometry;
        o.material = o.material.clone();
        if (o.material.color) o.material.color.multiplyScalar(0.55);
        if (o.material.emissive) {
          o.material.emissive.setHex(0x2a0c08);
          o.material.emissiveIntensity = 0.6;
        }
      }
    });
    disposeObject3D(STATE.transformSource);
    STATE.transformSource = src;
    STATE.transformScale = 1.25;
  }

  function tryTransform(g) {
    const p = g.player;
    if (!p || p.dead || p.__transformT > 0) return;
    if (!p.__spiritUnlocked) { pulse(g, 'spirit'); return; }
    if (p.__spirit < CONFIG.player.transform.cost) { pulse(g, 'spirit'); return; }
    if (!STATE.transformSource) buildFallbackSpirit(g);

    p.__spirit -= CONFIG.player.transform.cost;
    p.__transformT = CONFIG.player.transform.duration;
    p.__transformModel = STATE.transformSource.clone(true);
    p.__transformModel.traverse?.(o => {
      if (o.isMesh) {
        if (o.geometry) o.geometry = o.geometry.clone?.() || o.geometry;
        if (o.material) o.material = o.material.clone?.() || o.material;
      }
    });
    p.__transformModel.scale.setScalar(STATE.transformScale);
    p.__transformModel.position.copy(p.model.group.position);
    p.__transformModel.rotation.y = p.model.group.rotation.y;
    g.world.scene.add(p.__transformModel);
    p.model.group.visible = false;
    p.invuln = Math.max(p.invuln || 0, 0.5);
    p.__guardT = 0;
    p.__parryT = 0;
    p.__parryCd = 0;
    // 第一人称下变身：暂切第三人称展示精魂形态，结束后还原
    p.__fpResume = STATE.cameraMode === 'first';
    if (p.__fpResume) setCameraMode(g, 'third', true);
    p.model.group.visible = false;
    g.flash?.('#c9a063', 0.35);
    g.shake?.(12);
    g.audio?.bossRoar?.();
  }

  function updateTransform(p, dt, g) {
    p.__transformT -= dt;
    if (p.__transformModel) {
      p.__transformModel.position.copy(p.model.group.position);
      p.__transformModel.rotation.y = p.model.group.rotation.y;
    }
    if (p.__transformT <= 0) endTransform(g, p, true);
  }

  function endTransform(g, p, burst) {
    if (!p) return;
    if (p.__transformModel) {
      disposeObject3D(p.__transformModel);
      p.__transformModel = null;
    }
    if (p.model?.group) p.model.group.visible = true;
    p.__transformT = 0;
    p.__guardT = 0;
    p.__parryT = 0;
    p.__counterT = 0;
    p.invuln = Math.max(p.invuln || 0, 0.8);
    if (burst && g && g.mode === 'playing') {
      const cfg = CONFIG.player.transform;
      let hits = 0;
      for (const e of g.enemies || []) {
        if (!e || e.dead) continue;
        if (Math.hypot(e.x - p.x, e.y - p.y) > cfg.endRadius + (e.r || 0)) continue;
        if (!lineOfSight(g, e, p)) continue;
        e.takeDamage(cfg.endDamage, Math.atan2(e.y - p.y, e.x - p.x), g);
        hits++;
      }
      if (g.boss && !g.boss.dead && Math.hypot(g.boss.x - p.x, g.boss.y - p.y) < cfg.endRadius) {
        if (lineOfSight(g, g.boss, p)) {
          g.boss.takeDamage(cfg.endDamage, Math.atan2(g.boss.y - p.y, g.boss.x - p.x), g);
          hits++;
        }
      }
      g.fx?.ring?.(p.x, p.y, 20, 190, 'rgba(255,190,110,.9)', 7, 0.6);
      g.fx?.burst?.(p.x, p.y, { count: 60, color: '#ff8a4a', color2: '#ffd27a', speed: 380, size: 3.4, life: 0.9, grav: -50 });
      g.shake?.(hits ? 18 : 12);
      g.slowmo?.(0.18, 0.2);
      g.audio?.hit?.(true);
    }
    p.__spirit = 0;
    if (p.__fpResume) {
      p.__fpResume = false;
      if (g) setCameraMode(g, 'first', true);
    }
  }

  function tryCaptureOnBossDeath(g) {
    if (STATE.bossCaptured) return;
    const b = g.boss;
    if (!b || !b.dead) return;
    STATE.bossCaptured = true;
    const ok = captureSpirit(g);
    const p = g.player;
    p.__spiritUnlocked = true;
    p.__spirit = 100;
    localStorage.setItem('inkblade_spirit_unlock', '1');
    if (ok) {
      g.flash('#c9a063', 0.5);
      g.slowmo(0.5, 0.25);
    }
  }

  function beastLight(g) {
    const p = g.player;
    if (p.dead || p.atkCd > 0) return;
    const step = p.comboWindow > 0 ? (p.comboStep + 1) % BEAST.length : 0;
    const d = BEAST[step];
    p.comboStep = step;
    p.atkCd = d.startup + d.active + d.recovery;
    p.comboWindow = d.recovery + 0.2;
    p.swingT = p.swingMax = d.startup + d.active;
    p.__moveLock = d.startup + d.active + d.recovery;
    p.__moveLockScale = 0.4;

    const dir = lockAim(g, p.x, p.y, p.facing, d.reach + 20, 1.3);
    p.swingDir = dir;
    p.x += Math.cos(dir) * d.lunge;
    p.y += Math.sin(dir) * d.lunge;

    STATE.pending.push({
      t: d.startup,
      run: () => {
        if (g.player !== p || p.dead) return;
        const res = staffHit(g, { ...d, kb: 150 }, dir, false);
        g.fx.slash(p.x, p.y, dir, d.reach, '#ffb36a', d.arc * 0.5, 12, 0.3);
        if (res.hits) impact(g, dir, 'transform', res.stone);
      }
    });
  }

  function beastHeavy(g) {
    const p = g.player;
    if (p.dead || p.__beastCd > 0) return;
    p.__beastCd = 3;
    p.atkCd = 0.5;
    const dir = p.facing;
    const hits = g.areaEnemies(p.x + Math.cos(dir) * 60, p.y + Math.sin(dir) * 60, 200, 60, 240);
    g.fx.ring(p.x, p.y, 30, 210, 'rgba(255,150,80,.9)', 8, 0.5);
    g.fx.burst(p.x, p.y, { count: 40, color: '#ff7a3a', color2: '#ffd27a', speed: 320, size: 3.4, life: 0.7 });
    g.shake(hits ? 18 : 10);
    g.slowmo(0.09, 0.04);
    g.audio.bossRoar();
  }

  // ---------------------------------------------------------------- BOSS
  function ensureBoss(g) {
    const b = g.boss;
    if (!b || b === STATE.patchedBoss) return;

    // 初始化阶段视觉
    const p1 = CONFIG.boss.phases[1];
    b.__posture = 0;
    b.__postureMax = p1.posture;
    b.__postureDecay = p1.decay;
    b.__weakT = 0;
    b.__breakT = 0;
    b.__slamHit = false;
    STATE.patchedBoss = b;

    const origEnter = b.enterPhase.bind(b);
    b.enterPhase = (ph, gg) => {
      origEnter(ph, gg);
      const cfg = CONFIG.boss.phases[ph] || CONFIG.boss.phases[1];
      b.__posture = 0;
      b.__postureMax = cfg.posture;
      b.__postureDecay = cfg.decay;
      b.__weakT = 0;
      b.__breakT = 0;
      b.cd = ph === 3 ? 0.85 : ph === 2 ? 1.15 : 1.5;

      b.model?.group?.scale?.setScalar?.(ph === 3 ? 1.12 : ph === 2 ? 1.06 : 1);
      b.model?.group?.traverse?.(o => {
        if (o.isMesh && o.material && o.material.emissive) {
          o.material.emissive.setHex(ph === 3 ? 0x4a0f0a : ph === 2 ? 0x2a0a06 : 0x000000);
          o.material.needsUpdate = true;
        }
      });

      const fog = gg.world?.scene?.fog;
      if (fog) {
        fog.color.set(ph === 3 ? '#3a1414' : ph === 2 ? '#4a2420' : '#77858a');
        fog.density = ph === 3 ? 0.028 : ph === 2 ? 0.022 : 0.015;
      }
      gg.flash?.('#ff4632', 0.35);
      gg.shake?.(14);
    };

    const origTake = b.takeDamage.bind(b);
    b.takeDamage = (dmg, ang, gg) => {
      if (b.dead) return;
      if (b.invuln <= 0 && b.state !== 'phase') {
        b.__posture += Math.min(CONFIG.boss.postureMaxPerHit, dmg * CONFIG.boss.postureDamageScale);
        if (b.__posture >= b.__postureMax) {
          const cfg = CONFIG.boss.phases[b.phase] || CONFIG.boss.phases[1];
          b.__posture = 0;
          b.__breakT = CONFIG.boss.breakTime;
          b.state = 'recover';
          b.t = CONFIG.boss.breakTime;
          gg.fx?.text?.(b.x, b.y - 54, '破势', '#ffe0a0', 24);
          gg.shake?.(16);
          gg.slowmo?.(0.35, 0.25);
          gg.audio?.hit?.(true);
          b.__breakMult = cfg.breakMult;
        }
      }
      const p = gg.player;
      if (p && p.__spiritUnlocked) p.__spirit = Math.min(100, p.__spirit + dmg * 0.08);
      const weak = b.__weakT > 0 ? (CONFIG.boss.phases[b.phase]?.weakMult || 1.5) : 1;
      const breakMult = b.__breakT > 0 ? (b.__breakMult || CONFIG.boss.phases[b.phase]?.breakMult || 1.35) : 1;
      return origTake(dmg * weak * breakMult, ang, gg);
    };

    const origChoose = b.chooseAttack.bind(b);
    b.chooseAttack = gg => {
      const cfg = CONFIG.boss.phases[b.phase] || CONFIG.boss.phases[1];
      if (b.phase >= 2 && Math.random() < cfg.slamChance && b.state !== 'slam') {
        b.attack = 'slam';
        b.state = 'windup';
        b.t = 0.9;
        b.lockAngle = Math.atan2(gg.player.y - b.y, gg.player.x - b.x);
        gg.audio?.bossRoar?.();
        return;
      }
      origChoose(gg);
      if (Math.random() < 0.25) b.t += 0.18;
      const feintChance = CONFIG.ai.feintBase + (diff().feint - CONFIG.difficulty.normal.feint);
      if (b.phase >= 2 && Math.random() < feintChance) {
        b.state = 'recover';
        b.t = 0.25;
        b.move?.(b.facing + Math.PI / 2, 160, 0.18, gg);
      }
    };

    const origExec = b.execute.bind(b);
    b.execute = gg => {
      if (b.attack === 'slam') {
        b.state = 'slam';
        b.t = 0.9;
        b.__slamHit = false;
        return;
      }
      return origExec(gg);
    };

    const origUpdate = b.update.bind(b);
    b.update = (dt, gg) => {
      b.__weakT = Math.max(0, b.__weakT - dt);
      b.__breakT = Math.max(0, b.__breakT - dt);
      b.__posture = Math.max(0, b.__posture - dt * (b.__postureDecay || 6));

      if (b.state === 'slam') {
        b.t -= dt;
        if (b.t <= 0 && !b.__slamHit) {
          b.__slamHit = true;
          gg.fx?.ring?.(b.x, b.y, 20, 180, 'rgba(255,120,70,.9)', 9, 0.6);
          gg.fx?.ring?.(b.x, b.y, 10, 150, 'rgba(255,230,180,.8)', 4, 0.45);
          gg.fx?.burst?.(b.x, b.y, { count: 46, color: '#ff6a3a', color2: '#ffd27a', speed: 360, size: 3.4, life: 0.8, grav: -40 });
          gg.shake?.(20);
          gg.audio?.hit?.(true);
          if (Math.hypot(gg.player.x - b.x, gg.player.y - b.y) < CONFIG.boss.slamRadius) {
            gg.player.takeDamage(CONFIG.boss.slamDamage, b.x, b.y, gg);
          }
          b.__weakT = CONFIG.boss.weakTime;
          b.state = 'recover';
          b.t = 0.55;
        }
        b.sync?.(dt);
        return;
      }

      origUpdate(dt, gg);

      if (b.state === 'idle') {
        const cfg = CONFIG.boss.phases[b.phase] || CONFIG.boss.phases[1];
        b.cd = Math.min(b.cd, cfg.tempo);
      }
    };

    // 进入战斗即应用一次阶段氛围
    const fog = g.world.scene.fog;
    if (fog) {
      fog.color.set('#4a2420');
      fog.density = 0.022;
    }
  }

  // ---------------------------------------------------------------- 怪物 AI
  function lineOfSight(g, e, p) {
    if (!g || !g.world || !g.world.pointBlocked) return true;
    for (let i = 1; i < 5; i++) {
      const t = i / 5;
      if (g.world.pointBlocked(e.x + (p.x - e.x) * t, e.y + (p.y - e.y) * t)) return false;
    }
    return true;
  }

  function wrapEnemy(g, e) {
    if (STATE.enemySeen.has(e)) return;
    STATE.enemySeen.add(e);

    e.__baseAggro = e.aggro;
    e.__alert = 0;
    e.__seen = false;
    e.__role = 'orbit';
    e.__pincerStarted = false;
    e.__feintRolled = false;
    e.__feint = false;

    const orig = e.update.bind(e);
    e.update = (dt, gg) => {
      if (e.dead) { orig(dt, gg); return; }
      const p = gg.player;

      const visible = lineOfSight(gg, e, p);
      e.aggro = visible ? e.__baseAggro : 0;

      if (!e.__seen && visible && Math.hypot(e.x - p.x, e.y - p.y) < e.__baseAggro) {
        e.__seen = true;
        e.__alert = 0.3;
        e.state = 'idle';
        gg.fx.text(e.x, e.y - 34, '!', '#ffb080', 16);
      }
      if (e.__alert > 0) {
        e.__alert -= dt;
        if (e.hpBg) e.hpBg.visible = false;
        if (e.hpFill) e.hpFill.visible = false;
        return;
      }

      orig(dt, gg);

      if (e.state === 'windup') {
        const lead = e.kind === 'ghost' ? 0.35 : e.kind === 'wolf' ? 0.15 : 0.10;
        const tx = p.x + (p.__vx || 0) * lead;
        const ty = p.y + (p.__vy || 0) * lead;
        e.lockAngle = Math.atan2(ty - e.y, tx - e.x);
      }

      if (e.hpBg) e.hpBg.visible = false;
      if (e.hpFill) e.hpFill.visible = false;
    };
  }

  function pressureDirector(g, dt) {
    const p = g.player;
    const alive = g.enemies.filter(e => !e.dead);
    if (!alive.length) return;

    p.__idleT = p.moving ? 0 : (p.__idleT || 0) + dt;
    const ring = Math.max(CONFIG.ai.ringMin, CONFIG.ai.ringBase - p.__idleT * CONFIG.ai.shrinkPerSec);

    alive.sort((a, b) =>
      Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(b.x - p.x, b.y - p.y));

    const tokens = CONFIG.ai.tokens;
    alive.forEach((e, i) => {
      const role = i < tokens - 1 ? 'primary' : i === tokens - 1 ? 'secondary' : 'orbit';
      e.__role = role;

      if (e.kind === 'ghost') {
        e.keepDistance = role === 'primary' ? 170 : 210;
      } else if (role === 'primary') {
        e.keepDistance = 0;
      } else if (role === 'secondary') {
        e.keepDistance = CONFIG.ai.secondaryDistance;
      } else {
        e.keepDistance = ring + (i - tokens) * 14;
      }

      // 分工节奏：主攻更频繁，副攻找机会，游走只骚扰
      if (e.state === 'idle' || e.state === 'chase') {
        const speed = diff().aiSpeed || 1;
        if (role === 'primary') e.cd = Math.min(e.cd, 0.35 / speed);
        else if (role === 'secondary') e.cd = Math.max(e.cd, 0.35 / speed);
        else e.cd = Math.max(e.cd, 0.60 / speed);
      }

      if (e.state !== 'windup') {
        e.__pincerStarted = false;
        e.__feintRolled = false;
        e.__feint = false;
      }

      if (role === 'secondary' && e.state === 'windup' && !e.__pincerStarted) {
        e.__pincerStarted = true;
        e.t += CONFIG.ai.pincerMin + Math.random() * (CONFIG.ai.pincerMax - CONFIG.ai.pincerMin);
      }

      if (e.state === 'windup' && role !== 'primary' && !e.__feintRolled) {
        e.__feintRolled = true;
        e.__feint = Math.random() < diff().feint;
      }
      if (e.state === 'windup' && e.__feint && e.t < 0.12) {
        e.state = 'chase';
        e.t = 0;
        e.cd = Math.max(e.cd, 0.5);
        e.__feint = false;
      }
    });
  }

  // ---------------------------------------------------------------- 氛围
  const ATMOS = {
    temple: { fog: '#565B58', density: 0.024, bg: '#59605E', sun: 0.78, hemi: 0.50 },
    grotto: { fog: '#4E5452', density: 0.020, bg: '#5B6563', sun: 0.95, hemi: 0.55 },
    buddha: { fog: '#6A6258', density: 0.016, bg: '#7A6E5E', sun: 1.35, hemi: 0.60 },
    bone: { fog: '#525A57', density: 0.018, bg: '#5C6663', sun: 1.05, hemi: 0.50 },
  };

  function regionAtmos(region) {
    const id = region && region.id;
    if (id === 'cliff') return ATMOS.buddha;
    if (id === 'forest') return ATMOS.bone;
    if (id === 'town') return ATMOS.temple;
    return ATMOS.grotto;
  }

  function disposeShafts() {
    const geos = new Set();
    const mats = new Set();
    for (const m of STATE.shafts) {
      if (!m) continue;
      if (m.geometry) geos.add(m.geometry);
      if (m.material) mats.add(m.material);
      m.removeFromParent?.();
    }
    for (const g of geos) g.dispose?.();
    for (const m of mats) m.dispose?.();
    STATE.shafts = [];
    STATE.shaftMaterials = [];
  }

  function applySurfaceDetail(g) {
    if (!CONFIG.render.surfaceDetail || !g?.world?.scene) return;
    const roots = new Set();
    if (g.player?.model?.group) roots.add(g.player.model.group);
    for (const e of g.enemies || []) if (e?.model?.group) roots.add(e.model.group);
    if (g.boss?.model?.group) roots.add(g.boss.model.group);

    const isProtected = obj => {
      let cur = obj;
      while (cur) {
        if (roots.has(cur)) return true;
        cur = cur.parent;
      }
      return false;
    };

    const detailFrag = `
      #ifndef BM_DETAIL_FRAG
      #define BM_DETAIL_FRAG
      varying vec3 vObjP;
      varying vec3 vONrm;
      uniform float uKind;
      uniform float uDetail;
      uniform float uWet;
      float bmHash(vec3 p) {
        return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
      }
      float bmNoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(bmHash(i), bmHash(i + vec3(1.0, 0.0, 0.0)), f.x),
              mix(bmHash(i + vec3(0.0, 1.0, 0.0)), bmHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
          mix(mix(bmHash(i + vec3(0.0, 0.0, 1.0)), bmHash(i + vec3(1.0, 0.0, 1.0)), f.x),
              mix(bmHash(i + vec3(0.0, 1.0, 1.0)), bmHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
          f.z);
      }
      #endif
    `;

    const roughnessPatch = `
      float bmScale = uKind < 0.5 ? 34.0 : (uKind < 1.5 ? 58.0 : 22.0);
      float bmD = bmNoise(vObjP * bmScale) * 0.62
                + bmNoise(vObjP * bmScale * 3.7 + 7.0) * 0.38;
      float bmUp = clamp(normalize(vONrm).y, 0.0, 1.0);
      float bmWet = bmUp * uWet;
      roughnessFactor = clamp(roughnessFactor + (bmD - 0.5) * 0.20 * uDetail, 0.06, 1.0);
      roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, bmWet);
      float bmTint = 0.93 + bmD * 0.12;
      // 低频扰动：打散大块地面/墙面的重复感
      float bmFar = bmNoise(vObjP * 1.6 + 13.0) * 0.65 + bmNoise(vObjP * 0.7 + 31.0) * 0.35;
      bmTint *= 0.90 + bmFar * 0.20;
      diffuseColor.rgb *= mix(1.0, bmTint, uDetail) * (1.0 - 0.16 * bmWet);
    `;

    let applied = 0;
    g.world.scene.traverse(o => {
      if (!o.isMesh || !o.material || o.isPoints || o.isSprite) return;
      if (isProtected(o)) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (!m || !m.isMeshStandardMaterial || m.transparent) continue;
        if (m.userData.__bmDetail) continue;

        let kind = 2;
        if ((m.metalness ?? 0) > 0.5) kind = 0;
        else if (m.color && m.color.g > m.color.r * 1.04 && m.color.g > m.color.b * 1.04) kind = 1;

        m.userData.__bmDetail = kind;
        const prev = m.onBeforeCompile;
        m.onBeforeCompile = function (shader, renderer) {
          if (typeof prev === 'function') prev.call(this, shader, renderer);
          shader.uniforms.uKind = { value: kind };
          shader.uniforms.uDetail = detailUniforms.uDetail;
          shader.uniforms.uWet = detailUniforms.uWet;
          if (!shader.vertexShader.includes('BM_DETAIL_VARY')) {
            shader.vertexShader = shader.vertexShader
              .replace('#include <common>', '#include <common>\n#ifndef BM_DETAIL_VARY\n#define BM_DETAIL_VARY\nvarying vec3 vObjP;\nvarying vec3 vONrm;\n#endif')
              .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObjP = position;\nvONrm = normal;');
          }
          if (!shader.fragmentShader.includes('BM_DETAIL_FRAG')) {
            shader.fragmentShader = shader.fragmentShader
              .replace('#include <common>', '#include <common>\n' + detailFrag)
              .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n' + roughnessPatch);
          }
        };
        m.customProgramCacheKey = () => 'bm-detail-' + kind;
        m.needsUpdate = true;
        applied++;
      }
    });
    if (applied) console.log('[BM] surface detail materials:', applied);
  }

  function applyAtmosphere(g) {
    disposeShafts();
    const P = regionAtmos(g.region);
    const s = g.world.scene;
    if (s.fog) {
      s.fog.color.set(P.fog);
      s.fog.density = P.density;
    }
    if (s.background && s.background.set) s.background.set(P.bg);

    const sun = s.children.find(o => o.isDirectionalLight);
    if (sun) {
      sun.intensity = P.sun;
      sun.color.set('#D8C7A8');
      sun.position.set(18, 28, -14);
    }
    const hemi = s.children.find(o => o.isHemisphereLight);
    if (hemi) hemi.intensity = P.hemi * (CONFIG.render.hemiBoost || 1);
    safe('surfaceDetail', () => applySurfaceDetail(g));

    g.renderer.toneMappingExposure = CONFIG.render.exposure || 1.04;
    const gq = CONFIG.graphics[STATE.quality] || CONFIG.graphics.high;
    if (g.bloom) {
      g.bloom.strength = gq.bloom;
      g.bloom.radius = 0.48;
      g.bloom.threshold = 0.86;
    }

    if (gq.shafts > 0 && C.Cyl && C.Mesh && C.StdMat) {
      const px = g.player?.model?.group?.position?.x ?? 0;
      const at = px / Math.max(1, g.player?.x || 1);
      const cx = g.region.w * at / 2;
      const cz = g.region.h * at / 2;
      const geo = new C.Cyl(0.8, 3.2, 14, 8, 1, true);
      const mat = new C.StdMat({
        color: 0xBFD2D8, emissive: 0x93AAB2, emissiveIntensity: 0.55,
        transparent: true, opacity: 0.07, depthWrite: false, side: 2, flatShading: true,
      });
      const pts = [[-160, 18, -120], [80, 20, -180], [200, 17, 60], [-60, 19, 160]];
      for (const [x, y, z] of pts.slice(0, gq.shafts)) {
        const m = new C.Mesh(geo, mat);
        m.position.set(cx + x, y, cz + z);
        m.rotation.z = (Math.random() - 0.5) * 0.12;
        s.add(m);
        STATE.shafts.push(m);
      }
      STATE.shaftMaterials.push(mat);
    }
  }

  let emberT = 0;
  function atmosphereTick(g, dt) {
    const gq = CONFIG.graphics[STATE.quality] || CONFIG.graphics.high;
    emberT -= dt;
    if (emberT <= 0) {
      emberT = gq.emberInterval;
      const p = g.player;
      const parts = g.fx && g.fx.parts;
      if (!parts || parts.length < (gq.particleCap || 120)) {
        g.fx?.embers?.(p.x + (Math.random() - 0.5) * 40, p.y + (Math.random() - 0.5) * 40, 1, '#d9b07a');
      }
    }
  }

  // ---------------------------------------------------------------- 性能采样 / 自动降档
  const QUALITY_ORDER = ['low', 'medium', 'high'];

  function updatePerfOverlay() {
    if (!STATE.fpsVisible) {
      if (STATE.fpsEl) STATE.fpsEl.style.display = 'none';
      return;
    }
    let el = STATE.fpsEl;
    if (!el) {
      el = document.createElement('div');
      el.id = 'bm-fps';
      el.style.cssText = 'position:fixed;right:12px;top:12px;z-index:70;pointer-events:none;'
        + 'font:11px/1.5 ui-monospace,Consolas,monospace;color:#d9b877;background:rgba(6,7,7,.55);'
        + 'padding:4px 8px;border:1px solid rgba(176,138,74,.35);letter-spacing:.06em';
      document.body.appendChild(el);
      STATE.fpsEl = el;
    }
    el.style.display = '';
    el.textContent = `${Math.round(STATE.fps)} FPS · ${STATE.quality}`;
  }

  function perfTick(dt) {
    STATE.fpsAcc += dt;
    STATE.fpsFrames++;
    if (STATE.fpsAcc < (CONFIG.perf.sampleSec || 1.5)) return;
    STATE.fps = STATE.fpsFrames / STATE.fpsAcc;
    STATE.fpsAcc = 0;
    STATE.fpsFrames = 0;
    diag.fps = Math.round(STATE.fps);
    if (STATE.fpsVisible) updatePerfOverlay();

    if (!CONFIG.perf.auto || !STATE.qualityAuto) return;
    if (game.mode !== 'playing' || game.ui?.isOpen?.()) {
      STATE.fpsLow = 0;
      return;
    }
    if (STATE.fps < (CONFIG.perf.minFps || 45)) {
      STATE.fpsLow++;
      if (STATE.fpsLow >= (CONFIG.perf.downgradeAfter || 2)) {
        STATE.fpsLow = 0;
        const idx = QUALITY_ORDER.indexOf(STATE.quality);
        if (idx > 0) {
          const next = QUALITY_ORDER[idx - 1];
          saveQuality(next, true);
          detailUniforms.uDetail.value = effectiveDetail();
          safe('quality', () => applyAtmosphere(game));
          console.log('[BM] auto quality ->', next, Math.round(STATE.fps));
        }
      }
    } else {
      STATE.fpsLow = 0;
    }
  }

  // ---------------------------------------------------------------- 首局渐进提示
  const TIPS = [
    { key: 'move', text: 'WASD 移动 · 按住 Shift 冲刺' },
    { key: 'light', text: '鼠标左键 / J 轻击' },
    { key: 'dodge', text: 'K 闪避，躲开敌人起手' },
    { key: 'parry', text: 'C 识破，在敌人命中瞬间反击' },
  ];

  function renderTip() {
    const step = TIPS[STATE.tipIdx];
    let el = STATE.tipEl;
    if (!el || !el.isConnected) {
      el = document.createElement('div');
      el.id = 'bm-tip';
      document.body.appendChild(el);
      STATE.tipEl = el;
    }
    if (!step) {
      el.classList.remove('on');
      return;
    }
    el.textContent = `${STATE.tipIdx + 1}/${TIPS.length} · ${step.text}`;
    el.classList.add('on');
  }

  function tipsTick(g, dt) {
    if (STATE.tipsDone) return;
    if (g.mode !== 'playing' || g.ui.isOpen() || g.ui.dialogueOpen) {
      STATE.tipEl?.classList.remove('on');
      return;
    }
    const p = g.player;
    if (!p || p.dead) return;
    if (!STATE.tipEl?.classList.contains('on')) renderTip();

    const step = TIPS[STATE.tipIdx];
    if (!step) return;
    let done = false;
    if (step.key === 'move') {
      STATE.tipMove += Math.hypot(p.__vx || 0, p.__vy || 0) * dt;
      done = STATE.tipMove > 18;
    } else if (step.key === 'light') {
      done = STATE.lastAttack === 'queued';
    } else if (step.key === 'dodge') {
      done = (p.dodgeT || 0) > 0;
    } else if (step.key === 'parry') {
      done = (p.__parryT || 0) > 0 || (p.__counterT || 0) > 0;
    }
    if (!done) return;

    STATE.tipIdx++;
    if (STATE.tipIdx >= TIPS.length) {
      STATE.tipsDone = true;
      try { localStorage.setItem('inkblade_tips_done', '1'); } catch (e) { /* ignore */ }
      STATE.tipEl?.classList.remove('on');
    } else {
      renderTip();
    }
  }

  // ---------------------------------------------------------------- HUD
  function buildHud(g) {
    if (STATE.hud) return;
    const existing = document.getElementById('bm-hud');
    if (existing) {
      STATE.hud = existing;
      return;
    }
    const ui = document.getElementById('ui');
    if (!ui) return;
    const el = document.createElement('div');
    el.id = 'bm-hud';
    el.innerHTML = `
      <div id="bm-spirit"><i></i></div>
      <div id="bm-force"><i></i><i></i><i></i><i></i></div>
      <div id="bm-vitals">
        <div id="bm-hp" class="bm-line hp"><span>命</span><div class="bm-track"><b></b></div></div>
        <div id="bm-mana" class="bm-line mana"><span>法</span><div class="bm-track"><b></b></div></div>
        <div id="bm-stamina" class="bm-line stamina"><span>力</span><div class="bm-track"><b></b></div></div>
      </div>
      <div id="bm-spells">
        <div id="bm-spell0" class="bm-seal"><b>定</b><i></i><em>1</em></div>
        <div id="bm-spell1" class="bm-seal"><b>移</b><i></i><em>2</em></div>
        <div id="bm-spell2" class="bm-seal"><b>护</b><i></i><em>3</em></div>
      </div>
      <div id="bm-transform"><i></i></div>
      <div id="bm-transform-hint">变身中：禁用识破、神通</div>
      <div id="bm-reticle"></div>
      <div id="bm-interact">
        <span class="bm-interact-mark"></span>
        <span class="bm-interact-key">E</span>
        <span class="bm-interact-text"></span>
      </div>
      <div id="bm-boss">
        <div class="bm-boss-top"><span>无面</span><div class="bm-pips"><i></i><i></i><i></i></div></div>
        <div class="bm-boss-track"><b></b></div>
        <div class="bm-posture"><b></b></div>
      </div>
      <div id="bm-boss-edge"></div>`;
    ui.appendChild(el);
    el.classList.add('hidden');
    STATE.hud = el;
    buildTouch(g);
  }

  const hudCache = {};
  function setWidth(key, ratio) {
    const el = hudCache[key];
    if (!el) return;
    const w = clamp(ratio, 0, 1) * 100;
    if (el.__w !== w) {
      el.style.width = w + '%';
      el.__w = w;
    }
  }

  const KEY_LABELS = {
    Space: '空格', ShiftLeft: 'Shift', ShiftRight: 'Shift', ControlLeft: 'Ctrl', AltLeft: 'Alt',
    MouseRight: '右键', MouseLeft: '左键', Tab: 'Tab', CapsLock: 'Caps',
  };
  function keyLabel(code) {
    if (!code) return '未绑定';
    if (KEY_LABELS[code]) return KEY_LABELS[code];
    if (code.startsWith('Key')) return code.slice(3);
    if (code.startsWith('Digit')) return code.slice(5);
    if (code.startsWith('Arrow')) return { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→' }[code] || code;
    return code;
  }
  function formatKeys(list) {
    const arr = Array.isArray(list) ? list : (list ? [list] : []);
    return arr.length ? arr.map(keyLabel).join(' / ') : '未绑定';
  }

  function keyEntries() {
    return [
      { label: '轻击', get: () => CONFIG.input.light, set: v => { CONFIG.input.light = v; } },
      { label: '重击', get: () => CONFIG.input.heavy, set: v => { CONFIG.input.heavy = v; } },
      { label: '闪避', get: () => CONFIG.input.dodge, set: v => { CONFIG.input.dodge = v; } },
      { label: '冲刺（按住）', get: () => CONFIG.input.sprint, set: v => { CONFIG.input.sprint = v; } },
      { label: '跳跃', get: () => CONFIG.input.jump, set: v => { CONFIG.input.jump = v; } },
      { label: '识破', get: () => CONFIG.input.parry, set: v => { CONFIG.input.parry = v; } },
      { label: '棍势', get: () => CONFIG.input.stance, set: v => { CONFIG.input.stance = v; } },
      { label: '锁定', get: () => CONFIG.input.lock, set: v => { CONFIG.input.lock = v; } },
      { label: '精魂变身', get: () => CONFIG.input.transform, set: v => { CONFIG.input.transform = v; } },
      { label: '视角切换', get: () => CONFIG.input.view, set: v => { CONFIG.input.view = v; } },
      { label: '神通一', get: () => [CONFIG.input.spells[0]], set: v => { CONFIG.input.spells[0] = v[0]; } },
      { label: '神通二', get: () => [CONFIG.input.spells[1]], set: v => { CONFIG.input.spells[1] = v[0]; } },
      { label: '神通三', get: () => [CONFIG.input.spells[2]], set: v => { CONFIG.input.spells[2] = v[0]; } },
      { label: '前进', get: () => CONFIG.input.move.up, set: v => { CONFIG.input.move.up = v; } },
      { label: '后退', get: () => CONFIG.input.move.down, set: v => { CONFIG.input.move.down = v; } },
      { label: '左移', get: () => CONFIG.input.move.left, set: v => { CONFIG.input.move.left = v; } },
      { label: '右移', get: () => CONFIG.input.move.right, set: v => { CONFIG.input.move.right = v; } },
    ];
  }

  function saveKeybinds() {
    try {
      localStorage.setItem('inkblade_keybinds', JSON.stringify(CONFIG.input));
    } catch (e) {
      console.warn('[BM] keybind save failed', e);
    }
  }

  function ensureKeyPanel() {
    if (STATE.keyPanel) return STATE.keyPanel;
    const el = document.createElement('div');
    el.id = 'bm-keys';
    el.className = 'hidden';
    el.innerHTML = `
      <div class="bm-keys-box">
        <div class="bm-keys-head"><span>键 位 设 置</span><button type="button" data-bm-close>×</button></div>
        <div class="bm-keys-grid"></div>
        <div class="bm-keys-foot">
          <button type="button" data-bm-reset>恢复默认</button>
          <span>点击条目后按下新按键 · Esc 取消</span>
        </div>
      </div>`;
    document.body.appendChild(el);
    el.querySelector('[data-bm-close]')?.addEventListener('click', () => closeKeyPanel());
    el.querySelector('[data-bm-reset]')?.addEventListener('click', () => resetKeybinds());
    STATE.keyPanel = el;
    return el;
  }

  function renderKeyPanel() {
    const el = ensureKeyPanel();
    const grid = el.querySelector('.bm-keys-grid');
    if (!grid) return;
    grid.innerHTML = '';
    keyEntries().forEach(entry => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bm-key-row';
      btn.innerHTML = `<span>${entry.label}</span><b>${formatKeys(entry.get())}</b>`;
      btn.addEventListener('click', () => startKeyCapture(entry, btn));
      grid.appendChild(btn);
    });
  }

  function openKeyPanel() {
    renderKeyPanel();
    ensureKeyPanel().classList.remove('hidden');
  }

  function closeKeyPanel() {
    STATE.bindCapture = null;
    if (STATE.keyPanel) {
      STATE.keyPanel.classList.add('hidden');
      STATE.keyPanel.querySelectorAll('.bm-key-row.capturing').forEach(b => b.classList.remove('capturing'));
    }
  }

  function startKeyCapture(entry, btn) {
    STATE.bindCapture = entry;
    STATE.keyPanel?.querySelectorAll('.bm-key-row.capturing').forEach(b => b.classList.remove('capturing'));
    btn.classList.add('capturing');
    const b = btn.querySelector('b');
    if (b) b.textContent = '按下新按键…';
  }

  function applyKeyBinding(code) {
    const entry = STATE.bindCapture;
    if (!entry) return;
    STATE.bindCapture = null;
    for (const other of keyEntries()) {
      if (other === entry) continue;
      const arr = other.get();
      if (Array.isArray(arr) && arr.includes(code)) {
        other.set(arr.filter(c => c !== code));
      }
    }
    entry.set([code]);
    saveKeybinds();
    renderKeyPanel();
  }

  function resetKeybinds() {
    const invertY = CONFIG.input.invertY;
    const fresh = JSON.parse(JSON.stringify(DEFAULT_INPUT));
    fresh.invertY = invertY;
    CONFIG.input = fresh;
    saveKeybinds();
    renderKeyPanel();
  }

  function buildTouch(g) {
    if (STATE.touch) return;
    if (CONFIG.ui.touch === 'off') return;
    const coarse = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window;
    if (CONFIG.ui.touch !== 'on' && !coarse && !location.search.includes('touch=1')) return;
    const ui = document.getElementById('ui');
    if (!ui) return;
    STATE.touch = true;
    const wrap = document.createElement('div');
    wrap.id = 'bm-touch';
    wrap.innerHTML = `
      <div class="bm-dpad">
        <button data-move="KeyW">▲</button>
        <button data-move="KeyA">◀</button>
        <button data-move="KeyS">▼</button>
        <button data-move="KeyD">▶</button>
      </div>
      <div class="bm-actions">
        <button data-act="light">击</button>
        <button data-act="heavy">重</button>
        <button data-act="parry">破</button>
        <button data-act="dodge">闪</button>
        <button data-act="jump">跃</button>
        <button data-act="spell0">定</button>
        <button data-act="spell1">移</button>
        <button data-act="spell2">护</button>
        <button data-act="transform">魂</button>
      </div>`;
    ui.appendChild(wrap);

    wrap.querySelectorAll('[data-move]').forEach(btn => {
      const code = btn.dataset.move;
      const down = e => { e.preventDefault(); g.input.keys.add(code); };
      const up = e => { e.preventDefault(); g.input.keys.delete(code); };
      btn.addEventListener('pointerdown', down);
      btn.addEventListener('pointerup', up);
      btn.addEventListener('pointercancel', up);
      btn.addEventListener('pointerleave', up);
    });

    wrap.querySelectorAll('[data-act]').forEach(btn => {
      btn.addEventListener('pointerdown', e => {
        e.preventDefault();
        if (g.mode !== 'playing' || g.ui.isOpen()) return;
        const p = g.player;
        if (!p || p.dead) return;
        const act = btn.dataset.act;
        if (act === 'light') { if (p.__transformT > 0) beastLight(g); else staffLight(g); }
        else if (act === 'heavy') { if (p.__transformT > 0) beastHeavy(g); else staffHeavy(g); }
        else if (act === 'parry') tryParry(g);
        else if (act === 'dodge') {
          const dk = CONFIG.input.dodge[0] || 'KeyK';
          g.input.pressed.add(dk);
        }
        else if (act === 'jump') doJump(g);
        else if (act === 'transform') tryTransform(g);
        else if (act.startsWith('spell')) castSpell(g, Number(act.slice(5)));
      });
    });
  }

  function cacheHudNodes() {
    if (hudCache.ready) return;
    const q = sel => STATE.hud.querySelector(sel);
    hudCache.hp = q('#bm-hp .bm-track b');
    hudCache.mana = q('#bm-mana .bm-track b');
    hudCache.stamina = q('#bm-stamina .bm-track b');
    hudCache.spirit = q('#bm-spirit i');
    hudCache.spiritWrap = q('#bm-spirit');
    hudCache.transform = q('#bm-transform i');
    hudCache.transformWrap = q('#bm-transform');
    hudCache.transformHint = q('#bm-transform-hint');
    hudCache.boss = q('#bm-boss');
    hudCache.bossHp = q('.bm-boss-track b');
    hudCache.bossPosture = q('.bm-posture b');
    hudCache.edge = q('#bm-boss-edge');
    hudCache.pips = [...STATE.hud.querySelectorAll('.bm-pips i')];
    hudCache.force = [...STATE.hud.querySelectorAll('#bm-force i')];
    hudCache.seals = [0, 1, 2].map(i => {
      const el = q('#bm-spell' + i);
      return el ? { el, cd: el.querySelector('i'), num: el.querySelector('em') } : null;
    });
    hudCache.ready = !!(hudCache.hp && hudCache.mana && hudCache.stamina && hudCache.boss);
  }

  function hudTick(g, dt) {
    const p = g.player;
    if (!p) return;
    if (!STATE.hud) buildHud(g);
    if (!STATE.hud) return;

    const hidden = g.mode !== 'playing' || g.ui.titleVisible || g.ui.deadOpen || g.ui.victoryOpen;
    STATE.hud.classList.toggle('hidden', hidden);
    if (hidden) return;

    // 交互提示是空间投影，需要逐帧更新；其余 HUD 写入限制在 ~12Hz
    updateInteractHud(g);

    STATE.hudAcc += dt;
    if (STATE.hudAcc < 0.08) return;
    STATE.hudAcc = 0;

    cacheHudNodes();
    if (!hudCache.ready) return;

    const bossNow = g.boss;
    const inCombat = (bossNow && !bossNow.dead) ||
      (g.enemies || []).some(e => e && !e.dead && Math.hypot(e.x - p.x, e.y - p.y) < 650) ||
      p.hurtT > 0 || p.atkCd > 0;
    if (inCombat) STATE.lastCombat = g.time;
    const idle = !inCombat && !g.promptTarget && g.time - STATE.lastCombat > CONFIG.ui.combatFade;
    STATE.hud.classList.toggle('idle', idle);

    setWidth('hp', p.hp / p.maxHp);
    setWidth('mana', p.chi / p.maxChi);
    setWidth('stamina', p.stamina / p.maxStamina);

    const forceSeg = p.__staffForce / 100 * 4;
    hudCache.force.forEach((el, i) => {
      el.classList.toggle('on', forceSeg > i);
      el.classList.toggle('full', p.__staffForce >= 70);
    });

    p.skillCd.forEach((cd, i) => {
      const s = hudCache.seals[i];
      if (!s || !s.cd) return;
      const max = SPELLS[i].cd;
      const ratio = cd > 0 ? cd / max : 0;
      s.cd.style.setProperty('--cd', (ratio * 360) + 'deg');
      s.el.classList.toggle('cooling', cd > 0);
      s.num.textContent = cd > 0 ? Math.ceil(cd) : String(i + 1);
      s.num.classList.toggle('ready', cd <= 0);
    });

    const b = g.boss;
    const showBoss = !!b && !b.dead;
    hudCache.boss.classList.toggle('on', showBoss);
    if (showBoss) {
      setWidth('bossHp', b.hp / b.maxHp);
      hudCache.bossHp.style.width = clamp(b.hp / b.maxHp, 0, 1) * 100 + '%';
      hudCache.bossPosture.style.width = clamp((b.__posture || 0) / (b.__postureMax || 120), 0, 1) * 100 + '%';
      hudCache.pips.forEach((el, i) => el.classList.toggle('on', b.phase > i));
    }

    hudCache.spiritWrap.classList.toggle('on', !!p.__spiritUnlocked);
    if (p.__spiritUnlocked) setWidth('spirit', p.__spirit / 100);

    const active = p.__transformT > 0;
    hudCache.transformWrap.classList.toggle('on', active);
    if (active) hudCache.transform.style.width = clamp(p.__transformT / CONFIG.player.transform.duration, 0, 1) * 100 + '%';
    hudCache.transformHint?.classList.toggle('on', active);

    // BOSS 离屏时，边缘柔光提示架势累积
    if (hudCache.edge) {
      let showEdge = false;
      if (CONFIG.ui.bossEdge && b && !b.dead && (b.__posture || 0) > 1) {
        const pos = b.model?.group?.position;
        if (pos && g.camera) {
          tmpVec.copy(pos).project(g.camera);
          showEdge = Math.abs(tmpVec.x) > 1.02 || Math.abs(tmpVec.y) > 1.02 || tmpVec.z > 1;
        }
      }
      hudCache.edge.classList.toggle('on', !!showEdge);
    }

    document.body.classList.toggle('low-hp', CONFIG.ui.lowHpFilter && p.hp / p.maxHp < 0.3);
    document.body.classList.toggle('transformed', active);
  }

  // 交互目标在模型头顶的锚点（网格坐标）
  function interactAnchor(t) {
    if (!t) return null;
    if (t.kind === 'npc' && t.npc) return { x: t.npc.x, y: t.npc.y, h: 1.75 };
    if (t.kind === 'portal' && t.portal) return { x: t.portal.x, y: t.portal.y, h: 1.85 };
    if (t.kind === 'node' && t.node?.def) return { x: t.node.def.x, y: t.node.def.y, h: 0.8 };
    if (t.kind === 'chest' && t.chest?.def) return { x: t.chest.def.x, y: t.chest.def.y, h: 0.72 };
    if (t.kind === 'shrine') return { x: t.x, y: t.y, h: 1.7 };
    return null;
  }

  function updateInteractHud(g) {
    const reticle = STATE.reticleEl || (STATE.reticleEl = document.getElementById('bm-reticle'));
    const box = STATE.interactEl || (STATE.interactEl = document.getElementById('bm-interact'));
    if (!reticle || !box) return;

    reticle.classList.toggle('on', STATE.cameraMode === 'first' && !g.ui.isOpen() && !g.ui.dialogueOpen);
    const show = !!g.promptTarget && !g.ui.isOpen() && !g.ui.dialogueOpen;
    reticle.classList.toggle('active', show);
    if (!show) {
      box.classList.remove('on');
      return;
    }

    const a = interactAnchor(g.promptTarget);
    let visible = false;
    if (a && Number.isFinite(a.x) && Number.isFinite(a.y) && g.camera) {
      g.camera.updateMatrixWorld?.();
      tmpVec.set(a.x * WORLD_SCALE, a.h, a.y * WORLD_SCALE).project(g.camera);
      const sx = (tmpVec.x * 0.5 + 0.5) * window.innerWidth;
      const sy = (-tmpVec.y * 0.5 + 0.5) * window.innerHeight;
      if (tmpVec.z < 1 && sx > 40 && sx < window.innerWidth - 40 && sy > 40 && sy < window.innerHeight - 40) {
        box.style.left = sx + 'px';
        box.style.top = sy + 'px';
        visible = true;
      }
    }
    box.classList.toggle('on', visible);
    if (visible) {
      const text = box.querySelector('.bm-interact-text');
      const label = g.promptText ? g.promptText(g.promptTarget) : '';
      if (text && text.textContent !== label) text.textContent = label;
    }
  }

  // ---------------------------------------------------------------- 主循环接管
  function safe(label, fn) {
    try {
      fn();
    } catch (err) {
      console.error('[BM] ' + label, err);
    }
  }

  function tickSequences(g, dt) {
    for (let i = STATE.sequences.length - 1; i >= 0; i--) {
      const s = STATE.sequences[i];
      s.t -= dt;
      while (s.t <= 0 && s.left > 0) {
        const idx = s.total - s.left;
        s.left--;
        try { s.fn(idx); } catch (err) { console.error('[BM] sequence', err); }
        s.t += s.interval;
      }
      if (s.left <= 0) STATE.sequences.splice(i, 1);
    }
  }

  const origUpdate = game.update.bind(game);
  game.update = (dt, raw) => {
    try {
      STATE.frameId++;
      safe('player', () => ensurePlayer(game));
      safe('boss', () => ensureBoss(game));

      if (STATE.world !== game.world) {
        if (STATE.patchedPlayer && STATE.patchedPlayer.__transformT > 0) {
          endTransform(game, STATE.patchedPlayer, false);
        }
        STATE.pending.length = 0;
        STATE.sequences.length = 0;
        STATE.lockTarget = null;
        if (STATE.patchedPlayer) {
          STATE.patchedPlayer.__guardT = 0;
          STATE.patchedPlayer.__parryT = 0;
          STATE.patchedPlayer.__counterT = 0;
        }
        STATE.world = game.world;
        safe('atmosphere', () => applyAtmosphere(game));
      }

      const p = game.player;
      if (p) {
        if (p.dead) {
          STATE.pending.length = 0;
          STATE.sequences.length = 0;
          STATE.lockTarget = null;
          if (p.__transformT > 0) endTransform(game, p, false);
          p.__guardT = 0;
          p.__parryT = 0;
          p.__counterT = 0;
        } else {
          p.__vx = (p.x - (p.__px ?? p.x)) / Math.max(dt, 0.001);
          p.__vy = (p.y - (p.__py ?? p.y)) / Math.max(dt, 0.001);
          p.__px = p.x;
          p.__py = p.y;
        }
      }

      safe('sequences', () => tickSequences(game, dt));

      for (let i = STATE.pending.length - 1; i >= 0; i--) {
        const job = STATE.pending[i];
        job.t -= dt;
        if (job.t <= 0) {
          STATE.pending.splice(i, 1);
          if (!game.player || game.player.dead) continue;
          if (job.boss && job.boss.dead) continue;
          try { job.run(); } catch (err) { console.error('[BM] pending', err); }
        }
      }

      if (STATE.frameId % (CONFIG.ai.directorInterval || 2) === 0) {
        safe('ai', () => pressureDirector(game, dt * (CONFIG.ai.directorInterval || 2)));
      }
      safe('capture', () => tryCaptureOnBossDeath(game));
      safe('lock', () => lockTick(game, dt));
      safe('update', () => origUpdate(dt, raw));
      safe('atmo', () => atmosphereTick(game, dt));
      safe('perf', () => perfTick(dt));
      safe('tips', () => tipsTick(game, dt));
      safe('hud', () => hudTick(game, dt));
    } catch (err) {
      console.error('[BM] frame', err);
      // 保证 RAF 链不因补丁异常中断
      try { requestAnimationFrame(game.frame); } catch (e) { /* ignore */ }
    }
  };

  // ---------------------------------------------------------------- 输入
  window.addEventListener('pointerdown', e => {
    if (e.button !== 2 || !CONFIG.input.heavy.includes('MouseRight')) return;
    e.preventDefault();
    if (game.mode !== 'playing' || game.ui.isOpen() || !game.player) return;
    if (game.player.__transformT > 0) beastHeavy(game);
    else staffHeavy(game);
  }, true);

  // 键位捕获：优先于游戏输入，避免改键时触发攻击/跳跃
  window.addEventListener('keydown', e => {
    if (!STATE.bindCapture) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (e.repeat) return;
    if (e.code === 'Escape') {
      STATE.bindCapture = null;
      renderKeyPanel();
      return;
    }
    if (e.code === 'Tab') {
      STATE.bindCapture = null;
      renderKeyPanel();
      return;
    }
    applyKeyBinding(e.code);
  }, true);

  window.addEventListener('keydown', e => {
    if (e.repeat) return;
    if (game.mode !== 'playing' || game.ui.isOpen() || !game.player) return;
    if (CONFIG.input.stance.includes(e.code)) {
      STATE.stance = (STATE.stance + 1) % 3;
      game.audio?.ui?.();
      game.fx?.text?.(game.player.x, game.player.y - 34, HEAVY[STATE.stance].name, '#e6dac0', 15);
    } else if (CONFIG.input.parry.includes(e.code)) {
      tryParry(game);
    } else if (CONFIG.input.transform.includes(e.code)) {
      tryTransform(game);
    } else if (CONFIG.input.lock.includes(e.code)) {
      toggleLock(game);
    } else if (CONFIG.input.view.includes(e.code)) {
      toggleCamera(game);
    } else if (CONFIG.input.heavy.includes(e.code)) {
      if (game.player.__transformT > 0) beastHeavy(game);
      else staffHeavy(game);
    } else if (CONFIG.input.jump.includes(e.code)) {
      doJump(game);
    }
  });

  // Y 轴反转：原相机逻辑为 pitch -= movementY * 0.0019。
  // 第三人称 pitch 越大镜头越高（向下看），第一人称 pitch 越大抬头（向上看），
  // 两种模式的方向语义相反，因此补偿量按当前视角模式区分。
  window.addEventListener('mousemove', e => {
    const third = STATE.cameraMode !== 'first';
    if (CONFIG.input.invertY !== third) return;
    if (game.mode !== 'playing' || game.ui.isOpen()) return;
    if (!game.locked && !game.dragging) return;
    game.pitch = clamp(game.pitch + e.movementY * 0.0038, 0.07, 1.05);
  });

  // 隐藏伤害数字，仅保留战斗关键词
  const origText = game.fx.text.bind(game.fx);
  game.fx.text = (x, y, text, color, size) => {
    if (typeof text === 'string' && /^-?\d+$/.test(text)) return;
    return origText(x, y, text, color, size);
  };

  // 去掉所有浮动提示
  game.ui.toast = () => {};

  // 外部音频钩子：注册后优先播放外部音频，未注册时继续使用 WebAudio 合成
  window.__BM_AUDIO = {
    register(name, url) {
      if (name && url) CONFIG.audio.external[name] = url;
      return CONFIG.audio.external[name] || null;
    },
    play(name) {
      return playSfx(game, name, null);
    },
  };

  // 帮助与暂停面板替换为当前战斗键位
  if (game.ui.openHelp) {
    const origHelp = game.ui.openHelp.bind(game.ui);
    game.ui.openHelp = () => {
      origHelp();
      const grid = game.ui.panelEl && game.ui.panelEl.querySelector('.help-grid');
      if (grid) {
        grid.innerHTML = `
          <div><span class="key">W A S D</span> 移动　<span class="key">Shift</span> 冲刺　<span class="key">空格</span> 跳跃　<span class="key">K</span> 闪避</div>
          <div><span class="key">左键</span> 轻击攒棍势　<span class="key">右键</span> 重招</div>
          <div><span class="key">V</span> 切换劈 / 立 / 戳棍势</div>
          <div><span class="key">C</span> 识破　<span class="key">L</span> 锁定</div>
          <div><span class="key">1</span> 定身　<span class="key">2</span> 移形闪　<span class="key">3</span> 护身法</div>
          <div><span class="key">F</span> 精魂变身</div>
          <div><span class="key">Q / R</span> 回血 / 回法力</div>
          <div><span class="key">E</span> 交互　<span class="key">Tab</span> 行囊　<span class="key">O</span> 第一 / 第三人称　<span class="key">Esc</span> 暂停</div>`;
      }
    };
  }

  if (game.ui.openPause) {
    const origPause = game.ui.openPause.bind(game.ui);
    game.ui.openPause = () => {
      origPause();
      const body = game.ui.panelEl && game.ui.panelEl.querySelector('.pause-body');
      if (body) {
        body.innerHTML = `
          <div class="pause-keys">
            <span><b>空格</b> 跳跃</span>
            <span><b>Shift</b> 冲刺</span>
            <span><b>K</b> 闪避</span>
            <span><b>V</b> 棍势</span>
            <span><b>C</b> 识破</span>
            <span><b>F</b> 精魂</span>
            <span><b>O</b> 视角</span>
            <span><b>Tab</b> 行囊</span>
            <span><b>M</b> 静音</span>
          </div>
          <button type="button" class="bm-keys-open" data-bm-open-keys>键 位 设 置</button>`;
        body.querySelector('[data-bm-open-keys]')?.addEventListener('click', e => {
          e.preventDefault();
          openKeyPanel();
        });
      }
    };
  }

  // ---------------------------------------------------------------- 行囊
  const INV_META = {
    pill_heal: { name: '回春丹', type: 'pill', tag: '丹药', effect: '立即恢复 45 点气血。', hint: 'Q', price: 30 },
    pill_chi: { name: '凝神散', type: 'pill', tag: '丹药', effect: '立即恢复 55 点内力。', hint: 'R', price: 26 },
    pill_speed: { name: '清风散', type: 'pill', tag: '丹药', effect: '10 秒内身法与出招速度提升。', price: 36 },
    pill_guard: { name: '金刚散', type: 'pill', tag: '丹药', effect: '8 秒内受到的伤害减半。', price: 42 },
    herb: { name: '青灵草', type: 'material', tag: '材料', effect: '炼丹主药：回春丹 / 凝神散 / 清风散。', price: 12 },
    bloodsand: { name: '血砂', type: 'material', tag: '材料', effect: '炼丹辅料：回春丹 / 金刚散。', price: 16 },
    bone: { name: '兽骨', type: 'material', tag: '材料', effect: '炼丹辅料：清风散 / 金刚散。', price: 10 },
    ghostfire: { name: '幽火', type: 'material', tag: '材料', effect: '炼丹辅料：凝神散。', price: 22 },
    key: { name: '残破佛钥', type: 'key', tag: '信物', effect: '开启断崖佛门。' },
    talisman: { name: '幽火令', type: 'key', tag: '信物', effect: '无面令牌，背面刻着「无面」二字。' },
  };
  const INV_ORDER = ['pill_heal', 'pill_chi', 'pill_speed', 'pill_guard', 'herb', 'bloodsand', 'bone', 'ghostfire', 'key', 'talisman'];

  function installInventoryUI(g) {
    const ui = g.ui;
    if (!ui || ui.__bmInv) return;
    ui.__bmInv = true;

    ui.renderInventory = function () {
      const snap = this.snapshot || { money: 0, counts: {} };
      const counts = snap.counts || {};
      const ids = INV_ORDER.filter(id => (counts[id] || 0) > 0);
      const countType = type => ids.filter(id => INV_META[id].type === type).length;
      const cats = [
        { id: 'all', label: '全部', n: ids.length },
        { id: 'pill', label: '丹药', n: countType('pill') },
        { id: 'material', label: '材料', n: countType('material') },
        { id: 'key', label: '信物', n: countType('key') },
      ];
      if (!cats.some(c => c.id === STATE.invCat)) STATE.invCat = 'all';
      const filtered = ids.filter(id => STATE.invCat === 'all' || INV_META[id].type === STATE.invCat);
      if (!filtered.includes(STATE.invSel)) STATE.invSel = filtered[0] || null;
      const selId = STATE.invSel;
      const sel = selId ? INV_META[selId] : null;

      const rows = filtered.map(id => {
        const m = INV_META[id];
        return `<button type="button" class="bm-inv-row${id === selId ? ' on' : ''}" data-bm-pick="${id}">
            <span class="bm-inv-icon" style="background-image:url(${this.icon(id)})"></span>
            <span class="bm-inv-name">${m.name}</span>
            <span class="bm-inv-num">×${counts[id]}</span>
          </button>`;
      }).join('');

      const detail = sel ? `
        <div class="bm-inv-detail-head">
          <span class="bm-inv-detail-icon" style="background-image:url(${this.icon(selId)})"></span>
          <div>
            <div class="bm-inv-detail-name">${sel.name}</div>
            <div class="bm-inv-detail-tag">${sel.tag}</div>
          </div>
        </div>
        <p class="bm-inv-effect">${sel.effect}</p>
        <div class="bm-inv-stats">
          <span>持有 <b>${counts[selId]}</b></span>
          ${sel.price ? `<span>市价 <b>${sel.price}</b> 文</span>` : '<span>不可交易</span>'}
        </div>
        ${sel.type === 'pill'
          ? `<button type="button" class="btn small bm-inv-use" data-action="use" data-id="${selId}">服 用${sel.hint ? ` · ${sel.hint}` : ''}</button>`
          : `<div class="bm-inv-note">${sel.type === 'key' ? '信物 · 用于开启门径' : '材料 · 可在药铺炼制丹药'}</div>`}
        <div class="bm-inv-keys">Tab / Esc 关闭　·　Q / R 战斗中快速服丹</div>`
        : `<div class="bm-inv-empty big">行囊空空<span>去野外采些药材，或从敌人身上搜寻。</span></div>`;

      this.panelEl.classList.remove('shop-panel');
      this.panelEl.innerHTML = `
        <div class="panel-head">
          <div class="panel-title">行 囊</div>
          <button class="close-btn" data-action="close">×</button>
        </div>
        <div class="bm-inv">
          <div class="bm-inv-side">
            <div class="bm-inv-cats">
              ${cats.map(c => `<button type="button" class="bm-inv-cat${STATE.invCat === c.id ? ' on' : ''}" data-bm-cat="${c.id}"><span>${c.label}</span><b>${c.n}</b></button>`).join('')}
            </div>
            <div class="bm-inv-list">${rows || '<div class="bm-inv-empty">此类空空</div>'}</div>
          </div>
          <div class="bm-inv-detail">${detail}</div>
        </div>
        <div class="bm-inv-foot">
          <span>铜钱 <b>${snap.money}</b> 文</span>
          <span>点击条目查看 · 服用消耗 1 枚</span>
        </div>`;

      this.panelEl.querySelectorAll('[data-bm-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
          STATE.invCat = btn.dataset.bmCat;
          STATE.invSel = null;
          this.renderInventory();
          g.audio?.ui?.();
        });
      });
      this.panelEl.querySelectorAll('[data-bm-pick]').forEach(row => {
        row.addEventListener('click', () => {
          STATE.invSel = row.dataset.bmPick;
          this.renderInventory();
          g.audio?.ui?.();
        });
      });
    };
  }

  installInventoryUI(game);

  // ---------------------------------------------------------------- 调试
  // 仅本地或 ?debug=1 暴露完整调试接口；发布环境只保留只读诊断
  const DEBUG = /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(location.hostname)
    || new URLSearchParams(location.search).has('debug');

  const debugApi = {
    start() {
      game.startRun();
      ensurePlayer(game);
      for (let i = 0; i < 40 && game.ui.dialogueOpen; i++) game.ui.advanceDialog();
      game.ui.titleVisible = false;
      game.ui.titleEl?.classList.add('hidden');
      return game.mode;
    },
    status() {
      const p = game.player;
      return {
        mode: game.mode,
        hp: Math.round(p.hp), stamina: Math.round(p.stamina), chi: Math.round(p.chi),
        force: Math.round(p.__staffForce || 0), spirit: Math.round(p.__spirit || 0),
        stance: HEAVY[STATE.stance].name,
        enemies: game.enemies.length,
        boss: game.boss ? { hp: Math.round(game.boss.hp), phase: game.boss.phase, posture: Math.round(game.boss.__posture || 0), state: game.boss.state } : null,
        transforming: p.__transformT > 0,
        spellCd: p.skillCd.map(v => +v.toFixed(1)),
        atkCd: +(p.atkCd || 0).toFixed(2),
        lastAttack: STATE.lastAttack,
        lastHit: STATE.lastHit,
        pending: STATE.pending.length,
        sequences: STATE.sequences.length,
        difficulty: STATE.difficulty,
        quality: STATE.quality,
        invertY: !!CONFIG.input.invertY,
        camera: STATE.cameraMode,
        fpRig: !!STATE.fpRig,
        fpVisible: !!STATE.fpRig?.visible,
        fpAction: p.__fpKind || '',
        fpT: +(p.__fpT || 0).toFixed(2),
        lock: STATE.lockTarget ? (STATE.lockTarget.kind || 'boss') : null,
        transformT: +(p.__transformT || 0).toFixed(2),
        transformModel: !!p.__transformModel,
        modelVisible: !!p.model?.group?.visible,
        fpResume: !!p.__fpResume,
        guardT: +(p.__guardT || 0).toFixed(2),
        shield: Math.round(p.__shield || 0),
        parryT: +(p.__parryT || 0).toFixed(2),
        jumpY: +(p.__jumpY || 0).toFixed(2),
        airborne: !!p.__airborne,
        uiOpen: game.ui.isOpen(),
        dialogue: !!game.ui.dialogueOpen,
        panel: !!game.ui.panelOpen,
        enemiesNear: game.enemies.map(e => ({
          kind: e.kind, dead: !!e.dead, hp: Math.round(e.hp),
          d: +Math.hypot(e.x - p.x, e.y - p.y).toFixed(1),
          a: +Math.atan2(e.y - p.y, e.x - p.x).toFixed(2),
        })),
      };
    },
    pacify() {
      for (const e of game.enemies) { e.state = 'recover'; e.t = 999; e.cd = 999; }
      return game.enemies.length;
    },
    dummy(n = 2) {
      const p = game.player;
      const a = p.facing;
      for (let i = 0; i < n; i++) {
        const off = (i - (n - 1) / 2) * 18;
        game.spawnEnemy('wolf', p.x + Math.cos(a) * 70 - Math.sin(a) * off, p.y + Math.sin(a) * 70 + Math.cos(a) * off, false);
      }
      return game.enemies.length;
    },
    boss() {
      if (!game.region.boss) {
        game.loadRegion('cliff', 240, 1160, true);
      }
      if (!game.boss) {
        game.triggerBoss();
        for (let i = 0; i < 24; i++) game.ui.advanceDialog();
      }
      if (game.boss) {
        game.player.x = game.boss.x - 60;
        game.player.y = game.boss.y;
        game.player.facing = Math.atan2(game.boss.y - game.player.y, game.boss.x - game.player.x);
        if (game.ui.panelOpen) game.ui.closePanel();
        for (let i = 0; i < 40 && game.ui.dialogueOpen; i++) game.ui.advanceDialog();
        game.ui.titleVisible = false;
        game.ui.deadOpen = false;
        game.ui.victoryOpen = false;
      }
      return !!game.boss;
    },
    unlock() {
      const p = game.player;
      p.__spiritUnlocked = true;
      p.__spirit = 100;
      localStorage.setItem('inkblade_spirit_unlock', '1');
      return true;
    },
    transform() { tryTransform(game); return game.player.__transformT; },
    force(v = 100) { game.player.__staffForce = v; return v; },
    god() { const p = game.player; p.maxHp = 9999; p.hp = 9999; return p.hp; },
    resetCd() { const p = game.player; p.atkCd = 0; p.__beastCd = 0; return true; },
    stamina(v = 100) { game.player.stamina = v; return v; },
    bossHp(v) { if (game.boss) game.boss.hp = v; return game.boss ? game.boss.hp : null; },
    setDifficulty(name) {
      if (!CONFIG.difficulty[name]) return STATE.difficulty;
      STATE.difficulty = name;
      return STATE.difficulty;
    },
    setQuality(name) {
      if (!CONFIG.graphics[name]) return STATE.quality;
      saveQuality(name, false);
      detailUniforms.uDetail.value = effectiveDetail();
      safe('quality', () => applyAtmosphere(game));
      return STATE.quality;
    },
    setQualityAuto(on) {
      CONFIG.perf.auto = !!on;
      STATE.qualityAuto = !!on;
      try { localStorage.setItem('inkblade_quality', JSON.stringify({ level: STATE.quality, auto: !!on })); } catch (e) { /* ignore */ }
      return CONFIG.perf.auto;
    },
    showFps(on) {
      STATE.fpsVisible = on === undefined ? !STATE.fpsVisible : !!on;
      updatePerfOverlay();
      return { visible: STATE.fpsVisible, fps: Math.round(STATE.fps), quality: STATE.quality };
    },
    setLowHpFilter(on) {
      CONFIG.ui.lowHpFilter = !!on;
      return CONFIG.ui.lowHpFilter;
    },
    setTouch(mode) {
      CONFIG.ui.touch = ['auto', 'on', 'off'].includes(mode) ? mode : 'auto';
      if (CONFIG.ui.touch === 'off') {
        document.getElementById('bm-touch')?.remove();
        STATE.touch = false;
        for (const code of ['KeyW', 'KeyA', 'KeyS', 'KeyD']) game.input.keys.delete(code);
      } else {
        STATE.touch = false;
        buildTouch(game);
      }
      return CONFIG.ui.touch;
    },
    setSurfaceDetail(on) {
      CONFIG.render.surfaceDetail = !!on;
      detailUniforms.uDetail.value = effectiveDetail();
      return CONFIG.render.surfaceDetail;
    },
    setBrightness(on) {
      CONFIG.render.exposure = on === undefined
        ? (CONFIG.render.exposure > 1.1 ? 1.04 : 1.16)
        : (on ? 1.16 : 1.04);
      CONFIG.render.hemiBoost = CONFIG.render.exposure > 1.1 ? 1.22 : 1.0;
      safe('brightness', () => applyAtmosphere(game));
      return CONFIG.render.exposure;
    },
    setWetness(v) {
      CONFIG.render.wetness = clamp(+v || 0, 0, 1);
      detailUniforms.uWet.value = CONFIG.render.wetness;
      return CONFIG.render.wetness;
    },
    setInvertY(on) {
      CONFIG.input.invertY = !!on;
      return CONFIG.input.invertY;
    },
    setCamera(mode) {
      return setCameraMode(game, mode, true);
    },
    toggleCamera() {
      toggleCamera(game);
      return STATE.cameraMode;
    },
    bag() {
      document.exitPointerLock?.();
      game.ui.openInventory(game.snapshot());
      return game.snapshot().counts;
    },
    openKeys() { openKeyPanel(); return true; },
    keys() { return JSON.parse(JSON.stringify(CONFIG.input)); },
    setKey(action, code) {
      const map = {
        light: 0, heavy: 1, dodge: 2, sprint: 3, jump: 4, parry: 5,
        stance: 6, lock: 7, transform: 8, view: 9, spell0: 10, spell1: 11, spell2: 12,
        moveUp: 13, moveDown: 14, moveLeft: 15, moveRight: 16,
      };
      const idx = map[action];
      if (idx === undefined || !code) return null;
      const entry = keyEntries()[idx];
      if (!entry) return null;
      STATE.bindCapture = entry;
      applyKeyBinding(code);
      return this.keys();
    },
    resetKeys() { resetKeybinds(); return this.keys(); },
    jump() { doJump(game); return true; },
    pitchTest(y = 10) {
      const before = game.pitch;
      game.locked = true;
      try {
        const ev = new MouseEvent('mousemove');
        Object.defineProperty(ev, 'movementY', { value: y });
        Object.defineProperty(ev, 'movementX', { value: 0 });
        window.dispatchEvent(ev);
      } catch (e) {
        return { before, after: before, error: String(e) };
      }
      return { before, after: game.pitch, invertY: !!CONFIG.input.invertY };
    },
    lock() { toggleLock(game); return STATE.lockTarget ? (STATE.lockTarget.kind || 'boss') : null; },
    audio(name, url) {
      if (url) CONFIG.audio.external[name] = url;
      return CONFIG.audio.external[name] || null;
    },
    config() { return CONFIG; },
    skipIntro() {
      if (game.boss) { ensureBoss(game); game.boss.state = 'idle'; game.boss.t = 0; game.boss.invuln = 0; game.boss.cd = 99; }
      return !!game.boss;
    },
    close() {
      for (let i = 0; i < 40 && game.ui.dialogueOpen; i++) game.ui.advanceDialog();
      if (game.ui.panelOpen) game.ui.closePanel();
      game.ui.titleVisible = false;
      game.ui.deadOpen = false;
      game.ui.victoryOpen = false;
      return game.ui.isOpen();
    },
    attack() { staffLight(game); return this.status(); },
    heavy() { staffHeavy(game); return this.status(); },
    spell(i) { castSpell(game, i); return this.status(); },
    resolve() {
      const jobs = STATE.pending.splice(0);
      for (const j of jobs) {
        try { j.run(); } catch (e) { console.error('[BM] resolve', e); }
      }
      return STATE.lastHit;
    },
    errors() { return diag.errors.slice(); },
    diag() {
      return {
        boot: diag.boot,
        fps: Math.round(STATE.fps),
        quality: STATE.quality,
        qualityAuto: STATE.qualityAuto,
        errors: diag.errors.slice(),
      };
    },
  };

  window.__bm = DEBUG ? debugApi : {
    status() {
      return {
        mode: game.mode,
        quality: STATE.quality,
        fps: Math.round(STATE.fps),
        errors: diag.errors.length,
      };
    },
    errors() { return diag.errors.slice(); },
  };

  // 更新操作说明，避免与新战斗键位冲突
  const titleControls = document.getElementById('title-controls');
  if (titleControls) {
    titleControls.innerHTML = `
      <div><b>WASD</b> 移动 · <b>Shift</b> 冲刺 · <b>空格</b> 跳跃 · <b>K</b> 闪避</div>
      <div><b>左键</b> 轻击 · <b>右键</b> 重招 · <b>V</b> 切换棍势</div>
      <div><b>C</b> 识破 · <b>L</b> 锁定 · <b>1/2/3</b> 定身 / 移形 / 护身</div>
      <div><b>F</b> 精魂变身 · <b>O</b> 切换视角 · <b>E</b> 交互 · <b>Tab</b> 行囊 · <b>Esc</b> 暂停</div>`;
  }

  // HMR / 页面卸载时清理待执行任务、变身与光柱资源
  window.__BM_DISPOSE = () => {
    try {
      STATE.pending.length = 0;
      STATE.sequences.length = 0;
      STATE.lockTarget = null;
      if (STATE.patchedPlayer) endTransform(game, STATE.patchedPlayer, false);
      disposeShafts();
    } catch (err) {
      console.error('[BM] dispose', err);
    }
    window.__BM_INSTALLED = false;
  };
  window.addEventListener('pagehide', () => {
    try { window.__BM_DISPOSE(); } catch (e) { /* ignore */ }
  });
  window.addEventListener('beforeunload', () => {
    try { window.__BM_DISPOSE(); } catch (e) { /* ignore */ }
  });

  applyAtmosphere(game);
  STATE.world = game.world;
  diag.boot = Math.round(performance.now());
  diag.quality = STATE.quality;
  if (new URLSearchParams(location.search).has('fps')) {
    STATE.fpsVisible = true;
    updatePerfOverlay();
  }
  console.log('[BM] overlay ready');

  if (DEBUG && new URLSearchParams(location.search).has('bmtest')) {
    setTimeout(() => {
      try {
        const log = (tag, v) => console.log('[BMTEST] ' + tag + ' ' + JSON.stringify(v));
        window.__bm.start();
        window.__bm.god();
        window.__bm.boss();
        window.__bm.skipIntro();
        log('boss0', window.__bm.status());

        window.__bm.force(100);
        window.__bm.heavy();
        window.__bm.resolve();
        log('hit1', { status: window.__bm.status(), hit: STATE.lastHit });

        for (let i = 0; i < 5; i++) {
          window.__bm.resetCd();
          window.__bm.force(100);
          window.__bm.heavy();
          window.__bm.resolve();
        }
        log('hit6', { status: window.__bm.status(), hit: STATE.lastHit });

        window.__bm.stamina(100);
        window.__bm.resetCd();
        window.__bm.bossHp(670);
        window.__bm.attack();
        window.__bm.resolve();
        log('phase2', window.__bm.status());

        window.__bm.skipIntro();
        window.__bm.stamina(100);
        window.__bm.resetCd();
        window.__bm.bossHp(345);
        window.__bm.attack();
        window.__bm.resolve();
        log('phase3', window.__bm.status());

        window.__bm.dummy(2);
        window.__bm.pacify();
        window.__bm.resetCd();
        window.__bm.force(0);
        window.__bm.attack();
        window.__bm.resolve();
        log('dummy', { status: window.__bm.status(), hit: STATE.lastHit });

        window.__bm.jump();
        log('jump0', window.__bm.status());
        setTimeout(() => log('jumpLate', window.__bm.status()), 220);

        window.__bm.spell(2);
        log('spell', window.__bm.status());

        window.__bm.unlock();
        window.__bm.transform();
        log('transform', window.__bm.status());

        window.__game.ui.openPause();
        log('pause', { open: !!document.querySelector('.pause-keys') });
        window.__game.ui.closePanel();
        window.__game.ui.openHelp();
        log('help', { hasNewKeys: (document.querySelector('.help-grid') || {}).textContent?.includes('定身') === true });
        window.__game.ui.closePanel();

        log('config', {
          difficulty: window.__bm.setDifficulty('hard'),
          quality: window.__bm.setQuality('low'),
          lowHpFilter: window.__bm.setLowHpFilter(false),
          lock: window.__bm.lock(),
          touch: !!document.querySelector('#bm-touch'),
          configKeys: Object.keys(window.__BM_CONFIG),
        });
        window.__bm.setDifficulty('normal');
        window.__bm.setQuality('high');
        window.__bm.setLowHpFilter(true);

        const pitchInv = window.__bm.pitchTest(10);
        window.__bm.setInvertY(false);
        const pitchNorm = window.__bm.pitchTest(10);
        window.__bm.setInvertY(true);
        log('pitch', { invertY: pitchInv, normalY: pitchNorm });

        window.__bm.openKeys();
        log('keys', {
          panel: !!document.querySelector('#bm-keys'),
          rows: document.querySelectorAll('#bm-keys .bm-key-row').length,
          hidden: document.querySelector('#bm-keys')?.classList.contains('hidden') === true,
        });
        document.querySelector('#bm-keys [data-bm-close]')?.click();

        setTimeout(() => {
          log('touchLate', {
            touch: !!document.querySelector('#bm-touch'),
            hud: !!document.querySelector('#bm-hud'),
            idle: document.querySelector('#bm-hud')?.classList.contains('idle') === true,
            camera: window.__bm.status().camera,
          });
        }, 800);
        setTimeout(() => {
          log('late', window.__bm.status());
        }, 15000);
      } catch (err) {
        console.error('[BMTEST] error', err && err.stack || err);
      }
    }, 1500);
  }
})();
