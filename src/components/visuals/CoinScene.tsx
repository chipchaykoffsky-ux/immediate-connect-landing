"use client";
import { motion } from "framer-motion";

function Coin({
  symbol,
  size = 80,
  className = "",
  delay = 0,
}: {
  symbol: string;
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, rotate: -6 }}
      animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ width: size, height: size }}
    >
      <div className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-gold-400 to-[#B8811C] shadow-[0_20px_40px_-10px_rgba(245,184,73,0.5)]">
        <span className="font-display text-2xl font-bold text-[#4B2E00]">
          {symbol}
        </span>
        <span className="absolute inset-1 rounded-full ring-1 ring-white/30" />
      </div>
    </motion.div>
  );
}

export default function CoinScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Coin symbol="₿" size={110} className="right-[6%] top-[8%]" />
      <Coin symbol="Ξ" size={72} className="right-[40%] top-[2%]" delay={1.2} />
      <Coin symbol="◎" size={56} className="right-[55%] bottom-[14%]" delay={2.4} />
      <Coin symbol="₿" size={64} className="right-[12%] bottom-[6%]" delay={0.6} />
      <motion.div
        className="absolute right-[2%] top-[25%] h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-brand-600/20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
