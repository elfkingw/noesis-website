type ConsoleProps = {
  title: string;
  side: string[];
  userMsg: string;
  agentMsg: string;
  tags: string[];
  status: string[];
  className?: string;
};

export function AgentConsoleFrame({
  title,
  side,
  userMsg,
  agentMsg,
  tags,
  status,
  className = "",
}: ConsoleProps) {
  return (
    <div
      className={`product-frame reveal reveal-delay-2 ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="product-frame-inner">
        <div className="pf-chrome">
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-title">{title}</span>
        </div>
        <div className="pf-body">
          <aside className="pf-side">
            {side.map((item, i) => (
              <div
                key={item}
                className={`pf-side-item${i === 0 ? " active" : ""}`}
              >
                {item}
              </div>
            ))}
          </aside>
          <div className="pf-main">
            <div className="pf-row">
              <div className="pf-avatar human" />
              <div className="pf-bubble">{userMsg}</div>
            </div>
            <div className="pf-row">
              <div className="pf-avatar" />
              <div className="pf-bubble">
                {agentMsg.includes("商户推荐 Skill") ? (
                  <>
                    已检索产品知识库，并调用 <strong>商户推荐 Skill</strong>。
                  </>
                ) : (
                  agentMsg
                )}
                <div className="pf-tags">
                  {tags.map((t) => (
                    <span key={t} className="pf-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pf-status">
          {status.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

type OpsProps = {
  title: string;
  alert: string;
  steps: { label: string; meta: string }[];
  flat?: boolean;
  className?: string;
};

export function OpsFrame({
  title,
  alert,
  steps,
  flat = false,
  className = "",
}: OpsProps) {
  return (
    <div
      className={`product-frame ops-frame ${className}`.trim()}
      aria-hidden="true"
      style={flat ? { transform: "none" } : undefined}
    >
      <div className="product-frame-inner">
        <div className="pf-chrome">
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-title">{title}</span>
        </div>
        <div className="pf-main" style={{ minHeight: 220 }}>
          <div className="ops-alert">{alert}</div>
          <div className="ops-steps">
            {steps.map((s) => (
              <div key={s.label} className="ops-step">
                <i />
                <span>{s.label}</span>
                <em>{s.meta}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type MarketProps = {
  title: string;
  skills: { label: string; meta: string }[];
};

export function SkillMarketFrame({ title, skills }: MarketProps) {
  return (
    <div
      className="product-frame"
      aria-hidden="true"
      style={{ transform: "none" }}
    >
      <div className="product-frame-inner">
        <div className="pf-chrome">
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-dot" />
          <span className="pf-title">{title}</span>
        </div>
        <div
          className="pf-main"
          style={{ display: "grid", gap: "0.55rem", minHeight: 200 }}
        >
          {skills.map((s) => (
            <div key={s.label} className="ops-step">
              <i />
              <span>{s.label}</span>
              <em>{s.meta}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
