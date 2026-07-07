import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Contact.css";

const CONTACT_EMAIL = "marketing@digitalbroker.in";

const CONTACT_CHANNELS = [
  {
    title: "Email us",
    desc: "For partnerships, product demos, and general enquiries.",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "Connect on LinkedIn",
    desc: "Follow updates and reach out to our team directly.",
    value: "121 Digital Broker",
    href: "https://www.linkedin.com/company/121digital-broker/posts/?feedView=all",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Follow on Instagram",
    desc: "Stay updated on launches, events, and ecosystem news.",
    value: "@_digital_broker",
    href: "https://www.instagram.com/_digital_broker/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
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

export default function Contact() {
  return (
    <div className="dc-page">
      <div className="dc-bg" aria-hidden="true" />

      <div className="dc-page-content">
        <Navbar />

        <motion.section
          className="dc-hero"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="dc-eyebrow">
            Contact Us
          </motion.span>
          <motion.h1 variants={fadeInUp} className="dc-h1">
            Let&apos;s start a conversation.
          </motion.h1>
          <motion.p variants={fadeInUp} className="dc-sub">
            Whether you&apos;re exploring our ecosystem, looking for a demo, or
            want to partner with DigitalBroker — we&apos;d love to hear from you.
          </motion.p>
        </motion.section>

        <motion.section
          className="dc-section dc-main"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="dc-info dc-info--centered">
            <h2 className="dc-info-title">Get in touch</h2>
            <p className="dc-info-desc">
              Reach out through any of the channels below and we&apos;ll get back
              to you as soon as possible.
            </p>

            <div className="dc-channels">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="dc-channel-card"
                >
                  <div className="dc-channel-icon">{channel.icon}</div>
                  <div>
                    <h3 className="dc-channel-title">{channel.title}</h3>
                    <p className="dc-channel-desc">{channel.desc}</p>
                    <span className="dc-channel-value">{channel.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
