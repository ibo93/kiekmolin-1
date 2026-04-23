# Plattform-Entscheidung

## Entscheidung

**Web-First als PWA (Progressive Web App).**
Zusätzlich **WhatsApp-Bot** als Zweitweg für Beleg-Eingang.
Native iOS- und Android-Apps kommen später bei Bedarf.

## Warum

1. **Schnellste MVP-Schleife.** Web-Deploy in Sekunden, kein App-Store-Review.
2. **Ein Codebase.** Läuft auf iPhone, Android, Tablet, Laptop.
3. **WhatsApp-Integration einfach.** Halil kennt WhatsApp – Beleg per
   WhatsApp schicken ist null Lernkurve.
4. **Keine Installations-Hürde.** Link öffnen, „zum Homescreen hinzufügen",
   fertig.
5. **Später nachrüstbar.** Via Capacitor oder React Native lässt sich die
   Web-Basis in native Apps verpacken, sobald nötig.

## Was das konkret heißt

- **Frontend:** installierbare PWA, Mobile-First-Design (iPhone-Größe
  als Leitmaß), funktioniert aber auch auf Tablet und Desktop.
- **Kamera-Zugriff:** über Web-API (`getUserMedia`) – funktioniert auf
  aktuellem iOS und Android.
- **Offline-Fähigkeit:** Service Worker cached die App + letzten Bestand.
  Neue Belege werden lokal gespeichert und synchronisiert, sobald wieder
  online.
- **WhatsApp-Bot:** separater Kanal. Gastronom schickt Foto an eine
  WhatsApp-Nummer, Beleg wird im Backend verarbeitet, Bestätigung kommt
  zurück. Via WhatsApp Cloud API (Meta).
- **Push-Notifications:** Web-Push auf Android sofort, auf iOS ab 16.4.
  Fallback: WhatsApp-Nachricht.

## Was wir NICHT bauen (jetzt)

- **Keine native iOS-App.** App-Store-Reviews verlangsamen MVP-Phase.
- **Keine native Android-App.** PWA reicht für Halil.
- **Kein Desktop-Client.** Browser genügt.

## Re-Evaluation

Nach 6 Monaten prüfen:

- Reicht die Kamera-API für saubere Beleg-Fotos?
- Nehmen Nutzer die PWA-Installation an, oder wollen sie eine „echte App"?
- Wie zuverlässig sind Web-Push auf iOS?

Wenn zwei von drei Antworten „nein" lauten → native Apps via Capacitor
einführen, Web-Codebase bleibt.
