export default function WochePage() {
  return (
    <main className="flex-1 px-5 pt-6">
      <h1 className="text-[28px] font-bold">Diese Woche</h1>
      <p className="text-sm text-[var(--text-dim)]">Montag, 21. April – Sonntag, 27. April</p>

      <section className="mt-6 rounded-2xl bg-white p-4">
        <div className="text-sm text-[var(--text-dim)]">Umsatz</div>
        <div className="text-3xl font-bold">4.242 €</div>
        <div className="text-xs text-[var(--green)]">+8 % vs. letzte Woche</div>
      </section>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4">
          <div className="text-sm text-[var(--text-dim)]">Wareneinsatz</div>
          <div className="text-2xl font-bold">29 %</div>
          <div className="text-xs text-[var(--green)]">Ziel: ≤ 30 %</div>
        </div>
        <div className="rounded-2xl bg-white p-4">
          <div className="text-sm text-[var(--text-dim)]">Verschwendung</div>
          <div className="text-2xl font-bold">86 €</div>
          <div className="text-xs text-[var(--red)]">meist Salat</div>
        </div>
      </div>

      <h2 className="mt-6 mb-3 text-xl font-bold">Top-Gerichte</h2>
      <div className="rounded-2xl bg-white p-4 space-y-3">
        <Row name="Döner-Teller" value="142 ×" />
        <Row name="Hähnchen-Reis" value="98 ×" />
        <Row name="Lahmacun" value="74 ×" />
        <Row name="Pide mit Käse" value="41 ×" />
      </div>

      <section className="mt-6 rounded-[20px] bg-gradient-to-br from-[#e0f1ff] to-[#b3daff] p-4">
        <span className="inline-block rounded-full bg-black/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
          💡 KI-Tipp
        </span>
        <p className="mt-2.5 text-[14px] leading-snug text-[#0a3d6b]">
          Caesar Salad hat nur 47 % Marge und 40 % Retour. Preis von 7,90 € auf 9,50 € anheben oder
          Rezept anpassen.
        </p>
      </section>
    </main>
  );
}

function Row({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="font-semibold">{name}</span>
      <span className="text-[var(--text-dim)]">{value}</span>
    </div>
  );
}
