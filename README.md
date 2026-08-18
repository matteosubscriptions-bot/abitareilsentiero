# Abitare il Sentiero — sito statico

Sito di "Abitare il Sentiero": esperienze in natura per uscire dalla modalità
sopravvivenza, tornare presenti e abitare il sentiero.

Sito **statico multi-pagina**: una pagina = un file `.html`, con i testi scritti
direttamente nell'HTML e le immagini come normali tag `<img>`. **Nessuna build**
e **nessuno `<script type="module">`** — così non si ripresenta l'errore di MIME
`text/plain` sul server. Header e footer sono in un unico punto (`partials/`) e
inclusi in ogni pagina tramite uno script classico.

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
├── privacy.html                     → Privacy Policy
├── cookie-policy.html               → Cookie Policy
├── partials/
│   ├── header.html                  → menu di navigazione (UNICO, condiviso)
│   └── footer.html                  → footer (UNICO, condiviso)
├── config.js                        → CONFIGURAZIONE (endpoint email, PDF, ID tracciamento)
├── site.js                          → include header/footer + menu (script classico)
├── cookies.js                       → banner consenso cookie (GA/Pixel solo dopo consenso)
├── forms.js                         → invio dei moduli email al servizio esterno
├── styles.css                       → tutto lo stile (un unico file)
├── images/                          → immagini JPG
├── videos/                          → video MP4
├── downloads/                       → qui va il PDF della guida
├── favicon.ico · robots.txt · .htaccess
```

## Header e footer condivisi (una sola copia)

Non sono più ripetuti dentro ogni pagina: si modificano **una sola volta** in
`partials/header.html` e `partials/footer.html`. Ogni pagina contiene solo un
segnaposto `<div data-include="partials/header.html"></div>` che `site.js`
riempie al caricamento. Nessun `type="module"`, quindi nessun problema di MIME.

> ⚠️ Poiché gli include vengono caricati via `fetch`, il sito va aperto tramite
> un **server** (hosting reale o `python3 -m http.server`), non con un
> doppio-clic `file://`.

## Configurazione — file `config.js`

Tutto ciò che va personalizzato è in `config.js`:

- `FORM_ENDPOINT` — l'URL del tuo servizio email (Mailchimp/Brevo/Formspree…).
  Incollalo qui per far funzionare i moduli "Scarica la guida" e "Resta aggiornato".
- `GUIDE_PDF` — percorso del PDF della guida (default:
  `downloads/dalla-sopravvivenza-alla-convivenza.pdf`). Carica il file in `downloads/`.
- `GA_MEASUREMENT_ID` — ID Google Analytics 4 (es. `G-XXXX`). Caricato **solo**
  dopo il consenso ai cookie.
- `META_PIXEL_ID` — ID Meta/Facebook Pixel. Caricato **solo** dopo il consenso.

## Raccolta email

I due moduli inviano l'email (e il tipo di modulo) all'endpoint `FORM_ENDPOINT`.
Dopo l'iscrizione al lead magnet parte il download del PDF della guida. Ogni
modulo richiede la spunta di accettazione della Privacy Policy. Finché
`FORM_ENDPOINT` è vuoto, i moduli mostrano un messaggio e non inviano nulla.

## Cookie e privacy

- Banner di consenso al primo accesso: *Accetta tutti* / *Solo necessari* /
  *Preferenze* per categoria (statistiche, marketing).
- Google Analytics e Meta Pixel vengono attivati **solo** dopo il consenso.
- Le scelte si modificano dal pulsante **“Gestisci cookie”** nel footer.
- Pagine `privacy.html` e `cookie-policy.html` (testi GDPR in italiano).

> Nelle policy ci sono note segnalate da completare (dati del titolare: indirizzo,
> eventuale P.IVA; nome del servizio email scelto). Sostituiscile prima della
> pubblicazione definitiva.

## Come modificare i contenuti

- **Testi** → nei file `.html` delle pagine (testo normale tra i tag).
- **Menu / footer** → in `partials/header.html` e `partials/footer.html`.
- **Immagini** → sostituisci i file in `images/` mantenendo lo stesso nome.
- **Video** → sostituisci i file in `videos/`.
- **Colori/stile** → regole personalizzate in fondo a `styles.css`
  (palette: forest `rgb(45 90 39)`, cream `rgb(253 251 247)`, sand `rgb(245 240 232)`).

## Anteprima locale

```sh
python3 -m http.server 8099
# poi apri http://localhost:8099/
```

## Deploy

Carica **tutto** il contenuto della cartella sul server (via FTP o pannello).
Tutti i percorsi sono relativi, quindi funziona sia dalla radice del dominio sia
in una sottocartella `/app/`.

## Media segnaposto da sostituire

Alcuni file non erano disponibili e sono stati **creati come segnaposto** (stessi
nomi da mantenere):

- `images/full-abitare.jpg`, `images/full-natura.jpg` — sfondi full-bleed
- `images/per-chi-sara.jpg`, `images/per-chi-marco.jpg`,
  `images/per-chi-federica.jpg`, `images/per-chi-andrea.jpg` — ritratti personas
- `videos/hero.mp4`, `videos/mappa-viaggio.mp4` — clip segnaposto
- `downloads/dalla-sopravvivenza-alla-convivenza.pdf` — la guida (da caricare)
