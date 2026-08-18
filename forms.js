/* Abitare il Sentiero — invio dei form email (guida + newsletter).
   Script "classico" (NO type="module").
   Invia i dati al servizio esterno configurato in config.js (FORM_ENDPOINT). */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};

  function setMessage(form, text, kind) {
    var m = form.querySelector(".form-message");
    if (!m) return;
    m.textContent = text;
    m.className = "form-message basis-full order-last " + (kind || "");
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function downloadGuide() {
    var url = CFG.GUIDE_PDF;
    if (!url) return;
    var a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "");
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function submit(form) {
    var emailInput = form.querySelector('input[name="email"]');
    var consent = form.querySelector('input[name="consent"]');
    var typeInput = form.querySelector('input[name="form_type"]');
    var formType = typeInput ? typeInput.value : "newsletter";
    var email = emailInput ? emailInput.value.trim() : "";

    if (!validEmail(email)) { setMessage(form, "Inserisci un indirizzo email valido.", "error"); return; }
    if (consent && !consent.checked) { setMessage(form, "Devi accettare la Privacy Policy per procedere.", "error"); return; }

    if (!CFG.FORM_ENDPOINT) {
      setMessage(form, "Modulo non ancora collegato: imposta FORM_ENDPOINT in config.js.", "error");
      console.warn("FORM_ENDPOINT non configurato in config.js");
      return;
    }

    var btn = form.querySelector('button[type="submit"], button:not([type])');
    var btnText = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.dataset.loading = "1"; btn.textContent = "Invio…"; }
    setMessage(form, "", "");

    var opts;
    if ((CFG.FORM_METHOD || "formdata") === "json") {
      opts = {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email, form_type: formType, source: location.pathname })
      };
    } else {
      var fd = new FormData();
      fd.append("email", email);
      fd.append("form_type", formType);
      fd.append("source", location.pathname);
      opts = { method: "POST", headers: { Accept: "application/json" }, body: fd };
    }

    fetch(CFG.FORM_ENDPOINT, opts)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r;
      })
      .then(function () {
        form.reset();
        if (formType === "lead_magnet") {
          setMessage(form, "Perfetto! Il download della guida sta per iniziare. Controlla anche la tua email.", "success");
          downloadGuide();
        } else {
          setMessage(form, "Iscrizione registrata. Grazie! A presto dal bosco.", "success");
        }
      })
      .catch(function (e) {
        console.error(e);
        setMessage(form, "Qualcosa è andato storto. Riprova o scrivici a " + (CFG.CONTACT_EMAIL || "") + ".", "error");
      })
      .finally(function () {
        if (btn) { btn.disabled = false; delete btn.dataset.loading; btn.textContent = btnText; }
      });
  }

  function init() {
    document.querySelectorAll("form").forEach(function (form) {
      if (!form.querySelector('input[name="email"]')) return;
      form.setAttribute("novalidate", "");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        submit(form);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
