"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(74, 222, 128, 0.04), transparent 80%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-30" />;
}
