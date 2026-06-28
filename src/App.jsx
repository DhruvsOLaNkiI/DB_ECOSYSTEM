import React, { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ECOSYSTEM_DATA } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import DBAssets from "./pages/DBAssets.jsx";
import DBExpo from "./pages/DBExpo.jsx";
import DBLiquid from "./pages/DBLiquid.jsx";
import EcosystemIntro from "./components/EcosystemIntro.jsx";
import ProductLogo from "./components/ProductLogo.jsx";
import RotatingText from "./components/RotatingText.jsx";
import "./App.css";


function EcoCard({ data }) {
  return (
    <div className="eco-box-col">
      <h3 className="eco-title">
        <ProductLogo product={data.id} />
      </h3>
      <p className="eco-summary">{data.paragraphs[0]}</p>
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
  );
}

function HomePage() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="app">
      <div className="app-bg" aria-hidden="true" />
      <div className="app-content">
      <Navbar />

      <EcosystemIntro />

      <section className="home-hero-bridge">
        <div className="home-hero-bridge-inner">
          <h1 className="hero-title">
            <span className="title-sans">Digital Broker.in</span>
            <br />
            <span className="hero-db-rotate">
              <span className="hero-db-prefix">DB</span>
              <RotatingText
                texts={["Expo", "Asset", "Liquid"]}
                mainClassName="hero-rotating-product title-serif"
                rotationInterval={4500}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                exitTransition={{ duration: 1.1, ease: [0.55, 0, 0.85, 0.36] }}
                splitBy="none"
              />
            </span>
          </h1>
          <p className="hero-desc">
            DigitalBroker is a digital ecosystem for modern-day real estate — an
            ecosystem where buying, managing, and selling are driven by
            future-ready technologies with minimal human intervention.
          </p>
        </div>
      </section>

      <div id="products" className="ecosystem-diagram">
        <svg className="eco-arrows" viewBox="0 0 800 160">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#f97316" />
            </marker>
          </defs>
          <path className="animated-arrow" d="M 400 5 C 400 80, 133 60, 133 145" fill="none" stroke="#f97316" strokeWidth="4" markerEnd="url(#arrow)" />
          <path className="animated-arrow" d="M 400 5 L 400 145" fill="none" stroke="#f97316" strokeWidth="4" markerEnd="url(#arrow)" />
          <path className="animated-arrow" d="M 400 5 C 400 80, 666 60, 666 145" fill="none" stroke="#f97316" strokeWidth="4" markerEnd="url(#arrow)" />
        </svg>

        <div className="eco-boxes">
          {ECOSYSTEM_DATA.map((item) => (
            <EcoCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      {/* Section 4 — Built for the Future */}
      <section className="home-section home-future">
        <div className="home-future-inner">
          <div className="home-future-head">
            <h2 className="home-section-heading">Built for the Future</h2>
            <p className="home-section-sub">
              Continuously evolving. Expanding possibilities.
            </p>
          </div>

          <div className="home-future-layout">
            <div className="home-future-feature">
              <p className="home-future-feature-lead">
                Real estate is entering a new era ,one where technology
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

            <div className="home-future-grid">
              {[
                {
                  title: "Security",
                  desc: "256-bit AES encryption at rest, TLS in transit, and secure access controls. Your data stays protected — we never sell it to third parties.",
                  image:
                    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Global Reach",
                  desc: "A global platform built for investors, buyers, and developers worldwide.",
                  image:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Powered by AI",
                  desc: "AI-driven discovery, ROI analysis, and portfolio insights — automating decisions so you spend less time on manual work.",
                  image:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "Interoperability",
                  desc: "DB Expo, Assets, and Liquid work together seamlessly — with open APIs and integrations that connect to your existing tools.",
                  image:
                    "https://cdn.prod.website-files.com/64503ed6cf0258a291478481/69614ebb442200ae3ecdcac7_ai-developer-ecosystems.png",
                },
              ].map((card) => (
                <article key={card.title} className="home-future-card">
                  <div className="home-future-card-img">
                    <img src={card.image} alt="" loading="lazy" />
                    <div className="home-future-card-img-overlay" aria-hidden="true" />
                  </div>
                  <div className="home-future-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
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
          Discover, Manage, Liquid. All connected. DigitalBroker empowers the
          complete real estate journey.
        </p>
        <button type="button" className="home-cta-btn" onClick={scrollToProducts}>
          Explore Ecosystem →
        </button>
      </section>

      <Footer />
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: targetId === "products" ? "center" : "start",
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/expo" element={<DBExpo />} />
      <Route path="/assets" element={<DBAssets />} />
      <Route path="/liquid" element={<DBLiquid />} />
    </Routes>
  );
}
