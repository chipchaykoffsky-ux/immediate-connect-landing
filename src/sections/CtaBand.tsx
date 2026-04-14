"use client";
import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section id="cta" className="relative py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/30 via-brand-500/10 to-bg-800 p-10 md:p-16"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="eyebrow">Készen állsz?</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Kezdd el a kereskedési utadat még ma.
              </h2>
              <p className="mt-4 text-ink-300">
                Ingyenes regisztráció, tapasztalt brókerek, és egy platform,
                amely melletted áll minden lépésnél.
              </p>
            </div>
            <a href="#hero" className="btn-primary px-8 py-4 text-base">
              Regisztráció most →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
