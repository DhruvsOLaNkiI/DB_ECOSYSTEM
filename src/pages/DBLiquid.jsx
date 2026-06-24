import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./DBLiquid.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

const MECHANICS = [
  {
    num: "01",
    title: "Smart Baseline",
    desc: "A seller instantly benchmarks asset expectations against localized data indexes — replacing guesswork with evidence-backed starting points.",
  },
  {
    num: "02",
    title: "Open Order Book",
    desc: "Verified buyers place transparent, competitive bids, creating a live, healthy bidding pool with full visibility into market demand.",
  },
  {
    num: "03",
    title: "Real-Time Optimization",
    desc: "The matching engine maintains transparency logs and pushes instant alerts to drive competitive valuation peaks within the bidding window.",
  },
  {
    num: "04",
    title: "The Escrow Lock",
    desc: "Once a bid is accepted, the platform transitions the transaction into a secure legal lock — binding commitment before paperwork begins.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export default function DBLiquid() {
  return (
    <div className="dl-page">
      <div className="dl-bg" aria-hidden="true" />
      <div className="dl-page-content">
        <Navbar />

        {/* 1. Hero — Core Vision */}
        <motion.section
          className="dl-hero-editorial"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="dl-hero-photo" aria-hidden="true">
            <img src={HERO_IMAGE} alt="" className="dl-hero-photo-img" />
            <div className="dl-hero-photo-overlay" />
          </div>
          <div className="dl-hero-editorial-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="dl-hero-eyebrow"
            >
              <span className="dl-hero-eyebrow-brand">DB Liquid</span>
              <span className="dl-hero-eyebrow-dot" aria-hidden="true" />
              <span>Core Vision</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="dl-hero-serif"
            >
              Dissolving Real Estate Inertia.
              <br />
              We Build True Market Liquidity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="dl-hero-lead"
            >
              A deep dive into how DB Liquid replaces stagnant, traditional
              secondary property sales with an agile, transparent, and
              time-bound bidding mechanism.
            </motion.p>
          </div>
        </motion.section>

        {/* 2. The Problem Gap */}
        <motion.section
          className="dl-section dl-gap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dl-section-head dl-section-head--center">
            <span className="dl-eyebrow dl-eyebrow--dark">Knowledge & Strategy</span>
            <h2 className="dl-section-title dl-section-title--dark">
              The Problem Gap
            </h2>
            <p className="dl-section-intro">
              Why the current secondary market is structurally broken — and what
              a liquidity-first model changes.
            </p>
          </motion.div>

          <div className="dl-gap-grid">
            <motion.article variants={fadeInUp} className="dl-gap-col dl-gap-col--stagnant">
              <span className="dl-gap-label">The Stagnant Market</span>
              <h3 className="dl-gap-heading">Frozen capital, opaque negotiations.</h3>
              <p>
                Traditional secondary real estate suffers from capital trapped in
                illiquid assets. Sellers anchor to arbitrary speculative pricing.
                Buyers engage in blind counter-negotiations with no visibility
                into competing interest. Neither side knows the true market
                demand — and transactions stall for months, sometimes years.
              </p>
              <ul className="dl-gap-points">
                <li>Speculative pricing disconnected from demand</li>
                <li>Blind counter-offers with zero transparency</li>
                <li>No mechanism for real-time price discovery</li>
                <li>Capital locked with no competitive urgency</li>
              </ul>
            </motion.article>

            <motion.article variants={fadeInUp} className="dl-gap-col dl-gap-col--liquid">
              <span className="dl-gap-label">The Liquidity Market</span>
              <h3 className="dl-gap-heading">Dynamic discovery, time-bound clarity.</h3>
              <p>
                DB Liquid injects dynamic price discovery into secondary sales.
                True real-time market demand dictates the exact valuation of an
                asset within a fixed, competitive time window. Buyers compete
                openly. Sellers see the market speak — not guess.
              </p>
              <ul className="dl-gap-points">
                <li>Localized data indexes set intelligent baselines</li>
                <li>Open order books with verified buyer competition</li>
                <li>Transparent bidding within defined time windows</li>
                <li>Market-driven valuation peaks, not arbitrary asks</li>
              </ul>
            </motion.article>
          </div>
        </motion.section>

        {/* 3. Step-by-Step Mechanics */}
        <motion.section
          className="dl-section dl-mechanics"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dl-section-head">
            <span className="dl-eyebrow">How It Works</span>
            <h2 className="dl-section-title">
              The technical blueprint of a transaction.
            </h2>
            <p className="dl-section-intro dl-section-intro--light">
              Not a listing shop — a structured mechanism that turns secondary
              sales into competitive, time-bound market events.
            </p>
          </motion.div>

          <div className="dl-timeline">
            {MECHANICS.map((step, index) => (
              <motion.article
                key={step.num}
                variants={fadeInUp}
                className="dl-timeline-step"
              >
                <div className="dl-timeline-marker">
                  <span className="dl-timeline-num">{step.num}</span>
                  {index < MECHANICS.length - 1 && (
                    <span className="dl-timeline-line" aria-hidden="true" />
                  )}
                </div>
                <div className="dl-timeline-body">
                  <h3 className="dl-timeline-title">{step.title}</h3>
                  <p className="dl-timeline-desc">{step.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* 4. Trust & Risk Protection */}
        <motion.section
          className="dl-section dl-escrow"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dl-section-head dl-section-head--center">
            <span className="dl-eyebrow dl-eyebrow--dark">Trust & Risk Protection</span>
            <h2 className="dl-section-title dl-section-title--dark">
              Token Money Escrow Contract
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="dl-escrow-layout">
            <div className="dl-escrow-main">
              <p className="dl-escrow-lead">
                Serious intent requires serious commitment. Our escrow
                architecture ensures every accepted bid carries binding weight —
                protecting sellers from casual offers and buyers from wasted
                momentum.
              </p>

              <div className="dl-escrow-rule">
                <div className="dl-escrow-rule-header">
                  <span className="dl-escrow-badge">48-Hour Freeze</span>
                  <h3 className="dl-escrow-rule-title">The exclusivity lock.</h3>
                </div>
                <p>
                  The moment a seller accepts a top bid, the asset locks
                  exclusively to that buyer. No re-listing. No parallel
                  negotiations. The winning buyer must deposit a pre-calculated{" "}
                  <strong>2% token money</strong> amount into escrow within{" "}
                  <strong>48 hours</strong> to secure definitive exclusivity
                  rights.
                </p>
                <p>
                  This freeze stage exists to prevent casual or non-serious
                  offers from derailing a seller&apos;s momentum. Token money
                  signals commitment. Escrow protects both parties. The
                  transaction advances only when intent is proven.
                </p>
              </div>
            </div>

            <aside className="dl-escrow-aside">
              <div className="dl-escrow-stat">
                <span className="dl-escrow-stat-value">48h</span>
                <span className="dl-escrow-stat-label">Exclusivity window</span>
              </div>
              <div className="dl-escrow-stat">
                <span className="dl-escrow-stat-value">2%</span>
                <span className="dl-escrow-stat-label">Token money deposit</span>
              </div>
              <div className="dl-escrow-stat">
                <span className="dl-escrow-stat-value">1</span>
                <span className="dl-escrow-stat-label">Accepted bid per asset</span>
              </div>
              <p className="dl-escrow-aside-note">
                Escrow holds token money until legal completion or governed
                release — protecting seller momentum and buyer exclusivity.
              </p>
            </aside>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
