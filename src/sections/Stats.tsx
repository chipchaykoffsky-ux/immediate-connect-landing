"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "150K+", label: "Aktív felhasználó" },
  { value: "24/7", label: "Piaci hozzáférés" },
  { value: "12+", label: "Kriptovaluta-pár" },
  { value: "0 Ft", label: "Regisztrációs díj" },
];

export default function Stats() {
  return (
    <section className="relative py-14">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-white md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-ink-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
