import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ECOSYSTEM_DATA } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import Lightfall from "./components/Lightfall.jsx";
import ElectricBorder from "./components/ElectricBorder.jsx";
import DBAssets from "./pages/DBAssets.jsx";
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
      <ElectricBorder
        color="#f97316"
        speed={1}
        chaos={0.09}
        borderRadius={16}
        className="eco-border"
        style={{ width: "100%" }}
      >
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
                {isExpanded ? "read less..." : "read more..."}
              </button>
            )}
          </div>

          <div className="eco-actions">
            <Link to={data.link} className="red-btn" style={{ textDecoration: "none", display: "inline-block" }}>
              {data.buttonText}
            </Link>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app">
      <div className="home-lightfall-bg" aria-hidden="true">
        <Lightfall
          colors={["#A6C8FF", "#F97316", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction={false}
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

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
          Digital Broker is a Digital Ecosystem for Modern Day Real Estate. An
          ecosystem where buying, managing, and selling are driven by
          technologies of the future with least human intervention.
        </p>
      </main>

      <div className="ecosystem-diagram">
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
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/assets" element={<DBAssets />} />
    </Routes>
  );
}
