"use client";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

const links = [
  { label: "Kezdőlap", href: "#hero" },
  { label: "Lehetőségek", href: "#opportunities" },
  { label: "Rólunk", href: "#safety" },
  { label: "GYIK", href: "#faq" },
  { label: "Kapcsolat", href: "#cta" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-900/70 backdrop-blur-xl">
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-300 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm text-ink-300 hover:text-white" aria-label="Nyelv">
            🇭🇺 Magyar
          </button>
          <a href="#hero" className="btn-primary">
            Regisztráció
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg-900">
          <ul className="container-x flex flex-col gap-4 py-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-ink-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#hero" className="btn-primary w-full">
                Regisztráció
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
