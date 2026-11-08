KOPTEN BW – korrigierte Quellordner

Ersetzen:
1. ZIP entpacken.
2. Den Ordner src aus diesem ZIP in dein Projekt kopieren und den vorhandenen src-Ordner ersetzen.
3. Den Ordner public/images aus diesem ZIP in dein Projekt kopieren/zusammenführen.
4. package.json, package-lock.json, .env, firebase.json und andere Konfigurationsdateien deines bestehenden Projekts NICHT ersetzen – diese Dateien sind nicht Teil dieses ZIPs.
5. Im Projektordner ausführen: npm run build

Bilder:
Siehe public/images/README-BILDER.txt. Die Bilder sind absichtlich nicht enthalten. Lege deine eigenen Dateien unter den dort genannten Dateinamen ab.

Wichtige Firebase-Einschränkung:
Die vorhandene Kontaktseite ruft eine Cloud Function namens submitContactMessage auf. Das funktioniert erst, wenn diese Funktion wirklich im Firebase-Projekt bereitgestellt wurde. Cloud Functions erfordern in der Regel den Blaze-Tarif. App Check/reCAPTCHA allein ersetzt keine serverseitige Formularprüfung. Die statische Galerie funktioniert ohne Storage-Upload, wenn du Bilder in public/images/gallery ablegst und neu baust/deployst.
