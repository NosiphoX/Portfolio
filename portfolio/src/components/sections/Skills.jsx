// components/sections/Skills.jsx

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCard from "../ui/SkillCard";
import skillCategories from "../../data/skills";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayTextRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "restart none restart none"
      }
    });

    tl.set(overlayRef.current, { "--iris-radius": 150 })
      .set(overlayTextRef.current, { opacity: 0 })
      .to(overlayRef.current, { "--iris-radius": 0, duration: 0.6, ease: "power2.in" })
      .to(overlayTextRef.current, { opacity: 1, duration: 0.3 }, "-=0.1")
      .to({}, { duration: 0.5 })
      .to(overlayTextRef.current, { opacity: 0, duration: 0.3 })
      .to(overlayRef.current, { "--iris-radius": 150, duration: 0.7, ease: "power2.out" }, "-=0.1")
      .from(
        ".skill-card-v2",
        { opacity: 0, y: 40, duration: 0.6, stagger: 0.15, ease: "power2.out", clearProps: "transform" },
        "-=0.3"
      );
  }, { scope: sectionRef });

  return (
    <section id="skills" className="skills-outer" ref={sectionRef}>
      <div className="iris-overlay" ref={overlayRef}>
        <span className="iris-overlay__text" ref={overlayTextRef}>Tools of the Trade</span>
      </div>

      <div className="section">
        <span className="section-tag">How I Work</span>
        <h2 className="section-title">Tools of the Trade</h2>
        <p className="section-description">Five ways I think. Hover to see how they add up.</p>

        <div className="skills-bento">
          {skillCategories.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <a href="#projects" className="skills-closing">
          <span>That's the toolkit. Here's what I've built with it.</span>
          <span className="skills-closing__arrow">↓</span>
        </a>
      </div>
    </section>
  );
}

export default Skills;