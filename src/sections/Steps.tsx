"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    title: "Regisztráció",
    body: "Töltsd ki az egyszerű űrlapot 60 másodperc alatt — név, e-mail, telefonszám.",
  },
  {
    n: "2",
    title: "Verifikáció & bróker",
    body: "Egy tapasztalt partnerbróker felveszi veled a kapcsolatot, és végigvezet a beállításon.",
  },
  {
    n: "3",
    title: "Kezdj el kereskedni",
    body: "Fedezd fel a piacokat a platformon valós idejű adatokkal és prémium jelekkel.",
  },
];

export default function Steps() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Folyamat</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Három lépés az első kereskedésig
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card relative"
            >
              <div className="flex items-baseline gap-3">
                <div className="font-display text-5xl font-bold text-brand-500/80">
                  {s.n}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-500/50 to-transparent" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
