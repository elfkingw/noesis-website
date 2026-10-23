export const homeSeo = {
  title: "新致新知 Noesis AI — 企业级智能体平台",
  description:
    "新致新知 Noesis AI：企业级「龙虾」式智能体平台。Skills 驱动智能员工，安全可控，服务银行与大型企业。",
};

export const homeHero = {
  headline: "为企业构建可治理的智能体运行时",
  lead: "OpenClaw 风格（「龙虾」）企业智能体方案。以 Skills 驱动智能员工，而非手搭工作流——知识、连接、自动化与安全审计一体交付。",
  primaryCta: { href: "/contact", label: "预约演示" },
  secondaryCta: { href: "/platform", label: "探索平台" },
};

export const homeTrust = {
  label: "信任与落地",
  items: [
    { name: "上海新致软件", note: "出品" },
    { name: "建行天津分行", note: "信贷营销试点" },
    { name: "东亚银行", note: "智能运维落地" },
  ],
};

export const homeCapabilities = {
  eyebrow: "平台能力",
  title: "从智能员工到企业治理",
  desc: "参考当代 AI 产品的能力叙事方式：少口号、多表面。以下为可部署、可审计的能力拼图。",
  items: [
    {
      id: "01",
      title: "Skills 驱动智能员工",
      body: "将业务能力沉淀为可复用 Skills，由智能员工组合调用。避免脆弱的手搭工作流，使行为可评审、可版本、可扫描。",
      featured: true,
      wide: true,
    },
    {
      id: "02",
      title: "RAG 知识库",
      body: "企业制度与产品知识可检索、可引用，支撑专业问答与业务决策。",
    },
    {
      id: "03",
      title: "MCP / CLI / API",
      body: "标准连接器对接现有系统与工具链，让智能体进入真实业务闭环。",
    },
    {
      id: "04",
      title: "自动化 · 多租户",
      body: "Automation 持续执行；权限按租户与角色隔离，适配集团组织。",
    },
    {
      id: "05",
      title: "审核、扫描、审计、沙箱",
      body: "审核中心把关发布；Skill 安全扫描识别风险；全链路审计留痕；敏感执行可在沙箱验证——为银行与对公场景而设计。",
      tall: true,
    },
    {
      id: "06",
      title: "插件、渠道与入驻",
      body: "浏览器 / WPS 插件、微信通道、可信站点非侵入集成；支持基于 Dify / FastGPT / HiAgent 构建的智能体入驻治理。",
      tall: true,
    },
  ],
};

export const homeSolutions = {
  eyebrow: "解决方案",
  title: "三条已验证的落地路径",
  desc: "从营销增长到运维稳态，再到组织级 AI 转型。",
  items: [
    {
      num: "01",
      href: "/solutions#credit",
      title: "银行信贷 AI 营销",
      body: "建行天津分行首批试点；如家装分期场景的商户智能推荐。",
    },
    {
      num: "02",
      href: "/solutions#ops",
      title: "智能运维决策系统",
      body: "落地东亚银行：告警收敛、RCA、影响分析、处置与运维问答。",
    },
    {
      num: "03",
      href: "/solutions#fde",
      title: "企业 AI 转型 · FDE",
      body: "前线部署工程师陪伴式落地，缩短从试点到规模化的路径。",
    },
  ],
};

export const homeOpsShowcase = {
  eyebrow: "产品表面",
  title: "运维决策，看得见的闭环",
  desc: "告警收敛 → 根因 → 影响 → 处置 → 问答。智能体不是黑盒聊天，而是可观察的决策辅助。",
  cta: { href: "/cases#bea", label: "东亚银行案例 →" },
};

export const homeCta = {
  eyebrow: "下一步",
  title: "预约一场面向贵司场景的演示",
  desc: "可指定信贷营销、智能运维或平台治理议程。",
  primary: { href: "/contact", label: "预约演示" },
  secondary: { href: "/cases", label: "先看客户案例" },
};

export const consoleDemo = {
  title: "Noesis · 智能员工控制台",
  side: [
    "信贷营销助手",
    "运维决策 Agent",
    "知识问答",
    "Skill 市场",
    "审核中心",
  ],
  userMsg: "为本分行家装分期推荐合适商户，并给出合规话术要点。",
  agentMsg: "已检索产品知识库，并调用 商户推荐 Skill。",
  tags: ["RAG · 政策库", "Skill · 推荐", "待审核"],
  status: ["沙箱已隔离", "审计链路开启", "多租户：分行 A"],
};

export const opsDemo = {
  title: "Noesis · 运维决策",
  alert: "告警簇 #4821 · 已收敛 37 条相关事件",
  steps: [
    { label: "根因分析（RCA）进行中", meta: "Skills" },
    { label: "影响面：核心渠道 · 中等", meta: "图谱" },
    { label: "建议处置已送审", meta: "审核" },
    { label: "运维问答 · 知识库命中", meta: "RAG" },
  ],
};
