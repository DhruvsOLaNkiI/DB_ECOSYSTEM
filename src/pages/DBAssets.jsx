import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./DBAssets.css";

const SERVICES = [
  {
    title: "Property management with AI",
    desc: "AI-powered day-to-day operations across apartments and buildings — maintenance, vendors, and tenant requests.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "ROI tracking",
    desc: "Real-time return on investment per property, with benchmarks against your goals.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Yearly profit reports",
    desc: "Clean year-end statements: income, expenses, net profit, and forecasts for next year.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Lease & tenant admin",
    desc: "Lease renewals, tenant screening, deposits, and documents — all organized in one place.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Compliance & insurance",
    desc: "Stay aligned with local regulations, insurance schedules, and safety inspections.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
  },
];

const HERO_IMAGE = "/assets/portfolio-analytics-hero.png";

const DASHBOARD_IMAGE = "/assets/portfolio-analytics-hero.png";

const GET_STARTED_URL =
  "https://dbasset.digitalbroker.in/sign-in?redirect_url=%2F";

const STEPS = [
  {
    num: "01",
    title: "Onboard Your Assets",
    desc: "Quickly add your residential or commercial properties.",
  },
  {
    num: "02",
    title: "Let AI Do the Math",
    desc: "Our engine instantly calculates your exact ROI and factors in local market trends.",
  },
  {
    num: "03",
    title: "Optimize & Grow",
    desc: "Receive proactive alerts on when market conditions favor refinancing, holding, or selling.",
  },
];

const AUDIENCES = [
  {
    title: "For the Individual Investor",
    desc: "Track your first few rental properties like a pro without needing a finance degree.",
  },
  {
    title: "For the Portfolio Builder",
    desc: "Manage across multiple states or asset classes with unified, real-time metrics.",
  },
  {
    title: "For Family Offices & Syndicates",
    desc: "Institutional-grade reporting, precise yield tracking, and data-backed exit strategies.",
  },
];

const BENEFITS = [
  "Transparent fees — no hidden management charges",
  "Dedicated portfolio manager for every owner",
  "Quarterly business reviews with your manager",
  "Live dashboard with ROI and profit per property",
  "Vetted local maintenance and vendor network",
  "Secure tenant payment handling and escrow",
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

export default function DBAssets() {
  return (
    <div className="da-page">
      <div className="da-bg" aria-hidden="true" />

      <div className="da-page-content">
        <Navbar />

        {/* Hero — two-column layout (text left, visual right) */}
        <motion.section
          className="da-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="da-hero-grid">
            <div className="da-hero-copy">
              <motion.h1 variants={fadeInUp} className="da-h1">
                Everything your portfolio needs, in one place.
              </motion.h1>
              <motion.p variants={fadeInUp} className="da-sub">
                From the first tenant to the year-end statement, DB Assets handles
                the operations so you can focus on growing your assets.
              </motion.p>
              <motion.div variants={fadeInUp} className="da-actions">
                <a
                  href={GET_STARTED_URL}
                  className="da-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
                <button type="button" className="da-btn-text">
                  Speak to sales
                </button>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="da-hero-visual">
              <svg
                className="da-hero-curve"
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
              <div className="da-hero-frame">
                <img
                  src={HERO_IMAGE}
                  alt="DB Assets portfolio analytics dashboard"
                  className="da-hero-image"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* How it works */}
        <motion.section
          className="da-section da-steps-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="da-steps-header">
            <div>
              <span className="da-eyebrow">How It Works</span>
              <h2 className="da-section-title">
                The 3-step process to smarter asset management.
              </h2>
            </div>
            <p className="da-steps-intro">
              Three simple steps to onboard your properties, let AI analyze your
              returns, and grow your portfolio with confidence.
            </p>
          </motion.div>
          <div className="da-steps-grid">
            {STEPS.map((step) => (
              <motion.article
                key={step.num}
                variants={fadeInUp}
                className="da-step-card"
              >
                <span className="da-step-num">{step.num}</span>
                <h3 className="da-step-title">{step.title}</h3>
                <p className="da-step-desc">{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Target audience */}
        <motion.section
          className="da-section da-audience"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="da-section-head">
            <span className="da-eyebrow">Target Audience</span>
            <h2 className="da-section-title">
              Built for every stage of your investment journey.
            </h2>
          </motion.div>
          <div className="da-audience-grid">
            {AUDIENCES.map((audience) => (
              <motion.article
                key={audience.title}
                variants={fadeInUp}
                className="da-audience-card"
              >
                <h3 className="da-audience-title">{audience.title}</h3>
                <p className="da-audience-desc">{audience.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="da-section da-services"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="da-section-head">
            <span className="da-eyebrow">What we do</span>
            <h2 className="da-section-title">
              Full-stack property operations, powered by AI
            </h2>
          </motion.div>
          <div className="da-services-grid">
            {SERVICES.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                className="da-service-card"
              >
                <div className="da-service-img-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="da-service-image"
                  />
                </div>
                <h3 className="da-service-title">{service.title}</h3>
                <p className="da-service-desc">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Why choose */}
        <motion.section
          className="da-section da-why"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="da-why-text">
            <span className="da-eyebrow">Why owners choose DB Assets</span>
            <h2 className="da-section-title">
              Built around the numbers that matter to you
            </h2>
            <p className="da-why-desc">
              We treat your buildings like a business — measured, reported, and
              optimized for long-term profit, not just occupancy.
            </p>
            <ul className="da-benefits-grid">
              {BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="da-why-visual">
            <img
              src={DASHBOARD_IMAGE}
              alt="Live ROI and profit analytics dashboard"
              className="da-why-image"
            />
          </motion.div>
        </motion.section>

        {/* Trust & security */}
        <motion.section
          className="da-trust-bar"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="da-trust-bar-inner">
            <div className="da-trust-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="da-trust-content">
              <span className="da-eyebrow">Trust & Security</span>
              <h2 className="da-trust-heading">
                Bank-grade encryption for your real estate data.
              </h2>
              <p className="da-trust-copy">
                Protected with 256-bit AES encryption at rest and TLS in transit.
                Role-based access, secure authentication, and strict data privacy —
                we never sell your portfolio information.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="da-cta"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="da-cta-heading">Ready to take control?</h2>
          <p className="da-cta-sub">
            Join investors already using DB Assets to manage and grow their
            portfolios.
          </p>
          <a
            href={GET_STARTED_URL}
            className="da-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started — it&apos;s free
          </a>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
