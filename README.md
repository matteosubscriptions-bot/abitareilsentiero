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

## Header e footer condivisi

Il menu (header) e il footer sono **incorporati direttamente in ogni pagina**,
così compaiono **sempre**, anche se il server non serve gli include via `fetch`.
La **fonte unica** resta in `partials/header.html` e `partials/footer.html`: se
modifichi il menu o il footer, aggiornali lì e ricopiane il contenuto in ogni
pagina (il blocco è delimitato dal commento
`<!-- header condiviso (fonte: partials/header.html) -->`). `site.js` gestisce
solo i comportamenti del menu (tendina, menu mobile, scroll fluido). Nessun
`type="module"`, quindi nessun problema di MIME.

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
- `images/testimonial-1.jpg … testimonial-6.jpg` +
  `videos/testimonial-1.mp4 … testimonial-6.mp4` — **testimonianze video
  segnaposto** (poster fotografico ricavato dalle foto delle esperienze, con
  icona play + breve clip). Sostituiscile con i video/foto reali dei
  partecipanti mantenendo gli stessi nomi file; i testi delle citazioni sono
  nelle sezioni testimonianze di `index.html` ed `escape-the-city.html`.

> **Nota sul look fotografico.** Home ed Escape usano un impianto
> foto-guidato (sezioni full-bleed con testo su scrim scuro, split
> immagine+testo, icone a linea). Rende al meglio con **foto professionali
> reali**: le immagini attuali sono stand-in di buona qualità ma diverse sono
> placeholder/b-roll. Sostituendo le foto (stessi nomi file) la resa migliora
> molto. Le icone sono SVG inline in `index.html`/`escape-the-city.html`
> (sprite `#i-*`), lo stile è tutto in `styles.css` (layer `.ais-*`).
- `downloads/dalla-sopravvivenza-alla-convivenza.pdf` — la guida (da caricare)

> **Timeline di Chi Sono.** La sezione "Il percorso" in `chi-sono.html` usa una
> timeline con un'immagine per tappa (corporate → furgone → agricoltura →
> ecovillaggi → oggi). Le foto attuali (`full-abitare.jpg`, `full-avventura.jpg`,
> `full-natura.jpg`, `cammino-cerchio.jpg`, `full-cammino.jpg`) sono **stand-in**:
> sostituiscile con foto reali della tua storia mantenendo gli stessi nomi file.
