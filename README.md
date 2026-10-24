# 新致新知 Noesis AI — 官网（Default Project 参考版）

基于本机 `/Users/elfkingw/Documents/Default Project` 的 Astro 站点结构与视觉语言，校正品牌为 **新致新知 Noesis AI**（禁止错误旧称），并接入已确认的产品叙事与客户案例。

## 技术栈

- Astro 7（静态输出）
- TypeScript
- 简体中文默认 + `/en/` 英文镜像
- `@astrojs/sitemap`

## 本地预览

```bash
npm install
npm run dev
```

默认：http://localhost:4321/

```bash
npm run build && npm run preview
```

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/product/` | 产品能力 |
| `/solutions/` | 解决方案与客户案例 |
| `/download/` | 下载中心（体验版占位） |
| `/about/` | 关于 |
| `/contact/` | 预约演示 |

## 参考来源

- **结构 / 视觉**：`Documents/Default Project`（浅色内容区 + 深蓝 Hero / CTA、卡片栅格、能力拆分页）
- **品牌与事实**：生产站批准文案（建行天津分行试点、东亚银行运维落地、FDE；不虚构指标）

## 品牌校验

```bash
npm run check:brand
```
