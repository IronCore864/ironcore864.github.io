/* Theme toggle. Default follows the OS; an explicit choice is remembered.
   The initial theme is applied by an inline script in <head> to avoid a
   flash of the wrong theme. */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function label() {
    var dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.setAttribute("title", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", dark ? "light" : "dark");
    try {
      localStorage.setItem("theme", dark ? "light" : "dark");
    } catch (e) {
      /* storage blocked — the choice just won't persist */
    }
    label();
  });

  label();
})();
