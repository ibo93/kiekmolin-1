import { stock, type StockItem } from "../lib/data";

function Badge({ status }: { status: StockItem["status"] }) {
  const styles: Record<StockItem["status"], { bg: string; text: string; label: string }> = {
    red: { bg: "bg-[#ffe5e3]", text: "text-[var(--red)]", label: "dringend" },
    yellow: { bg: "bg-[#fff6d1]", text: "text-[#b87a00]", label: "bald" },
    green: { bg: "bg-[#d9f7e0]", text: "text-[#117a2f]", label: "ok" },
  };
  const s = styles[status];
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  );
}

function StockList({ items }: { items: StockItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-2xl bg-white p-4">
      {items.map((item, i) => (
        <div
          key={item.name}
          className={`flex items-center justify-between py-3.5 ${
            i < items.length - 1 ? "border-b border-[var(--border)]" : ""
          }`}
        >
          <div>
            <div className="font-semibold">{item.name}</div>
            <div className="mt-0.5 text-xs text-[var(--text-dim)]">
              {item.amount} · {item.note}
            </div>
          </div>
          <Badge status={item.status} />
        </div>
      ))}
    </div>
  );
}

export default function BestandPage() {
  const red = stock.filter((s) => s.status === "red");
  const yellow = stock.filter((s) => s.status === "yellow");
  const green = stock.filter((s) => s.status === "green");

  return (
    <main className="flex-1 px-5 pt-6">
      <h1 className="text-[28px] font-bold">Bestand</h1>
      <p className="text-sm text-[var(--text-dim)]">
        {stock.length} Artikel · zuletzt aktualisiert gerade eben
      </p>

      {red.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">⚠ Bald schlecht / leer</h2>
          <StockList items={red} />
        </>
      )}

      {yellow.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">🛒 Im Blick behalten</h2>
          <StockList items={yellow} />
        </>
      )}

      {green.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">✓ Alles gut</h2>
          <StockList items={green} />
        </>
      )}
    </main>
  );
}
