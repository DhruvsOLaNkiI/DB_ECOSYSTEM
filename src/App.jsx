import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ECOSYSTEM_DATA } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import DBAssets from "./pages/DBAssets.jsx";
import DBExpo from "./pages/DBExpo.jsx";
import DBLiquid from "./pages/DBLiquid.jsx";
import EcosystemIntro from "./components/EcosystemIntro.jsx";
import "./App.css";


function EcoCard({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // If there's more than one paragraph, we consider it expandable
  const isExpandable = data.paragraphs.length > 1;

  return (
    <div className="eco-box-col">
      {data.id === "expo" ? (
        <h3 className="eco-title eco-title-expo" aria-label="DB Expo">
          <span className="eco-title-db">DB</span>
          <span className="eco-title-name">Expo</span>
        </h3>
      ) : (
        <h3 className="eco-title">{data.title}</h3>
      )}
      <div className="eco-box">
        <div className={`eco-copy ${isExpandable && isExpanded ? "is-expanded" : ""}`}>
          <div className="eco-copy-text">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {isExpandable && (
            <button
              className="read-more-link"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        <div className="eco-actions">
          {data.link.startsWith("http") ? (
            <a
              href={data.link}
              className="red-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              {data.buttonText}
            </a>
          ) : (
            <Link
              to={data.link}
              className="red-btn"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              {data.buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app">
      <div className="app-content">
      <Navbar />

      <main className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-icon">✦</span> Digital Ecosystem
        </div>
        <h1 className="hero-title">
          <span className="title-sans">Digital Broker.</span>
          <br />
          <span className="title-serif">Modern Real Estate.</span>
        </h1>
        <p className="hero-desc">
          DigitalBroker is a digital ecosystem for modern-day real estate — an
          ecosystem where buying, managing, and selling are driven by
          future-ready technologies with minimal human intervention.
        </p>
      </main>

      <div id="products" className="ecosystem-diagram">
        <svg className="eco-arrows" viewBox="0 0 800 160">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="rgba(15, 23, 42, 0.8)" />
            </marker>
          </defs>
          <path className="animated-arrow" d="M 400 5 C 400 80, 133 60, 133 145" fill="none" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="4" markerEnd="url(#arrow)" />
          <path className="animated-arrow" d="M 400 5 L 400 145" fill="none" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="4" markerEnd="url(#arrow)" />
          <path className="animated-arrow" d="M 400 5 C 400 80, 666 60, 666 145" fill="none" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="4" markerEnd="url(#arrow)" />
        </svg>

        <div className="eco-boxes">
          {ECOSYSTEM_DATA.map((item) => (
            <EcoCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      <EcosystemIntro />

      {/* Section 4 — Built for the Future */}
      <section className="home-section home-future">
        <div className="home-future-inner">
          <div className="home-future-layout">
            <div className="home-future-aside">
              <h2 className="home-section-heading">Built for the Future</h2>
              <p className="home-section-sub">
                Continuously evolving. Expanding possibilities.
              </p>
              <div className="home-future-feature">
                <p className="home-future-feature-lead">
                  Real estate is entering a new era — one where technology
                  connects every step of the journey.
                </p>
                <p className="home-future-feature-body">
                  DigitalBroker is building the infrastructure for that future:
                  intelligent platforms that reduce friction, increase
                  transparency, and unlock value for everyone in the
                  ecosystem.
                </p>
                <ul className="home-future-feature-list">
                  <li>AI-driven property discovery and lead generation</li>
                  <li>Unified asset management across portfolios</li>
                  <li>Liquid markets for real estate investment</li>
                </ul>
              </div>
            </div>

            <div className="home-future-grid">
              {[
                {
                  title: "Scalable Ecosystem",
                  desc: "Built to scale with your business and adapt to future needs.",
                  image:
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Open & Integrated",
                  desc: "APIs and integrations that connect with your favorite tools.",
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Global Reach",
                  desc: "A global platform built for investors, buyers, and developers worldwide.",
                  image:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Future-Ready",
                  desc: "New products and features are constantly being developed.",
                  image:
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
                },
              ].map((card) => (
                <article key={card.title} className="home-future-card">
                  <div className="home-future-card-img">
                    <img src={card.image} alt="" loading="lazy" />
                    <div className="home-future-card-img-overlay" aria-hidden="true" />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="home-section home-cta-banner">
        <h2 className="home-cta-title">
          Three Products. One Connected Real Estate Ecosystem.
        </h2>
        <p className="home-cta-desc">
          Discover, Manage, Invest. All connected. DigitalBroker empowers the
          complete real estate journey.
        </p>
        <button className="home-cta-btn">Explore Ecosystem →</button>
      </section>

      <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/expo" element={<DBExpo />} />
      <Route path="/assets" element={<DBAssets />} />
      <Route path="/liquid" element={<DBLiquid />} />
    </Routes>
  );
}
