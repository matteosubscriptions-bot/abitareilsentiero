# Abitare il Sentiero — sito statico

Sito di "Abitare il Sentiero": esperienze in natura per uscire dalla modalità
sopravvivenza, tornare presenti e abitare il sentiero.

Sito **statico multi-pagina**: una pagina = un file `.html`, con i testi scritti
direttamente nell'HTML e le immagini come normali tag `<img>`. **Nessuna build**,
**nessun `type="module"`** (così non si ripresenta l'errore di MIME `text/plain`
sul server). Si carica così com'è su qualsiasi hosting statico.

## Struttura

```
.
├── index.html                       → Home
├── escape-the-city.html             → Escape the City
├── accendi-il-tuo-fuoco.html        → Accendi il tuo Fuoco
├── la-mappa-del-tuo-viaggio.html    → La Mappa del tuo Viaggio
├── cammino.html                     → Il Cammino
├── via-degli-dei.html               → Via degli Dei
├── elementi-di-convivenza.html      → Elementi di Convivenza
├── chi-sono.html                    → Chi Sono
├── styles.css                       → tutto lo stile (un unico file)
├── site.js                          → interazioni (menu, tendina) — script classico
├── images/                          → immagini JPG
├── videos/                          → video MP4
├── favicon.ico
├── robots.txt
└── .htaccess                        → MIME types corretti + CORS (per Apache)
```

## Come modificare i contenuti

- **Testi**: aprire il file `.html` della pagina e modificare direttamente il
  testo tra i tag. È testo normale, niente da compilare.
- **Immagini**: sostituire i file dentro `images/` mantenendo lo stesso nome,
  oppure cambiare l'attributo `src="images/..."` nel file HTML.
- **Video**: sostituire i file dentro `videos/` mantenendo lo stesso nome.
- **Menu di navigazione**: è in cima a ogni file HTML, nel blocco
  `<header id="site-header">`. È identico su tutte le pagine: se lo modifichi,
  aggiorna tutti i file.
- **Colori / stile**: in fondo a `styles.css` ci sono le regole personalizzate
  (header, menu, tendina). La palette: forest `rgb(45 90 39)`,
  forest-light `rgb(58 122 52)`, cream `rgb(253 251 247)`, sand `rgb(245 240 232)`.

## Anteprima locale

```sh
python3 -m http.server 8099
# poi apri http://localhost:8099/
```

## Deploy

Carica **tutto** il contenuto della cartella sul server (via FTP o pannello).
Funziona sia dalla radice del dominio sia dentro una sottocartella `/app/`,
perché tutti i percorsi delle risorse sono relativi (`images/...`, `videos/...`,
`styles.css`, `site.js`, `*.html`).

Il file `.htaccess` forza il MIME type corretto dei `.js`/`.css` su Apache; in
ogni caso `site.js` è uno script classico (non un modulo), quindi viene eseguito
indipendentemente dal MIME type del server.

## Media segnaposto da sostituire

Alcuni file non erano disponibili nel materiale di partenza e sono stati
**creati come segnaposto**. Vanno sostituiti con i media definitivi mantenendo
gli stessi nomi file:

- `images/full-abitare.jpg`, `images/full-natura.jpg` — sfondi full-bleed
  (generati da foto di bosco esistenti)
- `images/per-chi-sara.jpg`, `images/per-chi-marco.jpg`,
  `images/per-chi-federica.jpg`, `images/per-chi-andrea.jpg` — ritratti delle
  personas
- `videos/hero.mp4`, `videos/mappa-viaggio.mp4` — clip segnaposto (lento zoom
  generato dalle immagini corrispondenti)
