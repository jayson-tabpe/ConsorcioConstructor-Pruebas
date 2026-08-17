# Consorcio Constructor — Techo Propio

> Sitio web corporativo de **Consorcio Constructor**, empresa peruana dedicada a la construcción de viviendas bajo el programa **Techo Propio**.

---

## Descripción

Plataforma web tipo SPA (Single Page Application) diseñada para presentar los servicios, prototipos 3D y proceso de postulación al programa Techo Propio. Construida con HTML5, Tailwind CSS y JavaScript vanilla, con un diseño moderno, responsivo y optimizado para dispositivos móviles.

---

## Secciones del sitio

| Sección | Ruta | Descripción |
| ------- | ---- | ----------- |
| **Inicio** | `#inicio` | Hero, barra de confianza, galería 3D, servicios y requisitos |
| **Nosotros** | `#nosotros` | Historia, misión, visión, equipo y compromiso social |
| **Prototipos 3D** | `#prototipos` | Galería de modelos 3D con especificaciones técnicas |
| **Requisitos** | `#requisitos` | Documentos, pasos y BFH para postular al programa |
| **Contacto** | `#contacto` | Formulario, mapa, FAQ y redes sociales |

---

## Tecnologías utilizadas

| Tecnología | Uso |
| ---------- | --- |
| **HTML5** | Estructura semántica del sitio |
| **Tailwind CSS** | Framework CSS (vía CDN) para diseño responsivo y utilitario |
| **JavaScript** | Navegación SPA, interacciones y formularios |
| **Material Symbols** | Iconografía Google Material Design |
| **Google Fonts** | Tipografías Montserrat e Inter |

---

## Estructura del proyecto

```
CONSORCIO CONSTRUCTOR/
├── index.html           # SPA — todas las secciones en un solo archivo
├── css/
│   └── style.css        # Estilos custom (glow, shine, FAQ, etc.)
├── js/
│   └── main.js          # JavaScript (scroll reveal, FAQ, form, etc.)
├── previews/            # Capturas de pantalla de cada sección
├── DESIGN.md            # Documento de diseño
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Documentación del proyecto
```

---

## Ejecución local

No se requiere instalación de dependencias. Abre el archivo `index.html` directamente en tu navegador:

```bash
git clone https://github.com/jayson-tabpe/consorcio-constructor.git
cd "CONSORCIO CONSTRUCTOR"
start index.html        # Windows
open index.html         # macOS / Linux
```

---

## Navegación

El sitio utiliza **hash-based routing** para navegar entre secciones sin recargar la página:

- `#inicio` — Página principal
- `#nosotros` — Sobre la empresa
- `#prototipos` — Galería de modelos 3D
- `#requisitos` — Requisitos de postulación
- `#contacto` — Formulario de contacto

---

## Capturas de pantalla

Vista previa de cada sección se encuentra en la carpeta `previews/`.

---

## Licencia

Uso exclusivo de Consorcio Constructor. Todos los derechos reservados.
