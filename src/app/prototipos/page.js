"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ModelosGaleria from "@/components/ModelosGaleria";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCo83txfYugPb1KiyIrP-WLtYVOfzTFalzC8JWqeUOBWUv51KDcSYLLoKQ0mo23rczp5-IARoP-VYIWNoZBEZypKON_ZP-mI8WVF6k6p2YzfV4wq-KITYk5W_WEL9DB1jutqPfnoa1jgd9RKtJcDSJGxG8AV6lO8eRBoukqHiZC4mKYWIJfxNb8QCSLsDqhfvjxFQZG0FHd6IPEqPDeKidwoMWQ2BnVTKn9dRuG31830Tj_khwXQ1-AZD6u-uVK6MV3JA";

const STANDARDS = [
  {
    icon: "rebase_edit",
    title: "Estructura Sismo-resistente",
    desc: "Diseño basado en la norma técnica peruana E.030.",
  },
  {
    icon: "water_drop",
    title: "Instalaciones Modernas",
    desc: "Sistemas de agua y desagüe con materiales de alta densidad.",
  },
  {
    icon: "bolt",
    title: "Electricidad Certificada",
    desc: "Circuitos independientes y tableros con protección térmica.",
  },
  {
    icon: "palette",
    title: "Acabados de Calidad",
    desc: "Pintura de alto tráfico y cerámicos de primera selección.",
  },
];

export default function PrototiposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <div className="space-y-6">
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-label-sm font-label-bold uppercase tracking-wider">
              Visualización Avanzada
            </span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary leading-tight">
              Explora tu futuro hogar en <span className="text-secondary">3D</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              Diseños arquitectónicos optimizados para el programa Techo Propio.
              Espacios inteligentes, funcionales y construidos con la excelencia
              de la ingeniería peruana.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <span>Aprobado por Fondo Mivivienda</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-secondary">
                  eco
                </span>
                <span>Materiales Sostenibles</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
            <div className="bg-white p-4 rounded-xl shadow-xl rotate-3 card-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Prototipo Principal"
                className="rounded-lg w-full aspect-[1.41] object-cover"
                src={HERO_IMG}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Grid */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Galería de Modelos
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Selecciona un modelo para ver detalles de distribución y área
              total.
            </p>
          </div>
        </div>
        <ModelosGaleria />
      </Reveal>

      {/* Technical Specification Info */}
      <Reveal className="bg-primary text-on-primary py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 400 L400 0 L400 400 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Estándares de Construcción
            </h2>
            <p className="text-on-primary-container max-w-2xl mx-auto font-body-md opacity-90">
              Utilizamos materiales certificados y procesos de ingeniería que
              garantizan la longevidad y seguridad de su inversión.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {STANDARDS.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-4xl mb-4 text-secondary-fixed-dim">
                  {s.icon}
                </span>
                <h4 className="font-label-bold text-label-bold mb-2 uppercase">
                  {s.title}
                </h4>
                <p className="text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Mapa atendidos */}
      <section className="mapa-atendidos-section mapa-atendidos-section--uno">
        <figure className="mapa-atendidos-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/previews/mapa_atendidos.jpg"
            alt="Mapa de áreas atendidas"
            className="mapa-atendidos-image"
          />
        </figure>
        <p className="mapa-atendidos-text">
          En este gráfico del territorio peruano, puedes notar el título
          &quot;Zonas Atendidas&quot;, el cual resalta un total de 3,367
          viviendas edificadas a nivel nacional. Asimismo, puedes ver que el
          documento desglosa la cantidad de &quot;Bonos Familiares
          Habitacionales&quot; entregados por departamento, destacando regiones
          como Arequipa (1,119), La Libertad (746) e Ica (737), y observarás que
          proporciona información de contacto y direcciones de atención para
          Lima, Ica y Lambayeque.
        </p>
      </section>
      <section className="mapa-atendidos-section mapa-atendidos-section--dos">
        <figure className="mapa-atendidos-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/previews/Fotos_de_clientes.jpg"
            alt="Familias beneficiarias del programa Techo Propio"
            className="mapa-atendidos-image"
          />
        </figure>
        <p className="mapa-atendidos-text">
          En esta imagen puedes observar una recopilación de fotografías donde
          diversas familias y beneficiarios posan frente a sus nuevas viviendas.
          Puedes ver a los ciudadanos sonrientes sosteniendo llaves ceremoniales
          de gran tamaño con el emblema del programa &quot;Techo Propio&quot;, lo
          que te indica la adjudicación formal de sus hogares.
        </p>
      </section>

      {/* CTA */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="bg-surface-container-high rounded-3xl p-8 md:p-16 border border-outline-variant/30 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Nuestros asesores te ayudarán a elegir el prototipo que mejor se
              adapte a tus necesidades y te guiarán en el proceso de postulación
              al bono de Techo Propio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-secondary/20"
                href="/contacto"
              >
                Solicitar Información
              </Link>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-primary/20">
                Descargar Catálogo
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
