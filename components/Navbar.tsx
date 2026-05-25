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
    { label: "LMS Platform", href: "/#lms" },
    { label: "About",        href: "/#about" },
    { label: "Contact",      href: "/#contact" },
  ];

  return (
    <>
      <nav className={`nw-nav${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="nav-logo">
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

        <a href="/#contact" className="nav-cta">Book Consultation</a>

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
