/* DigitalBridge shared navigation.
   Purpose: make the mobile menu usable with a mouse, keyboard, and screen reader.
   The menu links are real HTML links, so pages still open if this file does not run.
   This file does not collect or send any personal information. */

(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  header.classList.add("is-enhanced");
  toggle.hidden = false;
  toggle.setAttribute("aria-expanded", "false");

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      // Close after the click so the browser can follow the link.
      // Hiding the link during the click can cancel navigation.
      setTimeout(function () {
        setOpen(false);
      }, 0);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
})();
