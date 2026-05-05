# StickyHomeworks2 官网（Sh2.1）

[StickyHomeworks2](https://github.com/StickyHomeworks2/StickyHomeworks2) 的静态展示站点：首页、下载、关于。使用 **Vite + TypeScript**，界面基于 **MDUI v2**（Material Design 3 Web Components）。

## 要求

- Node.js 18+（或兼容版本）
- npm / pnpm / yarn 任选

## 常用命令

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:3000）
npm run dev

# 类型检查 + 生产构建，输出到 dist/
npm run build

# 本地预览构建结果
npm run preview
```

## 目录说明

| 路径 | 说明 |
|------|------|
| `src/main.ts` | 入口：全局样式、配色、`import()` 按路由拆包 |
| `src/pages/` | 首页、下载、关于页模板 |
| `src/components/Layout.ts` | 侧栏 / 移动端底栏 / 页脚 / 页面外壳 |
| `src/constants.ts` | 文档站地址、页面标题等常量 |
| `src/utils/` | `publicAsset`、`runMduiMutation` 等工具 |
| `public/` | 构建时原样复制到 `dist/`（Logo、横幅、头像等） |

修改文档、Wiki 等外链时，优先改 **`src/constants.ts`** 中的 `DOCS_URL`。

## 部署

- `vite.config.ts` 中 `base: './'`，适合任意子路径或静态托管（GitHub Pages、对象存储等）。
- 构建产物在 **`dist/`**，将整目录上传即可。

## 许可

与上游 [StickyHomeworks2](https://github.com/StickyHomeworks2/StickyHomeworks2) 仓库许可证一致（以该仓库 `LICENSE` 为准）。
