function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-card glass-panel">
        <div className="hero-content">
          <p className="hero-eyebrow">Front-End Web Developer</p>

          <h1 className="hero-title">Nosipho Makhathini</h1>

          <p className="hero-subtitle">
            I create thoughtful, interactive web experiences through React,
            JavaScript, UI design, and creative front-end development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-brand">
          <div className="logo-badge">N.M</div>

          <ul className="tech-icons">
            <li>React</li>
            <li>JavaScript</li>
            <li>UI/UX</li>
            <li>API</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;