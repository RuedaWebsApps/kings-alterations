# Documentación Técnica - King's Alterations

## 1. Arquitectura y Tecnologías
- **Framework:** Next.js 16.1.6 (App Router con Turbopack)
- **Librería UI:** React 19.2.3 con TypeScript 5 (tipado estricto)
- **Estilos:** Tailwind CSS 4 con `@theme` tokens personalizados
- **Iconografía:** Lucide React
- **Animaciones e Interacciones:** Framer Motion y Tailwind transitions
- **Despliegue:** Optimizado para Vercel (generación estática prerenderizada `○ Static`)

## 2. Paleta de Diseño Premium
- Pastel Blue: `#DCEAF7`
- Soft Accent Blue: `#B7D0E8`
- Deep Navy: `#203A5B` (tipografía, encabezados de autoridad y contraste)
- Luxury Gold: `#C5A15A`
- Light Gold Accent: `#E5D2A6`
- Ivory Canvas Background: `#FCFAF6`
- Body Text: `#263447`
- Muted Slate: `#667386`

## 3. Estructura de Directorios
```
kings-web/
├── public/
│   ├── catalog/              # 143 imágenes optimizadas del catálogo
│   └── logo-king-alterations.png # Logotipo oficial (1000x670)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css       # Variables de paleta y scrollbar fino
│   │   ├── layout.tsx        # Viewport, Metadata, OpenGraph, Navbar, Footer y WhatsAppButton
│   │   └── page.tsx          # Composición modular de secciones
│   ├── components/
│   │   ├── Navbar.tsx        # Encabezado responsive con micro-barra de horarios
│   │   ├── Hero.tsx          # Hero premium con propuesta de valor y CTA WhatsApp
│   │   ├── VideoSection.tsx  # Módulo desacoplado para video final con póster
│   │   ├── CatalogSection.tsx# Catálogo con filtros de categorías, búsqueda y modal zoom
│   │   ├── ServicesSection.tsx # 6 grupos detallados de sastrería y arreglos
│   │   ├── AboutSection.tsx  # Historia familiar verificada (ex Pink Alterations)
│   │   ├── FAQSection.tsx    # Preguntas frecuentes verificadas del negocio
│   │   ├── LocationSection.tsx # Mapa, dirección y horarios en Oak Hill
│   │   ├── Footer.tsx        # Pie de página completo
│   │   └── WhatsAppButton.tsx# Botón flotante permanente WhatsApp (512) 679-9240
│   ├── data/
│   │   └── catalog.ts        # Dataset tipado con 143 items categorizados
│   └── lib/
│       └── utils.ts          # Utilidades clsx y twMerge
└── CATALOGO_INVENTARIO.md    # Auditoría e inventario fotográfico
```

## 4. Rendimiento y Optimización
- Carga diferida (`loading="lazy"`) en miniaturas fuera de la primera vista.
- Imagen principal (`priority`) con preload para acelerar LCP.
- Cero bibliotecas innecesarias de formularios o dependencias pesadas.
- Compilación estática Next.js 16 sin peticiones lentas en tiempo de ejecución.
