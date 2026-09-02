import Link from "next/link";
import Reveal from "@/components/Reveal";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDe4kDn1tXUu6tKwo8LsFv_PGN3SH-r15OrbrG3eNeyy6yw3h1vqj01QwqikO7tcPc8QtyvzLtgSFOE5Ni4Ru62WNWN60lc085cUsHF2B-lYEo6FSEcz70Ev8UQe1LhFPua2GnvgNO3XyDENRsIoxxowaVEdRsnfSzgVqy6uYTIxnDfFGAePU4ZJcuFZ8il6E3ABVAArQXWZHd9rCSr8F0KC6Yv9-Jn7ckBHN-dz5Nfaj0FVxkDDozh";

const TEAM = [
  {
    name: "Ing. Ricardo Alva",
    role: "Director de Proyectos",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl2E289gIi3blF735M30-m7y6dPUMcsRcD4JFmILsH-KYZ18kngQPGeZEq5jbaVgw10qzf8nrstpMyXrZ2kdmMqU1QS6YZ5Ozr3P37R3HUbThd9oV15Nm_qganB3vF3KsnMQdFkjyJRXGEbo1y_D_x45DzCUPcyaUkJHkU-LNBmuqVwiYIPzvkRKdG4PT_cePQ2lvnq3Xdw-0y9ebfdcWMbylCHoZhdBCLki7MUIbCspmNsCBLZUfm",
  },
  {
    name: "Arq. Sofía Mendoza",
    role: "Jefa de Diseño Urbano",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRD4D8UC3uMkv52-ft-b8sJZD5uLoTCSRWx2DQ4p9OW_hv0uEVlCBe4CZ8bj6YkUCXde7bSiHrbpnkVqGU_jFdLAIJ7Hv7Dx7Cb4WUgdUT8_0VYmWf-EaoJ5DTfTGsbmne6j5MffD4krJBhWOyuRRfuebSteOVvmgJERuEomJAM6TCHmtucDgtl7sJ4zBSMy6sSlfzNh2pFcyXKjw1vPU20ROrK2GeiMNsB-zKsM582yKXhOyoiSRI",
  },
  {
    name: "Ing. Carlos Ruíz",
    role: "Gerente de Seguridad & SST",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDelcLFyzoJHfY6Oj2pXc734M0xRri8kvc46VLSevVp3s74lVJLy3aJN0xb6R-v2EM_KS0o43reIM46SKZAcWofhtTTML5h5RQWhkJMJNopJvt06Lm2xZ4PrRzU1uXosjJ0bNZe9ySDDsRxzJJsXq94kX8gtDuP9K3bXUvCtX0hqBxOD49lMwbr9i46SjTQvhAlQNBYmpIglhaGwU9qAyceLBqfoFWL2dPCq8az7LkDrZrO4CbP_szo",
  },
  {
    name: "Lic. Elena Paz",
    role: "Coordinadora Social",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYILkL37o8sSXOBa4ZQb4Z8Yk-4OSxIeJA6O0QKxR5T01FeDZvvTZV56c236K2y3ZNh8NfcwFvkSRVITJGOjKQM_8ChQRrfLWYZlvEp0DkRYk0AShrl_Rmo9ooArFH9AD_NtVoCnyDMrdbquWQHfRw1qnRR8EwFjcjMWnAd_UWktPtjZNi6KD9yXBz_hJaGf7RoTv3qLuGRHSC3eRZlyIrui0BqYWAQtYuaTRtOucTg-AwNop3iokS",
  },
];

const IMPACT = [
  {
    icon: "home_work",
    bg: "bg-primary-container",
    fg: "text-on-primary-container",
    title: "Vivienda Digna para Todos",
    desc: "Facilitamos el acceso a bonos estatales como Techo Propio, garantizando que más familias salgan de situaciones de precariedad.",
  },
  {
    icon: "group",
    bg: "bg-secondary-container",
    fg: "text-on-secondary-container",
    title: "Desarrollo Comunitario",
    desc: "No solo construimos casas, creamos barrios con áreas verdes, zonas recreativas y seguridad para el crecimiento de los niños.",
  },
  {
    icon: "autorenew",
    bg: "bg-tertiary-container",
    fg: "text-on-tertiary-container",
    title: "Empleo Local",
    desc: "Priorizamos la contratación de mano de obra local en cada uno de nuestros proyectos, impulsando la economía de las regiones.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl mb-4 max-w-3xl">
            Construyendo los sueños de la familia peruana.
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl opacity-90">
            Somos una institución líder en ingeniería y construcción, dedicada a
            transformar el panorama habitacional del Perú con excelencia y
            compromiso social.
          </p>
        </div>
      </section>

      {/* Historia de la Empresa - Asymmetric Layout */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 space-y-6">
            <span className="text-secondary font-label-bold uppercase tracking-widest">
              Nuestra Trayectoria
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Décadas de Solidez y Confianza
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Consorcio Constructor nació de la visión de ingenieros peruanos
              comprometidos con el cierre de la brecha habitacional. Desde
              nuestros inicios, hemos priorizado la precisión técnica y el
              bienestar de las familias, consolidándonos como un referente en el
              sector inmobiliario y de construcción civil.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-headline-md font-bold text-primary">
                  15+
                </div>
                <div className="text-label-sm text-on-surface-variant">
                  Años de Experiencia
                </div>
              </div>
              <div>
                <div className="text-headline-md font-bold text-primary">
                  5,000+
                </div>
                <div className="text-label-sm text-on-surface-variant">
                  Hogares Entregados
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover glow-hover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrwrt-qUNxmXPcQHmTwI1bsYDD5UFhN9wqF1oXGXWG4bhI-cfdphxRBIPY_RYxGICbGMwq6-1g-bnXbs541EkUj79bW-P9KwsBqelcgXf6AXMgqRqMg_4C4HV2l7vDCf8y9LZsfvcKCM-mGQkGb6-k-6t3TgoYDhMSpi6zlSGX3Hnw-AYwwMHfFHymySJZPUEmKuz_0ZMzfi6w5_7FxBHcwjWyLzElFMBBXpM-7oghO4L37o3Ary1"
                  alt="Fundadores revisando planos arquitectónicos"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover glow-hover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoWgKVNtoZELz4ov7w7RfiADAkSlUsD1Ll6abCzuWuq0TIfTJG2tZAfOA7e7cbWKB-iHN3v_sF-b5hEg6cZzfagWUBtXAGtEtNFzHrE6mV8DpYmb1TvptxpJVDlS0HznXTtaQgDe9UxKGb4czbVA4hIUa9X0DvhRN7r2Dq-4rXQ85L3yv41EQyZirIDthv4d1F8oTp1lHZTWzyYGXYOkdn-z8BwkQzIeY9-rhTkpRQH6i324ljGgoC"
                  alt="Complejo residencial moderno en Lima"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Misión y Visión - Bento Grid */}
      <Reveal className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl flex flex-col justify-between shadow-lg glow-hover">
              <span className="material-symbols-outlined text-4xl mb-6">
                rocket_launch
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  Nuestra Misión
                </h3>
                <p className="font-body-md opacity-80">
                  Brindar soluciones habitacionales seguras, dignas y
                  sostenibles que mejoren la calidad de vida de las familias
                  peruanas, aplicando estándares de ingeniería de clase mundial.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/30 glow-hover">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                visibility
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Nuestra Visión
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Ser reconocidos como el consorcio constructor más confiable
                  del país, liderando la innovación en viviendas de interés
                  social y desarrollo urbano resiliente.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 grid grid-rows-2 gap-gutter">
              <div className="bg-secondary-container p-8 rounded-xl text-on-secondary-container flex items-center gap-4 glow-hover">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
                <span className="font-label-bold text-label-bold">
                  Calidad Certificada ISO 9001
                </span>
              </div>
              <div className="bg-tertiary-container p-8 rounded-xl text-on-tertiary-container flex items-center gap-4 glow-hover">
                <span className="material-symbols-outlined text-3xl">eco</span>
                <span className="font-label-bold text-label-bold">
                  Construcción Sostenible
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Nuestro Equipo */}
      <Reveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Liderazgo y Expertos
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Un equipo multidisciplinario de ingenieros, arquitectos y gestores
            sociales que trabajan unidos para edificar el futuro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {TEAM.map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={member.img}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-headline-md text-[20px] text-primary">
                {member.name}
              </h4>
              <p className="text-secondary font-label-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Compromiso Social */}
      <Reveal className="py-section-gap relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Compromiso con el Perú
            </h2>
            <div className="space-y-8">
              {IMPACT.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div
                    className={`${item.bg} ${item.fg} p-4 rounded-lg self-start`}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-label-bold text-lg mb-2">
                      {item.title}
                    </h5>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-2xl shadow-2xl relative z-10 border-4 border-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGaWhl4etzhfLBBHacajr0uZAnTGwsqlqqGHrEEkfLmu3eYPnjrpUwCJzAUBaF46I-4KrHyVoLLsWbEUMOfOjkufqIz5ViX_MxPjmx6Q0hLHED4E8cM5cf-uS3uJxeH3k_s0SrGIHcXNCs7J85duqjRddq0z_WFtS2Qnst-yzRbji5e8SEs_cbvelhLxpQGBUxZmv-mKIkFz42nSj8KpzHzIqUGA1ZoMT3S8Vjrbwkowmz9wn9YfZm"
              alt="Familia peruana frente a su nueva vivienda Techo Propio"
            />
          </div>
        </div>
      </Reveal>

      {/* CTA Section */}
      <Reveal className="bg-primary py-16 text-center text-on-primary mb-24 mx-margin-mobile md:mx-margin-desktop rounded-3xl overflow-hidden relative">
        <div className="relative z-10 px-6">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            ¿Listo para construir tu futuro?
          </h2>
          <p className="mb-8 font-body-lg opacity-80 max-w-xl mx-auto">
            Nuestro equipo de asesores está listo para guiarte en el proceso de
            obtención de tu casa propia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="bg-secondary text-on-primary px-8 py-4 rounded-xl font-label-bold hover:scale-105 transition-all shadow-lg"
              href="/prototipos"
            >
              Ver Proyectos
            </Link>
            <Link
              className="bg-white/10 backdrop-blur-md text-on-primary border border-white/20 px-8 py-4 rounded-xl font-label-bold hover:bg-white/20 transition-all"
              href="/contacto"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
