"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Mennyibe kerül az Immediate Connect használata?",
    a: "A regisztráció ingyenes. A partnerbrókerek külön feltételeket alkalmazhatnak a kereskedési tevékenységre — kérjük, olvassa el az adott bróker feltételeit.",
  },
  {
    q: "Mennyi az ajánlott minimális letét?",
    a: "A legtöbb partnerbróker 250 EUR minimális letétet javasol a kezdéshez. Csak olyan összeget fektessen be, amelynek elvesztését megengedheti magának.",
  },
  {
    q: "Mennyi idő alatt lehet regisztrálni?",
    a: "A regisztrációs űrlap kitöltése körülbelül 60 másodpercig tart. Ezt követően egy bróker munkatársa felveszi Önnel a kapcsolatot.",
  },
  {
    q: "Hogyan történik a kifizetés?",
    a: "A kifizetések a partnerbróker platformján keresztül zajlanak, az ott elfogadott módszerek szerint (banki átutalás, kártya, stb.).",
  },
  {
    q: "Biztonságos a személyes adataim megosztása?",
    a: "A weboldal SSL titkosítást használ, és személyes adatait csak az Adatvédelmi Szabályzatban meghatározott módon osztja meg engedélyezett partnerekkel.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">GYIK</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Gyakran feltett kérdések
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition ${
                      isOpen ? "rotate-45 bg-brand-500 text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-ink-300">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
