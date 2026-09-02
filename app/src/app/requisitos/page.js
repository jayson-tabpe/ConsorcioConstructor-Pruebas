import Link from "next/link";
import Reveal from "@/components/Reveal";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAx7FFn_217w-Zrtze1XvjC5JzCv_5xb_jGcX01bRbr77j2i_adx9Z446Jz2QF25zNvIp4IAPBJeQ0ZQQ8-SdvSiNqP4RG0Wub1csmPivGHKArJ5Lv4UnchWgsR2-g8hUc3OodgeAiP8cXWjsjB-YSql1PbsO8DnYo3L3tcxA7sgZcMy-tpFv873Hx7KLUGgdzwpl9ksIu2C9rEHcE5p6wTi-hH8QDtPEKVs7quSx66cLBtRHjjtuEN";

const GROUP_REQS = [
  {
    icon: "groups",
    title: "Grupo Familiar",
    desc: "Estar conformado por una Jefatura de Familia (unipersonal, cónyuges o convivientes) que tenga a su cargo dependientes.",
  },
  {
    icon: "payments",
    title: "Ingreso Máximo",
    desc: "El Ingreso Familiar Mensual (IFM) neto no debe exceder el límite establecido por ley para la modalidad de Adquisición de Vivienda.",
  },
  {
    icon: "home_work",
    title: "Propiedad",
    desc: "No ser propietarios de otra vivienda, terreno o aires independizados a nivel nacional para cualquier integrante del grupo.",
  },
];

const DOCS = [
  { icon: "badge", text: "DNI vigente de todos los integrantes del grupo familiar." },
  { icon: "description", text: "Formulario de Inscripción debidamente suscrito (Nosotros lo facilitamos)." },
  { icon: "receipt_long", text: "Boletas de pago de los últimos 3 meses o declaración jurada de ingresos." },
  { icon: "fact_check", text: "Certificado literal de propiedad o título (en caso de construcción en sitio propio)." },
];

const STEPS = [
  { n: "1", title: "Inscripción", desc: "Registra a tu Grupo Familiar en nuestras oficinas autorizadas o puntos de atención MIVIVIENDA." },
  { n: "2", title: "Evaluación", desc: "El Fondo MIVIVIENDA verifica que el grupo familiar cumpla con los requisitos del programa." },
  { n: "3", title: "Elegibilidad", desc: "Una vez declarado elegible, eliges el proyecto de Consorcio Constructor que más te guste." },
  { n: "4", title: "Asignación", desc: "Se gestiona el desembolso del bono y se inicia el proceso de entrega o construcción de tu casa." },
];

export default function RequisitosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src={HERO_BG}
            alt="Desarrollo habitacional moderno en el Perú"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl mb-4 max-w-2xl">
            Requisitos para tu nueva vivienda
          </h1>
          <p className="font-body-lg text-body-lg max-w-xl opacity-90">
            Todo lo que necesitas saber para acceder al Bono Familiar
            Habitacional y cumplir el sueño de la casa propia con Consorcio
            Constructor.
          </p>
        </div>
      </section>

      {/* ¿Qué es el BFH? */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-6">
            <span className="text-secondary font-label-bold uppercase tracking-wider">
              Beneficio del Estado
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              ¿Qué es el Bono Familiar Habitacional (BFH)?
            </h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Es un subsidio directo que otorga el Estado a una familia de manera
              gratuita como premio a su esfuerzo ahorrador. El bono no se
              devuelve y está dirigido exclusivamente a familias de escasos
              recursos para que puedan comprar, construir o mejorar su vivienda.
            </p>
            <div className="flex items-start gap-4 p-4 bg-surface-container rounded-xl">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                savings
              </span>
              <div>
                <h4 className="font-label-bold text-primary">
                  Ahorro y esfuerzo
                </h4>
                <p className="text-label-sm">
                  Es un incentivo para familias que han demostrado capacidad de
                  ahorro para su hogar.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video glow-hover transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD2lzqLJ2i_GiVwC6TuE29UIKKoVRaOyxI8VWjxacLmGdwfeZmdj2ZjWsxMF0XQqfw3nfXR0pLS6BcTP-joWlfUWmWmLcuBR75r7FMDUSGdPSr4oV0Jf0JFtGdDTCCs4cReLtPoTrHG6KrdLDZM5nyV57zDtpePZ8V_4GoYxHfMfxTkRm5WjgZZrsss6RE1NDJA9UcDhjbOn3wUWUpNXVzTEXK-rrZMXf561I92MJlqb-k0ZUEn0x-"
              alt="Familia frente a su nueva casa construida con el programa Techo Propio"
            />
          </div>
        </div>
      </Reveal>

      {/* Bento Grid: Requisitos */}
      <Reveal className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Requisitos para Grupos Familiares
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Verifica si cumples con los criterios básicos establecidos por el
              Fondo MIVIVIENDA para acceder a este programa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GROUP_REQS.map((r) => (
              <div
                key={r.title}
                className="bg-white p-8 rounded-2xl border border-outline-variant/30 glow-hover transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {r.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {r.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Documentación Necesaria */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Documentación Necesaria
            </h2>
            <p className="text-on-surface-variant">
              Prepara estos documentos en formato físico y digital para agilizar
              tu proceso de postulación con nosotros.
            </p>
            <div className="mt-8 p-6 bg-secondary-container/10 border-l-4 border-secondary rounded-r-xl">
              <p className="text-secondary font-label-bold italic">
                &quot;Contamos con asesores legales para ayudarte a revisar que
                toda tu documentación esté en orden.&quot;
              </p>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DOCS.map((d) => (
              <div
                key={d.icon}
                className="p-6 border border-outline-variant/30 rounded-xl flex items-start gap-4"
              >
                <span className="material-symbols-outlined text-tertiary">
                  {d.icon}
                </span>
                <p className="font-body-md">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Pasos para Postular */}
      <Reveal className="py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Pasos para postular
            </h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              Sigue esta guía paso a paso y empieza el camino hacia tu nuevo
              hogar con Consorcio Constructor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-secondary/30">
                  {s.n}
                </div>
                <h4 className="font-headline-md text-headline-md mb-2">
                  {s.title}
                </h4>
                <p className="opacity-70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              className="bg-white text-primary px-10 py-4 rounded-lg font-headline-md text-headline-md hover:scale-105 hover:shadow-white/20 transition-all duration-300"
              href="/contacto"
            >
              ¡Quiero empezar mi trámite hoy!
            </Link>
          </div>
        </div>
      </Reveal>

      {/* CTA Final */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="p-8 md:p-12 bg-surface-container rounded-3xl border border-outline-variant/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              ¿Aún tienes dudas sobre el proceso?
            </h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
              Nuestros asesores expertos están listos para guiarte en cada paso.
              Llámanos o visítanos en nuestras sedes a nivel nacional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-bold transition-transform hover:scale-105"
                href="/contacto"
              >
                <span className="material-symbols-outlined">call</span>
                Contactar Asesor
              </Link>
              <a
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-label-bold transition-transform hover:scale-105"
                href="#"
              >
                <span className="material-symbols-outlined">location_on</span>
                Ver Nuestras Sedes
              </a>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">
              architecture
            </span>
          </div>
        </div>
      </Reveal>
    </>
  );
}
