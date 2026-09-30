// components/ui/HorizontalTrack.jsx

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectSlide from "./ProjectSlide";

gsap.registerPlugin(ScrollTrigger);

function HorizontalTrack({ projects }) {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const totalScroll = track.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(progressRef.current, { scaleX: self.progress });
        }
      }
    });

    gsap.utils.toArray(".project-slide").forEach((slide) => {
      gsap.fromTo(
        slide,
        { opacity: 0.25, filter: "blur(6px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTween,
            start: "left 65%",
            end: "left 35%",
            scrub: true
          }
        }
      );
    });

    return () => scrollTween.scrollTrigger?.kill();
  }, { scope: wrapperRef });

  return (
    <div className="horizontal-wrapper" ref={wrapperRef}>
      <div className="horizontal-track" ref={trackRef}>
        {projects.map((project) => (
          <ProjectSlide key={project.id} project={project} />
        ))}
      </div>

      <div className="horizontal-progress">
        <span className="horizontal-progress__bar" ref={progressRef} />
      </div>
    </div>
  );
}

export default HorizontalTrack;