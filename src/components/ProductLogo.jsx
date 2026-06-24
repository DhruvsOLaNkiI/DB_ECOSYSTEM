import React from "react";
import "./ProductLogo.css";

const PRODUCT_LABELS = {
  expo: "Expo",
  assets: "Asset",
  liquid: "Liquid",
};

export default function ProductLogo({
  product,
  className = "",
  size = "md",
}) {
  const name = PRODUCT_LABELS[product] ?? product;
  const label = `DB ${name}`;
  const sizeClass = `product-logo--${size}`;

  return (
    <span
      className={`product-logo product-logo--brand ${sizeClass} ${className}`.trim()}
      aria-label={label}
    >
      <span className="product-logo-db">DB</span>
      <span className="product-logo-name">{name}</span>
    </span>
  );
}
