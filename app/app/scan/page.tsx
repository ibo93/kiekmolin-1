"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { BelegResponse } from "../api/scan/route";

type State =
  | { kind: "idle" }
  | { kind: "preview"; file: File; previewUrl: string }
  | { kind: "scanning" }
  | { kind: "result"; data: BelegResponse }
  | { kind: "error"; message: string };

export default function ScanPage() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleFile(file: File) {
    const previewUrl = URL.createObjectURL(file);
    setState({ kind: "preview", file, previewUrl });
  }

  async function submitScan(file: File) {
    setState({ kind: "scanning" });
    try {
      const body = new FormData();
      body.append("beleg", file);
      const res = await fetch("/api/scan", { method: "POST", body });
      if (!res.ok) throw new Error(`Fehler ${res.status}`);
      const data = (await res.json()) as BelegResponse;
      setState({ kind: "result", data });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "Unbekannter Fehler",
      });
    }
  }

  function reset() {
    if (state.kind === "preview") URL.revokeObjectURL(state.previewUrl);
    setState({ kind: "idle" });
  }

  if (state.kind === "scanning") {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-5">
        <div className="mb-6 h-16 w-16 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]" />
        <p className="text-lg font-semibold">KI liest Beleg...</p>
        <p className="mt-1 text-sm text-[var(--text-dim)]">
          Artikel, Mengen, Preise erkennen
        </p>
      </main>
    );
  }

  if (state.kind === "result") {
    const { data } = state;
    return (
      <main className="flex flex-1 flex-col px-5 pt-6">
        <div className="py-4 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--green)] text-3xl text-white">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Beleg erkannt</h2>
          <p className="text-sm text-[var(--text-dim)]">
            {data.lieferant} · {data.datum}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          {data.items.map((item, i) => (
            <div
              key={item.name}
              className={`flex items-start justify-between py-3 ${
                i < data.items.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-[13px] text-[var(--text-dim)]">
                  {item.menge} · {item.einzelpreis}
                </div>
              </div>
              <div className="font-semibold">{item.gesamt}</div>
            </div>
          ))}
          <div className="flex justify-between pt-3.5 text-lg font-bold">
            <span>Summe</span>
            <span>{data.summe}</span>
          </div>
        </div>

        {data.hinweis && (
          <div className="mt-4 rounded-2xl bg-[#eaf5ff] p-4">
            <div className="text-sm font-semibold text-[var(--primary)]">
              💡 KI-Hinweis
            </div>
            <p className="mt-1 text-[13px]">{data.hinweis}</p>
          </div>
        )}

        <button
          onClick={() => router.push("/bestand")}
          className="mt-4 w-full rounded-2xl bg-[var(--green)] py-4 font-semibold text-white transition active:scale-[0.98]"
        >
          ✓ Bestand aktualisieren
        </button>
        <button
          onClick={reset}
          className="mt-2 w-full rounded-2xl bg-white py-4 font-semibold text-[var(--text-dim)]"
        >
          Weiteren Beleg scannen
        </button>
      </main>
    );
  }

  if (state.kind === "preview") {
    return (
      <main className="flex flex-1 flex-col px-5 pt-6">
        <button
          onClick={reset}
          className="text-left text-sm text-[var(--primary)]"
        >
          ← Anderes Foto wählen
        </button>
        <h1 className="mt-3 text-[28px] font-bold">Beleg prüfen</h1>

        <div className="mt-4 overflow-hidden rounded-2xl bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={state.previewUrl}
            alt="Beleg-Vorschau"
            className="w-full object-contain"
          />
        </div>

        <p className="mt-3 text-center text-xs text-[var(--text-dim)]">
          {state.file.name} · {(state.file.size / 1024).toFixed(1)} KB
        </p>

        <button
          onClick={() => submitScan(state.file)}
          className="mt-6 w-full rounded-2xl bg-[var(--primary)] py-4 font-semibold text-white transition active:scale-[0.98]"
        >
          Beleg analysieren
        </button>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col px-5 pt-6">
      <Link href="/" className="text-sm text-[var(--primary)]">
        ← Zurück
      </Link>
      <h1 className="mt-3 text-[28px] font-bold">Beleg scannen</h1>
      <p className="text-[var(--text-dim)]">
        Foto vom Lieferschein oder Kassenbon machen. Die KI erkennt Artikel und
        Preise automatisch.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
        className="hidden"
      />

      <button
        onClick={() => inputRef.current?.click()}
        className="mt-8 flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-[var(--border)] bg-white text-[var(--text-dim)] transition active:scale-[0.99]"
      >
        <span className="text-6xl">📸</span>
        <span className="text-lg font-semibold">Foto aufnehmen</span>
        <span className="text-xs">oder aus der Galerie wählen</span>
      </button>

      {state.kind === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-center text-sm text-[var(--red)]">
          {state.message}
        </p>
      )}

      <p className="mt-4 text-center text-xs text-[var(--text-dim)]">
        Alternativ: Beleg per WhatsApp an uns schicken.
      </p>
    </main>
  );
}
