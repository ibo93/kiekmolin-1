import { NextResponse } from "next/server";

export type BelegItem = {
  name: string;
  menge: string;
  einzelpreis: string;
  gesamt: string;
};

export type BelegResponse = {
  lieferant: string;
  datum: string;
  items: BelegItem[];
  summe: string;
  hinweis?: string;
};

const demoBeleg: BelegResponse = {
  lieferant: "Metro",
  datum: new Date().toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),
  items: [
    { name: "Hähnchenbrust", menge: "5 kg", einzelpreis: "9,90 €/kg", gesamt: "49,50 €" },
    { name: "Paprika rot", menge: "3 kg", einzelpreis: "3,20 €/kg", gesamt: "9,60 €" },
    { name: "Olivenöl 5 L", menge: "1 Stk", einzelpreis: "28,40 €", gesamt: "28,40 €" },
    { name: "Zwiebeln", menge: "10 kg", einzelpreis: "1,80 €/kg", gesamt: "18,00 €" },
  ],
  summe: "105,50 €",
  hinweis:
    "Hähnchen ist 12 % teurer als letzte Woche. Marge beim Döner-Teller sinkt auf 70 %.",
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("beleg");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Kein Beleg-Foto gefunden" },
      { status: 400 },
    );
  }

  // TODO: hier kommt der Claude-API-Call
  // const anthropic = new Anthropic();
  // const bytes = await file.arrayBuffer();
  // const base64 = Buffer.from(bytes).toString("base64");
  // const res = await anthropic.messages.create({
  //   model: "claude-sonnet-4-6",
  //   max_tokens: 2048,
  //   messages: [{
  //     role: "user",
  //     content: [
  //       { type: "image", source: { type: "base64", media_type: file.type, data: base64 } },
  //       { type: "text", text: "Lies diesen Beleg. Gib JSON zurück: { lieferant, datum, items: [{name, menge, einzelpreis, gesamt}], summe }" },
  //     ],
  //   }],
  // });

  await new Promise((r) => setTimeout(r, 800));

  return NextResponse.json({
    ...demoBeleg,
    dateiname: file.name,
    groesse: `${(file.size / 1024).toFixed(1)} KB`,
  });
}
