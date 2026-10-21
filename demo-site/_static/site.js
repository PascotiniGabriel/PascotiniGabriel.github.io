/* JS mínimo do site: menu no celular, galeria da ficha, captura de UTM e trava de envio duplo. Sem dependências. */
(function () {
  "use strict";
  var b = document.querySelector(".burger"), m = document.getElementById("menu");
  if (b && m) b.addEventListener("click", function () {
    var open = m.classList.toggle("open");
    b.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // UTM: guarda a primeira origem da visita e preenche os campos ocultos dos formulários
  var keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], store = {};
  try { store = JSON.parse(sessionStorage.getItem("faro_utm") || "{}"); } catch (e) { store = {}; }
  var qs = new URLSearchParams(location.search), found = false;
  keys.forEach(function (k) { if (qs.get(k)) { store[k] = qs.get(k).slice(0, 120); found = true; } });
  if (found) { try { sessionStorage.setItem("faro_utm", JSON.stringify(store)); } catch (e) { /* sem storage */ } }
  document.querySelectorAll("form[data-lead]").forEach(function (f) {
    keys.forEach(function (k) { var i = f.querySelector("[name=" + k + "]"); if (i && store[k]) i.value = store[k]; });
    var ref = f.querySelector("[name=referrer]"); if (ref) ref.value = (document.referrer || "").slice(0, 300);
    var pg = f.querySelector("[name=pagina_origem]"); if (pg) pg.value = location.pathname;
    f.addEventListener("submit", function () {
      var btn = f.querySelector("button[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "Enviando..."; }
    });
  });

  // galeria
  var gal = document.querySelector(".gal");
  if (gal) {
    var imgs = JSON.parse(gal.getAttribute("data-photos") || "[]"), idx = 0;
    var main = gal.querySelector(".main img"), thumbs = gal.querySelectorAll(".thumbs button"), cnt = gal.querySelector(".count");
    var lb = document.querySelector(".lightbox"), lbImg = lb && lb.querySelector("img");
    var show = function (i) {
      if (!imgs.length) return;
      idx = (i + imgs.length) % imgs.length;
      main.src = imgs[idx];
      thumbs.forEach(function (t, n) { t.setAttribute("aria-current", n === idx ? "true" : "false"); });
      if (cnt) cnt.textContent = (idx + 1) + " / " + imgs.length;
      if (lbImg && lb.classList.contains("open")) lbImg.src = imgs[idx];
    };
    thumbs.forEach(function (t, n) { t.addEventListener("click", function () { show(n); }); });
    var p = gal.querySelector(".prev"), n = gal.querySelector(".next");
    if (p) p.addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
    if (n) n.addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    gal.querySelector(".main").addEventListener("click", function () {
      if (!lb) return; lbImg.src = imgs[idx]; lb.classList.add("open"); lb.querySelector("button").focus();
    });
    if (lb) {
      var close = function () { lb.classList.remove("open"); };
      lb.addEventListener("click", function (e) { if (e.target === lb || e.target.tagName === "BUTTON") close(); });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") show(idx + 1);
        if (e.key === "ArrowLeft") show(idx - 1);
      });
    }
    var tx = 0;
    gal.querySelector(".main").addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    gal.querySelector(".main").addEventListener("touchend", function (e) {
      var d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 40) show(idx + (d < 0 ? 1 : -1));
    }, { passive: true });
  }
})();
