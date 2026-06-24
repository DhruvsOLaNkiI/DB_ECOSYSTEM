// Ecosystem modules shown on the Home page and used as openable tabs.
export const ECOSYSTEM_DATA = [
  {
    id: "expo",
    title: "DB Expo",
    paragraphs: [
      "DB Expo is a discovery platform designed to replicate property expos, eliminating the need to physically visit different real estate projects.",
      "It creates an immersive, interactive environment where homebuyers and investors can explore real estate projects, services, and finance partners under one \"virtual roof.\"",
      "DB Expo is launching its first-ever event in July 2026: \"Virtual Property Expo — 2026.\"",
    ],
    link: "/expo",
    buttonText: "Know more",
    isPrimary: true, // Used to style the main/first box differently if needed
  },
  {
    id: "assets",
    title: "DB Asset",
    paragraphs: [
      "Track exact real estate ROI. Instantly monitor valuations, capital appreciation, and rental yields across all assets in one unified dashboard.",
    ],
    link: "/assets",
    buttonText: "Know more",
    isPrimary: false,
  },
  {
    id: "liquid",
    title: "DB Liquid",
    paragraphs: [
      "A transparent marketplace where buyers bid on listings and sellers accept the highest offer, matching instantly via secure token money deposits..",
    ],
    link: "/liquid",
    buttonText: "Know more",
    isPrimary: false,
  },
];

// The Home tab is always present and cannot be closed.
export const HOME_TAB = { id: "home", emoji: "🏠", label: "Home" };
