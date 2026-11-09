export const absaData = {
  id: "absa-nextgen",
  title: "ABSA NextGen Wealth Studio",
  subtitle: "First Five Years Financial Mentor & Planning Platform",
  leadIdea: "Designing a digital financial mentor that transforms early-career money anxiety into visual, 5-year clarity.",
  status: "In progress",
  accentColor: "#E2364C",
  secondaryAccent: "#409062",
  tabs: [
    {
      id: "problem",
      label: "1. Problem",
      headline: "Earning R50k a month, R400k sitting in cash, and still terrified to invest.",
      subheadline: "Banking apps show where your money went. Nobody shows where it could go.",
      personas: [
        {
          name: "Sipho Ndlovu",
          role: "Data Scientist (27, Cape Town)",
          front: "Earns R62k gross, invests R16k/mo, but keeps R400k idle in cash due to market anxiety.",
          back: "Pain point: Financially lonely with no 5-year vision. Needs visual reassurance that his money is working and a clear roadmap for long-term wealth."
        },
        {
          name: "Lerato Mokoena",
          role: "Junior Law Associate (23, Joburg)",
          front: "Earns R38k gross, but rent, car, and lifestyle costs leave R0 in savings and R15k credit debt.",
          back: "Pain point: Living paycheck to paycheck despite good income. Needs a non-judgmental coach to prioritize debt payoff and automate early investing."
        }
      ]
    },
    {
      id: "design",
      label: "2. Design",
      designSystem: [
        { item: "Palette Strategy", choice: "Primary Red (#E2364C) to Trust Blue (#409062)", rationale: "Softens ABSA's bold brand red with calming blue gradients to reduce financial anxiety." },
        { item: "Typography", choice: "Inter (Headings) & Work Sans (Body)", rationale: "Inter provides structural authority; Work Sans ensures effortless reading across dense data." },
        { item: "Explainer Layer", choice: "Embedded Tooltips [i] & Expandable Tiles", rationale: "Integrates context inline so financial learning happens naturally while navigating." }
      ],
      aiPrinciples: [
        "Money Snapshot: Visualizes net worth, PAYE tax, TFSA, and RA benefits in ZAR.",
        "Strategy Tracks: 4 pre-defined 5-year journeys (First Property, Balanced, Global, Reset).",
        "Simulation Lab: Interactive 'what-if' studios (Rent vs Buy, Luxury Car vs Invest)."
      ]
    },
    {
      id: "decisions",
      label: "3. Decisions",
      timeline: [
        {
          phase: "Iteration 1 — Product Strategy Shift",
          feedback: "Banking apps focus on past transaction history, which fuels spending guilt.",
          decision: "Positioned the platform as a forward-looking 5-year mentor before pushing bank products."
        },
        {
          phase: "Iteration 1 — South African Localization",
          feedback: "Generic wealth tools fail because they ignore SA tax and inflation dynamics.",
          decision: "Built calculations around PAYE tax brackets, TFSA limits, RA tax relief, and ZAR inflation costs."
        },
        {
          phase: "Iteration 2 — Micro-Explainer Architecture",
          feedback: "Users get overwhelmed when financial terms require navigating away to a glossary.",
          decision: "Embedded hover tooltips [i] and contextual sidebars directly on metrics and charts."
        }
      ]
    },
    {
      id: "proof",
      label: "4. Proof",
      testingTable: [
        { feature: "Money Snapshot", method: "PAYE & Net worth calculation tests", result: "Pass" },
        { feature: "Simulation Lab", method: "Property vs Rent math model validation", result: "Pass" },
        { feature: "Strategy Tracks", method: "5-Year milestone slider responsiveness", result: "Pass" }
      ],
      notTested: [
        "Live open-banking API data synchronization",
        "Automated SARS tax rate updates via external webhooks"
      ],
      roadmap: [
        "Connect live ABSA account data feeds",
        "Add direct advisor booking integration within Strategy Tracks",
        "Deploy full interactive Simulation Lab to production"
      ]
    }
  ]
};