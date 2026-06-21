# Abitare il Sentiero — `/app`

Sito statico dell'app "Abitare il Sentiero": tre (e più) esperienze in natura
per uscire dalla modalità sopravvivenza, tornare presenti e abitare il sentiero.

È una single-page app React (HashRouter) già compilata in un singolo bundle
JavaScript. Non richiede build: si carica così com'è su un qualsiasi hosting
statico.

## Struttura

```
.
├── index.html          → pagina HTML principale (carica assets/app.js)
├── assets/
│   └── app.js          → bundle JavaScript dell'app React (già compilato)
├── images/             → immagini JPG
├── videos/             → video MP4
├── favicon.ico
├── robots.txt
└── .htaccess           → MIME types, CORS e fallback SPA per Apache
```

## Pagine (HashRouter)

| Percorso | Pagina |
|----------|--------|
| `#/` | Home |
| `#/escape-the-city` | Escape the City |
| `#/accendi-il-tuo-fuoco` | Accendi il tuo Fuoco |
| `#/la-mappa-del-tuo-viaggio` | La Mappa del tuo Viaggio |
| `#/cammino` | Il Cammino |
| `#/via-degli-dei` | Via degli Dei |
| `#/elementi-di-convivenza` | Elementi di Convivenza |
| `#/chi-sono` | Chi Sono |

## Anteprima locale

Serve la cartella con un qualsiasi server statico, dalla radice del progetto:

```sh
python3 -m http.server 8099
# poi apri http://localhost:8099/
```

## Deploy

Carica tutto il contenuto di questa cartella sul server statico. Servendo dalla
radice del dominio tutti i percorsi delle risorse (sia relativi `images/…` sia
assoluti `/images/…`) si risolvono correttamente.

Per il caricamento via FTP in una sottocartella `/app/`, carica index.html,
assets/, images/ e videos/ dentro `/app/`.

## Modificare i contenuti

- Testi di `<title>` / meta: `index.html`
- Testi e logica dell'app: `assets/app.js` (bundle React minificato — cerca le
  stringhe di testo da modificare)

## Media segnaposto da sostituire

Alcuni file multimediali non erano disponibili nel materiale di partenza e sono
stati **ricostruiti come segnaposto**. Vanno sostituiti con i media definitivi
mantenendo gli stessi nomi file:

- `images/full-abitare.jpg`, `images/full-natura.jpg` — generati da foto di
  bosco esistenti (sfondi full-bleed)
- `images/per-chi-sara.jpg`, `images/per-chi-marco.jpg`,
  `images/per-chi-federica.jpg`, `images/per-chi-andrea.jpg` — ritratti
  segnaposto delle personas
- `videos/hero.mp4`, `videos/mappa-viaggio.mp4` — clip segnaposto (lento zoom
  generato dalle immagini corrispondenti)
