"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAx7FFn_217w-Zrtze1XvjC5JzCv_5xb_jGcX01bRbr77j2i_adx9Z446Jz2QF25zNvIp4IAPBJeQ0ZQQ8-SdvSiNqP4RG0Wub1csmPivGHKArJ5Lv4UnchWgsR2-g8hUc3OodgeAiP8cXWjsjB-YSql1PbsO8DnYo3L3tcxA7sgZcMy-tpFv873Hx7KLUGgdzwpl9ksIu2C9rEHcE5p6wTi-hH8QDtPEKVs7quSx66cLBtRHjjtuEN";

const QUICKNAV = [
  {
    id: "servicio-techo-propio",
    icon: "home",
    num: "Programa 01",
    title: "Techo Propio",
    desc: "Construcción en Sitio Propio con el Bono Familiar Habitacional.",
  },
  {
    id: "servicio-reforzamiento",
    icon: "construction",
    num: "Programa 02",
    title: "Reforzamiento Estructural",
    desc: "Subsidio gratuito para proteger tu hogar en zonas de riesgo sísmico.",
  },
  {
    id: "servicio-mivivienda",
    icon: "account_balance",
    num: "Programa 03",
    title: "Nuevo Crédito Mivivienda",
    desc: "Compra, construye o mejora tu vivienda con financiamiento hipotecario.",
  },
];

const PRESUPUESTO = [
  {
    icon: "savings",
    label: "Monto del Bono (BFH)",
    value: "S/ 33,000",
    count: 33000,
    desc: (
      <>
        Equivalente a <strong>6 UIT</strong>. Se eleva hasta un{" "}
        <strong>17% más</strong> (S/ 38,610) en Madre de Dios, Amazonas,
        Cajamarca, Huánuco, Pasco, Puno, Cusco y Apurímac.
      </>
    ),
  },
  {
    icon: "payments",
    label: "Ahorro Mínimo Familiar",
    value: "S/ 2,475",
    count: 2475,
    desc: (
      <>
        Equivalente a <strong>0.45 UIT</strong>. Es el aporte que la familia
        debe preparar para acceder al bono.
      </>
    ),
  },
  {
    icon: "accessible",
    label: "Viviendas Accesibles",
    value: "+ Subsidio",
    count: null,
    desc: (
      <>
        Si un miembro del hogar presenta <strong>discapacidad severa y usa silla
        de ruedas</strong>, se otorga un subsidio mayor para adecuar la
        infraestructura.
      </>
    ),
  },
];

const MODALIDADES = [
  {
    icon: "rebase_edit",
    title: "Básico",
    value: "S/ 21,000",
    count: 21000,
    desc: (
      <>
        Intervención de <strong>18 m²</strong> en un ambiente para hacerlo
        seguro.
      </>
    ),
  },
  {
    icon: "roofing",
    title: "Con Techo Aligerado",
    value: "S/ 21,600",
    count: 21600,
    desc: (
      <>
        Incluye la construcción de una <strong>losa aligerada</strong>.
      </>
    ),
  },
  {
    icon: "foundation",
    title: "Demolición y Techo Nuevo",
    value: "S/ 22,600",
    count: 22600,
    desc: (
      <>
        Incluye <strong>demolición del techo en mal estado</strong> y
        construcción de uno nuevo.
      </>
    ),
  },
];

const REFORZAMIENTO_REQS = [
  "Ser propietario de la vivienda a intervenir.",
  "Contar con DNI vigente.",
  "Tener clasificación socioeconómica de pobre o pobre extremo.",
  "Vivir en una zona con alta vulnerabilidad o riesgo sísmico diagnosticada por el Estado.",
];

const MIVIVIENDA_BENEFITS = [
  {
    icon: "redeem",
    text: (
      <>
        <strong>Bono del Buen Pagador (BBP)</strong> y{" "}
        <strong>Premio al Buen Pagador (PBP)</strong> para quienes califiquen y
        deseen incrementar su cuota inicial. Se devuelven si se prepaga el total
        antes de los 5 años, salvo casos de seguro de desgravamen o
        multirriesgo.
      </>
    ),
  },
  {
    icon: "percent",
    text: (
      <>
        Permite financiar hasta el <strong>90% del valor de la vivienda</strong>.
      </>
    ),
  },
  {
    icon: "calendar_month",
    text: (
      <>
        La cuota de pago será <strong>siempre la misma</strong>.
      </>
    ),
  },
  {
    icon: "payments",
    text: (
      <>
        Puedes realizar <strong>prepagos en cualquier momento</strong>.
      </>
    ),
  },
];

const MIVIVIENDA_CONDITIONS = [
  {
    icon: "how_to_reg",
    text: (
      <>
        Ser <strong>mayor de edad</strong>, sin importar el estado civil.
      </>
    ),
  },
  {
    icon: "verified_user",
    text: (
      <>
        Haber sido calificado como{" "}
        <strong>
          sujeto de crédito por la Institución Financiera Intermediaria (IFI)
        </strong>
        .
      </>
    ),
  },
  {
    icon: "home_work",
    text: (
      <>
        No ser propietario o copropietario de{" "}
        <strong>otra vivienda en cualquier localidad del país</strong> (aplica
        al cónyuge o conviviente reconocido e hijos menores de edad).
      </>
    ),
  },
  {
    icon: "fact_check",
    text: (
      <>
        Los recursos del Fondo Mivivienda podrán financiar como máximo{" "}
        <strong>2 veces a un mismo subprestatario</strong>, sin préstamos
        pendientes al fondo.
      </>
    ),
  },
];

function Counter({ value, decimals = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || value == null) return;
    const target = value;
    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: target,
      duration: 0.6,
      ease: "power2.out",
      snap: { val: 1 / Math.pow(10, decimals) },
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent =
          "S/ " +
          counter.val.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
      },
    });
    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [value, decimals]);
  return <span ref={ref}>S/ 0</span>;
}

export default function ServiciosPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const quicknavRef = useRef(null);
  const presupuestoRef = useRef(null);
  const modalidadesRef = useRef(null);
  const reforzamientoListRef = useRef(null);
  const miviviendaListRef = useRef(null);
  const heroBgRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (!reduced) {
      ScrollTrigger.refresh();
      return () => mm.revert();
    }

    // Main scope
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          y: 40,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          clearProps: "all",
        });
      }
      if (quicknavRef.current) {
        gsap.from(quicknavRef.current.children, {
          y: 30,
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.45,
          clearProps: "all",
          scrollTrigger: { trigger: quicknavRef.current, start: "top 85%", once: true },
        });
      }
      [presupuestoRef.current, modalidadesRef.current].forEach((group) => {
        if (group) {
          gsap.from(group.children, {
            y: 30,
            autoAlpha: 0,
            duration: 0.1,
            ease: "power2.out",
            stagger: 0.5,
            clearProps: "all",
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        }
      });
      [
        reforzamientoListRef.current,
        miviviendaListRef.current,
      ].forEach((ul) => {
        if (ul) {
          gsap.from(ul.children, {
            y: 20,
            autoAlpha: 0,
            duration: 0.18,
            ease: "power2.out",
            stagger: 0.05,
            clearProps: "all",
            scrollTrigger: { trigger: ul, start: "top 85%", once: true },
          });
        }
      });
    });

    // Parallax desktop
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        if (heroBgRef.current && heroRef.current) {
          gsap.fromTo(
            heroBgRef.current,
            { yPercent: -5, scale: 1.15 },
            {
              yPercent: 5,
              scale: 1.15,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      }
    );

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[450px] min-h-[420px] flex items-center overflow-hidden"
      >
        <div className="servicios-hero-bg absolute inset-0 z-0">
          <div
            ref={heroBgRef}
            className="servicios-hero-bg-img w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="servicios-hero relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-on-primary">
          <span className="bg-secondary text-on-secondary text-label-sm font-label-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 inline-block">
            Nuestro Portafolio
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl mb-4 max-w-3xl">
            Programas y Servicios Habitacionales
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl opacity-90">
            Desarrollamos proyectos de acuerdo a normas y reglamentos vigentes
            para garantizar un servicio de calidad, con el respaldo de los
            programas del Estado peruano.
          </p>
        </div>
      </section>

      {/* Índice Rápido */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary font-label-bold uppercase tracking-widest">
              ¿Qué hacemos?
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
              Tres formas de construir tu vivienda
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 font-body-md">
              Accede a los beneficios del Estado peruano con el acompañamiento
              completo de Consorcio Constructor.
            </p>
          </div>
          <div ref={quicknavRef} className="servicios-quicknav grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {QUICKNAV.map((item) => (
              <div
                key={item.id}
                className="group bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <p className="text-outline font-label-bold text-label-bold uppercase mb-2">
                  {item.num}
                </p>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  {item.desc}
                </p>
                <button
                  className="inline-flex items-center gap-1 font-label-bold text-label-bold text-primary hover:text-secondary transition-colors"
                  onClick={() => scrollTo(item.id)}
                >
                  Ver detalle{" "}
                  <span className="material-symbols-outlined text-base">
                    arrow_downward
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicio 1: Techo Propio */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-20" id="servicio-techo-propio">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-bold text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-base" data-weight="fill">
                home_work
              </span>{" "}
              Programa del Estado
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              1. Programa Techo Propio
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Trabajamos la modalidad de{" "}
              <strong>Construcción en Sitio Propio (CSP)</strong> del programa
              Techo Propio, un beneficio del Estado peruano dirigido a las
              familias que desean edificar una casa segura y formal en un
              terreno propio o aires independizados. El apoyo se otorga a través
              del <strong>Bono Familiar Habitacional (BFH)</strong>, un subsidio
              económico directo que <strong className="text-secondary">no se devuelve</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all"
                href="/requisitos"
              >
                Postula a Techo Propio
              </Link>
              <Link
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary hover:text-on-primary transition-all"
                href="/contacto"
              >
                Consultar Asesor
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl glow-hover transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-[380px] object-cover"
              alt="Familia beneficiaria del programa Techo Propio frente a su nueva vivienda"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD2lzqLJ2i_GiVwC6TuE29UIKKoVRaOyxI8VWjxacLmGdwfeZmdj2ZjWsxMF0XQqfw3nfXR0pLS6BcTP-joWlfUWmWmLcuBR75r7FMDUSGdPSr4oV0Jf0JFtGdDTCCs4cReLtPoTrHG6KrdLDZM5nyV57zDtpePZ8V_4GoYxHfMfxTkRm5WjgZZrsss6RE1NDJA9UcDhjbOn3wUWUpNXVzTEXK-rrZMXf561I92MJlqb-k0ZUEn0x-"
            />
          </div>
        </div>
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/30">
          <h3 className="font-headline-md text-headline-md text-primary mb-8 text-center">
            ¿De cuánto es el Bono y el Ahorro?
          </h3>
          <div ref={presupuestoRef} className="presupuesto-cards grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {PRESUPUESTO.map((card) => (
              <div
                key={card.label}
                className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 glow-hover transition-all text-center"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block" data-weight="fill">
                  {card.icon}
                </span>
                <p className="font-label-bold text-label-sm text-outline uppercase tracking-wider mb-2">
                  {card.label}
                </p>
                <p className="font-headline-md text-headline-md text-primary font-bold">
                  {card.count != null ? (
                    <Counter value={card.count} />
                  ) : (
                    card.value
                  )}
                </p>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicio 2: Reforzamiento Estructural */}
      <section className="py-section-gap bg-surface-container-low scroll-mt-20" id="servicio-reforzamiento">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl glow-hover transition-all order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-[380px] object-cover"
                alt="Obra de reforzamiento estructural en zona de alto riesgo sísmico"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe4kDn1tXUu6tKwo8LsFv_PGN3SH-r15OrbrG3eNeyy6yw3h1vqj01QwqikO7tcPc8QtyvzLtgSFOE5Ni4Ru62WNWN60lc085cUsHF2B-lYEo6FSEcz70Ev8UQe1LhFPua2GnvgNO3XyDENRsIoxxowaVEdRsnfSzgVqy6uYTIxnDfFGAePU4ZJcuFZ8il6E3ABVAArQXWZHd9rCSr8F0KC6Yv9-Jn7ckBHN-dz5Nfaj0FVxkDDozh"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 bg-secondary text-on-secondary font-label-bold text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-base" data-weight="fill">
                  shield
                </span>{" "}
                Bono del Estado
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                2. Reforzamiento Estructural de Viviendas
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                El <strong>Bono de Reforzamiento Estructural</strong> es un
                subsidio económico gratuito del Estado peruano otorgado por el
                Ministerio de Vivienda, Construcción y Saneamiento (a través del
                Fondo MIVIVIENDA). Su valor va de <strong>S/ 21,000 a S/
                22,600</strong> para proteger hogares en pobreza ubicados en
                zonas de alto riesgo sísmico.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all"
                  href="/contacto"
                >
                  Consultar Asesor
                </Link>
              </div>
            </div>
          </div>

          <div className="modalidades-cards grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
            <p className="md:col-span-3 text-center font-label-bold text-label-bold text-outline uppercase tracking-wider mb-4">
              Modalidades y Montos del Subsidio
            </p>
            {MODALIDADES.map((m) => (
              <div
                key={m.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 glow-hover transition-all"
              >
                <div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined">{m.icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-3">
                  {m.title}
                </h4>
                <p className="font-headline-md text-headline-md text-secondary font-bold mb-3">
                  <Counter value={m.count} />
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-on-primary rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="font-headline-md text-headline-md mb-8 text-center">
              Requisitos para los Beneficiarios
            </h3>
            <ul
              ref={reforzamientoListRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {REFORZAMIENTO_REQS.map((req) => (
                <li key={req} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-base" data-weight="fill">
                      check_circle
                    </span>
                  </div>
                  <p className="font-body-md opacity-90">{req}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Servicio 3: Mivivienda */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-20" id="servicio-mivivienda">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-bold text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-base" data-weight="fill">
                account_balance
              </span>{" "}
              Crédito Hipotecario
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              3. Nuevo Crédito Mivivienda
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Es un crédito hipotecario que te permite{" "}
              <strong>
                comprar cualquier vivienda, construir en terreno propio o aires
                independizados, o mejorar tu vivienda
              </strong>
              . Financia viviendas entre <strong>S/ 64,200.00</strong> hasta{" "}
              <strong>S/ 464,200.00</strong> en un plazo de pago de{" "}
              <strong>5 a 25 años</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all"
                href="/contacto"
              >
                Precalificar Ahora
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl glow-hover transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-[380px] object-cover"
              alt="Edificio de vivienda financiado con crédito Mivivienda"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoWgKVNtoZELz4ov7w7RfiADAkSlUsD1Ll6abCzuWuq0TIfTJG2tZAfOA7e7cbWKB-iHN3v_sF-b5hEg6cZzfagWUBtXAGtEtNFzHrE6mV8DpYmb1TvptxpJVDlS0HznXTtaQgDe9UxKGb4czbVA4hIUa9X0DvhRN7r2Dq-4rXQ85L3yv41EQyZirIDthv4d1F8oTp1lHZTWzyYGXYOkdn-z8BwkQzIeY9-rhTkpRQH6i324ljGgoC"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-16">
          <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">
              Beneficios
            </h3>
            <ul ref={miviviendaListRef} className="space-y-5">
              {MIVIVIENDA_BENEFITS.map((b) => (
                <li key={b.icon} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-base" data-weight="fill">
                      {b.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-body-md text-on-surface">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">
              Condiciones para Calificar
            </h3>
            <ul className="space-y-5">
              {MIVIVIENDA_CONDITIONS.map((c) => (
                <li key={c.icon} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-base" data-weight="fill">
                      {c.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-body-md text-on-surface">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recorridos Virtuales */}
      <section className="pt-8 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-label-bold uppercase tracking-widest">
            Recorridos Virtuales
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
            Recorre en 3D nuestros modelos de vivienda
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 font-body-md">
            Explora el interior de cada prototipo y visualiza la distribución de
            ambientes antes de tomar tu decisión.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { src: "/videos/modelo-1-40m2.mp4", title: "Modelo 1", sub: "40 m²" },
            { src: "/videos/modelo-2-35m2.mp4", title: "Modelo 2", sub: "35 m²" },
            { src: "/videos/modelo-2-60m2.mp4", title: "Modelo 3", sub: "60 m²" },
          ].map((v) => (
            <div
              key={v.src}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col"
            >
              <div className="relative bg-black aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {v.title}
                  </h3>
                  <p className="text-on-surface-variant font-label-sm">
                    {v.sub}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary">
                  ondemand_video
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-section-gap pt-0 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary py-16 px-8 md:px-16 text-center text-on-primary rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6">
              ¿No sabes cuál programa te conviene?
            </h2>
            <p className="mb-8 font-body-lg opacity-80 max-w-xl mx-auto">
              Nuestro equipo de asesores evalúa tu caso y te indica el beneficio
              del Estado al que puedes acceder, sin costo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-secondary text-on-primary px-8 py-4 rounded-xl font-label-bold hover:scale-105 transition-all shadow-lg"
                href="/contacto"
              >
                Hablar con un Asesor
              </Link>
              <Link
                className="bg-white/10 backdrop-blur-md text-on-primary border border-white/20 px-8 py-4 rounded-xl font-label-bold hover:bg-white/20 transition-all"
                href="/requisitos"
              >
                Ver Requisitos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
