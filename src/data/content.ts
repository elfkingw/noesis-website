export type L = "zh" | "en";

export const DOC_URL = "https://my.feishu.cn/docx/H8b0dIjwLojYTBxlr1rcAvKynvh";

export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilityCard {
  icon: string;
  title: string;
  text: string;
}

export interface ChannelItem {
  icon: string;
  title: string;
  text: string;
}

export interface CaseItem {
  industry: string;
  title: string;
  text: string;
  placeholder: boolean;
}

export interface FeatureSection {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  accent: string;
}

export interface DownloadItem {
  id: string;
  name: string;
  platform: string;
  description: string;
  note: string;
  primary: string;
  status: "ok" | "soon";
  href: string;
  meta: string[];
}

export interface PageCopy {
  lang: L;
  siteName: string;
  siteTagline: string;
  nav: {
    links: NavLink[];
    cta: string;
    switchTo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    scroll: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    cards: CapabilityCard[];
  };
  channels: {
    eyebrow: string;
    title: string;
    sub: string;
    items: ChannelItem[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    sub: string;
    note: string;
    cases: CaseItem[];
    cta: string;
  };
  product: {
    hero: { eyebrow: string; title: string; sub: string };
    sections: FeatureSection[];
    featureTable: {
      eyebrow: string;
      title: string;
      sub: string;
      headers: string[];
      rows: string[][];
    };
  };
  download: {
    hero: { eyebrow: string; title: string; sub: string };
    intro: string;
    items: DownloadItem[];
    version: { title: string; update: string; docTitle: string; docNote: string };
    requirementTitle: string;
    requirements: string[];
    demoNote: { title: string; text: string; cta: string };
  };
  about: {
    hero: { eyebrow: string; title: string; sub: string };
    companyTitle: string;
    companyText: string;
    storyTitle: string;
    storyText: string;
    ipTitle: string;
    ipText: string;
    badgesTitle: string;
    badges: string[];
  };
  contact: {
    hero: { eyebrow: string; title: string; sub: string };
    form: {
      title: string;
      sub: string;
      name: string;
      company: string;
      role: string;
      phone: string;
      message: string;
      namePh: string;
      companyPh: string;
      rolePh: string;
      phonePh: string;
      messagePh: string;
      submit: string;
      submitting: string;
      okTitle: string;
      okText: string;
      again: string;
      error: string;
      privacy: string;
    };
    alt: { title: string; items: { icon: string; title: string; text: string; cta?: string; href?: string }[] };
  };
  footer: {
    tagline: string;
    columns: { title: string; links: NavLink[] }[];
    legal: string;
    docTitle: string;
  };
  meta: Record<string, { title: string; description: string }>;
}

const zhCaps: CapabilityCard[] = [
  {
    icon: "agent",
    title: "Agent 智能体",
    text: "可视化配置与生命周期管理，灵活接入提示词、知识库与工具，一键发布到个人助手、浏览器插件、WPS 插件、IM 与 API。",
  },
  {
    icon: "rag",
    title: "RAG 知识库",
    text: "企业级检索增强生成，多格式文档上传、细粒度权限与召回测试，支持与 Dify 能力对接，让 AI 基于真实业务知识作答。",
  },
  {
    icon: "skill",
    title: "Skills",
    text: "以 Skill 封装业务能力，支持创建、调试、版本管理与发布，配合智能体快速将企业业务接入 AI，边写边迭代。",
  },
  {
    icon: "connect",
    title: "连接器 & 自动化",
    text: "MCP / CLI / OAuth / HTTP 外部能力接入；定时任务与对话式编排，让 AI 融入日常业务自动运转。",
  },
];

const zhChannels: ChannelItem[] = [
  { icon: "desktop", title: "桌面端", text: "Windows / macOS 客户端，个人助手与文本助手一应俱全。" },
  { icon: "mobile", title: "移动端", text: "随时随地问答与协作，移动办公无缝衔接。" },
  { icon: "browser", title: "浏览器插件", text: "选中文本一键唤起 AI，浏览器里即用即取。" },
  { icon: "wps", title: "WPS 插件", text: "文档中直接调用智能体，办公文档天然融合。" },
  { icon: "im", title: "即时通讯", text: "远程通道接入微信等 IM，对话即服务。" },
  { icon: "api", title: "API", text: "作为能力对外发布，任意系统快速集成。" },
];

const zhCases: CaseItem[] = [
  {
    industry: "银行信贷 AI 营销",
    title: "建设银行天津市分行 — 首批试点",
    text: "作为银行信贷 AI 营销方案的首批试点行，围绕信贷相关营销场景验证智能体辅助能力。公开可述的示例方向包括家装分期业务中的商户智能推荐。",
    placeholder: false,
  },
  {
    industry: "智能运维决策",
    title: "东亚银行 — 智能运维决策系统落地",
    text: "在真实银行运维环境中落地智能运维决策能力，覆盖告警收敛、根因分析、影响分析、处置协同与运维问答闭环。",
    placeholder: false,
  },
  {
    industry: "企业 AI 转型 · FDE",
    title: "前线部署工程师陪伴式落地",
    text: "以前线部署工程师方式与客户共创首个高价值场景闭环，纳入多租户权限、审核与安全扫描基线，沉淀可复制的 Skills 与集成模板。",
    placeholder: false,
  },
];

const zhProductSections: FeatureSection[] = [
  {
    eyebrow: "Agent",
    title: "像搭积木一样，构建你的智能体",
    text: "在 Noesis 中无需编写繁琐的工作流，围绕业务目标配置智能体即可。底层多智能体架构让每次会话由最适合的智能体接力完成。",
    bullets: [
      "可视化创建、测试与发布，管理智能体全生命周期",
      "灵活配置提示词、模型、计划模式、上下文与错误纠正",
      "支持传统聊天型、外部接入与企业定制智能体",
      "一键发布到个人助手、浏览器插件、WPS 插件、IM 与 API",
    ],
    accent: "agent",
  },
  {
    eyebrow: "RAG",
    title: "企业级知识库，让 AI 说「有依据的话」",
    text: "先进 RAG 设计带来更高的检索质量，完善的权限体系支撑企业内部知识安全共享，回答可溯源、可验证。",
    bullets: [
      "多格式文档上传，构建企业专属知识库",
      "知识库细粒度权限设置，支撑企业内部协作",
      "召回测试与效果调优，检索质量可视化",
      "支持 Dify 对接，复用既有知识资产",
    ],
    accent: "rag",
  },
  {
    eyebrow: "Skills",
    title: "用最小成本，把企业业务接入 AI",
    text: "只要会写 Skill 和调用工具，就能完成业务 AI 接入。系统后台整体采用多智能体架构，边写边用、持续迭代。",
    bullets: [
      "创建、编辑、调试与发布 Skill，配套环境变量与工具绑定",
      "历史版本比对与灰度覆盖，变更可回溯",
      "技能市场支持技能的发现、安装与共享",
      "与智能体配合，快速覆盖企业高频业务场景",
    ],
    accent: "skill",
  },
  {
    eyebrow: "连接器与自动化",
    title: "连接外部系统，让智能自动运转",
    text: "通过连接器打通 MCP、CLI、OAuth、HTTP 等外部能力，再以定时任务与对话编排让 AI 持续作业。",
    bullets: [
      "MCP / CLI / OAuth / HTTP 多种方式接入外部能力",
      "定时任务：按计划自动运行智能体会话",
      "对话设置：用自然语言直接编排自动化任务",
      "审核中心统一管理资源发布，发布流程可控可追责",
    ],
    accent: "connect",
  },
];

const zhDownloadItems: DownloadItem[] = [
  {
    id: "desktop-win",
    name: "Noesis 桌面端体验版",
    platform: "Windows",
    description: "完整体验个人助手与文本助手能力，适合销售演示与产品试用。",
    note: "Windows 10 / 11（x64）",
    primary: "下载安装包",
    status: "soon",
    href: "#",
    meta: ["约 150 MB", "体验版 v0.1"],
  },
  {
    id: "desktop-mac",
    name: "Noesis 桌面端体验版",
    platform: "macOS",
    description: "完整体验个人助手与文本助手能力，适合销售演示与产品试用。",
    note: "macOS 12+ · Apple Silicon / Intel",
    primary: "下载安装包",
    status: "soon",
    href: "#",
    meta: ["约 150 MB", "体验版 v0.1"],
  },
  {
    id: "mobile",
    name: "Noesis 移动端体验版",
    platform: "iOS / Android",
    description: "随时随地与你的智能体对话，移动办公无缝衔接。",
    note: "iOS 15+ / Android 10+",
    primary: "扫码或下载",
    status: "soon",
    href: "#",
    meta: ["体验版 v0.1"],
  },
  {
    id: "browser",
    name: "AI 浏览器插件",
    platform: "Chrome / Edge",
    description: "选中网页文本一键唤起 AI，浏览器里即用即取。",
    note: "配合个人助手账号使用",
    primary: "下载插件",
    status: "soon",
    href: "#",
    meta: ["体验版 v0.1"],
  },
  {
    id: "wps",
    name: "WPS AI 插件",
    platform: "WPS 办公",
    description: "在 WPS 文档中直接调用智能体，办公与 AI 天然融合。",
    note: "配合个人助手账号使用",
    primary: "下载插件",
    status: "soon",
    href: "#",
    meta: ["体验版 v0.1"],
  },
];

const zh: PageCopy = {
  lang: "zh",
  siteName: "新致新知 Noesis AI",
  siteTagline: "Skills 驱动智能员工 · 安全可控",
  nav: {
    links: [
      { label: "首页", href: "/" },
      { label: "产品能力", href: "/product/" },
      { label: "解决方案", href: "/solutions/" },
      { label: "下载中心", href: "/download/" },
      { label: "关于", href: "/about/" },
    ],
    cta: "预约演示",
    switchTo: "EN",
  },
  hero: {
    eyebrow: "上海新致软件股份有限公司出品",
    title: "为企业构建",
    titleHighlight: "可治理的智能体运行时",
    sub: "新致新知 Noesis AI 是企业级「龙虾」式智能体平台。以 Skills 驱动智能员工，而非手搭工作流——知识、连接、自动化与安全审计一体交付，服务银行与大型企业。",
    ctaPrimary: "预约演示",
    ctaSecondary: "探索产品能力",
    trust: ["上海新致软件出品", "建行天津分行信贷营销试点", "东亚银行智能运维落地", "支持私有化与多租户"],
    scroll: "向下滚动了解更多",
  },
  capabilities: {
    eyebrow: "核心能力",
    title: "从智能员工到企业治理",
    sub: "Skills、RAG、连接器、自动化与安全审计——可部署、可审计的能力拼图。",
    cta: "了解产品能力",
    cards: zhCaps,
  },
  channels: {
    eyebrow: "多端触达",
    title: "一次构建，多渠道发布",
    sub: "智能体构建完成后，可发布到桌面端、移动端、浏览器插件、WPS 插件、IM 与 API，让 AI 出现在员工工作的每个角落。",
    items: zhChannels,
  },
  solutions: {
    eyebrow: "解决方案",
    title: "三条已验证的落地路径",
    sub: "从营销增长到运维稳态，再到组织级 AI 转型——每条路径都映射到平台能力与真实客户案例。",
    note: "",
    cases: zhCases,
    cta: "看看我们能为你做什么",
  },
  product: {
    hero: {
      eyebrow: "产品能力",
      title: "企业级智能体平台",
      sub: "以 Skills 为核心构建可治理的智能员工运行时——覆盖知识、连接、自动化、权限与安全，面向对公与银行 IT 的交付标准。",
    },
    sections: zhProductSections,
    featureTable: {
      eyebrow: "功能全景",
      title: "功能清单",
      sub: "覆盖使用、管理、权限与对接的完整能力矩阵。",
      headers: ["模块", "功能", "说明"],
      rows: [
        ["使用面板", "个人助手 / 智能体 / 知识库", "智能体 Web 入口、配置与生命周期管理、企业 RAG 知识库"],
        ["业务能力", "Skills / 技能市场 / 连接器", "Skills 管理调试、技能发现安装共享、MCP/CLI/API 接入"],
        ["自动化", "定时任务 / 对话设置", "智能体定时任务，也支持通过对话设置"],
        ["我的应用", "应用登记与发布", "已发布应用的打开与收藏"],
        ["审核中心", "发布工单审核", "资源发布工单统一审核，流程可控"],
        ["系统管理", "模型 / 助手 / 对接", "模型管理、个人助手配置、外部 APIKey 对接、Dify 对接"],
        ["连接器", "MCP / OAuth / HTTP", "外部能力接入与统一管理"],
        ["远程通道", "微信集成", "微信远程通道管理，对话即服务"],
        ["可信站点", "业务系统对接", "非侵入式对接业务系统"],
        ["SSO", "OAuth2 / CAS / LDAP", "统一单点登录配置"],
        ["权限体系", "用户 / 部门 / 角色 / 群组", "企业级多租户协作权限"],
        ["任务系统", "任务管理", "对话任务后台监控管理"],
      ],
    },
  },
  download: {
    hero: {
      eyebrow: "下载中心",
      title: "下载 Noesis 体验版",
      sub: "快速上手体验整套智能体、知识库与 Skills 能力，适用于产品试用与销售演示场景。",
    },
    intro: "桌面端与移动端体验版同步可用，安装包与系统要求如下。",
    items: zhDownloadItems,
    version: {
      title: "版本与文档",
      update: "体验版 v0.1 · 更新说明请以使用文档为准",
      docTitle: "查看完整使用说明书",
      docNote: "涵盖智能体搭建、知识库、Skills、连接器、自动化与系统管理等全部内容。",
    },
    requirementTitle: "推荐配置",
    requirements: [
      "桌面端：Windows 10/11（x64）或 macOS 12+（Apple Silicon / Intel），8GB 以上内存",
      "移动端：iOS 15+ 或 Android 10+",
      "插件：Chrome / Edge 最新版本，WPS Office 最新版本",
      "网络：可访问 Noesis 服务端，建议企业内网部署时按可信站点配置",
    ],
    demoNote: {
      title: "先预约一场演示？",
      text: "我们的解决方案专家可以针对你的业务场景做一对一演示，比自行摸索更快看到价值。",
      cta: "预约演示",
    },
  },
  about: {
    hero: {
      eyebrow: "关于新致新知",
      title: "新致新知 Noesis AI",
      sub: "上海新致软件股份有限公司出品的企业级智能体平台。",
    },
    companyTitle: "上市公司实力，值得托付",
    companyText:
      "新致新知 Noesis AI 由上海新致软件股份有限公司出品。新致软件深耕企业数字化与智慧金融，以稳健的研发实力与行业经验为银行与大型企业的 AI 落地提供长期保障。",
    storyTitle: "名字背后的意义",
    storyText:
      "Noesis（诺伊西斯）源自古希腊哲学，代表「从理性推理迈向本质洞察的认知能力」。这正是一切智能体工作的方式——先理解业务语义，再规划与执行，最终触及问题的本质。",
    ipTitle: "「龙虾」式企业智能体",
    ipText:
      "新致新知 Noesis AI 以 OpenClaw 风格的「龙虾」方案服务企业级市场——外壳坚硬（安全合规）、人也喜欢（体验出色）、个个带肉（真实价值），让智能服务于结果。",
    badgesTitle: "企业级保障",
    badges: ["上市公司出品", "支持私有化部署", "适配信创环境", "多租户权限体系", "SSO：OAuth2 / CAS / LDAP", "可信站点非侵入式对接"],
  },
  contact: {
    hero: {
      eyebrow: "预约演示",
      title: "与解决方案专家聊一聊",
      sub: "告诉我们你的业务场景，我们的专家将在 1 个工作日内与你联系，并为你安排一对一演示。",
    },
    form: {
      title: "填写预约信息",
      sub: "提交后会有专人跟进，请保持联系方式畅通。",
      name: "姓名",
      company: "公司",
      role: "职务",
      phone: "手机或邮箱",
      message: "业务场景 / 需求描述",
      namePh: "请输入您的姓名",
      companyPh: "如：某某科技有限公司",
      rolePh: "如：CIO / 技术负责人",
      phonePh: "用于接收演示确认",
      messagePh: "简要描述你的业务场景与想解决的问题",
      submit: "提交预约",
      submitting: "提交中…",
      okTitle: "预约信息已就绪",
      okText: "已为你打开邮件客户端发送预约信息，也可直接发送至销售邮箱。我们的专家将在 1 个工作日内与你联系。",
      again: "再填一份",
      error: "请填写完整姓名与联系方式",
      privacy: "提交即表示你同意我们为本次沟通使用上述信息，我们不会泄露你的隐私数据。",
    },
    alt: {
      title: "其他方式",
      items: [
        { icon: "download", title: "先下载体验版", text: "想先自己动手试试？直接下载体验版开始探索。", cta: "前往下载中心", href: "/download/" },
        { icon: "doc", title: "查看使用说明书", text: "智能体、知识库、Skills 等能力都有完整图文说明。", cta: "打开使用文档", href: "https://my.feishu.cn/docx/H8b0dIjwLojYTBxlr1rcAvKynvh" },
      ],
    },
  },
  footer: {
    tagline: "新致新知 Noesis AI · Skills 驱动智能员工",
    columns: [
      {
        title: "产品",
        links: [
          { label: "产品能力", href: "/product/" },
          { label: "解决方案", href: "/solutions/" },
          { label: "下载中心", href: "/download/" },
        ],
      },
      {
        title: "支持",
        links: [
          { label: "使用说明文档", href: "https://my.feishu.cn/docx/H8b0dIjwLojYTBxlr1rcAvKynvh" },
          { label: "预约演示", href: "/contact/" },
        ],
      },
      {
        title: "关于",
        links: [
          { label: "关于我们", href: "/about/" },
          { label: "预约演示", href: "/contact/" },
        ],
      },
    ],
    legal: "© 2026 上海新致软件股份有限公司 · 新致新知 Noesis AI",
    docTitle: "使用说明文档",
  },
  meta: {
    home: { title: "新致新知 Noesis AI — 企业级智能体平台", description: "新致新知 Noesis AI：企业级「龙虾」式智能体平台。Skills 驱动智能员工，安全可控，服务银行与大型企业。" },
    product: { title: "产品能力 — 新致新知 Noesis AI", description: "新致新知 Noesis AI 产品能力：Skills 智能员工、RAG、连接器、自动化、多租户权限、审核与安全扫描、插件与渠道。" },
    solutions: { title: "解决方案 — 新致新知 Noesis AI", description: "银行信贷 AI 营销、智能运维决策系统、企业 AI 转型（FDE）。" },
    download: { title: "下载中心 — 新致新知 Noesis AI", description: "下载新致新知 Noesis AI 桌面端与移动端体验版，以及浏览器插件与 WPS 插件。" },
    about: { title: "关于 — 新致新知 Noesis AI", description: "新致新知 Noesis AI：上海新致软件股份有限公司出品，支持私有化部署与企业级多租户权限。" },
    contact: { title: "预约演示 — 新致新知 Noesis AI", description: "与新致新知 Noesis AI 解决方案专家一对一沟通。" },
  },
};

const enCaps: CapabilityCard[] = [
  {
    icon: "agent",
    title: "Agent Building",
    text: "Visually configure and manage the full agent lifecycle, plug in prompts, knowledge bases and tools, and publish to assistants, browser / WPS plugins, IM and API in one click.",
  },
  {
    icon: "rag",
    title: "RAG Knowledge Base",
    text: "Enterprise-grade retrieval-augmented generation with multi-format uploads, granular permissions and recall testing, plus Dify integration for answers grounded in real business knowledge.",
  },
  {
    icon: "skill",
    title: "Skills",
    text: "Package business capabilities as Skills with create, debug, version and publish workflows, so agents can connect to your business fast and keep iterating.",
  },
  {
    icon: "connect",
    title: "Connectors & Automation",
    text: "Bring in external capabilities via MCP, CLI, OAuth and HTTP; schedule tasks and orchestrate conversations so AI runs inside your daily operations.",
  },
];

const enChannels: ChannelItem[] = [
  { icon: "desktop", title: "Desktop", text: "Windows & macOS clients with personal assistant and text assistant built in." },
  { icon: "mobile", title: "Mobile", text: "Ask and collaborate anywhere, seamlessly extending your office workflow." },
  { icon: "browser", title: "Browser Plugin", text: "Select text on any page and summon AI instantly, right in your browser." },
  { icon: "wps", title: "WPS Plugin", text: "Invoke agents directly inside WPS documents, where your work already lives." },
  { icon: "im", title: "Messaging", text: "Connect WeChat and other IM channels through remote gateways — conversation as service." },
  { icon: "api", title: "API", text: "Expose your agents as APIs so any system can integrate quickly." },
];

const enCases: CaseItem[] = [
  {
    industry: "Bank Credit AI Marketing",
    title: "CCB Tianjin Branch — early pilot",
    text: "An early pilot for bank credit AI marketing. A publicly describable example is intelligent merchant recommendation for home-renovation installment scenarios.",
    placeholder: false,
  },
  {
    industry: "Intelligent Ops Decisioning",
    title: "Bank of East Asia — ops decisioning live",
    text: "Ops decisioning in a real banking environment: alert clustering, RCA, impact analysis, remediation coordination and ops Q&A.",
    placeholder: false,
  },
  {
    industry: "Enterprise AI · FDE",
    title: "Forward-deployed engineering",
    text: "Co-create the first high-value closed loop with the customer, baseline multi-tenant permissions, review and Skill scanning, and package reusable Skills and integration templates.",
    placeholder: false,
  },
];

const enProductSections: FeatureSection[] = [
  {
    eyebrow: "Agent",
    title: "Build agents like building blocks",
    text: "On Noesis there is no need to wire tedious workflows — configure an agent around a business goal. A multi-agent backend lets the best-suited agent take over at each step.",
    bullets: [
      "Visually create, test and publish, managing the full agent lifecycle",
      "Flexible prompts, models, planning modes, context and self-correction",
      "Chat, external and enterprise-customized agent types",
      "Publish to assistants, browser / WPS plugins, IM and API in one click",
    ],
    accent: "agent",
  },
  {
    eyebrow: "RAG",
    title: "An enterprise knowledge base that grounds every answer",
    text: "An advanced RAG design delivers higher retrieval quality, while a thorough permission system keeps enterprise knowledge secure and answers traceable.",
    bullets: [
      "Multi-format document upload to build your own knowledge base",
      "Granular knowledge base permissions for internal collaboration",
      "Recall testing with visible retrieval quality tuning",
      "Dify integration to reuse existing knowledge assets",
    ],
    accent: "rag",
  },
  {
    eyebrow: "Skills",
    title: "Connect your business to AI at minimum cost",
    text: "If you can write a Skill and call a tool, you can bring business AI online. The multi-agent backend means you learn by doing and ship iteratively.",
    bullets: [
      "Create, edit, debug and publish Skills with env vars and tool bindings",
      "Version diffing and staged rollout with full history",
      "Skill marketplace for discovery, installation and sharing",
      "Pair Skills with agents to cover high-frequency business scenarios fast",
    ],
    accent: "skill",
  },
  {
    eyebrow: "Connectors & Automation",
    title: "Connect external systems, let intelligence run itself",
    text: "Integrate external capabilities through MCP, CLI, OAuth and HTTP connectors, then keep agents working around the clock with schedules and conversations.",
    bullets: [
      "MCP / CLI / OAuth / HTTP connectors for external capabilities",
      "Scheduled tasks that run agent sessions on a plan",
      "Conversation setup: orchestrate automation in natural language",
      "Review center for controlled, auditable resource publishing",
    ],
    accent: "connect",
  },
];

const enDownloadItems: DownloadItem[] = [
  {
    id: "desktop-win",
    name: "Noesis Desktop Trial",
    platform: "Windows",
    description: "Full personal & text assistant experience, ideal for product trials and sales demos.",
    note: "Windows 10 / 11 (x64)",
    primary: "Download Installer",
    status: "soon",
    href: "#",
    meta: ["~150 MB", "Trial v0.1"],
  },
  {
    id: "desktop-mac",
    name: "Noesis Desktop Trial",
    platform: "macOS",
    description: "Full personal & text assistant experience, ideal for product trials and sales demos.",
    note: "macOS 12+ · Apple Silicon / Intel",
    primary: "Download Installer",
    status: "soon",
    href: "#",
    meta: ["~150 MB", "Trial v0.1"],
  },
  {
    id: "mobile",
    name: "Noesis Mobile Trial",
    platform: "iOS / Android",
    description: "Talk to your agents anywhere, anytime — seamless mobile office.",
    note: "iOS 15+ / Android 10+",
    primary: "Scan QR or Download",
    status: "soon",
    href: "#",
    meta: ["Trial v0.1"],
  },
  {
    id: "browser",
    name: "AI Browser Plugin",
    platform: "Chrome / Edge",
    description: "Summon AI on any selected web text, instantly in your browser.",
    note: "Works with your assistant account",
    primary: "Download Plugin",
    status: "soon",
    href: "#",
    meta: ["Trial v0.1"],
  },
  {
    id: "wps",
    name: "WPS AI Plugin",
    platform: "WPS Office",
    description: "Invoke agents directly inside WPS documents, blending AI into office work.",
    note: "Works with your assistant account",
    primary: "Download Plugin",
    status: "soon",
    href: "#",
    meta: ["Trial v0.1"],
  },
];

const en: PageCopy = {
  lang: "en",
  siteName: "Noesis AI",
  siteTagline: "Skills-driven digital employees · Governable",
  nav: {
    links: [
      { label: "Home", href: "/en/" },
      { label: "Product", href: "/en/product/" },
      { label: "Solutions", href: "/en/solutions/" },
      { label: "Download", href: "/en/download/" },
      { label: "About", href: "/en/about/" },
    ],
    cta: "Book a Demo",
    switchTo: "中文",
  },
  hero: {
    eyebrow: "By Shanghai Newtouch Software Co., Ltd.",
    title: "Build a governable",
    titleHighlight: "enterprise agent runtime",
    sub: "Noesis AI is an enterprise “lobster-style” agent platform. Skills drive digital employees — not hand-wired workflows — with knowledge, connectors, automation and auditability in one stack for banks and large enterprises.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Explore product",
    trust: ["By Shanghai Newtouch Software", "CCB Tianjin credit marketing pilot", "Bank of East Asia ops decisioning", "Private deploy & multi-tenant"],
    scroll: "Scroll to learn more",
  },
  capabilities: {
    eyebrow: "Core Capabilities",
    title: "Four capabilities that bring AI into your business",
    sub: "From knowledge to action — the complete chain for enterprise AI applications.",
    cta: "Explore the product",
    cards: enCaps,
  },
  channels: {
    eyebrow: "Multi-Channel",
    title: "Build once, publish everywhere",
    sub: "Publish agents to desktop, mobile, browser plugins, WPS plugins, IM and API — put AI wherever your people already work.",
    items: enChannels,
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Three proven paths to production",
    sub: "From growth marketing to ops stability to organization-wide AI transformation — each path maps to platform capabilities and real customer work.",
    note: "",
    cases: enCases,
    cta: "See what we can do for you",
  },
  product: {
    hero: {
      eyebrow: "Product",
      title: "Enterprise agent platform",
      sub: "A Skills-centered, governable digital-employee runtime — knowledge, connectors, automation, permissions and security for corporate and banking IT.",
    },
    sections: enProductSections,
    featureTable: {
      eyebrow: "Full Feature Map",
      title: "Feature list",
      sub: "A complete capability matrix across usage, administration, permission and integration.",
      headers: ["Module", "Feature", "Description"],
      rows: [
        ["Workspace", "Assistant / Agent / Knowledge", "Agent web portal, config & lifecycle, enterprise RAG knowledge base"],
        ["Capabilities", "Skills / Marketplace / Connectors", "Skill management & debugging, discovery & sharing, MCP/CLI/API integration"],
        ["Automation", "Scheduled / Conversation setup", "Scheduled agent tasks, also configured through conversation"],
        ["My Apps", "App registration & publish", "Open and favorite published apps"],
        ["Review Center", "Publish ticket review", "Unified, auditable review of resource publishing"],
        ["Administration", "Models / Assistants / Integrations", "Model management, assistant config, APIKey & Dify integration"],
        ["Connectors", "MCP / OAuth / HTTP", "External capability integration and management"],
        ["Remote Channels", "WeChat", "WeChat gateway management — conversation as service"],
        ["Trusted Sites", "System integration", "Non-intrusive integration with business systems"],
        ["SSO", "OAuth2 / CAS / LDAP", "Unified single sign-on configuration"],
        ["Permissions", "Users / Depts / Roles / Groups", "Enterprise-grade multi-tenant collaboration"],
        ["Task System", "Task management", "Backend monitoring of conversation tasks"],
      ],
    },
  },
  download: {
    hero: {
      eyebrow: "Download Center",
      title: "Download the Noesis trial",
      sub: "Experience agents, knowledge bases and Skills end to end. Ideal for product trials and sales demos.",
    },
    intro: "Desktop and mobile trials are now available along with their system requirements.",
    items: enDownloadItems,
    version: {
      title: "Version & Docs",
      update: "Trial v0.1 · See release notes in the user guide",
      docTitle: "Read the full user guide",
      docNote: "Covers agent building, knowledge bases, Skills, connectors, automation and administration.",
    },
    requirementTitle: "Recommended Requirements",
    requirements: [
      "Desktop: Windows 10/11 (x64) or macOS 12+ (Apple Silicon / Intel), 8GB+ RAM",
      "Mobile: iOS 15+ or Android 10+",
      "Plugins: latest Chrome / Edge and latest WPS Office",
      "Network: reachable Noesis server; for on-premise, configure trusted sites",
    ],
    demoNote: {
      title: "Prefer a live demo?",
      text: "Our solution experts can walk you through your exact business scenario — faster than exploring on your own.",
      cta: "Book a Demo",
    },
  },
  about: {
    hero: {
      eyebrow: "About Noesis AI",
      title: "Noesis AI",
      sub: "An enterprise agent platform by Shanghai Newtouch Software Co., Ltd.",
    },
    companyTitle: "Backed by a listed company",
    companyText:
      "Noesis AI is built by Shanghai Newtouch Software Co., Ltd. With deep experience in enterprise digital services, Newtouch provides long-term assurance for your AI rollout.",
    storyTitle: "The meaning behind the name",
    storyText:
      "Noesis comes from ancient Greek philosophy: “the cognitive ability to move from rational reasoning toward insight into what truly matters.” That is how every agent should work — understand intent, plan, execute, and finally reach the essence of the problem.",
    ipTitle: "Our mascot: the crayfish 🦞",
    ipText:
      "Noesis AI builds the enterprise “lobster” solution — tough shell (safe & compliant), loved by people (great experience) and full of meat (real value).",
    badgesTitle: "Enterprise Assurance",
    badges: ["From a listed company", "Private deployment", "Xinchuang ready", "Multi-tenant RBAC", "SSO: OAuth2 / CAS / LDAP", "Non-intrusive trusted-site integration"],
  },
  contact: {
    hero: {
      eyebrow: "Book a Demo",
      title: "Talk to a solution expert",
      sub: "Tell us about your business scenario and our experts will contact you within one business day to arrange a one-on-one demo.",
    },
    form: {
      title: "Request a call",
      sub: "A dedicated person will follow up. Please keep your contact details reachable.",
      name: "Name",
      company: "Company",
      role: "Title",
      phone: "Phone or email",
      message: "Business scenario / Requirements",
      namePh: "Your name",
      companyPh: "e.g. Acme Tech Ltd.",
      rolePh: "e.g. CIO / Head of Engineering",
      phonePh: "For demo confirmation",
      messagePh: "Briefly describe your scenario and the problem you want to solve",
      submit: "Submit Request",
      submitting: "Submitting…",
      okTitle: "Request ready",
      okText: "Your email client is opening with your request. You can also send it to our sales inbox directly. Our experts will reach out within one business day.",
      again: "Submit another",
      error: "Please fill in your name and contact details",
      privacy: "By submitting you agree that we use the above information for this communication. We will never leak your data.",
    },
    alt: {
      title: "Other ways",
      items: [
        { icon: "download", title: "Download the trial", text: "Prefer to try it yourself first? Grab the trial edition and start exploring.", cta: "Go to Download Center", href: "/en/download/" },
        { icon: "doc", title: "Read the user guide", text: "Complete illustrated guides for agents, knowledge bases, Skills and more.", cta: "Open the user guide", href: "https://my.feishu.cn/docx/H8b0dIjwLojYTBxlr1rcAvKynvh" },
      ],
    },
  },
  footer: {
    tagline: "Noesis AI · Skills-driven digital employees",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Product", href: "/en/product/" },
          { label: "Solutions", href: "/en/solutions/" },
          { label: "Download", href: "/en/download/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "User guide", href: "https://my.feishu.cn/docx/H8b0dIjwLojYTBxlr1rcAvKynvh" },
          { label: "Book a demo", href: "/en/contact/" },
        ],
      },
      {
        title: "About",
        links: [
          { label: "About us", href: "/en/about/" },
          { label: "Book a demo", href: "/en/contact/" },
        ],
      },
    ],
    legal: "© 2026 Shanghai Newtouch Software Co., Ltd. · Noesis AI",
    docTitle: "User guide",
  },
  meta: {
    home: { title: "Noesis AI — Enterprise Agent Platform", description: "An enterprise Agent platform: RAG knowledge base, Skills, MCP connectors, automation and multi-tenant permissions. Private deployment and Xinchuang ready. Let intelligence serve results." },
    product: { title: "Product — Noesis AI", description: "Explore Noesis capabilities: Agent building, RAG knowledge base, Skills, connectors, automation, multi-tenant permissions and SSO." },
    solutions: { title: "Solutions — Noesis AI", description: "Noesis across financial services, manufacturing and retail: intelligent knowledge hubs, process assistants and business automation." },
    download: { title: "Download Center — Noesis AI", description: "Download Noesis desktop and mobile trials, plus browser and WPS plugins, and get started fast." },
    about: { title: "About — Noesis AI", description: "Noesis: enterprise Agent platform from a listed company. Private deployment, Xinchuang ready, enterprise multi-tenant permissions." },
    contact: { title: "Book a Demo — Noesis AI", description: "Talk to a Noesis solution expert one-on-one and bring AI into your business fast." },
  },
};

export const content: Record<L, PageCopy> = { zh, en };

export function langFromPath(pathname: string): L {
  return pathname.startsWith("/en") ? "en" : "zh";
}

export function localPath(lang: L, path: string): string {
  if (path === "/en/" || (lang === "en" && path.startsWith("/en/"))) return path;
  if (path.startsWith("/en")) return path;
  return lang === "en" ? `/en${path === "/" ? "" : path}` : path;
}
