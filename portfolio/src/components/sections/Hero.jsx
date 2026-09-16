import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.set(
        [
          ".hero__divider",
          ".hero__name",
          ".hero__surname",
          ".hero__status",
          ".hero__tagline",
          ".hero__scroll",
          ".hero__index",
        ],
        { opacity: 0 }
      )
        .to(".hero__glow", {
          opacity: 1,
          duration: 1.8,
          onComplete: () => {
            const glow = document.querySelector(".hero__glow");
            if (glow) glow.style.animationPlayState = "running";
          },
        })
        .fromTo(
          ".hero__divider",
          { scaleX: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left" },
          "-=0.6"
        )
        .fromTo(
          ".hero__name",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero__surname",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.7"
        )
        .fromTo(
          ".hero__status",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero__tagline",
          { x: 16, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "+=0.3"
        )
        .fromTo(
          ".hero__scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".hero__index",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .to(".hero__scroll-line", {
          scaleY: 0.6,
          transformOrigin: "top",
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
    },
    { scope: heroRef }
  );

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__frame">
        <div className="hero__name-block">
          <span className="hero__divider" aria-hidden="true"></span>
          <h1 className="hero__name">
            Nosipho
            <span className="hero__surname">Makhathini</span>
          </h1>
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            Available for select work
          </div>
        </div>

        <div className="hero__watermark" aria-hidden="true">
          <span>N.M.</span>
        </div>

        <p className="hero__tagline">
          Designer and creative technologist crafting thoughtful digital
          experiences, one considered decision at a time.
        </p>

        <div className="hero__scroll">
          <span className="hero__scroll-label">Scroll</span>
          <span className="hero__scroll-line" aria-hidden="true"></span>
        </div>

        <span className="hero__index">Welcome!</span>
      </div>
    </section>
  );
}

export default Hero;