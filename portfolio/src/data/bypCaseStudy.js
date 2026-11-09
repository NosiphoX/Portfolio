export const bypData = {
  id: "beyond-the-pattern",
  title: "Beyond the Pattern",
  subtitle: "Staging Meaning, Consciousness and Generative AI",
  leadIdea: "Staging meaning and generative AI through blind comparison: discovering that making a test truly blind requires fixing cues long before testing meaning.",
  status: "In progress",
  accentColor: "#D4B595",
  secondaryAccent: "#38BDF8",
  tabs: [
    {
      id: "problem",
      label: "1. Problem",
      headline: "If a text moves you, and you learn no one meant it, does the meaning survive?",
      subheadline: "Generative AI produces fluent writing indistinguishable from human prose. This prototype turns abstract philosophy into an interactive experience.",
      personas: [
        {
          name: "The Outside Observer",
          role: "Participant judging text origin",
          front: "Reads two fluent 50-word passages side by side, attempting to infer conscious intent.",
          back: "Pain point: Human readers naturally project communicative intent onto fluent text (Bender et al., 2021), making blind origin detection deceptively difficult."
        },
        {
          name: "The Extended Reader",
          role: "Interacting with coupled human-AI tools",
          front: "Navigates cognitive extension (Clark, 2008) where authorship lines between person and model blur.",
          back: "Pain point: Traditional binary labels ('Human' vs 'AI') fail to capture distributed thinking where both author and algorithm shape the text."
        }
      ]
    },
    {
      id: "design",
      label: "2. Design",
      designSystem: [
        { item: "Quiet Cyberpunk Visuals", choice: "Desaturated Dark & Thin Monoline (1px)", rationale: "Technology stays in the frame; humanity stays in the serif body typography." },
        { item: "Identical Pane Styling", choice: "Shared Serif Font & Colorless Unselected States", rationale: "Ensures neither answer looks more machine-like until the unmasking split reveal." },
        { item: "Unmasking Redaction Bar", choice: "Center-split sliding bar reveal", rationale: "Reads as unmasking authorship rather than a simple fade or text popup." }
      ],
      aiPrinciples: [
        "Silent Background Collection: Both answers appear simultaneously to hide API streaming delays.",
        "Peer-Pool Isolation: User's writing enters the pool for others, preventing self-recognition bias.",
        "System Prompt Sanitization: Enforces plain prose under 50 words to strip markdown formatting cues."
      ]
    },
    {
      id: "decisions",
      label: "3. Decisions",
      timeline: [
        {
          phase: "Iteration 1 — Fixing the Self-Authorship Flaw",
          feedback: "Comparing user writing directly against AI fails because users immediately recognize their own words.",
          decision: "Built a persistent peer-pool system so users compare a stranger's stored writing against a live AI generation."
        },
        {
          phase: "Iteration 2 — Ethical Data Sourcing",
          feedback: "Scraping social media posts raises severe ethical consent concerns.",
          decision: "Seeded human answers using the HC3 research dataset (Guo et al., 2023) and consented contributions from peers."
        },
        {
          phase: "Iteration 3 — Adapting Closing Reflection",
          feedback: "Static closing text saying 'you could not tell' is invalid for users who guess correctly every round.",
          decision: "Programmed dynamic closing screen logic that adapts questions based on exact participant accuracy."
        }
      ]
    },
    {
      id: "proof",
      label: "4. Proof",
      testingTable: [
        { feature: "5-State Flow Sequence", method: "Writing → Prep → Blind → Guess → Reveal matrix", result: "Pass" },
        { feature: "API Error Handling", method: "Simulated Gemini free-tier provider failure & retry", result: "Pass" },
        { feature: "Peer Pool Persistence", method: "Upstash Redis database integration & fallback checks", result: "Pass" }
      ],
      notTested: [
        "Formal ethics-cleared participant study with measured statistical accuracy",
        "Direct pre- and post-reveal rating scale for shifting text meaningfulness"
      ],
      roadmap: [
        "Implement explicit pre-test consent banner for live user response storage",
        "Add pre-reveal and post-reveal meaningfulness rating sliders",
        "Build internal analytics dashboard for response reaction distributions"
      ]
    }
  ]
};