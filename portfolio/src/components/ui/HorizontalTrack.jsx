import { useState, useEffect } from "react";
import FlowStateModal from "../layout/FlowStateModal";
import { flowstateData } from "../../data/flowstateCaseStudy";
import { absaData } from "../../data/absaCaseStudy";
import { bypData } from "../../data/bypCaseStudy";

function HorizontalTrack() {
  const [activeModalData, setActiveModalData] = useState(null);

  const [unlockedProgress, setUnlockedProgress] = useState(() => {
    const saved = localStorage.getItem("portfolio:case-study:progress");
    return saved ? JSON.parse(saved) : { flowstate: [], absa: [], byp: [] };
  });

  useEffect(() => {
    localStorage.setItem("portfolio:case-study:progress", JSON.stringify(unlockedProgress));
  }, [unlockedProgress]);

  const handleTabVisited = (projectId, tabId) => {
    setUnlockedProgress((prev) => {
      const currentTabs = prev[projectId] || [];
      if (!currentTabs.includes(tabId)) {
        return { ...prev, [projectId]: [...currentTabs, tabId] };
      }
      return prev;
    });
  };

  const isFlowstateDone = (unlockedProgress.flowstate?.length || 0) >= 4;
  const isAbsaDone = (unlockedProgress.absa?.length || 0) >= 4;

  return (
    <>
      <div 
        className="horizontal-track-scroll-wrapper" 
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          paddingBottom: "32px",
          scrollBehavior: "smooth"
        }}
      >
        <div className="horizontal-track" style={{ display: "flex", gap: "2.5rem", width: "max-content", padding: "0 2rem" }}>
          
          {/* 1. FLOWSTATE */}
          <div className="project-slide" style={{ "--accent": "#8b5cf6", width: "400px", flexShrink: 0 }}>
            <div className="project-flip" style={{ height: "100%", background: "var(--bg-secondary, #111118)", borderRadius: "20px", border: "1px solid var(--glass-border)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              
              <div style={{ height: "200px", overflow: "hidden", background: "#0b0b0f", position: "relative" }}>
                <img src="/images/FlowSate.jpg" alt="FlowState Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span className="project-flip__cover-status" style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(139,92,246,0.25)", color: "#8b5cf6", padding: "4px 10px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "700" }}>In Progress</span>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#38bdf8", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>Featured Case Study</span>
                  <h3 style={{ fontSize: "1.75rem", margin: "6px 0", fontFamily: "var(--font-display, serif)" }}>FlowState</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    AI-powered daily curator & smart route planner. ({unlockedProgress.flowstate?.length || 0}/4 tabs explored)
                  </p>
                </div>

                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button type="button" className="btn btn-primary" onClick={() => setActiveModalData({ data: flowstateData, key: "flowstate" })} style={{ width: "100%", cursor: "pointer" }}>
                    Explore Case Study
                  </button>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a href="https://github.com/NosiphoX" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: "0.85rem", padding: "8px" }}>View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ABSA NEXTGEN */}
          <div className={`project-slide ${!isFlowstateDone ? "project-slide--locked" : ""}`} style={{ "--accent": "#E2364C", width: "400px", flexShrink: 0 }}>
            <div className="project-flip" style={{ height: "100%", background: "var(--bg-secondary, #111118)", borderRadius: "20px", border: "1px solid var(--glass-border)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              
              <div style={{ height: "200px", overflow: "hidden", background: "#0b0b0f", position: "relative" }}>
                <img src="/images/AbsaNextGen.png" alt="ABSA NextGen Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span className="project-flip__cover-status" style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(226,54,76,0.25)", color: "#E2364C", padding: "4px 10px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "700" }}>In Progress</span>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#E2364C", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>Financial Mentor</span>
                  <h3 style={{ fontSize: "1.75rem", margin: "6px 0", fontFamily: "var(--font-display, serif)" }}>ABSA NextGen</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    Wealth studio for early-career young professionals. ({unlockedProgress.absa?.length || 0}/4 tabs explored)
                  </p>
                </div>

                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {isFlowstateDone ? (
                    <>
                      <button type="button" className="btn btn-primary" onClick={() => setActiveModalData({ data: absaData, key: "absa" })} style={{ width: "100%", cursor: "pointer" }}>
                        Explore Case Study
                      </button>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <a href="https://nosiphox.github.io/DIGA4015A-ABSANext-Gen/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: "0.85rem", padding: "8px" }}>Live App</a>
                      </div>
                    </>
                  ) : (
                    <div style={{ textAlign: "center", padding: "14px", color: "var(--text-secondary)", fontSize: "0.85rem", background: "rgba(255,255,255,0.04)", borderRadius: "12px" }}>
                      🔒 Complete 4 FlowState tabs to unlock
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 3. BEYOND THE PATTERN */}
          <div className={`project-slide ${!isAbsaDone ? "project-slide--locked" : ""}`} style={{ "--accent": "#D4B595", width: "400px", flexShrink: 0 }}>
            <div className="project-flip" style={{ height: "100%", background: "var(--bg-secondary, #111118)", borderRadius: "20px", border: "1px solid var(--glass-border)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              
              <div style={{ height: "200px", overflow: "hidden", background: "#0b0b0f", position: "relative" }}>
                <img src="/images/Beyond the Pattern.png" alt="Beyond the Pattern Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span className="project-flip__cover-status" style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(212,181,149,0.25)", color: "#D4B595", padding: "4px 10px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "700" }}>In Progress</span>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#D4B595", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>Research & GAI Experiment</span>
                  <h3 style={{ fontSize: "1.75rem", margin: "6px 0", fontFamily: "var(--font-display, serif)" }}>Beyond the Pattern</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    Blind comparison prototype staging GAI, meaning & consciousness. ({unlockedProgress.byp?.length || 0}/4 tabs explored)
                  </p>
                </div>

                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {isAbsaDone ? (
                    <>
                      <button type="button" className="btn btn-primary" onClick={() => setActiveModalData({ data: bypData, key: "byp" })} style={{ width: "100%", cursor: "pointer" }}>
                        Explore Case Study
                      </button>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <a href="https://beyond-the-pattern.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: "0.85rem", padding: "8px" }}>Live App</a>
                        <a href="https://github.com/NosiphoX/beyond-the-pattern" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: "0.85rem", padding: "8px" }}>GitHub</a>
                      </div>
                    </>
                  ) : (
                    <div style={{ textAlign: "center", padding: "14px", color: "var(--text-secondary)", fontSize: "0.85rem", background: "rgba(255,255,255,0.04)", borderRadius: "12px" }}>
                      🔒 Complete 4 ABSA tabs to unlock
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL LAYER */}
      {activeModalData && (
        <FlowStateModal
          data={activeModalData.data}
          onClose={() => setActiveModalData(null)}
          openedTabs={unlockedProgress[activeModalData.key] || []}
          setOpenedTabs={(tabs) => {
            const latestTab = tabs[tabs.length - 1];
            if (latestTab) handleTabVisited(activeModalData.key, latestTab);
          }}
        />
      )}
    </>
  );
}

export default HorizontalTrack;