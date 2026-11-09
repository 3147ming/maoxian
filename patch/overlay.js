// 烬影·墨刃 — 战斗/氛围/UI 补丁层（不修改主体构建）
// 所有改动通过 window.__game 运行时挂载，保持原包可回滚。

(() => {
  const game = window.__game;
  if (!game || !game.world) {
    console.error('[BM] window.__game 未就绪，补丁未加载');
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
      dodge: ['Space'],
      sprint: ['ShiftLeft', 'ShiftRight'],
      parry: ['KeyC'],
      stance: ['KeyV'],
      lock: ['KeyL'],
      transform: ['KeyF'],
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
      high: { shafts: 4, bloom: 0.38, emberInterval: 0.18, particleCap: 260 },
      medium: { shafts: 2, bloom: 0.30, emberInterval: 0.26, particleCap: 160 },
      low: { shafts: 0, bloom: 0.18, emberInterval: 0.40, particleCap: 80 },
    },
    ui: { combatFade: 6.0, lowHpFilter: true, bossEdge: true },
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
    lockTarget: null,
    touch: false,
    audioBuffers: {},
    audioElements: {},
  };

  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

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

  // 输入映射：让原引擎的固定按键查询也能响应 CONFIG 中的自定义键位
  function wrapInput(input) {
    if (!input || input.__bmMapped) return;
    input.__bmMapped = true;
    const origPressed = input.wasPressed.bind(input);
    const origAny = input.wasAnyPressed.bind(input);
    const origDown = input.isDown.bind(input);
    const pressedAny = list => (list || []).some(c => origPressed(c));

    input.wasPressed = code => {
      if (code === 'Space') return origPressed('Space') || pressedAny(CONFIG.input.dodge);
      if (code === 'KeyJ') return origPressed('KeyJ') || pressedAny(CONFIG.input.light);
      const m = /^Digit([123])$/.exec(code);
      if (m) return origPressed(code) || pressedAny([CONFIG.input.spells[Number(m[1]) - 1]]);
      return origPressed(code);
    };
    input.wasAnyPressed = arr => {
      if (arr && (arr.includes('Space') || arr.includes('ShiftLeft'))) {
        return origAny(arr) || pressedAny(CONFIG.input.dodge);
      }
      return origAny(arr);
    };
    input.isDown = code => {
      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        return origDown(code) || CONFIG.input.sprint.some(c => origDown(c));
      }
      return origDown(code);
    };

    const move = CONFIG.input.move;
    const held = list => (list || []).some(c => input.keys.has(c));
    Object.defineProperty(input, 'moveX', {
      configurable: true,
      get() {
        return (held(move.right) ? 1 : 0) - (held(move.left) ? 1 : 0);
      }
    });
    Object.defineProperty(input, 'moveY', {
      configurable: true,
      get() {
        return (held(move.down) ? 1 : 0) - (held(move.up) ? 1 : 0);
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
    const synth = () => {
      const v = 0.9 + Math.random() * 0.25;
      a.noise(0.07, 0.18 * v, 'lowpass', 700, 0.9, 90);
      a.tone(68 + Math.random() * 6, 0.12, 'sine', 0.18 * v, 34);
      a.noise(0.035, 0.14 * v, 'highpass', 1800, 1, 700);
      if (stone) a.tone(260, 0.18, 'triangle', 0.08 * v, 170);
      if (kind === 'heavy' || kind === 'enhanced' || kind === 'transform') {
        a.tone(44, 0.22, 'sawtooth', 0.1 * v, 26);
        a.tone(320, 0.22, 'triangle', 0.05 * v, 210, 0.04);
      }
    };
    const name = stone ? 'hit_stone' : 'hit_flesh';
    playSfx(g, name, synth);
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
  };

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
    p.__beastCd = 0;
    p.__transformT = 0;
    p.__transformModel = null;
    p.__exhausted = false;
    p.__lastMoveAngle = p.facing;
    STATE.lastCombat = g.time;

    equipStaff(p);

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
    g.pitch += (0.30 - g.pitch) * (1 - Math.exp(-6 * dt));
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
    if (hemi) hemi.intensity = P.hemi;

    g.renderer.toneMappingExposure = 1.04;
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
      <div id="bm-boss">
        <div class="bm-boss-top"><span>无面</span><div class="bm-pips"><i></i><i></i><i></i></div></div>
        <div class="bm-boss-track"><b></b></div>
        <div class="bm-posture"><b></b></div>
      </div>
      <div id="bm-boss-edge"></div>`;
    ui.appendChild(el);
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

  function buildTouch(g) {
    if (STATE.touch) return;
    const coarse = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window;
    if (!coarse && !location.search.includes('touch=1')) return;
    STATE.touch = true;
    const ui = document.getElementById('ui');
    if (!ui) return;
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
        else if (act === 'dodge') g.input.pressed.add('Space');
        else if (act === 'transform') tryTransform(g);
        else if (act.startsWith('spell')) castSpell(g, Number(act.slice(5)));
      });
    });
  }

  function hudTick(g, dt) {
    const p = g.player;
    if (!p) return;
    if (!STATE.hud) buildHud(g);
    if (!STATE.hud) return;

    const hidden = g.mode !== 'playing' || g.ui.titleVisible || g.ui.deadOpen || g.ui.victoryOpen;
    STATE.hud.classList.toggle('hidden', hidden);
    if (hidden) return;

    const bossNow = g.boss;
    const inCombat = (bossNow && !bossNow.dead) ||
      (g.enemies || []).some(e => e && !e.dead && Math.hypot(e.x - p.x, e.y - p.y) < 650) ||
      p.hurtT > 0 || p.atkCd > 0;
    if (inCombat) STATE.lastCombat = g.time;
    const idle = !inCombat && g.time - STATE.lastCombat > CONFIG.ui.combatFade;
    STATE.hud.classList.toggle('idle', idle);

    const hp = STATE.hud.querySelector('#bm-hp .bm-track b');
    const mana = STATE.hud.querySelector('#bm-mana .bm-track b');
    const st = STATE.hud.querySelector('#bm-stamina .bm-track b');
    if (!hudCache.hp) {
      hudCache.hp = hp;
      hudCache.mana = mana;
      hudCache.stamina = st;
      hudCache.spirit = STATE.hud.querySelector('#bm-spirit i');
      hudCache.transform = STATE.hud.querySelector('#bm-transform i');
      hudCache.boss = STATE.hud.querySelector('#bm-boss');
      hudCache.bossHp = STATE.hud.querySelector('.bm-boss-track b');
      hudCache.bossPosture = STATE.hud.querySelector('.bm-posture b');
      hudCache.pips = [...STATE.hud.querySelectorAll('.bm-pips i')];
      hudCache.force = [...STATE.hud.querySelectorAll('#bm-force i')];
      hudCache.seals = [0, 1, 2].map(i => {
        const el = STATE.hud.querySelector('#bm-spell' + i);
        return { el, cd: el.querySelector('i'), num: el.querySelector('em') };
      });
    }

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
      if (!s) return;
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

    const spiritWrap = STATE.hud.querySelector('#bm-spirit');
    spiritWrap.classList.toggle('on', !!p.__spiritUnlocked);
    if (p.__spiritUnlocked) setWidth('spirit', p.__spirit / 100);

    const transformWrap = STATE.hud.querySelector('#bm-transform');
    const active = p.__transformT > 0;
    transformWrap.classList.toggle('on', active);
    if (active) hudCache.transform.style.width = clamp(p.__transformT / CONFIG.player.transform.duration, 0, 1) * 100 + '%';
    STATE.hud.querySelector('#bm-transform-hint')?.classList.toggle('on', active);

    // BOSS 离屏时，边缘柔光提示架势累积
    const edge = STATE.hud.querySelector('#bm-boss-edge');
    if (edge) {
      let showEdge = false;
      if (CONFIG.ui.bossEdge && b && !b.dead && (b.__posture || 0) > 1) {
        const v = b.model?.group?.position?.clone?.().project?.(g.camera);
        if (v) showEdge = Math.abs(v.x) > 1.02 || Math.abs(v.y) > 1.02 || v.z > 1;
      }
      edge.classList.toggle('on', !!showEdge);
    }

    document.body.classList.toggle('low-hp', CONFIG.ui.lowHpFilter && p.hp / p.maxHp < 0.3);
    document.body.classList.toggle('transformed', active);
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
    }
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
          <div><span class="key">W A S D</span> 移动　<span class="key">Shift</span> 冲刺　<span class="key">空格</span> 闪避</div>
          <div><span class="key">左键</span> 轻击攒棍势　<span class="key">右键</span> 重招</div>
          <div><span class="key">V</span> 切换劈 / 立 / 戳棍势</div>
          <div><span class="key">C</span> 识破　<span class="key">L</span> 锁定</div>
          <div><span class="key">1</span> 定身　<span class="key">2</span> 移形闪　<span class="key">3</span> 护身法</div>
          <div><span class="key">F</span> 精魂变身</div>
          <div><span class="key">Q / R</span> 回血 / 回法力</div>
          <div><span class="key">E</span> 交互　<span class="key">Tab</span> 行囊　<span class="key">Esc</span> 暂停</div>`;
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
            <span><b>V</b> 棍势</span>
            <span><b>C</b> 识破</span>
            <span><b>F</b> 精魂</span>
            <span><b>Tab</b> 行囊</span>
            <span><b>M</b> 静音</span>
          </div>`;
      }
    };
  }

  // ---------------------------------------------------------------- 调试
  window.__bm = {
    start() {
      game.startRun();
      ensurePlayer(game);
      for (let i = 0; i < 40 && game.ui.dialogueOpen; i++) game.ui.advanceDialog();
      game.ui.titleVisible = false;
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
        lock: STATE.lockTarget ? (STATE.lockTarget.kind || 'boss') : null,
        transformT: +(p.__transformT || 0).toFixed(2),
        guardT: +(p.__guardT || 0).toFixed(2),
        shield: Math.round(p.__shield || 0),
        parryT: +(p.__parryT || 0).toFixed(2),
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
      STATE.quality = name;
      safe('quality', () => applyAtmosphere(game));
      return STATE.quality;
    },
    setLowHpFilter(on) {
      CONFIG.ui.lowHpFilter = !!on;
      return CONFIG.ui.lowHpFilter;
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
  };

  // 更新操作说明，避免与新战斗键位冲突
  const titleControls = document.getElementById('title-controls');
  if (titleControls) {
    titleControls.innerHTML = `
      <div><b>WASD</b> 移动 · <b>Shift</b> 冲刺 · <b>空格</b> 闪避</div>
      <div><b>左键</b> 轻击 · <b>右键</b> 重招 · <b>V</b> 切换棍势</div>
      <div><b>C</b> 识破 · <b>L</b> 锁定 · <b>1/2/3</b> 定身 / 移形 / 护身</div>
      <div><b>F</b> 精魂变身 · <b>E</b> 交互 · <b>Tab</b> 行囊 · <b>Esc</b> 暂停</div>`;
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
  console.log('[BM] overlay ready');

  if (new URLSearchParams(location.search).has('bmtest')) {
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

        setTimeout(() => {
          log('touchLate', {
            touch: !!document.querySelector('#bm-touch'),
            hud: !!document.querySelector('#bm-hud'),
            idle: document.querySelector('#bm-hud')?.classList.contains('idle') === true,
          });
        }, 800);
      } catch (err) {
        console.error('[BMTEST] error', err && err.stack || err);
      }
    }, 1500);
  }
})();
