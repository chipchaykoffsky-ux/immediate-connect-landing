"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Letisztult, intuitív felület",
    body: "A platformunk a kereskedelmi létra minden szintjén egyszerű használatra lett tervezve — a kezdők is gyorsan eligazodnak, a tapasztaltak pedig finomhangolt paramétereket állíthatnak be.",
  },
  {
    icon: "📊",
    title: "Pontos piaci jelek",
    body: "Ne hagyd ki a kriptopiac számtalan lehetőségét! Prémium technológiánk mesterséges intelligenciát és algoritmusokat használ az éles piaci kutatás és elemzés végzésére valós időben.",
  },
  {
    icon: "📱",
    title: "Mindig kéznél — bármilyen eszközön",
    body: "Bármikor, bárhol kereskedhetsz az Immediate Connect segítségével — a platform bármilyen böngészőn és stabil internetkapcsolaton elérhető.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Jellemzők</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Hogyan működik az Immediate Connect,<br />
            és milyen lehetőségeket nyújt?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
