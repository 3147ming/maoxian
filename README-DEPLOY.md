# 部署说明 — INK-BLADE-3D

纯静态 Three.js 网页游戏，使用 Vite 5+ 本地开发与构建，无后端、无数据库、无服务端 API。生产产物为 `dist/`，可直接部署到 Cloudflare Pages。

## 一、目录结构

```text
INK-BLADE-3D/
├─ index.html          # 游戏主文件（自包含构建，末尾引入补丁）
├─ patch/
│  ├─ overlay.js       # 运行时战斗/氛围/UI 补丁
│  └─ theme.css        # HUD、菜单、触控样式
├─ vite.config.js      # Vite 配置（端口 5173，输出 dist）
├─ server.mjs          # 备用零依赖静态服务器
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

说明：

- 补丁入口为 `patch/overlay.js`，样式为 `patch/theme.css`，由 `index.html` 末尾直接引入，Vite 会正常处理。
- `overlay.js` 使用 `window.__BM_INSTALLED` 单例保护。HMR 重复注入时直接返回，不会重复绑定事件、重复创建 HUD。
- 页面卸载时通过 `window.__BM_DISPOSE()` 清理 pending、sequences、变身网格与光柱资源。
- 调试入口：`http://localhost:5173/?bmtest=1`
- 触控调试：`http://localhost:5173/?touch=1`
- 调试 API：`window.__bm`；全局配置：`window.__BM_CONFIG`。

### 备用静态服务

不使用 Vite 时可以：

```bash
npm run serve
# 或 node server.mjs
```

默认也是 `http://localhost:5173/`。

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
- 生产构建不依赖 Vite 运行时 API，`window.__game`、`window.__bm`、`?bmtest` 均保留。
- 由于 `index.html` 内联了约 6MB 的游戏主体，首次构建会比普通项目慢，属于正常现象。

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

删除 `index.html` 末尾以下两行：

```html
<link rel="stylesheet" href="./patch/theme.css">
<script type="module" src="./patch/overlay.js"></script>
```

再删除 `patch/` 目录即可恢复原版游戏；原 6MB 构建主体未被改写。
