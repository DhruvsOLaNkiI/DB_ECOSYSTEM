import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Prism from "../components/Prism.jsx";
import "./DBAssets.css";

const CAROUSEL_CARDS = [
  {
    title: "Track portfolio value in real-time",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Automate rent & vendor payments",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Manage commercial & residential",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Global real estate insights",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "AI-driven market analysis",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
  }
];

const SPLIT_SECTIONS = [
  {
    id: "spend",
    title: "Automate your spend, end-to-end",
    desc: "Cut out the manual work and save your team hours every week. Fees may apply.",
    bullets: [
      "Issue physical and virtual cards for you and your team",
      "Keep team spend secure with approvals and controls",
      "Easily manage and reconcile expenses in-app with AI automations"
    ],
    buttonText: "Explore expense tools",
    reverse: false
  }
];

// Animation Variants (Revolut style: smooth, springy, elegant fade-ups)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export default function DBAssets() {
  return (
    <div className="da-page">
      <div className="da-prism-bg" aria-hidden="true">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          suspendWhenOffscreen
        />
      </div>

      <div className="da-page-content">
      <Navbar />

      {/* Hero — full screen */}
      <motion.section 
        className="da-hero"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="da-hero-inner">
          <motion.h1 variants={fadeInUp} className="da-h1">
            The all-in-one business account
          </motion.h1>
          <motion.p variants={fadeInUp} className="da-sub">
            Scale and save with global payments, multi-currency accounts, and smarter spending.
          </motion.p>
          <motion.div variants={fadeInUp} className="da-actions">
            <button className="da-btn-primary">Open an account</button>
            <button className="da-btn-ghost">Speak to Sales</button>
          </motion.div>
        </div>
      </motion.section>

      {/* Carousel — below the fold */}
      <motion.section
        className="da-carousel-wrap"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp} className="da-carousel-section">
          <div className="da-carousel-track">
            {CAROUSEL_CARDS.map((card, idx) => (
              <div key={idx} className="da-carousel-card">
                <h3 className="da-card-title">{card.title}</h3>
                <div className="da-card-img-wrapper">
                  <img src={card.image} alt={card.title} className="da-card-img" />
                </div>
              </div>
            ))}
          </div>
          <div className="da-carousel-dots">
            {CAROUSEL_CARDS.map((_, idx) => (
              <span key={idx} className={`da-dot ${idx === 0 ? 'active' : ''}`}></span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Split Sections */}
      {SPLIT_SECTIONS.map((section, index) => (
        <motion.section 
          key={section.id}
          className={`da-split-section ${section.reverse ? "reverse" : ""}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="da-split-text">
            <h2 className="da-split-h2">{section.title}</h2>
            <p className="da-split-desc">{section.desc}</p>
            <ul className="da-bullet-list">
              {section.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <button className="da-btn-primary">{section.buttonText}</button>
          </motion.div>
          <motion.div variants={fadeInUp} className="da-split-visual">
            <span className="da-visual-placeholder">Image {index + 1}</span>
          </motion.div>
        </motion.section>
      ))}

      {/* CTA */}
      <motion.section 
        className="da-cta"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="da-cta-heading">Ready to take control?</h2>
        <p className="da-cta-sub">Join hundreds of investors already using DB Assets.</p>
        <button className="da-btn-primary">Start for Free — It's Free</button>
      </motion.section>

      <footer className="da-footer">
        <span>© 2026 DigitalBroker. All rights reserved.</span>
      </footer>
      </div>
    </div>
  );
}
