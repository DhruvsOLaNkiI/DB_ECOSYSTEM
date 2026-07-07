import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Privacy.css";

const SECTIONS = [
  {
    title: "1. Introduction",
    content: [
      "At Digitalbroker.in, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our real estate services.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      'We collect information that identifies you ("Personal Data"), which may include:',
    ],
    list: [
      "Identity Data: Name, age, and gender.",
      "Contact Data: Email address, phone number, and mailing address.",
      "Property Preferences: Location interests, budget, and property type (Residential/Commercial).",
      "Technical Data: IP address, browser type, and usage patterns via cookies.",
      "KYC Data: Documents such as PAN or Aadhaar when required for transactions.",
    ],
  },
  {
    title: "3. Purpose of Collection",
    content: ["We use your data strictly for:"],
    list: [
      "Connecting you with relevant real estate listings.",
      "Responding to your inquiries via call, SMS, or WhatsApp.",
      "Improving our website experience.",
      "Legal compliance with RERA and other government regulations.",
    ],
  },
  {
    title: "4. Consent and Your Rights",
    content: [
      "By using our website, you provide your affirmative consent to process your data. Under the DPDP Act, you have the right to:",
    ],
    list: [
      "Access & Correction: Request a summary of the data we hold and correct inaccuracies.",
      "Withdrawal of Consent: You may stop us from using your data at any time by contacting us.",
      "Erasure: Request that we delete your data once the purpose of collection is fulfilled.",
    ],
  },
  {
    title: "5. Data Sharing",
    content: [
      "We do not sell your personal data to third-party data brokers. We only share information with Government Authorities only when legally mandated (e.g., for RERA compliance or law enforcement).",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We implement robust technical measures (like SSL encryption) to ensure your data is safe from unauthorized access. In the unlikely event of a data breach, we will notify the Data Protection Board of India and affected users as required by law.",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export default function Privacy() {
  return (
    <div className="pp-page">
      <div className="pp-bg" aria-hidden="true" />

      <div className="pp-page-content">
        <Navbar />

        <motion.section
          className="pp-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="pp-eyebrow">
            Legal
          </motion.span>
          <motion.h1 variants={fadeInUp} className="pp-h1">
            Privacy Policy
          </motion.h1>
          <motion.p variants={fadeInUp} className="pp-updated">
            Last Updated: May 03, 2026
          </motion.p>
        </motion.section>

        <motion.article
          className="pp-document"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.section variants={fadeInUp} className="pp-block">
            <h2 className="pp-block-title">Introduction &amp; Commitment</h2>
            <p>
              We, at Digitalbroker.in, are committed to respecting your online
              privacy and recognize your need for appropriate protection and
              management of any personally identifiable information you share
              with us.
            </p>
            <p>
              This Privacy Policy (&ldquo;Policy&rdquo;) governs our website
              available at Digitalbroker.in. The Policy describes how Digital
              Broker (&ldquo;Company&rdquo;) collects, uses, discloses and
              transfers personal data of users while browsing the Platform or
              availing specific services therein (&ldquo;Services&rdquo;).
            </p>
          </motion.section>

          {SECTIONS.map((section) => (
            <motion.section key={section.title} variants={fadeInUp} className="pp-block">
              <h2 className="pp-block-title">{section.title}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className="pp-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}

          <motion.section variants={fadeInUp} className="pp-block pp-grievance">
            <h2 className="pp-block-title">7. Grievance Redressal</h2>
            <div className="pp-grievance-grid">
              <div className="pp-grievance-item">
                <span className="pp-grievance-label">Grievance Officer</span>
                <span className="pp-grievance-value">Designated Grievance Officer [TBD]</span>
              </div>
              <div className="pp-grievance-item">
                <span className="pp-grievance-label">Email &amp; Contact</span>
                <a href="mailto:privacy@digitalbroker.in" className="pp-grievance-link">
                  privacy@digitalbroker.in
                </a>
                <span className="pp-grievance-note">(Official Support Channel)</span>
              </div>
              <div className="pp-grievance-item">
                <span className="pp-grievance-label">Office Address</span>
                <span className="pp-grievance-value">
                  924, Tower B, Bhutani Alphathum, Sector 90, Noida, UP 201305
                </span>
              </div>
            </div>
          </motion.section>
        </motion.article>

        <Footer />
      </div>
    </div>
  );
}
