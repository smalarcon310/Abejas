/* ==========================================================
   Datos del proyecto: rutas de imágenes y textos del carrusel.
   Editar aquí para cambiar o reorganizar el contenido visual.
   ========================================================== */
"use strict";

const BASE = "Imagenes/ISU-API-26-2/";
const src = (archivo) => BASE + encodeURIComponent(archivo);

// Slides del carrusel. REEMPLAZAR CON imagen1.jpg ... si se desea otra selección
const SLIDES = [
  {f:"WhatsApp Image 2026-09-18 at 4.25.45 PM.jpeg", t:"Conservación de abejas nativas", d:"Investigación y protección de polinizadores esenciales para Cundinamarca."},
  {f:"WhatsApp Image 2026-10-15 at 8.49.09 PM.jpeg", t:"Apicultura sostenible", d:"Buenas prácticas de manejo de colmenas con enfoque ambiental."},
  {f:"WhatsApp Image 2026-10-16 at 2.59.38 PM.jpeg", t:"Trabajo de campo", d:"Estudiantes y docentes en el monitoreo directo de colonias."},
  {f:"WhatsApp Image 2026-10-16 at 3.04.17 PM.jpeg", t:"Aprendizaje en comunidad", d:"Educación ambiental que conecta la universidad con el territorio."},
  {f:"WhatsApp Image 2026-10-16 at 3.04.35 PM.jpeg", t:"Investigación aplicada", d:"Registro de datos para fortalecer el conocimiento científico local."},
  {f:"WhatsApp Image 2026-10-16 at 3.27.23 PM.jpeg", t:"Resultados del proyecto", d:"Un compromiso institucional con la biodiversidad y el campo colombiano."}
];

// Galería: imágenes disponibles. Agregar/quitar nombres para reorganizar.
const FOTOS = [
  "2026-09-18 at 4.25.45 PM","2026-10-15 at 8.49.09 PM","2026-10-16 at 2.59.38 PM","2026-10-16 at 2.59.41 PM",
  "2026-10-16 at 2.59.42 PM","2026-10-16 at 2.59.43 PM (1)","2026-10-16 at 2.59.43 PM","2026-10-16 at 2.59.44 PM",
  "2026-10-16 at 3.04.17 PM","2026-10-16 at 3.04.18 PM","2026-10-16 at 3.04.19 PM","2026-10-16 at 3.04.20 PM",
  "2026-10-16 at 3.04.35 PM","2026-10-16 at 3.04.39 PM","2026-10-16 at 3.04.40 PM","2026-10-16 at 3.04.41 PM",
  "2026-10-16 at 3.04.44 PM","2026-10-16 at 3.04.45 PM","2026-10-16 at 3.04.53 PM","2026-10-16 at 3.04.54 PM",
  "2026-10-16 at 3.04.55 PM","2026-10-16 at 3.04.57 PM (1)","2026-10-16 at 3.04.57 PM","2026-10-16 at 3.04.58 PM",
  "2026-10-16 at 3.04.59 PM","2026-10-16 at 3.05.00 PM","2026-10-16 at 3.05.01 PM","2026-10-16 at 3.27.23 PM",
  "2026-10-16 at 3.27.24 PM (1)","2026-10-16 at 3.27.24 PM"
].map((n) => src("WhatsApp Image " + n + ".jpeg"));
