KOPTEN BW – WARMES ICONEN-FARBSCHEMA

Enthaltene Änderungen:
- Warmes Farbkonzept aus den hochgeladenen Ikonen: Terrakotta, dunkles Rotbraun, Sand, Creme und Gold statt Grün.
- Dezente, langsame Hintergrundbewegung und sanfte Hover-Animationen; respektiert prefers-reduced-motion.
- Werbliche Schlagzeilen/Claims auf der Startseite reduziert; Matthäus 11,28 bleibt als Bibelvers.
- Externer Link zum koptischen Kalender: https://kopten.de/kalender.html
- Bild-Platzhalter bleiben ohne Bilddateien sichtbar und nennen Dateinamen sowie empfohlene Ratio/Pixel.

Bilder später einsetzen:
1. Dateien in public/images/ ablegen (Ordner ggf. erstellen).
2. Den passenden Platzhalter in src/views/HomeView.vue bzw. src/views/GalleryView.vue gegen ein Bild-Element tauschen.
3. Empfehlungen: Hero 2400x1350 (16:9); Kirchen-Innenraum 1200x1500 (4:5); Galeriebilder 1200x900 (4:3).

Übernahme:
- src/ in dein Projekt kopieren/ersetzen.
- public/images/ zusammenführen.
- .env, package.json, package-lock.json und Firebase-Konfiguration nicht ersetzen.
- Danach npm run build testen.
