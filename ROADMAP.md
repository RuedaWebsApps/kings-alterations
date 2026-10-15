# Roadmap del Proyecto - King's Alterations

## Fase 1 — Auditoría e Inspección (Completada)
- [x] Inspección completa de dependencias de `loba-fashion` (Next.js 16 + React 19 + Tailwind CSS 4).
- [x] Localización del logotipo original `logo-king-alterations.png` (1000 x 670 px).
- [x] Extracción y análisis de la información comercial de la web de Wix (Oak Hill, 7500 State Hwy 71 Suite 100, Austin TX, teléfono 512-679-9240, horarios y políticas).
- [x] Inventario exhaustivo de las 143 fotografías en `editadas/`.

## Fase 2 — Arquitectura y Diseño UI/UX (Completada)
- [x] Creación del sistema de diseño en `globals.css` (Azules pastel, oro refinado, marfil y texto contrastado).
- [x] Estructura modular tipada en TypeScript (`CatalogItem`, `CATEGORIES`).
- [x] Reemplazo de formularios por integración fluida con WhatsApp oficial.

## Fase 3 — Preparación de Catálogo y Datos (Completada)
- [x] Despliegue de las 143 imágenes a `public/catalog/`.
- [x] Creación del dataset `src/data/catalog.ts` con metadatos descriptivos, textos alternativos y categorías.
- [x] Generación del reporte `CATALOGO_INVENTARIO.md`.

## Fase 4 — Desarrollo de Componentes (Completada)
- [x] `Navbar`: micro-barra de atención, logotipo oficial adaptable, enlaces y llamadas directas.
- [x] `Hero`: propuesta de valor en inglés estadounidense natural, badges de calidad y CTA WhatsApp.
- [x] `VideoSection`: visor preparado con póster y configuración desacoplada para el video definitivo.
- [x] `CatalogSection`: pestañas de categorías, buscador reactivo, vista previa y modal con zoom y enlace de WhatsApp para cada prenda.
- [x] `ServicesSection`: 6 categorías detalladas de servicios de sastrería y arreglos.
- [x] `AboutSection`: historia familiar auténtica del taller en Austin.
- [x] `FAQSection`: dudas frecuentes sobre tiempos de entrega, pruebas y citas sin reserva.
- [x] `LocationSection`: horarios detallados, dirección y Google Maps embebido.
- [x] `WhatsAppButton`: botón flotante permanente para consultas rápidas.
- [x] `Footer`: pie de página con accesos directos, datos de contacto y botón de retorno al inicio.

## Fase 5 — Calidad y Compilación de Producción (Completada)
- [x] Verificación estricta de TypeScript.
- [x] Compilación de producción con Turbopack exitosa (`npm run build`).
- [x] Prerenderizado estático `○ Static` generado para máximo rendimiento en Vercel.

## Fase 6 — Estado de Recursos y Despliegue
- [x] Incorporación del favicon e icono oficial `icono-kings-alterations.png` (generados automáticamente como `/icon.png` y `/apple-icon.png`).
- [x] Incorporación y reproducción responsive de los dos videos oficiales de intro:
  - Versión horizontal para PC y Tablet: `kings-intro-desktop.mp4` (`aspect-[16/9]`).
  - Versión vertical optimizada para Smartphone: `kings-intro-mobile.mp4` (`aspect-[9/16]`).
- [x] Soporte bilingüe completo e instantáneo (Inglés / Español) con selector en Navbar y drawer móvil.
