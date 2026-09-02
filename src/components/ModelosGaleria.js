"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MODELOS = [
  { kind: "header", cat: "MODELO 1", title: "MODELO 1 - Viviendas Completas", icon: "home", iconCls: "bg-primary/10 text-primary" },
  {
    name: "Modelo 1 - 35m2 Mejorado",
    badge: { text: "Popular", cls: "bg-tertiary-fixed text-on-tertiary-fixed" },
    desc: "Distribución optimizada con sala-comedor ampliada y ventilación natural cruzada.",
    area: "45.00 m²",
    feat: "2 Dormitorios",
    featIcon: "bed",
    img1: "/modelos/m1-35-mejorado-0001.jpg",
    img2: "/modelos/m1-35-mejorado-0002.jpg",
  },
  {
    name: "Modelo 1 - 35m2 Tradicional",
    badge: null,
    desc: "Fachada diseñada para el confort térmico en climas cálidos, reduciendo el consumo energético.",
    area: "42.50 m²",
    feat: "1 Baño Completo",
    featIcon: "bathroom",
    img1: "/modelos/m1-35-tradicional-0001.jpg",
    img2: "/modelos/m1-35-tradicional-0002.jpg",
  },
  {
    name: "Modelo 1 - 40m2 Mejorado",
    badge: null,
    desc: "Ideal para familias jóvenes, maximizando cada metro cuadrado sin sacrificar estética.",
    area: "38.20 m²",
    feat: "Área Social",
    featIcon: "chair",
    img1: "/modelos/m1-40-mejorado-0001.jpg",
    img2: "/modelos/m1-40-mejorado-0002.jpg",
  },
  {
    name: "Modelo 1 - 40m2 Tradicional",
    badge: null,
    desc: "Incluye lavandería techada y posibilidad de ampliación a segundo nivel.",
    area: "50.15 m²",
    feat: "Proy. 2do Piso",
    featIcon: "layers",
    img1: "/modelos/m1-40-tradicional-0001.jpg",
    img2: "/modelos/m1-40-tradicional-0002.jpg",
  },
  {
    name: "Modelo 1 - 60m2 Mejorado",
    badge: null,
    desc: "Líneas modernas y grandes ventanales para una iluminación excepcional.",
    area: "44.80 m²",
    feat: "Cocina Kitchenette",
    featIcon: "kitchen",
    img1: "/modelos/m1-60-mejorado-0001.jpg",
    img2: "/modelos/m1-60-mejorado-0002.jpg",
  },
  {
    name: "Modelo 1 - 60m2 Tradicional",
    badge: null,
    desc: "La mejor opción costo-beneficio para acceder rápidamente a tu primera vivienda.",
    area: "35.50 m²",
    feat: "Construcción Rápida",
    featIcon: "construction",
    img1: "/modelos/m1-60-tradicional-0001.jpg",
    img2: "/modelos/m1-60-tradicional-0002.jpg",
  },
  {
    name: "Modelo 1 - 80m2 Tradicional",
    badge: null,
    desc: "Ideal para solteros o parejas, con una distribución tipo loft muy moderna.",
    area: "41.20 m²",
    feat: "Acabados A1",
    featIcon: "countertops",
    img1: "/modelos/m1-80-tradicional-0001.jpg",
    img2: "/modelos/m1-80-tradicional-0002.jpg",
  },
  { kind: "header", cat: "MODELO 2", title: "MODELO 2 - Viviendas Amplias", icon: "apartment", iconCls: "bg-secondary/10 text-secondary" },
  {
    name: "Modelo 2 - 35m2 Mejorado",
    badge: { text: "Más Amplio", cls: "bg-secondary-fixed text-on-secondary-fixed-variant" },
    desc: "Máxima capacidad para familias de hasta 5 integrantes con ambientes bien definidos.",
    area: "54.30 m²",
    feat: "3 Dormitorios",
    featIcon: "group",
    img1: "/modelos/m2-35-mejorado-0001.jpg",
    img2: "/modelos/m2-35-mejorado-0002.jpg",
  },
  {
    name: "Modelo 2 - 35m2 Tradicional",
    badge: null,
    desc: "Diseño tradicional con excelente relación costo-beneficio para familias jóvenes.",
    area: "51.20 m²",
    feat: "2 Dormitorios",
    featIcon: "bed",
    img1: "/modelos/m2-35-tradicional-0001.jpg",
    img2: "/modelos/m2-35-tradicional-0002.jpg",
  },
  {
    name: "Modelo 2 - 40m2 Mejorado",
    badge: null,
    desc: "Espacios amplios y luminosos con distribución inteligente para familias medianas.",
    area: "48.50 m²",
    feat: "2 Baños",
    featIcon: "bathroom",
    img1: "/modelos/m2-40-mejorado-0001.jpg",
    img2: "/modelos/m2-40-mejorado-0002.jpg",
  },
  {
    name: "Modelo 2 - 40m2 Tradicional",
    badge: null,
    desc: "Diseño clásico con acabados de primera y opción de ampliación futura.",
    area: "52.80 m²",
    feat: "Proy. 2do Piso",
    featIcon: "layers",
    img1: "/modelos/m2-40-tradicional-0001.jpg",
    img2: "/modelos/m2-40-tradicional-0002.jpg",
  },
  {
    name: "Modelo 2 - 60m2 Mejorado",
    badge: null,
    desc: "Vivienda premium con acabados de lujo y espacios generosos para toda la familia.",
    area: "58.90 m²",
    feat: "Cocina Kitchenette",
    featIcon: "kitchen",
    img1: "/modelos/m2-60-mejorado-0001.jpg",
    img2: "/modelos/m2-60-mejorado-0002.jpg",
  },
  {
    name: "Modelo 2 - 60m2 Tradicional",
    badge: null,
    desc: "Diseño tradicional robusto, máxima durabilidad y bajo mantenimiento.",
    area: "55.40 m²",
    feat: "Construcción Rápida",
    featIcon: "construction",
    img1: "/modelos/m2-60-tradicional-0001.jpg",
    img2: "/modelos/m2-60-tradicional-0002.jpg",
  },
  {
    name: "Modelo 2 - 80m2 Mejorado",
    badge: { text: "Premium", cls: "bg-secondary-fixed text-on-secondary-fixed-variant" },
    desc: "Nuestra vivienda más completa: 3 dormitorios, 2 baños y amplias áreas sociales.",
    area: "78.50 m²",
    feat: "3 Dormitorios",
    featIcon: "group",
    img1: "/modelos/m2-80-mejorado-0001.jpg",
    img2: "/modelos/m2-80-mejorado-0002.jpg",
  },
];

function PlanosModal({ model, onClose }) {
  const imgs = [model.img1, model.img2];
  const [idx, setIdx] = useState(0);
  const [maximized, setMaximized] = useState(false);
  const imgRef = useRef(null);
  const winRef = useRef(null);
  const headerRef = useRef(null);
  const zoomRef = useRef({ scale: 1, x: 0, y: 0 });
  const movedRef = useRef(false);
  const maximizedRef = useRef(false);
  const prevStyleRef = useRef({});
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const applyTransform = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;
    const z = zoomRef.current;
    img.style.transform = `translate(${z.x}px, ${z.y}px) scale(${z.scale})`;
    img.style.cursor = z.scale > 1 ? "grab" : "zoom-in";
  }, []);

  const resetZoom = useCallback(() => {
    zoomRef.current = { scale: 1, x: 0, y: 0 };
    applyTransform();
  }, [applyTransform]);

  const zoomIn = useCallback(() => {
    const z = zoomRef.current;
    z.scale = Math.min(z.scale * 1.35, 4);
    applyTransform();
  }, [applyTransform]);

  const zoomOut = useCallback(() => {
    const z = zoomRef.current;
    z.scale = Math.max(z.scale / 1.35, 1);
    if (z.scale === 1) {
      z.x = 0;
      z.y = 0;
    }
    applyTransform();
  }, [applyTransform]);

  const next = useCallback(() => setIdx((i) => (i + 1) % imgs.length), [imgs.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + imgs.length) % imgs.length), [imgs.length]);

  const toggleMax = useCallback(() => {
    const win = winRef.current;
    if (!win) return;
    if (!maximizedRef.current) {
      const r = win.getBoundingClientRect();
      prevStyleRef.current = {
        width: `${r.width}px`,
        height: `${r.height}px`,
        left: win.style.left,
        top: win.style.top,
        transform: win.style.transform,
        position: win.style.position,
      };
      win.style.position = "fixed";
      win.style.left = "1vw";
      win.style.top = "1vh";
      win.style.width = "98vw";
      win.style.height = "96vh";
      win.style.maxWidth = "none";
      win.style.maxHeight = "none";
      win.style.transform = "none";
      maximizedRef.current = true;
      setMaximized(true);
    } else {
      win.style.width = prevStyleRef.current.width || "";
      win.style.height = prevStyleRef.current.height || "";
      win.style.left = prevStyleRef.current.left || "";
      win.style.top = prevStyleRef.current.top || "";
      win.style.maxWidth = "96vw";
      win.style.maxHeight = "96vh";
      win.style.position = "";
      win.style.transform = "";
      maximizedRef.current = false;
      setMaximized(false);
    }
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    const win = winRef.current;
    const header = headerRef.current;
    if (!img || !win || !header) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", onKey);

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };
    img.addEventListener("wheel", onWheel, { passive: false });

    const onImgClick = () => {
      if (movedRef.current) {
        movedRef.current = false;
        return;
      }
      if (zoomRef.current.scale === 1) {
        zoomRef.current.scale = 2;
        applyTransform();
      } else {
        resetZoom();
      }
    };
    img.addEventListener("click", onImgClick);

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    const onMouseDown = (e) => {
      movedRef.current = false;
      if (zoomRef.current.scale === 1) return;
      isDragging = true;
      startX = e.clientX - zoomRef.current.x;
      startY = e.clientY - zoomRef.current.y;
      img.style.transition = "none";
      img.style.cursor = "grabbing";
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      movedRef.current = true;
      zoomRef.current.x = e.clientX - startX;
      zoomRef.current.y = e.clientY - startY;
      applyTransform();
    };
    const onMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        img.style.transition = "";
        applyTransform();
      }
    };
    img.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    let touchX = 0;
    const onTouchStart = (e) => {
      touchX = e.touches[0].clientX - (zoomRef.current.scale > 1 ? zoomRef.current.x : 0);
    };
    const onTouchMove = (e) => {
      if (zoomRef.current.scale > 1) {
        zoomRef.current.x = e.touches[0].clientX - touchX;
        applyTransform();
      }
    };
    const onTouchEnd = (e) => {
      if (zoomRef.current.scale === 1) {
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) {
          if (dx < 0) next();
          else prev();
        }
      }
    };
    img.addEventListener("touchstart", onTouchStart, { passive: true });
    img.addEventListener("touchmove", onTouchMove, { passive: true });
    img.addEventListener("touchend", onTouchEnd, { passive: true });

    let drag = false;
    let dragSX = 0;
    let dragSY = 0;
    let dragL = 0;
    let dragT = 0;
    const onHeaderDown = (e) => {
      if (e.target.closest("button")) return;
      if (maximizedRef.current) return;
      drag = true;
      dragSX = e.clientX;
      dragSY = e.clientY;
      const r = win.getBoundingClientRect();
      dragL = r.left;
      dragT = r.top;
      win.style.position = "fixed";
      win.style.left = `${dragL}px`;
      win.style.top = `${dragT}px`;
      win.style.transform = "none";
      win.style.transition = "none";
      document.body.style.userSelect = "none";
    };
    const onHeaderMove = (e) => {
      if (!drag) return;
      win.style.left = `${dragL + (e.clientX - dragSX)}px`;
      win.style.top = `${Math.max(0, dragT + (e.clientY - dragSY))}px`;
    };
    const onHeaderUp = () => {
      if (drag) {
        drag = false;
        win.style.transition = "";
        document.body.style.userSelect = "";
      }
    };
    header.addEventListener("mousedown", onHeaderDown);
    window.addEventListener("mousemove", onHeaderMove);
    window.addEventListener("mouseup", onHeaderUp);
    header.addEventListener("dblclick", toggleMax);

    let resizing = false;
    let dir = "";
    let rsx = 0;
    let rsy = 0;
    let rw = 0;
    let rh = 0;
    let rl = 0;
    let rt = 0;
    const handles = win.querySelectorAll(".resize-handle");
    const onHandleDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (maximizedRef.current) return;
      resizing = true;
      dir = e.currentTarget.dataset.dir;
      rsx = e.clientX;
      rsy = e.clientY;
      const r = win.getBoundingClientRect();
      rw = r.width;
      rh = r.height;
      rl = r.left;
      rt = r.top;
      win.style.position = "fixed";
      win.style.transition = "none";
      document.body.style.userSelect = "none";
    };
    const onResizeMove = (e) => {
      if (!resizing) return;
      const dx = e.clientX - rsx;
      const dy = e.clientY - rsy;
      let nw = rw;
      let nh = rh;
      let nl = rl;
      let nt = rt;
      if (dir.includes("e")) nw = Math.max(380, rw + dx);
      if (dir.includes("s")) nh = Math.max(280, rh + dy);
      if (dir.includes("w")) {
        nw = Math.max(380, rw - dx);
        nl = rl + dx;
      }
      if (dir.includes("n")) {
        nh = Math.max(280, rh - dy);
        nt = rt + dy;
      }
      win.style.width = `${nw}px`;
      win.style.height = `${nh}px`;
      win.style.left = `${nl}px`;
      win.style.top = `${Math.max(0, nt)}px`;
      win.style.maxWidth = "none";
      win.style.maxHeight = "none";
    };
    const onResizeUp = () => {
      if (resizing) {
        resizing = false;
        win.style.transition = "";
        document.body.style.userSelect = "";
      }
    };
    handles.forEach((h) => h.addEventListener("mousedown", onHandleDown));
    window.addEventListener("mousemove", onResizeMove);
    window.addEventListener("mouseup", onResizeUp);

    document.body.style.overflow = "hidden";
    applyTransform();

    return () => {
      window.removeEventListener("keydown", onKey);
      img.removeEventListener("wheel", onWheel);
      img.removeEventListener("click", onImgClick);
      img.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      img.removeEventListener("touchstart", onTouchStart);
      img.removeEventListener("touchmove", onTouchMove);
      img.removeEventListener("touchend", onTouchEnd);
      header.removeEventListener("mousedown", onHeaderDown);
      window.removeEventListener("mousemove", onHeaderMove);
      window.removeEventListener("mouseup", onHeaderUp);
      header.removeEventListener("dblclick", toggleMax);
      handles.forEach((h) => h.removeEventListener("mousedown", onHandleDown));
      window.removeEventListener("mousemove", onResizeMove);
      window.removeEventListener("mouseup", onResizeUp);
      document.body.style.overflow = "";
    };
  }, [applyTransform, next, prev, resetZoom, toggleMax, zoomIn, zoomOut]);

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => onCloseRef.current()} />
      <div className="relative z-10 flex min-h-full items-center justify-center p-2 md:p-4">
        <div
          ref={winRef}
          className="bg-white rounded-xl shadow-2xl w-auto max-w-[96vw] max-h-[96vh] flex flex-col overflow-hidden border border-white/20 relative select-none"
          style={{ touchAction: "none" }}
        >
          <div
            ref={headerRef}
            className="flex items-center justify-between px-3 py-2.5 border-b border-outline-variant/15 bg-white cursor-move select-none"
          >
            <h3 className="font-headline-md text-[16px] md:text-headline-md text-primary truncate pr-2">
              {model.name}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="hidden md:flex items-center gap-1 mr-1 bg-surface-container rounded-full p-1">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Alejar"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Acercar"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() => window.open(imgs[idx], "_blank")}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors md:mr-1"
                aria-label="Abrir original"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
              <button
                type="button"
                onClick={toggleMax}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                aria-label="Maximizar"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {maximized ? "close_fullscreen" : "open_with"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onCloseRef.current()}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-error-container hover:text-on-error-container transition-colors"
                aria-label="Cerrar"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
          <div className="w-auto overflow-visible bg-[#f8f9fa] flex flex-col relative">
            <div className="relative flex items-center justify-center overflow-hidden select-none w-auto bg-white">
              <img
                ref={imgRef}
                src={imgs[idx]}
                alt={`${model.name} vista ${idx + 1}`}
                className="max-w-[90vw] md:max-w-[88vw] max-h-[76vh] md:max-h-[78vh] w-auto h-auto object-contain block transition-transform duration-200 select-none"
                draggable="false"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-full font-medium">
                {idx + 1} / {imgs.length}
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full hidden md:flex items-center gap-1">
                Click para zoom • Arrastra • Rueda
              </div>
              <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 bg-white/90 backdrop-blur rounded-full p-1 shadow">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center"
                  aria-label="Alejar"
                >
                  <span className="material-symbols-outlined text-[16px]">zoom_out</span>
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center"
                  aria-label="Acercar"
                >
                  <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 -translate-x-1/2 md:-translate-x-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-black/10 z-20 backdrop-blur"
              aria-label="Anterior"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 translate-x-1/2 md:translate-x-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-black/10 z-20 backdrop-blur"
              aria-label="Siguiente"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
            <div className="flex justify-center items-center gap-1.5 py-2 bg-white border-t border-outline-variant/15">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === idx ? "bg-primary" : "bg-outline-variant"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="px-3 py-2 border-t border-outline-variant/15 bg-white flex justify-end">
            <button
              type="button"
              onClick={() => onCloseRef.current()}
              className="px-4 py-1.5 text-sm border border-outline-variant text-primary rounded-lg font-medium hover:bg-surface-container transition-colors"
            >
              Cerrar
            </button>
          </div>
          <div className="resize-handle absolute -top-1 left-0 right-0 h-2 cursor-n-resize" data-dir="n" />
          <div className="resize-handle absolute -bottom-1 left-0 right-0 h-2 cursor-s-resize" data-dir="s" />
          <div className="resize-handle absolute top-0 -left-1 bottom-0 w-2 cursor-w-resize" data-dir="w" />
          <div className="resize-handle absolute top-0 -right-1 bottom-0 w-2 cursor-e-resize" data-dir="e" />
          <div className="resize-handle absolute -top-1 -left-1 w-3 h-3 cursor-nw-resize" data-dir="nw" />
          <div className="resize-handle absolute -top-1 -right-1 w-3 h-3 cursor-ne-resize" data-dir="ne" />
          <div className="resize-handle absolute -bottom-1 -left-1 w-3 h-3 cursor-sw-resize" data-dir="sw" />
          <div className="resize-handle absolute -bottom-1 -right-1 w-3 h-3 cursor-se-resize" data-dir="se" />
        </div>
      </div>
    </div>
  );
}

export default function ModelosGaleria() {
  const [openModel, setOpenModel] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MODELOS.map((m) => {
          if (m.kind === "header") {
            return (
              <div key={m.title} className="col-span-full">
                <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-3">
                  <span
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.iconCls}`}
                  >
                    <span className="material-symbols-outlined">{m.icon}</span>
                  </span>
                  {m.title}
                </h3>
              </div>
            );
          }
          return (
            <div
              key={m.name}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm card-glow border border-outline-variant/20 flex flex-col"
            >
              <div className="shine-effect aspect-[0.79] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={m.name} className="img-zoom w-full h-full object-cover" src={m.img1} />
                {m.badge && (
                  <span
                    className={`${m.badge.cls} absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase z-10 shadow-sm`}
                  >
                    {m.badge.text}
                  </span>
                )}
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">
                    {m.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">{m.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      square_foot
                    </span>
                    <span className="text-sm font-semibold">{m.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {m.featIcon}
                    </span>
                    <span className="text-sm font-semibold">{m.feat}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                  onClick={() => setOpenModel(m)}
                >
                  Ver Planos
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {openModel && (
        <PlanosModal key={openModel.name} model={openModel} onClose={() => setOpenModel(null)} />
      )}
    </>
  );
}