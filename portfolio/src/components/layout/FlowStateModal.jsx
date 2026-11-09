import { useState } from "react";

function FlowStateModal({ data, onClose, openedTabs, setOpenedTabs }) {
  const [activeTab, setActiveTab] = useState("problem");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (!openedTabs.includes(tabId)) {
      setOpenedTabs([...openedTabs, tabId]);
    }
  };

  const currentTab = data.tabs.find((t) => t.id === activeTab);

  return (
    <div className="cs-modal-backdrop" onClick={onClose}>
      <div className="cs-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <header className="cs-header">
          <div>
            <div className="cs-header-meta">
              <span className="cs-badge">{data.status}</span>
              <span className="cs-category-tag">Case Study</span>
            </div>
            <h2 className="cs-title">{data.title}</h2>
            <p className="cs-lead">{data.leadIdea}</p>
          </div>
          <div className="cs-header-actions">
            <a href="#contact" className="btn btn-primary cs-hire-btn" onClick={onClose}>
              Hire Me
            </a>
            <button className="cs-close-btn" onClick={onClose} aria-label="Close case study">
              ✕
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="cs-tabs">
          {data.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cs-tab-btn ${activeTab === tab.id ? "is-active" : ""} ${
                openedTabs.includes(tab.id) ? "is-visited" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label} {openedTabs.includes(tab.id) && <span className="cs-check">✓</span>}
            </button>
          ))}
        </nav>

        {/* Content Body */}
        <div className="cs-content-body">
          {/* TAB 1: PROBLEM */}
          {activeTab === "problem" && (
            <div className="cs-tab-content cs-fade-in">
              <div className="cs-hero-statement">
                <h3 className="cs-headline">{currentTab.headline}</h3>
                <p className="cs-subheadline">{currentTab.subheadline}</p>
              </div>

              <div className="cs-personas-grid">
                {currentTab.personas.map((p, idx) => (
                  <div key={idx} className="cs-flip-card">
                    <div className="cs-flip-card-inner">
                      <div className="cs-flip-front">
                        <span className="cs-card-type">PERSONA 0{idx + 1}</span>
                        <h4>{p.name}</h4>
                        <span className="cs-role">{p.role}</span>
                        <p className="cs-card-desc">{p.front}</p>
                        <span className="cs-hint">Hover / Tap to inspect pain points ↻</span>
                      </div>
                      <div className="cs-flip-back">
                        <span className="cs-card-type cs-type-accent">CORE NEED & PAIN POINT</span>
                        <h4>{p.name}</h4>
                        <p className="cs-card-desc">{p.back}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DESIGN */}
          {activeTab === "design" && (
            <div className="cs-tab-content cs-fade-in">
              <span className="cs-section-label">SYSTEM ARCHITECTURE</span>
              <h3 className="cs-section-title">Design System & Rationale</h3>
              <div className="cs-grid-3">
                {currentTab.designSystem.map((ds, idx) => (
                  <div key={idx} className="cs-glass-card">
                    <span className="cs-pill">{ds.item}</span>
                    <h4 className="cs-card-heading">{ds.choice}</h4>
                    <p className="cs-card-body">{ds.rationale}</p>
                  </div>
                ))}
              </div>

              <span className="cs-section-label cs-spacing-top">GOVERNANCE</span>
              <h3 className="cs-section-title">AI Decision Principles</h3>
              <div className="cs-grid-3">
                {currentTab.aiPrinciples.map((principle, idx) => (
                  <div key={idx} className="cs-glass-card cs-card-border-glow">
                    <span className="cs-card-number">0{idx + 1}</span>
                    <p className="cs-card-body">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DECISIONS */}
          {activeTab === "decisions" && (
            <div className="cs-tab-content cs-fade-in">
              <span className="cs-section-label">ITERATIVE LOG</span>
              <h3 className="cs-section-title">Trade-off Timeline</h3>
              <div className="cs-timeline">
                {currentTab.timeline.map((item, idx) => (
                  <div key={idx} className="cs-timeline-card">
                    <div className="cs-timeline-node"></div>
                    <div className="cs-timeline-content">
                      <span className="cs-pill-purple">{item.phase}</span>
                      <div className="cs-timeline-block">
                        <p className="cs-feedback"><strong>Trigger / Feedback:</strong> {item.feedback}</p>
                        <p className="cs-decision"><strong>Design Decision:</strong> {item.decision}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROOF */}
          {activeTab === "proof" && (
            <div className="cs-tab-content cs-fade-in">
              <span className="cs-section-label">VALIDATION</span>
              <h3 className="cs-section-title">Testing Matrix</h3>
              <div className="cs-table-wrapper">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>FEATURE</th>
                      <th>METHOD</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTab.testingTable.map((row, idx) => (
                      <tr key={idx}>
                        <td className="cs-feature-name">{row.feature}</td>
                        <td className="cs-feature-method">{row.method}</td>
                        <td><span className="cs-tag-pass">{row.result}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="cs-grid-2 cs-spacing-top">
                <div className="cs-glass-card cs-warning-border">
                  <span className="cs-section-label cs-label-amber">HONEST GAPS</span>
                  <h4>Not Tested Yet</h4>
                  <ul className="cs-styled-list">
                    {currentTab.notTested.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="cs-glass-card cs-accent-border">
                  <span className="cs-section-label cs-label-purple">NEXT ITERATION</span>
                  <h4>In-Progress Roadmap</h4>
                  <ul className="cs-styled-list">
                    {currentTab.roadmap.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlowStateModal;