import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./DBLiquid.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

const STEPS = [
  {
    num: "01",
    title: "List for Free",
    desc: "Create your property listing in minutes at absolutely zero cost.",
  },
  {
    num: "02",
    title: "Let Investors Bid",
    desc: "Sit back as interested investors bid on your property. You maintain total control and sell only to the highest bidder.",
  },
  {
    num: "03",
    title: "Close the Deal Instantly",
    desc: "Skip the endless paperwork delays. Generate your Agreement to Sell and Memorandum of Understanding (MoU) in seconds.",
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
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="dl-hero-serif"
            >
              Sell Your Property Fast. Zero Brokerage. Highest Bidder.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="dl-hero-lead"
            >
              Welcome to DB Liquid—the smartest platform to liquidate your real
              estate. List your property, let verified investors bid, and close
              the deal instantly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="dl-hero-actions"
            >
              <button type="button" className="dl-btn-primary">
                👉 List Your Property for Free
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. Step-by-Step Mechanics */}
        <motion.section
          className="dl-section dl-mechanics"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dl-section-head">
            <span className="dl-eyebrow">How It Works — The DB Liquid Advantage</span>
            <h2 className="dl-section-title">
              Liquidate Your Assets in 3 Simple Steps
            </h2>
          </motion.div>

          <div className="dl-timeline">
            {STEPS.map((step, index) => (
              <motion.article
                key={step.num}
                variants={fadeInUp}
                className="dl-timeline-step"
              >
                <div className="dl-timeline-marker">
                  <span className="dl-timeline-num">{step.num}</span>
                  {index < STEPS.length - 1 && (
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

        {/* 3. The Problem Gap */}
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

        {/* 4. Transparent Pricing */}
        <motion.section
          className="dl-section dl-pricing"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dl-pricing-banner">
            <h2 className="dl-section-title dl-section-title--dark">
              No Commission. No Hidden Brokerage.
            </h2>
            <p className="dl-pricing-copy">
              Traditional selling eats into your profits. With DB Liquid, you
              only pay a flat success fee of <strong>₹11,000</strong>—and only
              after a successful sale. You keep the rest.
            </p>
            <button type="button" className="dl-btn-primary">
              👉 Start Your Free Listing Now
            </button>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
