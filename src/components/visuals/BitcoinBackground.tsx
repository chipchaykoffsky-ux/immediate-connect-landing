"use client";
import { motion } from "framer-motion";

type Coin = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

const coins: Coin[] = [
  { left: "4%",  top: "6%",   size: 42, duration: 18, delay: 0,   drift: 30,  opacity: 0.10 },
  { left: "12%", top: "22%",  size: 28, duration: 22, delay: 1.5, drift: -40, opacity: 0.08 },
  { left: "22%", top: "48%",  size: 56, duration: 20, delay: 0.8, drift: 50,  opacity: 0.09 },
  { left: "8%",  top: "70%",  size: 34, duration: 24, delay: 2,   drift: -30, opacity: 0.08 },
  { left: "18%", top: "88%",  size: 46, duration: 19, delay: 0.3, drift: 45,  opacity: 0.10 },
  { left: "32%", top: "12%",  size: 24, duration: 26, delay: 1.2, drift: -25, opacity: 0.07 },
  { left: "38%", top: "38%",  size: 38, duration: 21, delay: 0.6, drift: 35,  opacity: 0.09 },
  { left: "44%", top: "62%",  size: 30, duration: 23, delay: 1.8, drift: -40, opacity: 0.08 },
  { left: "48%", top: "92%",  size: 52, duration: 20, delay: 0.4, drift: 40,  opacity: 0.10 },
  { left: "58%", top: "8%",   size: 44, duration: 22, delay: 1.1, drift: -35, opacity: 0.09 },
  { left: "64%", top: "32%",  size: 26, duration: 25, delay: 0.2, drift: 30,  opacity: 0.07 },
  { left: "72%", top: "54%",  size: 60, duration: 19, delay: 1.6, drift: -45, opacity: 0.10 },
  { left: "68%", top: "78%",  size: 32, duration: 24, delay: 0.9, drift: 35,  opacity: 0.08 },
  { left: "82%", top: "16%",  size: 40, duration: 21, delay: 0.5, drift: -30, opacity: 0.09 },
  { left: "88%", top: "42%",  size: 28, duration: 23, delay: 1.4, drift: 40,  opacity: 0.08 },
  { left: "92%", top: "66%",  size: 48, duration: 20, delay: 0.7, drift: -35, opacity: 0.10 },
  { left: "78%", top: "90%",  size: 36, duration: 22, delay: 1.9, drift: 30,  opacity: 0.08 },
  { left: "2%",  top: "40%",  size: 22, duration: 27, delay: 0.1, drift: 25,  opacity: 0.06 },
  { left: "50%", top: "24%",  size: 34, duration: 23, delay: 1.3, drift: -30, opacity: 0.08 },
  { left: "56%", top: "72%",  size: 42, duration: 21, delay: 0.8, drift: 35,  opacity: 0.09 },
];

export default function BitcoinBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg-900" />
      <div className="absolute inset-0 bg-hero-radial" />
      {coins.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: c.left,
            top: c.top,
            width: c.size,
            height: c.size,
            opacity: c.opacity,
          }}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, -40, 20, 0],
            x: [0, c.drift, -c.drift / 2, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-gold-400 to-[#8a5a10] shadow-[0_10px_40px_-10px_rgba(245,184,73,0.5)]">
            <span
              className="font-display font-bold text-[#3a2200]"
              style={{ fontSize: c.size * 0.55 }}
            >
              ₿
            </span>
            <span className="absolute inset-1 rounded-full ring-1 ring-white/20" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
