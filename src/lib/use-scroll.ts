"use client";

import { useEffect, useState } from "react";

/**
 * useScrollProgress — returns the page scroll progress as a 0–1 number,
 * plus whether the user has scrolled past a threshold.
 *
 * Uses passive scroll + rAF throttling. SSR-safe (returns 0 on server).
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
      setScrolled(window.scrollY > 24);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { progress, scrolled };
}

/**
 * useActiveSection — observes the homepage section anchors and returns the id
 * of the section currently in view. Used to highlight the active nav item.
 *
 * Only runs on the homepage pathname to avoid wasted work on secondary routes.
 */
export function useActiveSection(sectionIds: string[], enabled: boolean) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when a section's top crosses ~40% of the viewport.
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return active;
}
