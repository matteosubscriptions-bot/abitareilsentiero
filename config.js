/* =====================================================================
   CONFIGURAZIONE DEL SITO — modifica SOLO questo file.
   Script "classico" (niente type="module"): nessun problema di MIME.
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---- Raccolta email (servizio esterno) --------------------------------
     Incolla qui l'endpoint del tuo servizio (Formspree / Brevo / Mailchimp…).
     Esempi:
       Formspree:  "https://formspree.io/f/xxxxxxxx"
       Brevo/altro: l'URL dell'endpoint che accetta POST con il campo "email".
     Finché è vuoto, i form mostrano un messaggio e NON inviano nulla.        */
  FORM_ENDPOINT: "",

  /* Come inviare i dati: "formdata" (default, adatto a Formspree) oppure
     "json" se il tuo servizio richiede un corpo JSON.                        */
  FORM_METHOD: "formdata",

  /* ---- Guida in PDF (lead magnet) ---------------------------------------
     File che parte in download dopo l'iscrizione dalla sezione "Scarica la
     guida". Carica il PDF con questo nome (o cambia il percorso qui).        */
  GUIDE_PDF: "downloads/dalla-sopravvivenza-alla-convivenza.pdf",

  /* ---- Tracciamento (caricato SOLO dopo il consenso ai cookie) -----------
     Lascia vuoto per non attivarlo. Quando inserisci un ID, lo script
     corrispondente viene caricato solo se l'utente accetta i cookie.         */
  GA_MEASUREMENT_ID: "",   // es. "G-XXXXXXXXXX"  (Google Analytics 4)
  META_PIXEL_ID: "",       // es. "123456789012345"  (Meta/Facebook Pixel)

  /* Email di contatto mostrata nelle policy e nei messaggi.                  */
  CONTACT_EMAIL: "abitareilsentiero@gmail.com"
};
