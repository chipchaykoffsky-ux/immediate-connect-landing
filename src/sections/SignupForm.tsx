"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-500/30 via-brand-600/10 to-transparent blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-bg-800/80 p-7 shadow-glow backdrop-blur-xl">
        <h3 className="text-2xl font-bold leading-tight">
          Tudja meg, hogyan kezdheti el a kereskedési utazását
        </h3>
        <p className="mt-2 text-sm text-ink-300">
          Ingyenes regisztráció · 60 másodperc
        </p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 text-center"
          >
            <div className="mb-2 text-3xl">✅</div>
            <div className="font-semibold">Köszönjük!</div>
            <div className="text-sm text-ink-300">
              Hamarosan felvesszük Önnel a kapcsolatot.
            </div>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input className="input" placeholder="Keresztnév" required />
              <input className="input" placeholder="Vezetéknév" required />
            </div>
            <input
              type="email"
              className="input"
              placeholder="E-mail cím"
              required
            />
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm">
                🇭🇺 +36
              </span>
              <input
                type="tel"
                className="input"
                placeholder="20 123 4567"
                required
              />
            </div>
            <button type="submit" className="btn-primary mt-2 w-full py-4 text-base">
              Ingyenes regisztráció →
            </button>
            <p className="text-center text-[11px] text-ink-500">
              A regisztrációval elfogadja a Feltételeket és az Adatvédelmi
              Irányelveket.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
