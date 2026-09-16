// components/layout/Navbar.jsx

import { useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, isAtTop } = useScrollDirection();

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const headerClasses = [
    "site-header",
    direction === "down" && !isAtTop && !menuOpen ? "site-header--hidden" : "",
    isAtTop ? "site-header--transparent" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <nav className="navbar">
        <a href="#hero" className="navbar__brand" aria-label="Go to home section">
          Portfolio
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;