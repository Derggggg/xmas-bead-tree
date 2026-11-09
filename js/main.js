(function () {
  var cfg = window.SITE_CONFIG || {};
  var names = { classic: "The Classic (S$38)", gift: "The Gift Edition (S$48)", duo: "Family Night Duo (S$58)" };

  // Fill facts from config
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-cfg")];
    if (v) el.textContent = v;
  });

  // Buy buttons: Stripe link → WhatsApp → email → disabled
  var anyCheckout = false;
  document.querySelectorAll("[data-buy]").forEach(function (a) {
    var key = a.getAttribute("data-buy");
    var link = cfg.checkout && cfg.checkout[key];
    var msg = "Hi Hearth & Bead! I'd like to order: " + names[key];
    if (link) {
      a.href = link; anyCheckout = true;
    } else if (cfg.whatsapp) {
      a.href = "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(msg);
      a.target = "_blank"; a.rel = "noopener";
      if (a.textContent.trim() === "Buy now") a.textContent = "Order on WhatsApp";
    } else if (cfg.email && cfg.email.indexOf("example.com") === -1) {
      a.href = "mailto:" + cfg.email + "?subject=" + encodeURIComponent("Order: " + names[key]) + "&body=" + encodeURIComponent(msg + "\n\nName:\nDelivery address:\nPhone:");
      if (a.textContent.trim() === "Buy now") a.textContent = "Order by email";
    } else {
      a.setAttribute("aria-disabled", "true");
      a.removeAttribute("href");
      if (a.textContent.trim() === "Buy now") a.textContent = "Orders open soon";
    }
  });
  var note = document.querySelector("[data-pay-note]");
  var canMessage = cfg.whatsapp || (cfg.email && cfg.email.indexOf("example.com") === -1);
  if (note && !anyCheckout) note.textContent = canMessage ? "Order by message and pay by PayNow. We'll confirm within a few hours." : "Orders open soon.";

  // Social links
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = cfg[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else { a.remove(); }
  });
  document.querySelectorAll("[data-social-col]").forEach(function (col) {
    if (!col.querySelector("a")) col.remove();
  });

  // Contact email on policies page
  document.querySelectorAll("[data-email]").forEach(function (a) {
    if (cfg.email) { a.href = "mailto:" + cfg.email; a.textContent = cfg.email; }
  });

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.textContent = "Menu";
      });
    });
  }

  // Header border on scroll
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  // Year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
