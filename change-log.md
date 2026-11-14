# 变更记录 — 稳定性 / 手感 / AI / 氛围 / 配置化

本次迭代基于 `patch/overlay.js` + `patch/theme.css` 的非侵入补丁层完成，原 6MB 构建主体未改动，删除 `patch/` 与 `index.html` 末尾两行引用即可恢复原版。

## 一、高优先级：BUG / 稳定性 / 内存

- 补丁主循环增加分层 `try-catch`：玩家、BOSS、序列、待执行任务、AI、氛围、HUD 各自隔离；补丁异常时主动补发一次 `requestAnimationFrame`，避免 RAF 链中断。
- 所有延时任务执行前校验 `player.dead`；任务可携带 `boss` 引用并在 `boss.dead` 时跳过。
- 世界切换时直接清空 `STATE.pending`、`STATE.sequences`、锁定目标，并清理 `__guardT / __parryT / __counterT`。
- 变身资源释放：
  - 玩家死亡、世界切换、变身自然结束时强制 `endTransform`。
  - 变身网格与材质在实例化时深拷贝 geometry / material。
  - 结束时遍历释放 geometry、material，并移出场景。
- 光柱：
  - 世界切换前 `disposeShafts()`，统一释放 geometry / material。
  - 不再重复生成；画质档位为低时完全不生成。
- 粒子：
  - 余烬按画质档位限制生成间隔与 `fx.parts` 上限，防止无限累积。
- 立棍：
  - `__guardT` 在变身开始、变身结束、死亡、世界切换时清零。
  - 三段横扫与强化终结改为独立 `STATE.sequences` 计时器，不再依赖 `pending` 队列，消除多段时序漂移。
- 识破：
  - 判定窗口改为动态计算：基础值 + BOSS 阶段修正 + 招式类型修正 + 精英修正，范围限制在 `0.16~0.30s`。
- 体力 / 法力锁：
  - 统一通过 `lockStamina` / `lockChi` 设置，带最大值截断。
  - 体力/法力满值时立即清除锁，修复连续冲刺闪避导致体力不恢复的问题。
- BOSS 架势：
  - 一/二/三阶段分别配置架势上限、衰减速率、节奏、砸地概率、弱点倍率、破势倍率。
  - 破势期间额外伤害放大（一/二阶段 1.35，三阶段 1.4）。
- 变身结束 AOE：
  - 仅命中半径内且视线未遮挡的敌人，不再穿透墙体或攻击屏幕外目标。
- AI 调度：
  - `pressureDirector` 改为每 2 帧执行一次，降低大量敌人场景开销。
- 移动端：
  - 触屏设备或 `?touch=1` 时生成虚拟方向键与轻击/重击/识破/闪避/三神通/变身按钮。
  - HUD 保留小屏适配，触控按钮使用独立层级。

## 二、中优先级：手感 / AI / 视觉 / 音频

- 棍势：
  - 只有命中敌人才增加棍势，空挥不增加。
  - 连续命中按 `0.12` 系数递减，最低 45%；1.5s 内未命中重置连击收益。
- moveLock：
  - 轻击、重击、变身攻击的移动锁时长严格等于 `startup + active + recovery`。
  - 闪避成功可主动清除移动锁，允许闪避取消。
- 打击反馈分层：
  - `light / heavy / enhanced / parry / transform / boss` 六套独立顿帧、时间缩放、震屏、FOV、镜头侧倾参数。
  - 音效区分肉体与硬物，外部音频钩子优先，未注册时继续使用原 WebAudio 合成。
- 神通平衡：
  - 定身对 BOSS 的持续时间随阶段递减：一阶段 1.2s、二阶段 0.9s、三阶段 0.6s。
  - 移形闪逐段检测碰撞，禁止穿墙，落点由 `world.collide` 修正。
  - 护身法护盾值改为 `maxHp × 0.5`，不再固定 60。
- 变身：
  - HUD 增加「变身中：禁用识破、神通」提示。
  - 受到伤害按 `0.02 / 点` 缩短变身时长，归零立即结束并触发魂爆。
- 敌人 AI：
  - 主攻高频进攻、副攻伺机、游走保持距离骚扰。
  - 佯攻概率读取难度配置。
  - BOSS 三阶段大范围砸地概率提高至 0.45。
- 特效：
  - 重击/满势强化挥砍放大尺寸、提高亮度，并额外叠加第二道刀光与扩散环。
- HUD：
  - 非战斗 6 秒后自动淡出，进入战斗自动恢复。
  - BOSS 离屏且架势累积时，屏幕边缘出现暗金柔光。
  - 低血量滤镜由 `CONFIG.ui.lowHpFilter` 全局开关控制。
- 音频：
  - 新增 `window.__BM_AUDIO.register(name, url)` 与 `play(name)`。
  - 未注册外部音频时保留原有合成音效。

## 三、低优先级：扩展框架

- L 键锁定：
  - 锁定最近敌人/BOSS，相机 yaw 平滑跟随，攻击自动朝向锁定目标。
  - 再次按 L 解除；目标死亡或超距自动解除。
- 全局配置：
  - 新增顶层 `CONFIG`，并暴露 `window.__BM_CONFIG`。
  - 伤害、范围、前摇、后摇、体力/法力消耗、棍势收益、CD、概率、BOSS 阶段、AI、画质、难度、按键、打击反馈均集中在 CONFIG。
- 难度：
  - 普通 / 困难，调整 AI 节奏、佯攻概率、棍势收益、体力/法力消耗。
  - 调试 API：`window.__bm.setDifficulty('normal' | 'hard')`。
- 画质：
  - 高 / 中 / 低，控制光柱数量、Bloom、余烬间隔、粒子上限；低配关闭光柱。
  - 调试 API：`window.__bm.setQuality('high' | 'medium' | 'low')`。
- 输入映射：
  - `CONFIG.input` 统一管理移动、轻击、重击、闪避、冲刺、识破、棍势、锁定、变身、三神通。
  - 通过包装 `input.wasPressed / wasAnyPressed / isDown` 与 `moveX / moveY`，让原引擎的固定键位查询也能响应自定义键位。
- Y 轴反转：
  - `CONFIG.input.invertY = true`，在鼠标俯仰后补偿反向位移，实现上下视角反转。
  - 调试 API：`window.__bm.setInvertY(true | false)`。
- 跳跃：
  - `Space` 跳跃，消耗体力，带垂直位移与落地回归，不改变平面碰撞。
  - 跳跃参数集中在 `CONFIG.player.jump`：体力、初速度、重力。
- 按键自定义：
  - 暂停面板新增「键位设置」，可改轻击、重击、闪避、冲刺、跳跃、识破、棍势、锁定、变身、三神通、四向移动。
  - 绑定自动写入 `localStorage['inkblade_keybinds']`，刷新后保留；支持恢复默认。
  - 改键时自动清除其他动作上的冲突键。
  - 默认键位：左键/`J` 轻击、右键重击、`K` 闪避、`Shift` 冲刺、`Space` 跳跃。

## 四、新增调试 API

- `__bm.status()`：玩家/BOSS/敌人/资源/难度/画质/锁定/序列状态。
- `__bm.start()`：启动一局并关闭开场对话。
- `__bm.dummy(n)` / `__bm.pacify()`：生成并冻结测试敌人。
- `__bm.boss()` / `__bm.skipIntro()` / `__bm.bossHp(v)`：快速进入 BOSS 测试。
- `__bm.attack()` / `__bm.heavy()` / `__bm.spell(i)` / `__bm.resolve()`：直接触发战斗逻辑。
- `__bm.force(v)` / `__bm.stamina(v)` / `__bm.god()` / `__bm.resetCd()`。
- `__bm.setDifficulty(name)` / `__bm.setQuality(name)` / `__bm.setLowHpFilter(bool)`。
- `__bm.lock()` / `__bm.audio(name, url)` / `__bm.config()`。

自检入口：`http://localhost:5173/?bmtest=1`。

## 五、Vite HMR / 构建兼容

- 新增 `vite.config.js`：端口 5173、`base: './'`、输出 `dist/`。
- `package.json` 增加 `dev / build / preview / serve` 脚本，Vite 作为 devDependency。
- `overlay.js` 增加全局单例标记 `window.__BM_INSTALLED`：重复注入时直接 return，避免 HMR 重复 addEventListener、重复创建 HUD、重复初始化补丁。
- 增加 `window.__BM_DISPOSE()`：清空 pending、sequences、锁定目标，结束变身并释放光柱资源；`pagehide` / `beforeunload` 自动调用。
- `buildHud` 增加已有 `#bm-hud` 检测，即使单例保护失效也不会重复创建 DOM。
- 补丁不依赖 `import.meta.hot` 或其他 Vite 独有 API，生产构建可直接运行。
- `.gitignore` 增加 `node_modules/`、`dist/`、`.vite/`。
- `README-DEPLOY.md` 更新为 Vite 本地开发、`npm run build`、Cloudflare Pages `dist` 部署流程。

## 七、参考素材融合（纹理 / 音效 / 渲染）

参考文件 `几猫国产3A大作_V1.html` 的可复用点：

- 纹理不是位图，而是通过 `onBeforeCompile` 注入程序化表面细节：金属划痕、木纹、石材颗粒、雨天湿润与水滴。
- 渲染使用低角度暖色太阳、程序化天空/雾、细节材质和自定义曝光；不依赖外部贴图。
- 音频使用 WebAudio 分层合成：世界/近场/环境总线、压缩器、软削波、卷积混响、空间声像、声部优先级。

本次只移植与当前架构兼容、且不破坏原音频图的部分：

- 新增程序化表面细节着色器：按材质金属度/颜色自动分为金属、木质、石材三类，注入对象空间噪声，调制粗糙度与漫反射；覆盖场景 343 个 MeshStandardMaterial。
- 新增湿润度全局 uniform：顶面降低粗糙度、轻微压暗，模拟雨后石面；默认 `0.22`。
- 调试 API：`window.__bm.setSurfaceDetail(true|false)`、`window.__bm.setWetness(0~1)`。
- 打击音效增加材质尾音：石质增加金属余响与带通碎响，肉体增加低频尾音；重击增加延迟低频尾音；轻击 35ms 内重复触发做抑制。
- 未改动原音频节点图，不新增压缩器/卷积节点，保留原 `master` 路由与外部 wav/ogg 钩子；后续如需要完整总线/混响，可单独授权后再接。

验证：

- `[BM] surface detail materials: 343`，无 `WebGLProgram` / Shader Error / `vObjP` / Uncaught 错误。
- 表面细节着色器首次编译后正常渲染，未出现材质变黑。

## 八、验证结果

- 轻击命中获得棍势，空挥不获得。
- 重击消耗棍势、削减 BOSS 架势，架势归零进入破势。
- BOSS 二阶段、三阶段正常切换。
- 神通消耗法力、进入独立冷却；护盾按最大生命值计算。
- 精魂变身可进入、可结束、无残留网格。
- 暂停、帮助面板正常打开。
- 触控层 `?touch=1` 可生成。
- 配置切换 `setDifficulty('hard')`、`setQuality('low')`、`setLowHpFilter(false)`、`lock()` 正常。
- 控制台无 `[BM]` 运行时错误。
- Vite 安装与生产构建需在本机终端执行 `npm install && npm run build`；当前运行环境未生成 `node_modules/` 与 `dist/`。

## 九、构建链路 / 性能 / 可维护性迭代

### 9.1 首屏拆分

- 原 6,044,007 B 的自包含 `index.html` 拆为四份：
  - `public/assets.js`：5.33 MB 内联 base64 美术资源（`window.__INK_ASSETS__`），由 `public/` 原样复制，不参与打包；
  - `game.js`：原内联游戏主体（module）；
  - `styles.css`：原内联样式；
  - `index.html`：仅保留页面骨架与资源引用（约 1 KB）。
- 首屏 HTML 从 6.04 MB 降到约 1 KB，资源可独立缓存与协商。

### 9.2 静态服务

- `server.mjs` 增加 brotli / gzip 协商压缩（`Accept-Encoding`）、`ETag` + `304` 协商缓存、`Cache-Control: no-cache`、`Vary: accept-encoding`。
- 新增 `ROOT` 环境变量，可直接以 `dist/` 作为站点根目录做产物冒烟。
- 目录穿越防护与 404/405 明确响应。

### 9.3 画质档位与自动降档

- `CONFIG.graphics[high|medium|low].detail` 控制材质细节强度，`low` 为 0。
- 着色器内 `diffuseColor` 与粗糙度均乘以 `uDetail`，低档位下不再为细节付出可见代价。
- 采样帧率，连续低于 45 FPS 自动降一档；档位写入 `localStorage['inkblade_quality']`。
- 手动 `__bm.setQuality()` 会锁定档位，不再自动降档；`__bm.showFps()` 或 `?fps=1` 显示帧率与档位。

### 9.4 HUD 开销

- HUD 节点一次性缓存，移除每帧 `querySelector`。
- 文本与宽度写入降到约 12 Hz；交互投影（屏幕空间提示）保持逐帧。
- 投影复用同一个 `Vector3`，去掉每帧 `clone()` 分配。

### 9.5 契约、调试面与诊断

- 启动时校验 `window.__game` 必需字段；缺失时补丁层不加载（原版继续可玩），并在 500ms 节奏内有限重试。
- `window.__bm` 仅在 localhost / `?debug=1` 下暴露完整接口；发布环境只保留只读 `status()` / `errors()`，`?bmtest=1` 同样只在调试条件生效。
- 全局 `window.__inkDiag`：记录启动耗时与最近 30 条 `error` / `unhandledrejection`。

### 9.6 观感与引导

- 标题页标题与按钮之间补足间距，`700px` 以下按钮改单列；副标题与操作说明改为「第一 / 第三人称可切换」并标注 `O` 键。
- 曝光 1.04 → 1.16、半球光 ×1.22（`__bm.setBrightness()` 可切回）。
- 着色器加入两层低频噪声，打散地面/墙面的重复感。
- 触控层支持 `auto / on / off`（`__bm.setTouch()`），HUD 与触控按钮适配 `env(safe-area-inset-*)`。
- 首局 4 步渐进提示（移动 → 轻击 → 闪避 → 识破），完成后写入 `localStorage['inkblade_tips_done']`。

### 9.7 验证

- `npm install` + `npm run build` 跑通，产出 `dist/`（含 `dist/assets.js`）。
- dev（5180）与 dist（5181，`ROOT=dist`）分别用自动浏览器冒烟：标题页 → 踏入江湖 → 3D 场景 + HUD，控制台无 error。
- 压缩与缓存：`assets.js` 以 br 传输约 3.85 MB；带 `If-None-Match` 复访返回 304。
- dev 环境实测 47–52 FPS（high），首局提示与 FPS 徽章均按预期出现。
