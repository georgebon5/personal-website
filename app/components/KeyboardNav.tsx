"use client";
import { useEffect } from "react";

const shortcuts: Record<string, string> = {
  a: "about",
  p: "projects",
  s: "skills",
  w: "awards",
  e: "education",
  c: "contact",
};

export default function KeyboardNav() {
  useEffect(() => {
    let gPrimed = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const resetChord = () => {
      gPrimed = false;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toLowerCase();

      if (gPrimed && shortcuts[key]) {
        const id = shortcuts[key];
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${id}`);
        }
        resetChord();
        return;
      }

      if (key === "g") {
        gPrimed = true;
        timer = setTimeout(resetChord, 1200);
      } else {
        resetChord();
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return null;
}
