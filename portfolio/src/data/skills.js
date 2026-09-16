import { IconEye, IconCode, IconPalette, IconZap, IconPen } from "../components/ui/icons";

const skillCategories = [
  {
    id: 1,
    icon: IconEye,
    category: "AR / XR",
    title: "Immersive Experiences",
    description: "Spatial interfaces, AR overlays, and real-time 3D experiences that blur the line between screen and world.",
    technologies: ["Unity", "WebXR", "Three.js", "Spark AR"],
    accent: "#38bdf8",
    featured: true,
    type: "tilt"
  },
  {
    id: 2,
    icon: IconCode,
    category: "CODE",
    title: "Developer",
    description: "Building responsive, functional interfaces with clean, maintainable code.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    accent: "#8b5cf6",
    type: "terminal"
  },
  {
    id: 3,
    icon: IconPalette,
    category: "VISUAL",
    title: "Designer",
    description: "Thinking in layouts, spacing, and hierarchy before a single line of code is written.",
    technologies: ["Figma", "UI Design", "Typography"],
    accent: "#e8442e",
    type: "palette"
  },
  {
    id: 4,
    icon: IconZap,
    category: "HYBRID",
    title: "Creative Technologist",
    description: "Blending code and design to build interactions that feel intentional, not decorative.",
    technologies: ["GSAP", "Motion Design", "Interaction Design"],
    accent: "#8b5cf6",
    type: "orb"
  },
  {
    id: 5,
    icon: IconPen,
    category: "GROWTH",
    title: "Always Learning",
    description: "Constantly picking up new tools, frameworks, and techniques to keep growing as a developer.",
    technologies: ["Vite", "APIs", "Modern Tooling"],
    accent: "#22c55e",
    type: "ticker"
  }
];

export default skillCategories;