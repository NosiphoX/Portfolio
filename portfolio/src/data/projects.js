const projects = [
  {
    id: 1,
    category: "Product Concept / Web App",
    title: "ABSA NextGen Wealth Studio",
    description: "A digital companion concept for ABSA aimed at young South African professionals in their first five years of earning — combining a personalized Money Snapshot, Strategy Tracks, and a Simulation Lab to guide financial decisions.",
    story: "This started as a brief from ABSA's Digital Arts department: design a companion product for young professionals earning well but overwhelmed by decisions — car or investment, rent in the city or buy in the suburbs, how much to save versus spend. Rather than jumping straight into React, I treated this as a product definition exercise first — the kind of document you'd actually send to a stakeholder to get a pilot greenlit. The result centers on three pillars: a Money Snapshot that reads your financial picture at a glance, Strategy Tracks that map out what a strong first five years could look like, and a Simulation Lab for testing real decisions before making them. Built with React and styled with a bold pink-to-blue gradient system meant to feel more like a modern fintech product than a bank micro-site.",
    technologies: ["React", "CSS"],
    github: "https://github.com/NosiphoX/DIGA4015A-ABSANext-Gen",
    liveDemo: "https://nosiphox.github.io/DIGA4015A-ABSANext-Gen/",
    image: null,
    accent: "#E8442E",
    status: "complete"
  },
  {
    id: 2,
    category: "Personal Portfolio",
    title: "I.M Portfolio",
    description: "An early personal portfolio built while learning HTML, CSS, and JavaScript, featuring case studies of early web projects.",
    story: "This was one of my first real attempts at building something that looked like a finished product rather than a class exercise — built entirely in vanilla HTML, CSS, and JavaScript before I'd touched a framework. Themed as 'DONDA,' it leaned into a soft, pastel-to-purple palette and an editorial, almost zine-like layout, with case studies walking through a handful of early design and writing projects. It's not polished by today's standards, but it's the site where I first learned how much thought goes into things like spacing, hierarchy, and tone — lessons that still shape how I approach every project since, including this one.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NosiphoX/DIGA3008A-I.M",
    liveDemo: "https://nosiphox.github.io/DIGA3008A-I.M/",
    image: null,
    accent: "#8B5CF6",
    status: "complete"
  },
  {
    id: 3,
    category: "In Progress",
    title: "This Portfolio",
    description: "The site you're looking at right now — still being built, one section at a time.",
    story: "Rather than a static résumé, the goal here was to build something that feels like an interactive experience — every section intentional, every interaction meaningful. I rebuilt it from scratch in React and Vite after starting with plain HTML/CSS/JS, wanted the layout to constantly change rhythm instead of repeating the same stacked-section pattern, and I'm drawing on sites like Uncommon Studio for restraint — dissolving reveals, generous negative space, motion that feels considered rather than flashy. Skills are shown through live micro-interactions instead of progress bars, Selected Work is a pinned horizontal gallery instead of a static list, and this card you're reading right now is part of that same philosophy: nothing here should just sit there — it should do something.",
    technologies: ["React", "Vite", "GSAP"],
    github: null,
    liveDemo: null,
    image: null,
    accent: "#38bdf8",
    status: "in-progress"
  }
];

export default projects;