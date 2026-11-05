/* ==========================================================
   Lógica de la página: menú, carrusel, galería, animaciones.
   Requiere js/data.js (SLIDES, FOTOS, src) cargado antes.
   ========================================================== */
"use strict";

/* ===== Menú móvil y enlace activo ===== */
function initNavigation() {
  const nav = document.getElementById("mainNav");
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () =>
    menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open")));

  const links = [...nav.querySelectorAll("a")];
  links.forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      // Mantiene la URL sincronizada con la sección visible (sin saltos ni historial extra)
      const hash = e.target.id === "inicio" ? location.pathname + location.search : "#" + e.target.id;
      history.replaceState(null, "", hash);
    }
  }), {rootMargin: "-40% 0px -55% 0px"});
  ["inicio", "proyecto", "objetivos", "equipo", "galeria", "contacto"]
    .forEach((id) => spy.observe(document.getElementById(id)));
}

/* ===== Carrusel ===== */
function initCarousel() {
  const box = document.getElementById("inicio");
  const dots = document.getElementById("dots");
  const prevBtn = document.getElementById("prev");
  let current = 0;
  let timer;

  const slides = SLIDES.map((s, i) => {
    const el = document.createElement("div");
    el.className = "slide";
    el.innerHTML = `<img src="${src(s.f)}" alt="${s.t}" ${i ? 'loading="lazy"' : ""}>
      <div class="caption"><div class="container"><h2>${s.t}</h2><p>${s.d}</p></div></div>`;
    box.insertBefore(el, prevBtn);

    const dot = document.createElement("button");
    dot.setAttribute("aria-label", "Ir a la diapositiva " + (i + 1));
    dot.addEventListener("click", () => { goTo(i); restart(); });
    dots.appendChild(dot);
    return el;
  });

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach((el, i) => el.classList.toggle("active", i === current));
    [...dots.children].forEach((d, i) => d.classList.toggle("active", i === current));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn.addEventListener("click", () => { goTo(current - 1); restart(); });
  document.getElementById("next").addEventListener("click", () => { goTo(current + 1); restart(); });
  box.addEventListener("mouseenter", () => clearInterval(timer));
  box.addEventListener("mouseleave", restart);
  goTo(0);
  restart();
}

/* ===== Galería + Lightbox ===== */
function initGallery() {
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const count = document.getElementById("lbCount");
  let index = 0;

  FOTOS.forEach((url, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Abrir imagen " + (i + 1));
    b.innerHTML = `<img src="${url}" alt="Galería del proyecto, imagen ${i + 1}" loading="lazy"><span>${i + 1}</span>`;
    b.addEventListener("click", () => open(i));
    gallery.appendChild(b);
  });

  function show(i) {
    index = (i + FOTOS.length) % FOTOS.length;
    img.src = FOTOS[index];
    img.alt = "Imagen " + (index + 1);
    count.textContent = (index + 1) + " / " + FOTOS.length;
  }
  function open(i) {
    show(i);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => show(index - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(index + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

/* ===== Animaciones fade-in al hacer scroll ===== */
function initReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  }), {threshold: 0.12});
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ===== Inicio ===== */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCarousel();
  initGallery();
  initReveal();
  document.getElementById("featuredImg").src = src(SLIDES[1].f);
  document.getElementById("year").textContent = new Date().getFullYear();
});
