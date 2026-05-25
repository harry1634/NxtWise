"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".sr,.sr-l,.sr-r");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
