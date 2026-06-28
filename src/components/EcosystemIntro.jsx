import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductLogo from "./ProductLogo.jsx";

gsap.registerPlugin(ScrollTrigger);

const ORBIT_ICONS = {
  expo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="url(#expo-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id="expo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  assets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="url(#assets-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id="assets-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  ),
  liquid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="url(#liquid-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id="liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#liquid-grad)" fillOpacity="0.15"></path>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  ),
};

export default function EcosystemIntro() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(copyRef.current?.children, { opacity: 0, y: 48 });
      gsap.set(".home-orbit-hub, .home-orbit-node", { opacity: 0, scale: 0.6 });
      gsap.set(".home-orbit-ring", { opacity: 0, scale: 0 });

      gsap.to(copyRef.current?.children, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        delay: 0.15,
      });

      const orbitParts = orbitRef.current?.querySelectorAll(
        ".home-orbit-hub, .home-orbit-node"
      );
      if (orbitParts?.length) {
        gsap.to(orbitParts, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.6)",
          delay: 0.25,
        });
      }

      gsap.to(".home-orbit-ring", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="home-section home-ecosystem-intro">
      <div className="home-ecosystem-intro-inner">
        <div ref={copyRef} className="home-ecosystem-copy">
          <h2 className="home-section-heading">
            One Ecosystem. <span className="home-gradient-text">Three</span>{" "}
            Powerful Solutions.
          </h2>
          <p className="home-section-desc">
            DigitalBroker brings together three intelligent platforms that
            connect people, property, and capital in one seamless real estate
            ecosystem.
          </p>
          <p className="ecosystem-intro-pillars">
            <span className="home-gradient-text">Manage</span>
            <span className="ecosystem-intro-pillars-sep" aria-hidden="true">
              -
            </span>
            <span className="home-gradient-text">Discover</span>
            <span className="ecosystem-intro-pillars-sep" aria-hidden="true">
              -
            </span>
            <span className="home-gradient-text">Liquid</span>
          </p>
        </div>
        <div ref={orbitRef} className="home-orbit" aria-hidden="true">
          <div className="home-orbit-ring" />
          <div className="home-orbit-hub">
            <span className="home-orbit-logo">DB</span>
            <span className="home-orbit-hub-label">DigitalBroker Ecosystem</span>
          </div>
          <div className="home-orbit-track">
            <div className="home-orbit-node home-orbit-node--expo">
              <div className="home-orbit-node-inner">
                <div className="home-orbit-icon home-orbit-icon--expo">{ORBIT_ICONS.expo}</div>
                <strong>
                  <ProductLogo product="expo" size="sm" />
                </strong>
                <span>Discover. Engage. Generate Leads.</span>
              </div>
            </div>
            <div className="home-orbit-node home-orbit-node--assets">
              <div className="home-orbit-node-inner">
                <div className="home-orbit-icon home-orbit-icon--assets">{ORBIT_ICONS.assets}</div>
                <strong>
                  <ProductLogo product="assets" size="sm" />
                </strong>
                <span>Manage. Analyze. Grow Assets.</span>
              </div>
            </div>
            <div className="home-orbit-node home-orbit-node--liquid">
              <div className="home-orbit-node-inner">
                <div className="home-orbit-icon home-orbit-icon--liquid">{ORBIT_ICONS.liquid}</div>
                <strong>
                  <ProductLogo product="liquid" size="sm" />
                </strong>
                <span>Invest. Trade. Unlock Liquidity.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
