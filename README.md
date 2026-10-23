# 新致新知 Noesis AI — 官网

上海新致软件股份有限公司旗下企业级智能体平台官网（简体中文）。

技术栈：Next.js（App Router）+ TypeScript + CSS design tokens。文案与布局分离，预约表单走可插拔 Webhook。

## 环境要求

- **Node.js 22+**（与 CI / `.nvmrc` / `package.json#engines` 一致；jsdom 与 Testing Library 需要 Node 22）

```bash
nvm use   # 或安装 Node 22
```

## 本地开发

```bash
npm ci
cp .env.example .env.local   # 按需填写
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

### 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发（Turbopack） |
| `npm run build` / `npm start` | 生产构建与启动 |
| `npm run lint` | ESLint |
| `npm run format` / `format:check` | Prettier |
| `npm run typecheck` | TypeScript |
| `npm run test` | Vitest |
| `npm run check` | typecheck + lint + format + test + build |

## 站点结构

- `/` 首页
- `/platform` 产品平台
- `/solutions` 解决方案
- `/cases` 客户案例
- `/contact` 预约演示

文案：`src/content/` · 组件：`src/components/` · 设计令牌：`src/app/globals.css`（`:root`）

## 预约表单配置

`POST /api/contact` 调用 `src/lib/contact.ts`：

1. 设置 `CONTACT_WEBHOOK_URL`：将线索 JSON POST 到飞书机器人、企业微信、Slack Incoming Webhook、Zapier/Make 或自建 CRM。
2. 可选 `CONTACT_WEBHOOK_TOKEN`：以 `Authorization: Bearer …` 发送。
3. 未配置 Webhook 时：接口仍返回成功，并在服务端 `console` 打日志（仅便于联调，**生产务必配置 Webhook 或替换为真实落库**）。

载荷字段：`name`、`company`、`role?`、`interest`、`phone`、`email?`、`note?`，另附 `source`、`brand`、`submittedAt`。

## 部署

### Vercel（推荐，零配置）

仓库含 `vercel.json`（`framework: nextjs`，`npm ci` + `npm run build`）。在 Vercel 导入本仓库即可；Root Directory 保持仓库根目录。

在 Vercel Project → Settings → Environment Variables 配置：

| 变量 | 必需 | 说明 |
|------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 建议 | 正式站点 origin，用于 canonical / Open Graph（如 `https://www.example.com`） |
| `CONTACT_WEBHOOK_URL` | 生产建议 | 预约表单线索 POST 目标 |
| `CONTACT_WEBHOOK_TOKEN` | 可选 | `Authorization: Bearer …` |

本地对应文件：`.env.example` → `.env.local`。

### 其他 Node 宿主

```bash
npm ci
npm run build
npm start
```

### 上线前还需产品侧确认

- 正式域名与 DNS
- 托管账号（Vercel / 云厂商）
- 线索落库或通知渠道（Webhook 目标）
- 隐私政策与备案（如需）文案

## CI

GitHub Actions（`.github/workflows/ci.yml`）使用 **Node 22**（读取 `.nvmrc`），在 PR / push 时运行 `npm ci`、typecheck、lint、format、test、build。

## 品牌

全站固定使用 **「新致新知 Noesis AI」**，请勿写成「新致灵智」。
