"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const progress = document.getElementById("scrollProgress");
    const onScroll = () => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight;
      const pct = denom > 0 ? (h.scrollTop / denom) * 100 : 0;
      if (progress) progress.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealEls = document.querySelectorAll(
      ".tl-item, .prog-row, .rule, .dress-card, .party-card, .kids-block"
    );
    const vh = window.innerHeight;
    const pending = [];
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > vh * 0.85) {
        el.classList.add("pending-reveal");
        pending.push(el);
      }
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pending-reveal");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    pending.forEach((el) => obs.observe(el));

    const onAnchorClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return <div className="scroll-progress" id="scrollProgress" />;
}
