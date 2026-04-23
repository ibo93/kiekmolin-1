import { Ampel, MarginText } from "../components/Ampel";
import { dishes, marginPercent } from "../lib/data";

export default function GerichtePage() {
  const green = dishes.filter((d) => d.status === "green");
  const yellow = dishes.filter((d) => d.status === "yellow");
  const red = dishes.filter((d) => d.status === "red");

  const avgMargin = Math.round(
    dishes.reduce((sum, d) => sum + marginPercent(d), 0) / dishes.length,
  );

  return (
    <main className="flex-1 px-5 pt-6">
      <h1 className="text-[28px] font-bold">Gerichte</h1>
      <p className="text-sm text-[var(--text-dim)]">
        {dishes.length} Gerichte · ⌀ Marge {avgMargin} %
      </p>

      {red.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">
            <span className="text-[var(--red)]">●</span> Preis prüfen
          </h2>
          <DishList items={red} />
        </>
      )}

      {yellow.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">
            <span className="text-[var(--yellow-text)]">●</span> Knapp
          </h2>
          <DishList items={yellow} />
        </>
      )}

      {green.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-xl font-bold">
            <span className="text-[var(--green)]">●</span> Marge top
          </h2>
          <DishList items={green} />
        </>
      )}
    </main>
  );
}

function DishList({ items }: { items: typeof dishes }) {
  return (
    <div className="space-y-2.5">
      {items.map((dish) => (
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
  );
}
