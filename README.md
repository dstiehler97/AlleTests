# Alle Tests

Sammlung von WebApps, gehostet über **GitHub Pages**.

## Struktur

```
index.html        Startseite – listet alle Apps aus apps.json
apps.json         Liste der Apps (ordner, titel, beschreibung)
assets/style.css  Gemeinsames Styling (Hell/Dunkel)
apps/<name>/      Eine App pro Ordner, jeweils mit eigener index.html
apps/_vorlage/    Vorlage für neue Apps
.nojekyll         Pages liefert Dateien unverändert aus
```

## GitHub Pages aktivieren

Settings → Pages → *Source: Deploy from a branch* → Branch `main`, Ordner `/ (root)` → Save.
Danach erreichbar unter `https://dstiehler97.github.io/AlleTests/`.

## Neue App hinzufügen

1. `apps/_vorlage` kopieren, z. B. nach `apps/todo`
2. In `apps.json` eintragen:
   ```json
   [{ "ordner": "todo", "titel": "To-do", "beschreibung": "Einfache Aufgabenliste" }]
   ```
