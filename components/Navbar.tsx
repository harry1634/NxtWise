"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "IT Solutions", href: "/it-solutions" },
    { label: "EdTech",       href: "/edtech" },
    { label: "LMS Platform", href: "/lms" },
    { label: "About",        href: "/about" },
    { label: "Contact",      href: "/#contact" },
  ];

  return (
    <>
      <style>{`.nav-search-input::placeholder{color:${scrolled ? "#94a3b8" : "rgba(255,255,255,0.5)"}}`}</style>
      <nav className={`nw-nav${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="nav-logo" style={{ gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.png"
            alt="NxtWise"
            style={{ width: 90, height: "auto", objectFit: "contain", display: "block" }}
          />
        </a>

        <ul className="nav-links-list">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div
          className="nav-search-box"
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: scrolled ? "#F1F5F9" : "rgba(255,255,255,0.12)",
            border: scrolled ? "1px solid #E2E8F0" : "1px solid rgba(255,255,255,0.25)",
            borderRadius: 10, padding: "7px 14px", minWidth: 0, flex: "1 1 220px", maxWidth: 260,
            transition: "all 0.3s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={scrolled ? "#94a3b8" : "rgba(255,255,255,0.6)"}
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search courses..."
            onKeyDown={(e) => { if (e.key === "Enter") window.location.href = "/edtech"; }}
            className="nav-search-input"
            style={{
              background: "transparent", border: "none", outline: "none",
              fontSize: 13, fontFamily: "inherit", width: "100%",
              color: scrolled ? "#1C2536" : "#fff",
            }}
          />
        </div>

        <a href="/#contact" className="nav-cta" style={{ boxShadow: scrolled ? "0 12px 30px rgba(37,99,235,0.18)" : "0 10px 28px rgba(37,99,235,0.28)", flexShrink: 0 }}>Book Strategy Call</a>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu-nw${mobileOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="/#contact"
          className="nav-cta"
          style={{ marginTop: 8, textAlign: "center" }}
          onClick={() => setMobileOpen(false)}
        >
          Book Consultation
        </a>
      </div>
    </>
  );
}
