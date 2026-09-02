"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { SEDES } from "@/lib/data";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDodJTPozmaOAjrXgonrY4cTYMe-ne0mXpB4u98jH2xYEqkY7uBir_vh7GNT1kOGcV1CPGufjVLHhhqSSXUekN_cOW8nmrVjtzy7Z4jC1_Db-qWLzAdK8v7nCMR54A6-g5m47kk_gQWv0z3G44zCGGTJrbE5MHuyu93m4GbsjkxGEn3TYZCjM_X7ndxUlQdCKzq4rNmuKD1n2ytCE0J5cGLg4JbcODu3KOR_5dEyL3pXdsQtZxCVOR0";

const FAQS = [
  {
    q: "¿Qué requisitos necesito para el Bono Techo Propio?",
    a: "Los requisitos principales incluyen conformar un Grupo Familiar, no haber recibido apoyo habitacional previo del Estado y que el ingreso mensual familiar no exceda los límites establecidos por el Fondo Mivivienda.",
  },
  {
    q: "¿Puedo personalizar los acabados de mi casa?",
    a: "Ofrecemos una variedad de paquetes de acabados premium. Durante la etapa de preventa, nuestro equipo técnico puede asesorarte sobre las opciones de personalización estructural y estética permitidas.",
  },
  {
    q: "¿Cuál es el tiempo de entrega estimado?",
    a: "El tiempo de entrega promedio oscila entre 8 a 12 meses después de la firma de contrato, dependiendo del proyecto específico y las etapas de construcción programadas.",
  },
];

const SOCIALS = [
  { name: "Facebook", icon: "qr_code_2" },
  { name: "Instagram", icon: "photo_camera" },
  { name: "YouTube", icon: "smart_display" },
  { name: "LinkedIn", icon: "person" },
];

function FaqItem({ q, a, open, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div className="faq-item border border-outline-variant/30 rounded-lg bg-surface-container-lowest">
      <button
        className="w-full flex justify-between items-center p-6 text-left"
        onClick={onToggle}
      >
        <span className="font-label-bold text-label-bold text-primary">{q}</span>
        <span
          className="material-symbols-outlined transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      <div
        className="overflow-hidden faq-transition"
        style={{ maxHeight: height + "px", opacity: open ? 1 : 0 }}
      >
        <div ref={contentRef} className="p-6 pt-0 font-body-md text-body-md text-on-surface-variant">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  const [sedeKey, setSedeKey] = useState("lima");
  const [toast, setToast] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({ status: "idle", text: "Enviar Consulta" });

  const sede = SEDES.find((s) => s.key === sedeKey);

  const copyLink = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(sede.mapUrl);
      setToast(true);
      setTimeout(() => setToast(false), 2500);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: "sending", text: "Enviando..." });
    setTimeout(() => {
      setFormState({ status: "sent", text: "¡Mensaje Enviado!" });
      e.target.reset();
      setTimeout(() => {
        setFormState({ status: "idle", text: "Enviar Consulta" });
      }, 3000);
    }, 1500);
  };

  const inputCls =
    "bg-white border border-outline-variant p-3 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all";

  return (
    <>
      {/* Hero */}
      <section className="relative py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-gutter">
            <div className="w-full md:w-1/2">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
                Contáctanos
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                Estamos listos para ayudarte a construir el hogar de tus sueños.
                Nuestro equipo de expertos en ingeniería y arquitectura está a tu
                disposición en Carabayllo.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-primary">
                      Teléfono
                    </p>
                    <p className="font-body-md text-body-md">+51 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-secondary">
                      Email
                    </p>
                    <p className="font-body-md text-body-md">
                      contacto@consorcioconstructor.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-primary">
                      Horario de Atención
                    </p>
                    <p className="font-body-md text-body-md">
                      Lun - Sáb: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${HERO_BG}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="pb-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Contact Form Card */}
            <div className="lg:col-span-7 bg-surface p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/30 glow-hover transition-all">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                Envíanos un Mensaje
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant">
                      Nombre Completo
                    </label>
                    <input
                      className={inputCls}
                      placeholder="Ej. Juan Pérez"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant">
                      Correo Electrónico
                    </label>
                    <input
                      className={inputCls}
                      placeholder="juan@correo.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">
                    Asunto
                  </label>
                  <select className={inputCls}>
                    <option>Consulta sobre Techo Propio</option>
                    <option>Información de Prototipos 3D</option>
                    <option>Visita a Obra</option>
                    <option>Otros</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface-variant">
                    Mensaje
                  </label>
                  <textarea
                    className={inputCls}
                    placeholder="Escribe tu consulta aquí..."
                    rows="4"
                    required
                  />
                </div>
                <button
                  className={`w-full md:w-auto px-10 py-4 rounded font-label-bold text-label-bold uppercase tracking-wider shadow-lg active:scale-95 ${
                    formState.status === "sent"
                      ? "bg-green-600 text-on-primary"
                      : "bg-primary text-on-primary hover:bg-primary-container"
                  } transition-colors`}
                  type="submit"
                  disabled={formState.status === "sending"}
                >
                  {formState.text}
                </button>
              </form>
            </div>

            {/* Map & Location Details */}
            <div className="lg:col-span-5 flex flex-col gap-gutter">
              <div className="bg-surface rounded-xl overflow-hidden min-h-[300px] shadow-sm border border-outline-variant/30 relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-primary font-label-bold">
                  {sede.badge}
                </div>
                <iframe
                  title="Mapa"
                  className="w-full h-full min-h-[300px] transition-opacity duration-300"
                  src={sede.embedUrl}
                  style={{ opacity: 1 }}
                  loading="lazy"
                />
              </div>

              {/* City selector buttons */}
              <div className="flex flex-wrap gap-2">
                {SEDES.map((s) => (
                  <button
                    key={s.key}
                    id={`btn-${s.key}`}
                    onClick={() => setSedeKey(s.key)}
                    className={`px-4 py-2 min-h-[44px] rounded-lg font-label-bold text-label-bold transition-all ${
                      s.key === sedeKey
                        ? "bg-primary text-on-primary shadow-md"
                        : "bg-surface text-primary border border-outline-variant/30 shadow-sm hover:bg-surface-variant"
                    }`}
                  >
                    {s.title.split(" - ")[0]}
                  </button>
                ))}
              </div>

              <div className="bg-primary text-on-primary p-8 rounded-xl shadow-lg relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline-md text-headline-md mb-2">
                    Visítanos
                  </h3>
                  <p className="font-body-md text-body-md opacity-90">
                    {sede.title}
                  </p>
                  <p className="font-body-md text-body-md opacity-90 mb-6">
                    {sede.address}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors"
                      onClick={copyLink}
                      aria-label="Compartir ubicación"
                    >
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>
                    </button>
                    <a
                      className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors"
                      href={sede.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Cómo llegar"
                    >
                      <span className="material-symbols-outlined text-sm">
                        directions
                      </span>
                    </a>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined !text-9xl">
                    architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Reveal className="py-section-gap bg-surface">
        <div className="max-w-3xl mx-auto px-margin-mobile">
          <div className="text-center mb-16">
            <span className="font-label-bold text-label-bold text-secondary uppercase tracking-[0.2em] mb-4 block">
              Soporte
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Social Section */}
      <Reveal className="py-20 bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <h3 className="font-headline-md text-headline-md mb-10">
            Síguenos en Redes Sociales
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {SOCIALS.map((s) => (
              <a key={s.name} className="flex flex-col items-center gap-2 group" href="#">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-all">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm opacity-80 group-hover:opacity-100">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-50 ${
          toast ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ¡Enlace copiado!
      </div>
    </>
  );
}
