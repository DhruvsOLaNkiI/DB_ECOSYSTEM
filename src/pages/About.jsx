import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./About.css";

const OFFERINGS = [
  {
    title: "Tech-Driven Broking",
    desc: "A seamless, digital-first approach to finding and securing the best properties in Noida.",
  },
  {
    title: "Strategic Consultancy",
    desc: "Data-backed insights into market trends, ensuring your capital is positioned for maximum appreciation.",
  },
  {
    title: "Portfolio Management",
    desc: "Professional oversight of your real estate holdings, optimized for consistent performance and high rental yields.",
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

export default function About() {
  return (
    <div className="ab-page">
      <div className="ab-bg" aria-hidden="true" />

      <div className="ab-page-content">
        <Navbar />

        <motion.section
          className="ab-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="ab-eyebrow">
            About Us
          </motion.span>
          <motion.h1 variants={fadeInUp} className="ab-h1">
            About DigitalBroker.in
          </motion.h1>
          <motion.p variants={fadeInUp} className="ab-sub">
            In an era where technology drives every smart decision,
            DigitalBroker.in is transforming how property is bought and sold in
            Noida.
          </motion.p>
        </motion.section>

        <motion.section
          className="ab-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="ab-block">
            <span className="ab-eyebrow">Our Vision</span>
            <h2 className="ab-section-title">
              Stripping away the inefficiencies of traditional brokerage.
            </h2>
            <p className="ab-body">
              We are a tech-enabled real estate platform designed to leverage
              advanced data analytics and a streamlined digital infrastructure.
              We provide a modern, transparent, out-of-the-box experience for
              the contemporary investor.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          className="ab-section ab-mission"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="ab-block">
            <span className="ab-eyebrow">Our Primary Mission</span>
            <h2 className="ab-section-title">
              The most competitive pricing in the market.
            </h2>
            <p className="ab-body">
              We achieve this through our innovative slim-brokerage model,
              reducing overhead costs and passing those direct savings on to our
              clients.
            </p>
            <blockquote className="ab-quote">
              Whether you are looking for a high-end residential apartment or a
              strategic commercial investment, DigitalBroker.in ensures you get
              the best deal without the heavy commission burden.
            </blockquote>
          </motion.div>
        </motion.section>

        <motion.section
          className="ab-section ab-offerings"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="ab-section-head">
            <span className="ab-eyebrow">Key Offerings</span>
            <h2 className="ab-section-title">
              Everything you need to invest with confidence.
            </h2>
          </motion.div>
          <div className="ab-offerings-grid">
            {OFFERINGS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="ab-offering-card"
              >
                <h3 className="ab-offering-title">{item.title}</h3>
                <p className="ab-offering-desc">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="ab-section ab-advantage"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="ab-advantage-inner">
            <span className="ab-eyebrow">The Digital Advantage</span>
            <h2 className="ab-section-title">
              Noida&apos;s answer to the high costs of traditional real estate.
            </h2>
            <p className="ab-body">
              By operating on a slim-brokerage model, we prioritize value and
              transparency above all else. From residential homes to commercial
              hubs, our platform connects you to premium opportunities with the
              lowest transaction costs in the industry.
            </p>
            <blockquote className="ab-quote">
              At DigitalBroker.in, we believe that high-quality real estate
              advice should be accessible and affordable.
            </blockquote>
            <p className="ab-body ab-body--last">
              We combine the precision of technology with deep local expertise
              to deliver a brokerage service that is faster, leaner, and more
              rewarding for you.
            </p>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
