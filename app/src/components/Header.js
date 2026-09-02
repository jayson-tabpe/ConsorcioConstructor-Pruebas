"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, LOGO_URL } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeClass = (href) =>
    pathname === href
      ? "text-secondary font-bold border-b-2 border-secondary pb-1"
      : "text-on-surface-variant hover:text-primary transition-colors";

  return (
    // 1. Envolvedor sticky global con z-50 para que todo el conjunto responda al scroll
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Top Utility Bar */}
      {/* 2. Añadido max-h y transiciones para que la barra desaparezca suavemente al hacer scroll */}
      <div className={`hidden lg:block bg-primary text-on-primary overflow-hidden transition-all duration-300 ${
        scrolled ? "max-h-0 opacity-0 py-0" : "max-h-12 opacity-100 py-2"
      }`}>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between text-label-sm font-label-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-90">
              <span className="material-symbols-outlined text-base">call</span>
              <a
                className="hover:opacity-100 hover:underline transition-opacity"
                href="tel:+5114458900"
              >
                (01) 445-8900
              </a>
            </span>
            <span className="flex items-center gap-2 opacity-90">
              <span className="material-symbols-outlined text-base">
                mail
              </span>
              <a
                className="hover:opacity-100 hover:underline transition-opacity"
                href="mailto:ventas@consorcioconstructor.pe"
              >
                ventas@consorcioconstructor.pe
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-90">
            <span className="material-symbols-outlined text-base">
              schedule
            </span>
            <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* TopNavBar */}
      {/* 3. Se removió "sticky top-0 z-50" de aquí ya que su padre ahora controla la posición fija */}
      <header
        className={`site-header bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
          scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"
        }`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4 xl:gap-6">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Consorcio Constructor Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
            />
            <span className="hidden lg:block text-headline-md font-headline-md font-bold text-primary">
              Consorcio Constructor
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-5 xl:gap-7 min-w-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link font-label-bold text-label-bold ${activeClass(
                  item.href
                )}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/requisitos"
            className="hidden lg:block shrink-0 bg-secondary text-on-secondary px-6 py-2.5 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            Postula a Techo Propio
          </Link>

          <button
            aria-label="Abrir menú"
            className="lg:hidden text-primary shrink-0 p-1 -m-1"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden px-margin-mobile md:px-margin-desktop pb-4 pt-2">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link font-label-bold text-label-bold ${
                    pathname === item.href
                      ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                      : "text-on-surface-variant hover:text-primary transition-colors"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/requisitos"
                onClick={() => setOpen(false)}
                className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 active:scale-95 text-center"
              >
                Postula a Techo Propio
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
