import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const TABS = [
  { id: "home",       label: "Home",       href: "/" },
  { id: "expo",       label: "DB Expo",    href: "/expo" },
  { id: "assets",     label: "DB Assets",  href: "/assets" },
  { id: "liquid",     label: "DB Liquid",  href: "/liquid" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeId = TABS.find((t) => t.href === location.pathname)?.id ?? "home";

  return (
    <div className="topbar-container">
      <Link to="/" className="main-logo">
        Digital<span className="logo-accent">Broker</span>
      </Link>

      <nav className="topbar" role="navigation" aria-label="Main navigation">
        <div className="topbar-links">
          {TABS.map((tab) => (
            <Link
              key={tab.id}
              to={tab.href}
              className={`topbar-tab ${activeId === tab.id ? "is-active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6"  x2="21" y2="6"  />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`} role="menu">
        {TABS.map((tab) => (
          <Link
            key={tab.id}
            to={tab.href}
            role="menuitem"
            className={`mobile-tab ${activeId === tab.id ? "is-active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
