"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    title: "Biztonságos a Bitcoinon kereskedni?",
    body: "Nem lehet egyetlen piacot sem 100%-ban „biztonságosnak” tekinteni, és ugyanez igaz a Bitcoinra is. Bármely iparág, amely előrejelzéseken és spekulációkon alapul, mindig kockázati tényezővel jár. A platformot arra tervezték, hogy segítsen megtanulni és megérteni, hogyan lehet stratégiázni és dolgozni a piacon, hogy minimalizáljuk a kockázatot okos lépésekkel és intelligens befektetési döntésekkel.",
  },
  {
    title: "Miért vonzó a Bitcoin a kereskedők számára?",
    body: "Az üzletemberek számára, legyenek kezdők vagy szakemberek, a Bitcoin kereskedése vonzó lehetőség lehet. A magas profilú üzleti óriások és a pénzügyi világ legnépszerűbb neveinek támogatásával nem meglepő, hogy a Bitcoin továbbra is az egyik legforróbb befektetési lehetőség.",
  },
  {
    title: "A jövő digitális pénzügyi rendszere",
    body: "A Bitcoin népszerűsége azok körében, akik értik a pénzügyi klímát és a valószínű jövőt, az egyik ok, amiért érdemes beszállni. Ahogy a világ tovább mozdul egyre digitálisabb pénzügyi rendszer felé, a Bitcoin növekedési és stabilitási potenciálja vonzó befektetési lehetőséget kínál.",
  },
];

export default function SafetyTimeline() {
  return (
    <section id="safety" className="relative py-24">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">Biztonság & bizalom</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Amit tudni érdemes a kereskedésről
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent md:left-1/2" />
          <ul className="space-y-12">
            {blocks.map((b, i) => (
              <motion.li
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(30,115,255,0.15)] md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div className="card">
                    <h3 className="text-lg font-bold">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">
                      {b.body}
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
