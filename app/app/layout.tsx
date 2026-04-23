import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TabBar } from "./components/TabBar";

export const metadata: Metadata = {
  title: "Gastro-App – Dein KI-Assistent",
  description:
    "Beleg fotografieren, Bestand aktualisiert sich. Kalkulation live. Sogar Halil versteht es.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gastro",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f5f5f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-[430px] flex-col bg-[var(--bg)] pb-24">
          {children}
        </div>
        <TabBar />
      </body>
    </html>
  );
}
