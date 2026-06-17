# Frontend — wizytówka R2Solutions

Strona wizytówka / landing page zbudowana w **Vue 3 + Vite** (z Bootstrap 5 i SCSS).
Aplikacja jest renderowana po stronie klienta, a produkt buildu (`dist/`) serwuje nginx
(zob. `docker/` w katalogu głównym).

## Wymagania

- **Node 18+ i npm** — gdy budujesz lokalnie, albo
- **Docker + Docker Compose** — gdy budujesz przez kontener (nie trzeba mieć Node na maszynie).

## Szybki build

### Wariant A — przez Docker (zalecany, bez instalacji Node)

Z **katalogu głównego projektu** (tam, gdzie jest `docker-compose.yml`):

```bash
docker compose run --rm vite -c "npm ci && npm run build"
```

Kontener `node:alpine` instaluje zależności i generuje `frontend/dist/`.
Następnie podnieś serwer WWW (nginx serwujący `dist/`):

```bash
docker compose up -d --build web_server
```

> Środowisko wybiera zmienna `ENV` w `.env` (`DEV` / `PROD` / `VPS`).
> Po każdej zmianie kodu wystarczy ponownie wykonać `docker compose run --rm vite ...` —
> nginx od razu serwuje nowy `dist/`, bez restartu kontenera.

### Wariant B — lokalnie (masz zainstalowany Node)

Z katalogu `frontend/`:

```bash
npm ci          # instalacja zależności (czysta, wg package-lock.json)
npm run build   # produkcyjny build do dist/
```

## Tryb deweloperski (hot reload)

Z katalogu `frontend/`:

```bash
npm install
npm run dev
```

Vite wystartuje serwer z hot-reloadem (domyślnie `http://localhost:8000`,
konfiguracja w `vite.config.js`).

## Dostępne skrypty (`package.json`)

| Komenda           | Opis                                              |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Serwer deweloperski z hot-reloadem                |
| `npm run build`   | Build produkcyjny do `dist/` (`--emptyOutDir`)    |
| `npm run preview` | Lokalny podgląd zbudowanego `dist/`               |

## Gdzie co jest

- `src/components/` — komponenty sekcji (Hero, Skills, Experience, Projects, Contact, …).
- `src/data/projects.js` — **lista projektów w portfolio**. Aby dodać projekt, dopisz obiekt
  do tablicy (są tam komentarze ze wzorem). Screenshoty wrzucaj do `src/public/projects/`.
- `src/scss/` — style: `colors.scss` (paleta), `main.scss`, `bootstrap_overload.scss`.
- `src/public/` — pliki statyczne kopiowane 1:1 do `dist/` (favicony, `manifest.json`, screenshoty).

## Cache po deployu

Nginx wysyła `Cache-Control: no-cache` dla `index.html` i długi, niezmienny cache dla
zahashowanych plików w `/assets/`. Dzięki temu po przebudowie przeglądarka pobiera nowy
widok bez `Ctrl+F5` (konfiguracja w `docker/web/ngnix-server-*.conf`).
