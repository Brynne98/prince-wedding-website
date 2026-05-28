"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleAnchor = (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav" onClick={handleAnchor}>
      <a href="#top" className="nav-mono">
        20 September 2026
      </a>
      <button
        className={`menu-toggle${open ? " open" : ""}`}
        aria-label="Menu"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links${open ? " mobile-open" : ""}`}>
        <a href="#couple">Couple</a>
        <a href="#programme">Programme</a>
        <a href="#dress">Dress</a>
        <a href="#faq">FAQ</a>
        <a href="#story">Story</a>
        <a href="#party">Party</a>
        <a href="#rsvp" className="nav-rsvp">
          RSVP
        </a>
      </div>
    </nav>
  );
}
