export const flowstateData = {
  title: "FlowState",
  subtitle: "AI-Powered Daily Curator & Smart Route Planner",
  leadIdea: "Designing AI that explains itself, and being able to say why behind every trade-off.",
  status: "In progress",
  tabs: [
    {
      id: "problem",
      label: "1. Problem",
      headline: "Three apps, one day, and still no idea when to leave.",
      subheadline: "Being late is a feeling before it's an event.",
      personas: [
        {
          name: "Minenhle",
          role: "Student & Freelancer",
          front: "Juggles morning yoga, campus lectures, and client deadlines across 3 separate apps.",
          back: "Pain point: Constant anxiety over travel delays. Needs proactive leave alerts based on live traffic, not static alarm clocks."
        },
        {
          name: "Njabulo",
          role: "Junior Designer",
          front: "Tightly scheduled between client meetings, gym sessions, and team syncs.",
          back: "Pain point: Manual schedule adjustments take too long. Needs smart routing recommendations with clear reasoning."
        }
      ]
    },
    {
      id: "design",
      label: "2. Design",
      designSystem: [
        { item: "Typography", choice: "Inter & System UI", rationale: "Ensures maximum legibility for glanceable route cards while running." },
        { item: "Palette", choice: "Deep Void (#0b0b0f) & Electric Lavender (#8b5cf6)", rationale: "Lowers eye strain during early morning or late-night planning." },
        { item: "Hierarchy", choice: "Priority Time Card", rationale: "Highlights recommended departure time in the largest weight on the dashboard." }
      ],
      aiPrinciples: [
        "Every AI suggestion must explicitly explain itself ('Leave at 08:15 because...').",
        "Never alter a user's calendar without explicit confirmation.",
        "Allow instant user override on any automated route suggestion."
      ],
      comparisons: [
        { wireframe: "/flowstate/dashboard-wireframe.png", built: "/flowstate/dashboard-built.png", caption: "Dashboard Layout Iteration" },
        { wireframe: "/flowstate/routes-wireframe.png", built: "/flowstate/routes-built.png", caption: "Route Card & ETA Display" }
      ]
    },
    {
      id: "decisions",
      label: "3. Decisions",
      timeline: [
        {
          phase: "Iteration 1 — Navigation Scope Cut",
          feedback: "Building full custom turn-by-turn navigation distracts from core scheduling problem.",
          decision: "Pivoted from navigation app to AI Daily Curator; offloaded mapping calculations to live geocoding APIs on save."
        },
        {
          phase: "Iteration 1 — API Security",
          feedback: "Exposing client-side API keys poses security risks during demonstration.",
          decision: "Moved server-side operations and travel time calculations to backend endpoints."
        },
        {
          phase: "Iteration 2 — Accessibility",
          feedback: "Standard alert() popups disrupt screen readers and feel unpolished.",
          decision: "Replaced alert modals with dynamic role='alert' toast notifications."
        }
      ]
    },
    {
      id: "proof",
      label: "4. Proof",
      testingTable: [
        { feature: "Auth / Session", method: "Manual test matrix", result: "Pass" },
        { feature: "Route Geocoding", method: "API fallback check", result: "Pass" },
        { feature: "Form Validation", method: "Edge-case inputs", result: "Pass" }
      ],
      notTested: [
        "Automated end-to-end integration tests",
        "Large-scale user testing outside controlled environment"
      ],
      roadmap: [
        "Fix recurring-event dashboard integration bug",
        "Conduct live testing session at upcoming exhibition",
        "Integrate calendar syncing API"
      ]
    }
  ]
};