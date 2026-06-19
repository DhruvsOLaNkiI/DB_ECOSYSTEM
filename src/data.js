// Ecosystem modules shown on the Home page and used as openable tabs.
export const ECOSYSTEM_DATA = [
  {
    id: "expo",
    title: "DB Expo",
    paragraphs: [
      "DB Expo is a discovery platform designed to replicate property expos, eliminating the need to physically visit different real estate projects.",
      "It creates an immersive, interactive environment where home buyers and investors can explore real estate projects, services, and finance partners under one \"virtual roof.\"",
      "DB Expo is launching its first-ever event in July 2026: \"Virtual Property Expo - 2026.\"",
    ],
    link: "/expo",
    buttonText: "Know more",
    isPrimary: true, // Used to style the main/first box differently if needed
  },
  {
    id: "assets",
    title: "DB Assets",
    paragraphs: [
      "Manage your real estate portfolio, track valuations, and automate property operations.",
    ],
    link: "/assets",
    buttonText: "Know more",
    isPrimary: false,
  },
  {
    id: "liquid",
    title: "DB Liquid",
    paragraphs: [
      "Unlock liquidity with fractional ownership and seamless real estate trading.",
    ],
    link: "/liquid",
    buttonText: "Know more",
    isPrimary: false,
  },
];

// The Home tab is always present and cannot be closed.
export const HOME_TAB = { id: "home", emoji: "🏠", label: "Home" };
