"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BelegItem = { name: string; qty: string; price: string };

const demoBeleg: { lieferant: string; datum: string; items: BelegItem[]; summe: string } = {
  lieferant: "Metro",
  datum: "23.04.2026 · 14:12",
  items: [
    { name: "Hähnchenbrust", qty: "5 kg · 9,90 €/kg", price: "49,50 €" },
    { name: "Paprika rot", qty: "3 kg · 3,20 €/kg", price: "9,60 €" },
    { name: "Olivenöl 5 L", qty: "1 Stk · 28,40 €", price: "28,40 €" },
    { name: "Zwiebeln", qty: "10 kg · 1,80 €/kg", price: "18,00 €" },
  ],
  summe: "105,50 €",
};

export default function ScanPage() {
  const [state, setState] = useState<"idle" | "scanning" | "result">("idle");
  const router = useRouter();

  function simulateScan() {
    setState("scanning");
    setTimeout(() => setState("result"), 1500);
  }

  function confirm() {
    router.push("/bestand");
  }

  if (state === "idle") {
    return (
      <main className="flex flex-1 flex-col px-5 pt-6">
        <Link href="/" className="text-[var(--primary)] text-sm">
          ← Zurück
        </Link>
        <h1 className="mt-3 text-[28px] font-bold">Beleg scannen</h1>
        <p className="text-[var(--text-dim)]">
          Foto vom Lieferschein oder Kassenbon machen. Die KI erkennt Artikel und Preise automatisch.
        </p>

        <button
          onClick={simulateScan}
          className="mt-8 flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-[var(--border)] bg-white text-[var(--text-dim)]"
        >
          <span className="text-6xl">📸</span>
          <span className="text-lg font-semibold">Foto aufnehmen</span>
          <span className="text-xs">(Demo – tippen zum Scannen simulieren)</span>
        </button>

        <p className="mt-4 text-center text-xs text-[var(--text-dim)]">
          Alternativ: Beleg per WhatsApp an uns schicken.
        </p>
      </main>
    );
  }

  if (state === "scanning") {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-5">
        <div className="mb-6 h-16 w-16 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]" />
        <p className="text-lg font-semibold">KI liest Beleg...</p>
        <p className="mt-1 text-sm text-[var(--text-dim)]">Artikel, Mengen, Preise erkennen</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col px-5 pt-6">
      <div className="text-center py-4">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--green)] text-3xl text-white">
          ✓
        </div>
        <h2 className="text-2xl font-bold">Beleg erkannt</h2>
        <p className="text-sm text-[var(--text-dim)]">
          {demoBeleg.lieferant} · {demoBeleg.datum}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-4">
        {demoBeleg.items.map((item, i) => (
          <div
            key={item.name}
            className={`flex items-start justify-between py-3 ${
              i < demoBeleg.items.length - 1 ? "border-b border-[var(--border)]" : ""
            }`}
          >
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-[13px] text-[var(--text-dim)]">{item.qty}</div>
            </div>
            <div className="font-semibold">{item.price}</div>
          </div>
        ))}
        <div className="flex justify-between pt-3.5 text-lg font-bold">
          <span>Summe</span>
          <span>{demoBeleg.summe}</span>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-[#eaf5ff] p-4">
        <div className="text-sm font-semibold text-[var(--primary)]">💡 KI-Hinweis</div>
        <p className="mt-1 text-[13px] text-[var(--text)]">
          Hähnchen ist 12 % teurer als letzte Woche. Marge beim Döner-Teller sinkt auf 70 %.
        </p>
      </div>

      <button
        onClick={confirm}
        className="mt-4 w-full rounded-2xl bg-[var(--green)] py-4 font-semibold text-white transition active:scale-[0.98]"
      >
        ✓ Bestand aktualisieren
      </button>
    </main>
  );
}
