"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCo83txfYugPb1KiyIrP-WLtYVOfzTFalzC8JWqeUOBWUv51KDcSYLLoKQ0mo23rczp5-IARoP-VYIWNoZBEZypKON_ZP-mI8WVF6k6p2YzfV4wq-KITYk5W_WEL9DB1jutqPfnoa1jgd9RKtJcDSJGxG8AV6lO8eRBoukqHiZC4mKYWIJfxNb8QCSLsDqhfvjxFQZG0FHd6IPEqPDeKidwoMWQ2BnVTKn9dRuG31830Tj_khwXQ1-AZD6u-uVK6MV3JA";

const MODELS = [
  {
    name: "Modelo Tradicional Plus",
    badge: { text: "Popular", cls: "bg-tertiary-fixed text-on-tertiary-fixed" },
    desc: "Distribución optimizada con sala-comedor ampliada y ventilación natural cruzada.",
    area: "45.00 m²",
    feat: "2 Dormitorios",
    featIcon: "bed",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8QnZmuy7Wg9rqyVqzKonfwQ-UuNdnszvh1XYNHds_BO1AgU0s6U69yRsIc2plHZkV0lBP0MpSzufk3z3wfCHyZ6qxX0H5FFu0Ox0BCt_vQ7rEIBsBcnENyPjmeASnpEj-7rqS9aUk16tT7oFWv2SVVXf9wgw71cgs61Ag-fhOAYF7P9R_FTN7wr6j8tEyUi9X07odUXNhHM6NHHSZqrF1ZK-rKNLnntbRAw_0fs1i00yWroADlsHm5W2SFJHCVt0kqw",
  },
  {
    name: "Vivienda Bioclimática",
    badge: null,
    desc: "Fachada diseñada para el confort térmico en climas cálidos, reduciendo el consumo energético.",
    area: "42.50 m²",
    feat: "1 Baño Completo",
    featIcon: "bathroom",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoUXLa1Lq2mpa-SiDoqlnlwN1sKdtnEyQ1OyCaT7YO355zhBe1Q3lXg75HlCafx2F3vqZzxHnJxQrNNxTaJn_25Jl1H5Y4aFx1Kd6xGcyJPs9DmIg9RE0GF2VPlGaMqzT464TqfL8huvzLgAYUVcnAR6XBPM4gVakIWhVURCfGpA8Cl2r6EDI9btIf5bZXA9e45lW6XNh4bBrOnN5A66W17nhQ8fBAPmIXKd-KtQ2ugLWE_eNTd-71Dln5EDmazuOxpg",
  },
  {
    name: "Compacto Funcional",
    badge: null,
    desc: "Ideal para familias jóvenes, maximizando cada metro cuadrado sin sacrificar estética.",
    area: "38.20 m²",
    feat: "Área Social",
    featIcon: "chair",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_tTs1vJIVxZfJoZ9ZPgyyJR6nfBY8cJtfu1D9ZxZ1acadgqAh48IOv15TOVkM4k2gxqljvp2VN2axfi0DY0w3x0eq3hGF69rRhBQOVSdn1F3ZdAR3RQfwzS3yjfCPqqTYZYvdiVN98u1yVfEeGOb3bs-lKCK912RoO3xR-yy-2rGfWoyyrcTcFIW8g-sqk_--LqtV-nQmzui-5Smb1liJOH9628NsX6oXRq_wAEBEoU6MvtcaHqYjEJQhN8sy_gVg2w",
  },
  {
    name: "Hogar Familiar Prime",
    badge: null,
    desc: "Incluye lavandería techada y posibilidad de ampliación a segundo nivel.",
    area: "50.15 m²",
    feat: "Proy. 2do Piso",
    featIcon: "layers",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkJUTs0WZdUR5o1H_iea73zlo7qxkyqXO_l6gFZxOeIvFaPKs63PCnMTjT0DWV1puaRxIw8xRxrz_za4i6qSXQ52-avNdQLUOMFvGOInfSBgd5XaoX0BJfxkSzSARXXrh7_8sJv9wkgZPtKFk3fYyy836vcTxvtmEvhSZG0lzbfgETGL8hYXpuYMPanx4LbEImhh6y3a5n1_W0JdXPftZvha7IBZhXykA-N8cmh20tFLBoTGyThKMj0qbtiLCwrSvIBQ",
  },
  {
    name: "Diseño Contemporáneo",
    badge: null,
    desc: "Líneas modernas y grandes ventanales para una iluminación excepcional.",
    area: "44.80 m²",
    feat: "Cocina Kitchenette",
    featIcon: "kitchen",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdqxoNwbZAZH9mQTXRlB8tbkDvYrSbA5jO7hy3WQ_FYN7v3ry2e0dVYczUMbiAXPO1IU0k1fJ-RfsFwgFLwdcgyETLz8-wtKrRhk4-xTUXZwRpZtfMN_ucBx5LurLSHxPtcF3Xq93J5Hj3YWlrdgCfS25LsJBrBFbV6GgAEeoAnYa0v_M78asXc5DPK8OYc3g3UyyaTS5k-QiXWgLU4hrgcBXk8FtojyFM7eoyVd_XrW5u4F_vW5KIOor9RaTm3F5Mzw",
  },
  {
    name: "Módulo Básico Evolutivo",
    badge: null,
    desc: "La mejor opción costo-beneficio para acceder rápidamente a tu primera vivienda.",
    area: "35.50 m²",
    feat: "Construcción Rápida",
    featIcon: "construction",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP9eEukoLYFMnT7S4ULdoF6-U0kwMoxz8K702oFO4033mvoCi5hBq3DfDJXkQPOYAUGn2_2DSYmakJxpqbFyucDhXE9djO_SNTqIZ5SbFVAJ2ugLLQCqce0VHkGzXJ97M-ZXqp3UUxSrNQhKlb4q0iD9zWNy5GdnFLfLIfnd6OdiuZWDWQeWdC91_vR0vQ6Q1bL9LcLNXaguJ2vGaAMFo3MAjaIFsWh9TKkCcsyD1buQcWq71Tvdl4yQaqfFA0avZrxg",
  },
  {
    name: "Suite Urbana",
    badge: null,
    desc: "Ideal para solteros o parejas, con una distribución tipo loft muy moderna.",
    area: "41.20 m²",
    feat: "Acabados A1",
    featIcon: "countertops",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClFpBB4A4kiMvzmemtyYZ61bsUcrsJe61SoRJVKfleyG8L__5h-EwQEPoiZPpm7zD6GeBAUS5nWmGcZZl22FpnVpgOKcZ-ulzbd3OcaHFGRTCUBbrdYrKXI2C61uJw-ZvkaGFKfu2jAJDroLSaz3KvDfnuV37MwrXFWKbyDoQsBE_pyneibuuYnIrvHmodUYSpgECgB7Jw1qCam8yvMgLHtIiTOnoOcu440JzbfRY2jbLhW9iXWKV-rdTkHRm84m_AAw",
  },
  {
    name: "Modelo Familiar XL",
    badge: { text: "Más Amplio", cls: "bg-secondary-fixed text-on-secondary-fixed-variant" },
    desc: "Máxima capacidad para familias de hasta 5 integrantes con ambientes bien definidos.",
    area: "54.30 m²",
    feat: "3 Dormitorios",
    featIcon: "group",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6CgnzYM5glB1mLzfm_k019zP0kqGxDxUddTTKtGp7eWF9JUv6a-tVmU3mgzfjATbioiWlgc72kWosyYsdGXmQ0Ickq1vDc_ovkK2KfNiqQ_jolGkwNiz9CMdEkszgqFqrNhwykx7tMwNMEER3M-MmVx4zJxcjGJXo5P6rY27Uk2-gyT1OnPNm4CJRVbO90L9dkQ3QtHnCcvYOBXMc49yzieA2uqU9r31mb33E6x6bamTT8746xrkdSkxavNbmTt6W-g",
  },
];

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
          <div className="flex gap-2">
            <button className="p-2 border border-outline rounded-lg hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button className="p-2 border border-outline-variant rounded-lg hover:bg-primary-container hover:text-white transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODELS.map((model) => (
            <div
              key={model.name}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm card-glow border border-outline-variant/20 flex flex-col"
            >
              <div className="shine-effect aspect-[1.41] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={model.name}
                  className="img-zoom w-full h-full object-cover"
                  src={model.img}
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      {model.name}
                    </h3>
                    {model.badge && (
                      <span
                        className={`${model.badge.cls} px-2 py-1 rounded text-[10px] font-bold uppercase`}
                      >
                        {model.badge.text}
                      </span>
                    )}
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    {model.desc}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      square_foot
                    </span>
                    <span className="text-sm font-semibold">{model.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {model.featIcon}
                    </span>
                    <span className="text-sm font-semibold">{model.feat}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Ver Planos
                </button>
              </div>
            </div>
          ))}
        </div>
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
