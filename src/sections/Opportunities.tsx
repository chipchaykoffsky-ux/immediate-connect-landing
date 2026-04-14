"use client";
import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Általános vagyonkereskedelem",
    body: "A részvények és értékpapírok kulcsfontosságú szerepet játszanak a modern kereskedelemben. Folyamatosan változó értékük izgalmas piacot teremt, amelyet az okos kereskedők potenciáljára kihasználhatnak.",
  },
  {
    n: "02",
    title: "Forex (devizapiac)",
    body: "A devizapiac rendkívül likvid és aktív, a külföldi valuták állandó mozgása nagy lehetőséget biztosít a kereskedők számára a siker eléréséhez.",
  },
  {
    n: "03",
    title: "Kriptovaluta (Bitcoin)",
    body: "A kriptokereskedés alapja az alacsony árú vásárlás és magas árú eladás stratégiáján alapul. Az Immediate Connect főként a Bitcoin kereskedésre összpontosít, ahol okos felhasználóink komoly lehetőségeket fedezhetnek fel.",
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="relative py-24">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Lehetőségek</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Milyen kereskedelmi lehetőségeket kínál az{" "}
              <span className="bg-gradient-to-r from-brand-400 to-gold-400 bg-clip-text text-transparent">
                Immediate Connect
              </span>
              ?
            </h2>
            <p className="mt-5 text-ink-300">
              Az Immediate Connect számos kereskedési lehetőséget kínál a
              felhasználók számára, hogy felfedezzék őket — kiváló platform a
              kezdő és a tapasztalt kereskedők számára egyaránt, akik bővíteni
              és diverzifikálni szeretnék portfóliójukat.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 hidden h-64 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/20 to-transparent lg:flex"
            >
              <div className="relative">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-[#B8811C] text-6xl shadow-[0_30px_80px_-20px_rgba(245,184,73,0.6)]">
                  ₿
                </div>
                <motion.div
                  className="absolute -left-8 -top-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xl text-white"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Ξ
                </motion.div>
                <motion.div
                  className="absolute -right-10 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-xl backdrop-blur"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  $
                </motion.div>
              </div>
            </motion.div>
          </div>

          <ul className="space-y-5">
            {items.map((it, i) => (
              <motion.li
                key={it.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group relative transition hover:border-brand-500/30"
              >
                <div className="flex items-start gap-5">
                  <div className="font-display text-3xl font-bold text-brand-400/70 group-hover:text-brand-400">
                    {it.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {it.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
