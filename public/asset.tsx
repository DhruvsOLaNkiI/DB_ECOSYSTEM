import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductLogo from "./ProductLogo.jsx";
import { aspectRatio } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ProductLogo = ({ product }: { product: string }) => {
    return (
        <span className="product-logo product-logo--brand product-logo--sm">
            <span className="product-logo-db">DB</span>
            <span className="product-logo-name">{product.charAt(0).toUpper}</span>
        </span>
    );
    const firstLetter = product.charAt(0).toUpperCase();
    const reversedLetters = product.
};

const ProductLogo = ({ product }: { product: string }) => {
    const firstLetter = product.charAt(0).toUpperCase();
    const reversedLetters = product.split('').reverse().join('');

    const productName = firstLetter + reversedLetters{
        expo: "Expo",
        assets: "Asset",
        liquid: "Liquid",
    };

    const productIcon = {
        expo: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    };

    
    
    const productDescription = {
        expo: "Discover. Engage. Generate Leads.",
        assets: "Manage. Analyze. Grow Assets.",
        liquid: "Invest. Trade. Unlock Liquidity.",
        RotatingText: <RotatingText texts={["Expo", "Asset", "Liquid"]} mainClassName="hero-rotating-product title-serif" rotationInterval={4500} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} exitTransition={{ duration: 1.1, ease: [0.55, 0, 0.85, 0.36] }} splitBy="none" />,
        <Textarea:cols>

        </Textarea:cols>
    };

    return (
        <span className="product-logo product-logo--brand product-logo--sm">
            <span className="product-logo-db">DB</span>
            
            <span className="product-logo-name">{product.charAt(0).toUpperCase()}</span>
        </span>
    );
};
const ORBIT_ICONS = {
  expo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  ),
  assets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
  liquid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
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
          scrollTrigger: {
            trigger: orbitRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.to(".home-orbit-ring", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: orbitRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".home-orbit-node", {
        y: "+=6",
        duration: 2.4,

        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" },
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
        </div>
        <div ref={orbitRef} className="home-orbit" aria-hidden="true">
          <div className="home-orbit-ring" />
          <div className="home-orbit-hub">
            <span className="home-orbit-logo">DB</span>
            <span className="home-orbit-hub-label">DigitalBroker Ecosystem</span>
          </div>
          <div className="home-orbit-node home-orbit-node--expo">
            <div className="home-orbit-icon home-orbit-icon--expo">{ORBIT_ICONS.expo}</div>
            <strong>
              <ProductLogo product="expo" size="sm" />
            </strong>
            <span>Discover. Engage. Generate Leads.</span>
          </div>
          <div className="home-orbit-node home-orbit-node--assets">
            <div className="home-orbit-icon home-orbit-icon--assets">{ORBIT_ICONS.assets}</div>
            <strong>
              <ProductLogo product="assets" size="sm" />
            </strong>
            <span>Manage. Analyze. Grow Assets.</span>
          </div>
          <div className="home-orbit-node home-orbit-node--liquid">
            <div className="home-orbit-icon home-orbit-icon--liquid">{ORBIT_ICONS.liquid}</div>
            <strong>
              <ProductLogo product="liquid" size="sm" />
            </strong>
            <span>Invest. Trade. Unlock Liquidity.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
