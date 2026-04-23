export type Status = "green" | "yellow" | "red";

export type StockItem = {
  name: string;
  amount: string;
  note: string;
  status: Status;
};

export type Dish = {
  name: string;
  cost: number;
  price: number;
  status: Status;
};

export const stock: StockItem[] = [
  { name: "Hähnchen", amount: "4,2 kg", note: "reicht 3 Tage", status: "green" },
  { name: "Tomaten", amount: "1,1 kg", note: "schlecht in 2 Tagen", status: "red" },
  { name: "Mehl", amount: "12 kg", note: "reicht 1 Woche", status: "green" },
  { name: "Öl", amount: "0,8 l", note: "nachbestellen", status: "red" },
  { name: "Salat", amount: "3 Köpfe", note: "schlecht in 3 Tagen", status: "yellow" },
  { name: "Joghurtsoße", amount: "1,5 kg", note: "reicht 2 Tage", status: "yellow" },
  { name: "Reis", amount: "8 kg", note: "reicht 5 Tage", status: "green" },
  { name: "Lachs", amount: "2 kg", note: "schlecht morgen", status: "red" },
];

export const dishes: Dish[] = [
  { name: "Döner-Teller", cost: 2.8, price: 9.9, status: "green" },
  { name: "Lahmacun", cost: 2.1, price: 5.5, status: "yellow" },
  { name: "Caesar Salad", cost: 4.2, price: 7.9, status: "red" },
  { name: "Hähnchen-Reis", cost: 3.1, price: 10.5, status: "green" },
  { name: "Pide mit Käse", cost: 1.8, price: 6.5, status: "green" },
  { name: "Falafel-Teller", cost: 2.2, price: 8.9, status: "green" },
];

export function marginPercent(d: Dish) {
  return Math.round(((d.price - d.cost) / d.price) * 100);
}

export function formatDate(d = new Date()) {
  return d.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
