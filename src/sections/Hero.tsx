"use client";
import { motion } from "framer-motion";
import CoinScene from "@/components/visuals/CoinScene";
import SignupForm from "@/sections/SignupForm";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-16 md:pt-24">
      <CoinScene />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            className="eyebrow"
            {...fadeUp}
            transition={{ duration: 0.5 }}
          >
            Kezdj el kriptovalutákkal kereskedni — okosan, még ma
          </motion.p>
          <motion.h1
            className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Immediate{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-ink-300"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Csatlakozz az Immediate Connect platformhoz, és kapcsolódj
            tapasztalt brókerekhez, akik minden lépésnél melletted állnak.
            Egyszerű indulás, tiszta folyamat, valós piaci betekintés.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Badge icon="🛡️" label="100% NO SPAM" />
            <Badge icon="🔒" label="SSL ENCRYPTION" />
            <Badge icon="⚡" label="INSTANT SETUP" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-lg text-xs leading-relaxed text-ink-500"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            *Az Ön személyes információi megoszthatók harmadik felekkel, akik
            kereskedési szolgáltatásokat nyújtanak, ahogy azt a weboldal
            adatvédelmi szabályzata előírja.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <SignupForm />
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-ink-300 backdrop-blur">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
