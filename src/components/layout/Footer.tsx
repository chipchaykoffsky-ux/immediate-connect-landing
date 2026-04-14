import Logo from "@/components/ui/Logo";

const nav = [
  { label: "Kezdőlap", href: "#hero" },
  { label: "Lépjen kapcsolatba", href: "#cta" },
  { label: "Rólunk", href: "#safety" },
  { label: "Adatvédelmi Irányelvek", href: "#" },
  { label: "Feltételek", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-bg-900">
      <div className="container-x py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo />
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {nav.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-ink-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-ink-300">
            <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">X</a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-xs leading-relaxed text-ink-500">
          <p>
            <span className="font-semibold text-ink-300">Fontos kockázati megjegyzés:</span>{" "}
            A kereskedés jelentős előnyöket hozhat, azonban részleges vagy teljes
            pénzvesztéssel járhat, és az új befektetőknek ezt figyelembe kell venniük.
            A befektetők kb. 70 százaléka pénzt veszíthet.
          </p>
          <p className="mt-3">
            Az Immediate Connect és bármely más kereskedelmi név kizárólag
            kereskedelmi célokra szolgálnak, nem vonatkoznak semmilyen konkrét
            vállalatra vagy szolgáltatóra. A videó kereskedelmi bemutatás és
            illusztráció céljára készült, és minden résztvevő színész. Kérjük,
            figyelmesen olvassa el a harmadik fél befektetési platformjának
            Általános Szerződési Feltételeit és Nyilatkozatát a befektetés előtt.
          </p>
          <p className="mt-3">
            A felhasználóknak tudomásul kell venniük az egyéni tőkekivonás-adó
            terhüket az országukban. Törvényellenes az Egyesült Államok személyeit
            az árucikk opciók vásárlására és eladására ösztönözni, még akkor is,
            ha „jóslat” szerződéseknek nevezik, hacsak azok a CFTC-regisztrált
            tőzsdén vannak jegyezve és kereskednek velük, vagy törvényesen
            mentesek.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-ink-500">
          <span>© 2026 Immediate Connect. All Rights Reserved.</span>
          <span>Made with care · HU</span>
        </div>
      </div>
    </footer>
  );
}
