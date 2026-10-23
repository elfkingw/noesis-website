export const solutionsSeo = {
  title: "解决方案",
  description:
    "新致新知 Noesis AI 解决方案：银行信贷 AI 营销、智能运维决策系统、企业 AI 转型（FDE）。",
};

export const solutionsHero = {
  headline: "面向金融与企业的三条落地路径",
  lead: "营销增长、运维决策、组织转型——每条路径都映射到平台能力与真实客户案例。",
  primaryCta: { href: "/contact", label: "按场景预约沟通" },
  secondaryCta: { href: "/cases", label: "对照客户案例" },
};

export const creditSolution = {
  id: "credit",
  eyebrow: "方案 01",
  title: "银行信贷 AI 营销",
  desc: "用智能体连接客户洞察、产品策略与触达动作。建行天津分行为首批试点行；典型场景包括家装分期业务中的商户智能推荐。",
  cards: [
    {
      icon: "场",
      title: "场景切入",
      body: "围绕分期与商户网络，把推荐与话术变成可治理的智能员工能力。",
    },
    {
      icon: "平",
      title: "平台支撑",
      body: "RAG 承载产品与政策知识；Skills 固化营销动作；审核与审计保障合规。",
    },
    {
      icon: "值",
      title: "价值指向",
      body: "缩短从线索到合适产品匹配的路径，提升一线可用的智能辅助质量。",
    },
  ],
  cta: { href: "/cases#ccb", label: "查看建行天津分行案例 →" },
};

export const opsSolution = {
  id: "ops",
  eyebrow: "方案 02",
  title: "智能运维决策系统",
  desc: "面向银行与大型企业运维：在告警洪峰中收敛信号，辅助根因与影响分析，并衔接处置与运维问答。已在东亚银行落地。",
  rows: [
    { title: "告警收敛", body: "降低噪声，突出真正需要人决策的事件簇。" },
    {
      title: "根因分析",
      body: "结合知识与连接器上下文，辅助定位问题源头。",
    },
    {
      title: "影响 · 处置 · 问答",
      body: "评估波及范围，衔接处置建议与可检索的运维经验。",
    },
  ],
  cta: { href: "/cases#bea", label: "查看东亚银行案例 →" },
  demo: {
    title: "RCA · Impact · Remediation",
    alert: "告警簇已收敛 · 等待决策",
    steps: [
      { label: "RCA 假设已生成", meta: "Agent" },
      { label: "影响分析完成", meta: "图谱" },
      { label: "处置建议送审", meta: "审核" },
      { label: "相关 Runbook 已挂载", meta: "RAG" },
    ],
  },
};

export const fdeSolution = {
  id: "fde",
  eyebrow: "方案 03",
  title: "企业 AI 转型服务（FDE）",
  desc: "以前线部署工程师（Forward-Deployed Engineer）方式深入客户现场：共同定义场景、接入系统、打磨 Skills 与治理策略，避免「只交付许可证、不交付结果」。",
  cards: [
    {
      icon: "01",
      title: "共创试点",
      body: "选定高价值、边界清晰的首个场景，快速形成可演示闭环。",
    },
    {
      icon: "02",
      title: "工程落地",
      body: "对接 MCP/CLI/API、知识库与权限模型，进入生产可用状态。",
    },
    {
      icon: "03",
      title: "规模复制",
      body: "将试点 Skills 与治理模板扩展到更多条线与租户。",
    },
  ],
};

export const solutionsChooser = {
  eyebrow: "如何选择",
  title: "对号入座",
  rows: [
    {
      title: "要增长与营销效能",
      body: "从「银行信贷 AI 营销」开始，对照建行天津分行试点路径。",
    },
    {
      title: "要稳态与运维效率",
      body: "从「智能运维决策系统」开始，对照东亚银行落地能力闭环。",
    },
    {
      title: "要组织级转型",
      body: "从 FDE 服务开始，先定场景地图与治理基线，再铺开平台。",
    },
  ],
};

export const solutionsCta = {
  title: "告诉我们可以从哪条路径谈起",
  desc: "预约时选择感兴趣的方案，我们将准备对应议程。",
  primary: { href: "/contact", label: "预约演示" },
};
