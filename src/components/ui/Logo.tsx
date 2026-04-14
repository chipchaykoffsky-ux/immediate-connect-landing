export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow">
        <span className="font-display text-lg font-bold text-white">₿</span>
        <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
      </div>
      <div className="leading-none">
        <div className="font-display text-sm font-bold tracking-widest text-brand-400">
          IMMEDIATE
        </div>
        <div className="font-display text-sm font-bold tracking-widest text-brand-400">
          CONNECT
        </div>
      </div>
    </div>
  );
}
