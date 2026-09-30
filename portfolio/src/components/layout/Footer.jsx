// components/layout/Footer.jsx

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="nav-logo footer-logo">N.M</span>
          <p>Building thoughtful, interactive web experiences.</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/NosiphoX" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <p className="footer-copyright">© {year} Nosipho Makhathini. All rights reserved.</p>
    </footer>
  );
}

export default Footer;