import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductLogo from "../components/ProductLogo.jsx";
import "./DBExpo.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop";

const REGISTRATION_URL = "https://expo.digitalbroker.in/";

const INTERACTION_ICONS = {
  walkthrough: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
  sales: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  ),
  brochure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  ),
  access: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  ),
};

const PROJECT_INTERACTIONS = [
  {
    icon: "walkthrough",
    title: "Virtual walkthroughs",
    desc: "Step inside developer projects with immersive 3D tours and unit walkthroughs — from lobby to floor plan.",
  },
  {
    icon: "sales",
    title: "Talk to sales directly",
    desc: "Chat or call the builder's sales team in real time from the project booth — no forms, no waiting.",
  },
  {
    icon: "brochure",
    title: "Brochures & pricing",
    desc: "Download brochures, view live price lists, payment plans, and availability — updated unit by unit.",
  },
  {
    icon: "access",
    title: "Easy to access",
    desc: "One click from any device. Compare projects side by side and pick up exactly where you left off.",
  },
];

const EXPLORE_CATEGORIES = [
  {
    title: "Developer Projects",
    desc: "Explore residential and commercial launches from top builders — with full interactivity built in.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    features: [
      "3D project & unit walkthroughs",
      "Direct sales person chat",
      "Brochures, floor plans & pricing",
      "Live inventory & offers",
    ],
    featured: true,
  },
  {
    title: "Finance Partners",
    desc: "Connect with home loan providers, mortgage specialists, and investment advisors — all under the same virtual roof.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    features: [
      "Instant eligibility checks",
      "Compare loan offers",
      "Talk to finance advisors",
    ],
  },
  {
    title: "Property Services",
    desc: "Explore legal, interior, valuation, and post-purchase services from vetted partners without leaving the expo.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    features: [
      "Legal & documentation",
      "Interiors & valuation",
      "Post-purchase support",
    ],
  },
];

const HIGHLIGHTS = [
  {
    num: "01",
    title: "No Physical Travel",
    desc: "Skip the traffic, queues, and weekend expo crowds — discover projects from anywhere, on any device.",
  },
  {
    num: "02",
    title: "One Virtual Roof",
    desc: "Projects, services, and finance partners brought together in a single immersive discovery environment.",
  },
  {
    num: "03",
    title: "Interactive Exploration",
    desc: "Walk through virtual booths, compare offerings side by side, and engage with builders in real time.",
  },
];

const EVENT_DETAILS = [
  "India's first-ever fully virtual property expo",
  "Launching July 2026 — Virtual Property Expo — 2026",
  "Pre-registration now open for homebuyers and investors",
  "Early access to exclusive project launches and offers",
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

export default function DBExpo() {
  return (
    <div className="dx-page">
      <div className="dx-bg" aria-hidden="true" />

      <div className="dx-page-content">
        <Navbar />

        {/* Hero */}
        <motion.section
          className="dx-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="dx-hero-grid">
            <div className="dx-hero-copy">
              <motion.div variants={fadeInUp} className="dx-hero-logo">
                <ProductLogo product="expo" size="lg" />
              </motion.div>
              <motion.h1 variants={fadeInUp} className="dx-h1">
                India&apos;s Virtual Property Discovery Platform
              </motion.h1>
              <motion.p variants={fadeInUp} className="dx-sub">
                DB Expo is a discovery platform designed to replicate property
                expos — eliminating the need to physically visit different
                real estate projects.
              </motion.p>
              <motion.div variants={fadeInUp} className="dx-actions">
                <a
                  href={REGISTRATION_URL}
                  className="dx-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pre-register now
                </a>
                <a href="#pre-register" className="dx-btn-text">
                  Learn more
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="dx-hero-visual">
              <svg
                className="dx-hero-curve"
                viewBox="0 0 200 120"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 0 60 C 60 20, 120 100, 200 40"
                  stroke="rgba(255, 255, 255, 0.14)"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="dx-hero-frame">
                <img
                  src={HERO_IMAGE}
                  alt="Virtual property expo — immersive real estate discovery"
                  className="dx-hero-image"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          className="dx-section dx-about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dx-about-inner">
            <span className="dx-eyebrow">The Platform</span>
            <h2 className="dx-section-title">
              Explore everything under one virtual roof.
            </h2>
            <p className="dx-about-lead">
              DB Expo creates an immersive and interactive environment where
              homebuyers and investors can explore various real estate projects
              and services under one &ldquo;virtual roof&rdquo; — whether they
              are real estate projects or finance partners.
            </p>
          </motion.div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          className="dx-section dx-highlights-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dx-steps-header">
            <div>
              <span className="dx-eyebrow">Why DB Expo</span>
              <h2 className="dx-section-title">
                Property expos, reimagined for the digital age.
              </h2>
            </div>
            <p className="dx-steps-intro">
              A smarter way to discover, compare, and connect — without leaving
              your home.
            </p>
          </motion.div>
          <div className="dx-highlights-grid">
            {HIGHLIGHTS.map((item) => (
              <motion.article
                key={item.num}
                variants={fadeInUp}
                className="dx-highlight-card"
              >
                <span className="dx-highlight-num">{item.num}</span>
                <h3 className="dx-highlight-title">{item.title}</h3>
                <p className="dx-highlight-desc">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Explore categories */}
        <motion.section
          className="dx-section dx-categories"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="dx-section-head">
            <span className="dx-eyebrow">What you can explore</span>
            <h2 className="dx-section-title">
              Developer projects with real interactivity
            </h2>
            <p className="dx-categories-intro">
              Walk through launches, speak with sales teams, and review brochures
              and pricing — all inside DB Expo, without visiting multiple sites.
            </p>
          </motion.div>

          <div className="dx-interactions-grid">
            {PROJECT_INTERACTIONS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="dx-interaction-card"
              >
                <span className="dx-interaction-icon" aria-hidden="true">
                  {INTERACTION_ICONS[item.icon]}
                </span>
                <h3 className="dx-interaction-title">{item.title}</h3>
                <p className="dx-interaction-desc">{item.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="dx-categories-grid">
            {EXPLORE_CATEGORIES.map((cat) => (
              <motion.article
                key={cat.title}
                variants={fadeInUp}
                className={`dx-category-card${cat.featured ? " dx-category-card--featured" : ""}`}
              >
                <div className="dx-category-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="dx-category-image"
                  />
                </div>
                <div className="dx-category-body">
                  <h3 className="dx-category-title">{cat.title}</h3>
                  <p className="dx-category-desc">{cat.desc}</p>
                  <ul className="dx-category-features">
                    {cat.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  {cat.featured && (
                    <a
                      href={REGISTRATION_URL}
                      className="dx-category-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore on DB Expo →
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Event banner */}
        <motion.section
          className="dx-event-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="dx-event-banner-inner">
            <div className="dx-event-badge">July 2026</div>
            <div className="dx-event-content">
              <span className="dx-eyebrow">Coming Soon</span>
              <h2 className="dx-event-heading">
                Virtual Property Expo — 2026
              </h2>
              <p className="dx-event-copy">
                DB Expo is launching its first-ever virtual expo in July 2026,
                called &ldquo;Virtual Property Expo — 2026.&rdquo; Be among the
                first to experience India&apos;s largest virtual property
                discovery event.
              </p>
              <ul className="dx-event-list">
                {EVENT_DETAILS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Pre-registration CTA */}
        <motion.section
          id="pre-register"
          className="dx-cta"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="dx-cta-eyebrow">Pre-registration</span>
          <h2 className="dx-cta-heading">
            Reserve your spot at Virtual Property Expo — 2026
          </h2>
          <p className="dx-cta-sub">
            Sign up early to get priority access, exclusive project previews,
            and special launch offers from participating builders and finance
            partners.
          </p>
          <a
            href={REGISTRATION_URL}
            className="dx-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pre-register now
          </a>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
