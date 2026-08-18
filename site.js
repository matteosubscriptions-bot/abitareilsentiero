/* Abitare il Sentiero — struttura e navigazione del sito.
   Script "classico" (NO type="module"): nessun problema di MIME sul server.

   Carica gli include condivisi (header/footer) e poi inizializza il menu. */
(function () {
  "use strict";

  // ---- Include condivisi: <div data-include="partials/header.html"></div> --
  function loadIncludes() {
    var nodes = document.querySelectorAll("[data-include]");
    return Promise.all(
      Array.prototype.map.call(nodes, function (node) {
        var url = node.getAttribute("data-include");
        return fetch(url)
          .then(function (r) {
            if (!r.ok) throw new Error(r.status + " " + url);
            return r.text();
          })
          .then(function (html) {
            var tmp = document.createElement("div");
            tmp.innerHTML = html;
            var frag = document.createDocumentFragment();
            while (tmp.firstChild) frag.appendChild(tmp.firstChild);
            node.parentNode.replaceChild(frag, node);
          })
          .catch(function (e) {
            console.error("Include non caricato:", url, e);
          });
      })
    );
  }

  function initNav() {
    // Sfondo dell'header allo scroll
    var header = document.getElementById("site-header");
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Menu a tendina "Esperienze"
    var expToggle = document.getElementById("exp-toggle");
    var expMenu = document.getElementById("exp-menu");
    if (expToggle && expMenu) {
      expToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = expMenu.classList.toggle("open");
        expToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", function () {
        expMenu.classList.remove("open");
        expToggle.setAttribute("aria-expanded", "false");
      });
    }

    // Menu mobile (hamburger)
    var burger = document.getElementById("nav-burger");
    var mobile = document.getElementById("mobile-menu");
    if (burger && mobile) {
      burger.addEventListener("click", function () {
        mobile.classList.toggle("open");
        document.body.classList.toggle("menu-open");
      });
      mobile.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mobile.classList.remove("open");
          document.body.classList.remove("menu-open");
        });
      });
    }

    // Scroll fluido per le ancore interne alla pagina (#id)
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id && id.length > 1) {
          var target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // Segnala che gli include sono pronti (per cookies.js / forms.js)
    document.dispatchEvent(new CustomEvent("includes:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      loadIncludes().then(initNav);
    });
  } else {
    loadIncludes().then(initNav);
  }
})();
