
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Shirt } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products & Services", to: "/products" },
  { label: "Printing & Branding", to: "/printing-branding" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Shirt size={27} />
          </span>
          <span>
            <strong>EUNEX</strong>
            <small>UNIFORMS</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div
          id="main-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/get-quote" className="btn btn-primary" onClick={closeMenu}>
            Get Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
