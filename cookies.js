/* Abitare il Sentiero — gestione consenso cookie (GDPR).
   Script "classico" (NO type="module").
   Gli strumenti di tracciamento (Google Analytics, Meta Pixel) vengono
   caricati SOLO dopo il consenso esplicito dell'utente. */
(function () {
  "use strict";

  var KEY = "ais_cookie_consent_v1";
  var CFG = window.SITE_CONFIG || {};

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function saveConsent(c) {
    c.ts = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
  }

  // ---------------- Caricamento condizionato degli script ----------------
  var loaded = { analytics: false, marketing: false };

  function loadGA(id) {
    if (loaded.analytics || !id) return;
    loaded.analytics = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }

  function loadPixel(id) {
    if (loaded.marketing || !id) return;
    loaded.marketing = true;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", id);
    window.fbq("track", "PageView");
  }

  function applyConsent(c) {
    if (c && c.analytics) loadGA(CFG.GA_MEASUREMENT_ID);
    if (c && c.marketing) loadPixel(CFG.META_PIXEL_ID);
  }

  // ---------------- UI del banner ----------------
  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.firstElementChild;
  }

  var banner, prefs;

  function buildBanner() {
    banner = el(
      '<div class="cookie-banner" role="dialog" aria-live="polite" aria-label="Informativa cookie">' +
        '<div class="cookie-banner-inner">' +
          '<p class="cookie-banner-text">Usiamo cookie tecnici e, previo consenso, cookie di statistica (Google Analytics) e ' +
          'marketing (Meta Pixel). I font sono forniti da Google Fonts. Leggi la ' +
          '<a href="cookie-policy.html">Cookie Policy</a> e la <a href="privacy.html">Privacy Policy</a>.</p>' +
          '<div class="cookie-banner-actions">' +
            '<button type="button" class="btn-cookie btn-cookie-ghost" data-cc="prefs">Preferenze</button>' +
            '<button type="button" class="btn-cookie btn-cookie-ghost" data-cc="reject">Solo necessari</button>' +
            '<button type="button" class="btn-cookie btn-cookie-solid" data-cc="accept">Accetta tutti</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
    document.body.appendChild(banner);
    banner.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cc]");
      if (!b) return;
      var act = b.getAttribute("data-cc");
      if (act === "accept") decide({ necessary: true, analytics: true, marketing: true });
      else if (act === "reject") decide({ necessary: true, analytics: false, marketing: false });
      else if (act === "prefs") openPrefs();
    });
  }

  function buildPrefs() {
    var c = getConsent() || { analytics: false, marketing: false };
    prefs = el(
      '<div class="cookie-modal" role="dialog" aria-modal="true" aria-label="Preferenze cookie">' +
        '<div class="cookie-modal-box">' +
          '<h2 class="cookie-modal-title">Preferenze cookie</h2>' +
          '<div class="cookie-row"><div><strong>Necessari</strong><p>Indispensabili al funzionamento del sito. Sempre attivi.</p></div>' +
            '<input type="checkbox" checked disabled /></div>' +
          '<div class="cookie-row"><div><strong>Statistiche</strong><p>Google Analytics, per capire come viene usato il sito (dati aggregati).</p></div>' +
            '<input type="checkbox" id="cc-analytics"' + (c.analytics ? " checked" : "") + " /></div>" +
          '<div class="cookie-row"><div><strong>Marketing</strong><p>Meta/Facebook Pixel, per misurare le campagne.</p></div>' +
            '<input type="checkbox" id="cc-marketing"' + (c.marketing ? " checked" : "") + " /></div>" +
          '<div class="cookie-modal-actions">' +
            '<button type="button" class="btn-cookie btn-cookie-ghost" data-cc="save">Salva preferenze</button>' +
            '<button type="button" class="btn-cookie btn-cookie-solid" data-cc="acceptall">Accetta tutti</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
    document.body.appendChild(prefs);
    prefs.addEventListener("click", function (e) {
      if (e.target === prefs) { closePrefs(); return; }
      var b = e.target.closest("[data-cc]");
      if (!b) return;
      var act = b.getAttribute("data-cc");
      if (act === "save") {
        decide({
          necessary: true,
          analytics: prefs.querySelector("#cc-analytics").checked,
          marketing: prefs.querySelector("#cc-marketing").checked
        });
        closePrefs();
      } else if (act === "acceptall") {
        decide({ necessary: true, analytics: true, marketing: true });
        closePrefs();
      }
    });
  }

  function openPrefs() { if (!prefs) buildPrefs(); prefs.classList.add("open"); }
  function closePrefs() { if (prefs) prefs.classList.remove("open"); }
  function hideBanner() { if (banner) banner.classList.remove("show"); }

  function decide(c) {
    saveConsent(c);
    applyConsent(c);
    hideBanner();
  }

  // ---------------- Avvio ----------------
  var existing = getConsent();
  if (existing) {
    applyConsent(existing);
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { buildBanner(); banner.classList.add("show"); });
    } else {
      buildBanner(); banner.classList.add("show");
    }
  }

  // "Gestisci cookie" nel footer (delegazione: il footer è iniettato dopo)
  document.addEventListener("click", function (e) {
    var t = e.target.closest("#manage-cookies");
    if (t) { e.preventDefault(); openPrefs(); }
  });
})();
