// components/sections/About.jsx

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import timeline from "../../data/timeline";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const lineFillRef = useRef(null);

  useGSAP(() => {
    // each step dissolves in (blur to sharp), matching the Selected Work effect
    gsap.utils.toArray(".about-step").forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // progress line fills as you scroll through the timeline
    gsap.fromTo(
      lineFillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="about-layout">
        <div className="about-intro">
          <span className="section-tag">About</span>
          <h2 className="section-title">A designer's mind, a developer's hands.</h2>
          <p className="about-intro__text">
            I'm Nosipho, a front-end developer who thinks like a designer. I care about the small
            decisions: how a page opens, how information arrives, what moves and why.
          </p>
          <p className="about-intro__text">
            I started with plain HTML, CSS and JavaScript, moved into React, and I'm now pulling in
            motion and immersive tech like GSAP and AR/XR to build interfaces that feel like
            experiences rather than documents.
          </p>
        </div>

        <div className="about-process">
          <span className="about-process__label">How this site was designed</span>

          <div className="about-timeline" ref={listRef}>
            <span className="about-timeline__line">
              <span className="about-timeline__fill" ref={lineFillRef} />
            </span>

            {timeline.map((item) => (
              <div className="about-step" key={item.id}>
                <span className="about-step__dot" />
                <span className="about-step__number">{item.step}</span>
                <h3 className="about-step__title">{item.title}</h3>
                <p className="about-step__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;