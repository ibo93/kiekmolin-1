import type { Status } from "../lib/data";

const colors: Record<Status, string> = {
  green: "bg-[var(--green)] shadow-[0_0_10px_rgba(48,209,88,0.5)]",
  yellow: "bg-[var(--yellow)] shadow-[0_0_10px_rgba(255,214,10,0.5)]",
  red: "bg-[var(--red)] shadow-[0_0_10px_rgba(255,69,58,0.5)]",
};

export function Ampel({ status }: { status: Status }) {
  return <span className={`inline-block h-3.5 w-3.5 rounded-full ${colors[status]}`} />;
}

export function MarginText({ status, value }: { status: Status; value: number }) {
  const color =
    status === "green"
      ? "text-[var(--green)]"
      : status === "yellow"
        ? "text-[var(--yellow-text)]"
        : "text-[var(--red)]";
  return <span className={`font-bold ${color}`}>{value} %</span>;
}
