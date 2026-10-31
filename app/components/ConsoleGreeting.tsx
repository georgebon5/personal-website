"use client";
import { useEffect } from "react";

const art = `
   ____                           ____
  / ___| ___  ___  _ __ __ _  ___| __ )  ___  _ __   _____   ____ _ ___
 | |  _ / _ \\/ _ \\| '__/ _\` |/ _ \\  _ \\ / _ \\| '_ \\ / _ \\ \\ / / _\` / __|
 | |_| |  __/ (_) | | | (_| |  __/ |_) | (_) | | | | (_) \\ V / (_| \\__ \\
  \\____|\\___|\\___/|_|  \\__, |\\___|____/ \\___/|_| |_|\\___/ \\_/ \\__,_|___/
                       |___/
`;

export default function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const title = "color:#a3e635;font-family:ui-monospace,monospace;font-size:12px;";
    const dim = "color:#888;font-family:ui-monospace,monospace;font-size:12px;";
    const accent = "color:#e8e8e8;font-family:ui-monospace,monospace;font-size:12px;";

    console.log(`%c${art}`, title);
    console.log(
      "%cHey, curious engineer.\n%cLooking for an intern/junior backend/AI engineer?\n%cLet's talk → %cgeorgebonovas315@gmail.com",
      accent,
      dim,
      dim,
      accent
    );
    console.log(
      "%cTip: press %cg p%c for Projects, %cg c%c for Contact.",
      dim,
      accent,
      dim,
      accent,
      dim
    );
  }, []);

  return null;
}
