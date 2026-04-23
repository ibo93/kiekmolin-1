# Roadmap

Die Vision bleibt groß: **KI-Assistent für die gesamte Gastronomie.**
Wir bauen sie in drei klaren Phasen – jede baut auf der vorigen auf.

---

## Phase 1 – MVP: Imbiss / kleine Gastro (Monat 0 – 6)

### Ziel

Der eine magische Moment: **Beleg fotografieren → Bestand und Kalkulation
aktualisieren sich von selbst.**

Wenn dieser Flow reibungslos läuft, haben wir ein Produkt, für das
Gastronomen zahlen.

### Kern-Features MVP

1. **Beleg-Scan (Foto oder WhatsApp)**
   OCR + LLM erkennt Lieferant, Artikel, Mengen, Preise.
2. **Warenbestand automatisch aktualisiert**
   Neue Einkäufe fließen in den Bestand, Verbrauch wird geschätzt oder
   manuell korrigiert.
3. **Rezept-Datenbank pro Gericht**
   Zutaten + Mengen pro Portion. Einmal angelegt, dann live gekoppelt.
4. **Live-Kalkulation („Gericht-Ampel")**
   Jedes Gericht zeigt aktuelle Marge in Grün / Gelb / Rot.
5. **Tagesgericht-Vorschlag**
   KI schlägt aus Bestand + Haltbarkeit 2 – 3 Vorschläge vor.
6. **Deutsch + einfache Ikonografie**
   Keine Fachbegriffe, keine Tabellenwüsten.

### Bewusst NICHT im MVP

- Kassen-Anbindung
- Personal-Rollen
- Mehrere Standorte
- Steuerberater-Export
- Mehrere Lieferanten-Rahmenverträge
- Komplexe Reports

### Erfolgs-Messung Phase 1

- **1** Pilot-Gastronom nutzt die App täglich über 4 Wochen
- **≥ 80 %** der Belege werden ohne manuelle Korrektur korrekt erkannt
- **≥ 30 Min/Tag** gespart bei Belegpflege (selbstberichtet)
- **5** zahlende Gastronomen nach 6 Monaten

---

## Phase 2 – Restaurant (Monat 6 – 12)

### Was hinzukommt

- **Größere Speisekarten** (30 – 60 Gerichte), Wechselkarten
- **Mehrere Lieferanten** mit Preisvergleich und -historie
- **Personal-Rollen**: Chef sieht Zahlen, Koch sieht Bestand + Tagesplan
- **Wochen-Briefings** Montag früh
- **Verschwendungs-Score** mit Verbesserungs-Vorschlägen
- **Sprach-Input** („Hey, ich hab 5 Kilo Hähnchen reingenommen")
- **Saisonale Vorschläge** (Spargel, Wild, Weihnachten)
- **Wetter- / Feiertags-Forecast** für Einkaufsmengen

### Bewusst NICHT in Phase 2

- Kassen-Integration (optional, bleibt nachrangig)
- Hotel-spezifische Module

---

## Phase 3 – Hotel (ab Monat 12)

### Was hinzukommt

- **F&B-Reporting** (Wareneinsatz-Quote, Soll-Ist, Forecast, Budget)
- **Multi-Lager** (Küche, Bar, Frühstück, Bankett getrennt)
- **Bankett-Modul** (Event-Kalkulation, Gäste-Forecast)
- **PMS-Schnittstellen** (Opera, Protel, Mews)
- **Controlling-Sicht** für F&B-Manager
- **Einkaufs-Rahmenverträge** und Ausschreibungs-Unterstützung
- **Multi-Standort / Kette** mit Filial-Vergleich

---

## Übergeordnete Prinzipien

- **Nicht alles auf einmal bauen.** Lieber ein Feature exzellent als drei
  mittelmäßig.
- **Ein echter Nutzer von Tag 1.** Kein Feature ohne Feedback aus der
  Praxis.
- **Vision von Anfang an kommunizieren.** Wir verkaufen „KI-Assistent für
  die Gastronomie" – wir starten nur bewusst beim Imbiss.
- **Step by step sauber.** Jede Phase wird fertig, bevor die nächste
  beginnt.

## Getroffene Entscheidungen

- [x] **Plattform:** Web-First als PWA + WhatsApp-Bot
      (siehe [plattform.md](plattform.md))
- [x] **Tech-Stack:** Next.js + TypeScript + Supabase + Claude Sonnet 4.6
      (siehe [tech-stack.md](tech-stack.md))
- [x] **Preismodell:** Drei Tarife, 29 / 59 / 129 € / Monat
      (siehe [preismodell.md](preismodell.md))

## Offene Punkte

- [ ] **Erster Pilot-Gastronom** (Name, Laden, Start-Datum) – wichtigster Punkt
- [ ] Datenschutz / AV-Verträge (Belege enthalten personenbezogene Daten)
- [ ] Projekt-Setup: Next.js-App im Repo initialisieren
- [ ] Erster vertikaler Flow: Foto → Claude API → erkannter Beleg
