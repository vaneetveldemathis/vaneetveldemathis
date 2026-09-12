document.addEventListener("DOMContentLoaded", function () {
  var selector = ".project-photos img, .row-image img, .sketches-group img";
  var images = document.querySelectorAll(selector);
  if (!images.length) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.setAttribute("aria-hidden", "true");

  var img = document.createElement("img");
  overlay.appendChild(img);

  var closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.setAttribute("aria-label", "Fermer");
  closeBtn.innerHTML = "&times;";
  overlay.appendChild(closeBtn);

  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-lock");
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("lightbox-lock");
  }

  images.forEach(function (el) {
    el.classList.add("zoomable");
    el.addEventListener("click", function () {
      openLightbox(el.currentSrc || el.src, el.alt);
    });
  });

  overlay.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
