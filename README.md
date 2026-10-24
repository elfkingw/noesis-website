# 新致新知 Noesis AI

企业级智能体平台的官网。静态站点，中文为默认语言，英文在 `/en/`。

线上地址：[https://elfkingw.github.io/noesis-website/](https://elfkingw.github.io/noesis-website/)

## 环境

- Node.js 22.22 或更高
- npm 9.6 或更高

## 本地开发

```bash
npm install
npm run dev
```

开发地址是 [http://localhost:4321/noesis-website/](http://localhost:4321/noesis-website/)。`astro.config.mjs` 里的 `base` 为 `/noesis-website/`，和 GitHub Pages 的项目路径一致，所以本地也要带上这段前缀。

```bash
npm run check:brand
npm run build
npm run preview
```

`check:brand` 确认文案使用「新致新知 Noesis AI」。`build` 把静态文件写到 `dist/`。`preview` 用同一 base path 预览构建结果。

## 页面

| 中文 | 英文 | 内容 |
| --- | --- | --- |
| `/` | `/en/` | 首页 |
| `/product/` | `/en/product/` | 产品能力 |
| `/solutions/` | `/en/solutions/` | 解决方案与客户案例 |
| `/download/` | `/en/download/` | 下载中心 |
| `/about/` | `/en/about/` | 关于 |
| `/contact/` | `/en/contact/` | 预约演示 |

页面上的路径都要加上 `/noesis-website/`。站内链接通过 `src/lib/paths.ts` 的 `withBase()` 拼接。

## 目录

```text
src/
├── pages/                 # 路由。英文页面在 en/
├── components/            # 导航、页脚，以及各页内容
├── data/content.ts        # 中英文案
├── layouts/Base.astro     # 页头、页脚和 meta
├── styles/global.css
└── lib/paths.ts           # 给站内链接加上 base
public/                    # logo.png、.nojekyll
```

中英文案都在 `src/data/content.ts`。改文案后跑一次 `npm run check:brand`。

## 发布

GitHub Pages 使用 `gh-pages` 分支的根目录，站点配置是 `site: https://elfkingw.github.io`、`base: /noesis-website/`。

`public/.nojekyll` 会进入 `dist/`，避免 Pages 按 Jekyll 处理构建结果。发布时把 `npm run build` 生成的 `dist/` 内容放到 `gh-pages` 分支根目录。
