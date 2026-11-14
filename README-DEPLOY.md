# 部署说明 — INK-BLADE-3D

纯静态 Three.js 网页游戏，使用 Vite 5+ 本地开发与构建，无后端、无数据库、无服务端 API。生产产物为 `dist/`，可直接部署到 Cloudflare Pages。

## 一、目录结构

```text
INK-BLADE-3D/
├─ index.html          # 页面骨架（约 1KB，引用外部资源）
├─ game.js             # 原内联游戏主体，现为外部 module
├─ styles.css          # 原内联样式，现为外部样式表
├─ public/
│  └─ assets.js        # 5.3MB 内联 base64 美术资源（window.__INK_ASSETS__）
├─ patch/
│  ├─ overlay.js       # 运行时战斗/氛围/UI 补丁
│  └─ theme.css        # HUD、菜单、触控样式
├─ vite.config.js      # Vite 配置（端口 5173，输出 dist）
├─ server.mjs          # 备用零依赖静态服务器（br/gzip + ETag）
├─ package.json        # dev / build / preview / serve
├─ change-log.md       # 变更记录
├─ README-DEPLOY.md    # 本文档
└─ .gitignore
```

## 二、Vite 本地开发

要求 Node 18+。

```bash
cd INK-BLADE-3D
npm install
npm run dev
```

访问：`http://localhost:5173/`

默认操作：

| 输入 | 行为 |
|---|---|
| 左键 / `J` | 轻击，命中积攒棍势 |
| 右键 | 当前棍势重招 |
| `Space` | 跳跃 |
| `Shift`（按住） | 冲刺 |
| `K` | 闪避 |
| `C` | 识破 |
| `V` | 切换棍势 |
| `F` | 精魂变身 |
| `L` | 锁定 |
| `1 / 2 / 3` | 定身 / 移形闪 / 护身法 |
| `Esc` | 暂停 → 键位设置 |

自定义键位会保存到 `localStorage['inkblade_keybinds']`，刷新后保留；暂停面板中的「键位设置」可修改并恢复默认。

说明：

- 补丁入口为 `patch/overlay.js`，样式为 `patch/theme.css`，由 `index.html` 末尾直接引入，Vite 会正常处理。
- `overlay.js` 使用 `window.__BM_INSTALLED` 单例保护。HMR 重复注入时直接返回，不会重复绑定事件、重复创建 HUD。
- 页面卸载时通过 `window.__BM_DISPOSE()` 清理 pending、sequences、变身网格与光柱资源。
- 调试入口：`http://localhost:5173/?bmtest=1`（仅 localhost 或 `?debug=1` 生效）
- 触控调试：`http://localhost:5173/?touch=1`
- 帧率显示：`http://localhost:5173/?fps=1`，或控制台 `__bm.showFps()`
- 调试 API：`window.__bm`（发布环境自动降级为只读 `status()/errors()`）；全局配置：`window.__BM_CONFIG`
- 运行期诊断：`window.__inkDiag`（启动耗时 `boot`、环形错误缓冲 `errors`）

### 画质与性能

- 画质档位 `high / medium / low` 影响光柱数量、余烬密度、材质细节强度（`low` 时完全关闭材质噪声）。
- 连续低于 45 FPS 会自动降一档，选择会写入 `localStorage['inkblade_quality']`；手动 `__bm.setQuality('high')` 会锁定不再自动降档。

### 备用静态服务

不使用 Vite 时可以：

```bash
npm run serve
# 或 node server.mjs
```

默认也是 `http://localhost:5173/`。可通过环境变量覆盖：

```bash
PORT=5180 ROOT=dist node server.mjs   # 指定端口与站点根目录
```

`server.mjs` 已内置 brotli / gzip 压缩、`ETag` + `304` 协商缓存与 `Cache-Control: no-cache`，修改文件后刷新即可生效。

## 三、生产构建

```bash
npm run build
```

输出目录：`dist/`

本地预览生产产物：

```bash
npm run preview
```

注意：

- `vite.config.js` 中 `base: './'`，产物使用相对路径，可部署在任意子路径。
- `dist/` 已加入 `.gitignore`，不需要提交到仓库。
- `public/assets.js` 会原样复制到 `dist/assets.js`（体积过大，不参与打包），`game.js` / `styles.css` / `patch/*` 会正常打包进 `dist/assets/`。
- `window.__game`、`window.__bm`、`?bmtest` 在生产构建中均保留；`__bm` 仅在 localhost 或 `?debug=1` 下暴露完整接口。

## 四、GitHub 仓库初始化

```bash
git init
git add .
git commit -m "feat: Vite setup and combat/AI/HUD patch"
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

### .gitignore

```gitignore
node_modules/
dist/
.vite/
.env
.env.*
*.log
.DS_Store
Thumbs.db
.wrangler/
.workbuddy/
.screenshots/
*.zip
```

## 五、Cloudflare Pages 部署

1. 登录 Cloudflare Dashboard。
2. 进入 `Workers & Pages` → `Create` → `Pages` → `Connect to Git`。
3. 授权 GitHub，选择 `INK-BLADE-3D` 仓库。
4. 生产分支选择 `main`。
5. 构建设置：

| 配置项 | 值 |
|---|---|
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | 18+（建议 20 LTS） |

6. 不需要环境变量、数据库、Workers 或 Functions。
7. 点击 `Save and Deploy`，完成后访问：

```text
https://<project-name>.pages.dev
```

8. 后续推送到 `main` 会自动部署；其他分支生成预览地址。
9. 自定义域名：在 Pages 项目的 `Custom domains` 中添加并按提示配置 CNAME。

### 缓存建议

- HTML 建议短缓存或不缓存，避免更新后仍加载旧版本。
- `assets/*` 为 Vite 带 hash 的产物，可长期缓存。
- 补丁文件在生产构建中会被打包进 `assets`，无需单独配置 `patch/` 路径。

## 六、回滚到原版

本迭代把原先 6MB 的自包含 `index.html` 拆成了外部资源。需要回到拆分前的单文件版本时：

```bash
git checkout -- index.html
rm game.js styles.css public/assets.js
```

补丁层 `patch/` 与原版同样兼容，可继续使用。
