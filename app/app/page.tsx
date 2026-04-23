import Link from "next/link";
import { Ampel, MarginText } from "./components/Ampel";
import { dishes, formatDate, marginPercent, stock } from "./lib/data";

export default function HomePage() {
  const today = formatDate();
  const capitalizedDate = today.charAt(0).toUpperCase() + today.slice(1);
  const topStock = stock.slice(0, 4);

  return (
    <main className="flex-1 px-5 pt-6">
      <p className="text-sm text-[var(--text-dim)]">{capitalizedDate}</p>
      <h1 className="mt-1 text-[28px] font-bold tracking-tight">Moin, Halil 👋</h1>

      <Link
        href="/scan"
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-[20px] bg-[var(--primary)] px-5 py-5 text-lg font-semibold text-white shadow-[0_8px_20px_rgba(10,132,255,0.35)] transition active:scale-[0.98]"
      >
        <span className="text-2xl">📸</span>
        Beleg scannen
      </Link>

      <section className="mt-6 rounded-[20px] bg-gradient-to-br from-[#fff4d6] to-[#ffe5a8] p-4">
        <span className="inline-block rounded-full bg-black/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
          💡 Vorschlag heute
        </span>
        <h3 className="mt-2.5 text-xl font-bold">Lachs-Special</h3>
        <p className="mt-1 text-sm leading-snug text-[#5a4a00]">
          Du hast noch 2 kg Lachs, geht morgen schlecht. Als Tagesgericht für 16,90 € – Marge 62 %.
        </p>
      </section>

      <h2 className="mt-6 mb-3 text-xl font-bold">Bestand</h2>
      <div className="grid grid-cols-2 gap-2.5">
        {topStock.map((item) => (
          <div key={item.name} className="rounded-[14px] bg-white p-3.5">
            <div className="text-[13px] text-[var(--text-dim)]">{item.name}</div>
            <div className="mt-0.5 text-[22px] font-bold">{item.amount}</div>
            <div
              className={`mt-1 text-xs ${
                item.status === "green"
                  ? "text-[var(--green)]"
                  : "text-[var(--red)]"
              }`}
            >
              {item.status === "green" ? "✓" : "⚠"} {item.note}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-6 mb-3 text-xl font-bold">Gerichte heute</h2>
      <div className="space-y-2.5">
        {dishes.slice(0, 3).map((dish) => (
          <div key={dish.name} className="rounded-2xl bg-white p-4">
            <div className="flex items-center gap-3.5">
              <Ampel status={dish.status} />
              <div className="flex-1">
                <div className="font-semibold">{dish.name}</div>
                <div className="mt-0.5 text-xs text-[var(--text-dim)]">
                  Wareneinsatz {dish.cost.toFixed(2).replace(".", ",")} € · Preis{" "}
                  {dish.price.toFixed(2).replace(".", ",")} €
                </div>
              </div>
              <MarginText status={dish.status} value={marginPercent(dish)} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
