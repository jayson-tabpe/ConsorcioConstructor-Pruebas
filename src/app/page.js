import Link from "next/link";
import Reveal from "@/components/Reveal";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA9eBF9y0l_w1ogjU9jb_LGgR7wyhtkGjRThMk2tEo-zvdeZepGUmhXEQMWc72mO-HdUHHrjI407aXjztuMEQ2yrfPOXum1Uq6rv0mnujNFXBlyghLnpVSki79bXu6V5ZvhkNmUL0YELnDQAlCfZd-4ogHT8stVqFhZ7FD0q1VPJ74QyTN635PQqO2cNXLqQxm8wLWetTj4lF4thniimkCELGnUpogIoAUsssGbbTtqfKmpMHWDdZOLcaUqidxaZ28gEw";

const TRUST = [
  { value: "+3,367", label: "Viviendas Construidas" },
  { value: "11", label: "Departamentos Atendidos" },
  { value: "+10 Años", label: "de Experiencia" },
  { value: "1ª Empresa", label: "Post-Niño Costero" },
];

const GALLERY = [
  {
    title: "Sala / Comedor",
    desc: "Espacios amplios y bien iluminados.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEwVJoNfu5fGvgcfIMw0xEHPOJdfXkQLvKwnsaMCh8GTsPZkF23uTVf0NZsCSwYDFXLtIY1Fsp2AtM1a5mQFZ7qv-RXrwxBZUq1fwXoSvVZuh39uAsHG074P5AnMzH0qMI4zBNYzqGUFtg96wMFt8aa0eMrAgNK1fZhn6hwl9NIuq8X1_REdm_klVgELgNjUqaJDz--zjOf1XGhPaFTWBMmQMFU77CFg3H1hM4UQUXxr8LmUYDQwdxsb92UtYwdBOXA",
  },
  {
    title: "Dormitorio Principal",
    desc: "Privacidad y confort garantizado.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADF6gxdHupnXuJyDGaZY7QqEkvnynSSx1HMtlGfE6iYtV86UJ0GsbDmdFNHu2UK7QHFVZsAGckUsKwuxfPJ5plByLdz2vb3sTLbyRIMRouecIdSC4rNxLVt4VTWSdfFNWsl7EcBfeQg9uKpZglD6MOLg8k_EyJj_BQv8nMPHFEcSAwFeUXjqJhEAFb3QZzBwd6oG8IbLNYdToxf9bmWjvuzyC7eSpmbR_nClIVXUuuy9cE-8C-7k20KQr4zRw8BoqbeQ",
  },
  {
    title: "Baño Completo",
    desc: "Acabados de primera calidad.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-zlp6VQ_Ii5_0EzpjX6tIeqE1xwYvJy8zgnFtdeaqevV_JzIUUQ5V7fZMr2krY2Yd6La4k-tR-Kmf47D1IdhIDtieWXGHcktypXRre4r2sZFaHIgiKTXn-L2YTXD0k4_8SS3JcXWyz4mv9Mm3Nh8qoD1_U-0mW-LrJfFhCdy2Twru_kR5HPSWTOwbobOiYXwMwz3Ocr1GneOMmQlk99LLNxU8ibRPllAO_dK6I4Pb66c4VpMQ8JStPCWfS5b2P0ZOnQ",
  },
  {
    title: "Dormitorio Secundario",
    desc: "Ideal para los más pequeños.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu44yeporQ0ij4wxbeJGmSIw15uHrTH2dSeB1nd1iadZOL3C_kv6HK1LDVFWbZ5kaULwLdF4AxEaxL_Ds4x54VGdoZPaaKPAg9Fi4xLIrnm6Lk4fVdYBSSOhuHeGjyPlXd-CZG9ftgC8Mdg9qK3lI77-pW0o-ssaIZ3YWuXkRZMOKvZ4P06c7obFUeN2ZxfSMGgAtLkZ7Ex4bNMNDYq0lAS_LJWEfZiJyxlQCYW_GStUvas-d1ecBifTgG9GsmuZC25g",
  },
  {
    title: "Cocina Funcional",
    desc: "Diseño ergonómico y moderno.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsr8WojVFQ6hPBNxI_mU8o3l6e6BGEGMPKpHzVW3Sq1Zz58t-sKdUWJgtITZC_Jw7xQBGinJbLNsgXnyWFBbuOXUD6XoW0FHi5KmjG_Gq6BH04K3lhrFpOIZN860hm3-bW50BYPhmLpPF_gnTmUaygc6kx6xGI3o6I7c6n7fRsr51YKG2jGOWHQLXmpwVp_6IJ6BNVrxN28yD3HAX50ttl87UYP9tx1MuaLcU6HQaRA0WD0KzxJ5NvM_IVW0yhCVhiyQ",
  },
  {
    title: "Perspectiva Exterior",
    desc: "Estructura sismo-resistente.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1wsJ4HQckvRthvraqVsLtdItW4rQrXS7Vh9RruYhjoWL-WSg2acussKZSt370Fwe0BHgtu6J7s-MP1otoIHxdIOQPMTyoq6fGtY0JDPSSFylugKlHhV_VukfvPBTSWv0IXQeKpFIZdfMmbdgqbf1OOKKGVlrg0wTUlRnbm_qzJ1EWA97tgLqB0so5vUDN3pHYnOOuc7Jj2AnIyMhmki8V41Fax1TDEpSW81wOMb0OOfuFKHtYAn91b3NRrX5ak4EzEw",
  },
];

const SERVICES = [
  {
    icon: "home",
    title: "Programa Techo Propio",
    price: "Bono de S/ 33,000*",
    desc: "Construcción en Sitio Propio con el Bono Familiar Habitacional, un subsidio del Estado que no se devuelve.",
    href: "/servicios",
  },
  {
    icon: "construction",
    title: "Reforzamiento Estructural",
    price: "Bono de S/ 21,000 a S/ 22,600",
    desc: "Protege tu vivienda en zonas de alto riesgo sísmico con subsidio gratuito del Estado.",
    href: "/servicios",
  },
  {
    icon: "account_balance",
    title: "Nuevo Crédito Mivivienda",
    price: "Financia de S/ 64,200 a S/ 464,200",
    desc: "Compra, construye o mejora tu vivienda financiando hasta el 90% del valor.",
    href: "/servicios",
  },
];

const REQUIREMENTS = [
  {
    title: "Título de Propiedad",
    desc: "Contar con terreno o aires independizados inscritos en Registros Públicos.",
  },
  {
    title: "Ingreso Familiar",
    desc: "Ingreso mensual del grupo familiar no debe exceder los S/. 2,706.",
  },
  {
    title: "Sin Apoyo Previo",
    desc: "No haber recibido apoyo habitacional del Estado anteriormente (Enace, Fovimar, etc.).",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[560px] md:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-2xl bg-surface/40 backdrop-blur-xl border border-white/30 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6 leading-tight">
              Construyendo Sueños, Haz Realidad la Casa de Tus Sueños
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 opacity-90">
              Más de 10 años transformando vidas a través de ingeniería de
              excelencia y compromiso social. La seguridad y calidad que tu
              familia merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all"
                href="/prototipos"
              >
                Ver Modelos 3D
              </Link>
              <Link
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary hover:text-on-primary transition-all"
                href="/requisitos"
              >
                Consultar Requisitos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-surface-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {TRUST.map((item) => (
              <div
                key={item.label}
                className="bg-surface p-6 rounded-xl text-center transition-all duration-300 blue-glow hover:scale-[1.03]"
              >
                <span className="block font-headline-lg text-headline-lg text-primary mb-1">
                  {item.value}
                </span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Floor Plan Gallery */}
      <Reveal className="py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Explora tu Futuro Hogar
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Diseños modernos y funcionales optimizados para el confort de tu
              familia. Visualiza cada detalle de nuestros prototipos
              certificados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Master Plan */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:scale-[1.02] neon-glow-primary border-b-2 border-outline-variant/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Plano Maestro Isométrico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ILnQq4AKbSjOPQ1Y3i0rGEsLna3mthxPQQ_rNX2qmS2YGbAUQulu6ct99oRQGA_G7xK6_36WjKEl5UMuUG3Apqo0eSHy7-rlcBmsxpIJBN8Ly9E1LbSdxaGGIaIWtWm2thRcbpMhD85dpb10zF9BF6rxeGiK9X-w4tKXMJPKr7BJBYcU9PijmbVJPhBKssghu3-HwbiLQK-hAQmGSBR_3oY7_hzCICahBO9_n41Fu7U5KvsdSCzhLIm7bomzeAtRGw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-secondary text-on-secondary text-[10px] uppercase font-bold px-2 py-1 rounded mb-2 inline-block">
                  Prototipo A1
                </span>
                <h3 className="text-white font-headline-md text-headline-md">
                  Vista de Planta Maestra
                </h3>
                <p className="text-white/80 font-label-sm text-label-sm">
                  Distribución completa de ambientes integrados.
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            {GALLERY.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:scale-[1.02] neon-glow-primary"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  src={item.img}
                />
                <div className="p-4 border-t border-outline-variant/10">
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <p className="text-label-sm text-outline">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Services Section */}
      <Reveal className="py-section-gap bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Nuestros Servicios
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-4">
              Desarrollamos proyectos de acuerdo a normas y reglamentos vigentes
              para garantizar un servicio de calidad, con el respaldo de los
              programas habitacionales del Estado peruano.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((item) => (
              <div
                key={item.title}
                className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-secondary mb-3">
                  {item.price}
                </p>
                <p className="text-on-surface-variant font-body-md">
                  {item.desc}
                </p>
                <Link
                  className="mt-6 inline-flex items-center gap-1 font-label-bold text-label-bold text-primary hover:text-secondary transition-colors"
                  href={item.href}
                >
                  Conoce más{" "}
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-outline text-sm mt-8 font-body-md">
            *Monto referencial del Bono Familiar Habitacional. Conoce las
            condiciones y montos por región en nuestra página de Servicios.
          </p>
        </div>
      </Reveal>

      {/* Requirements Section */}
      <Reveal className="py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                Requisitos para Postular
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Accede al Bono Familiar Habitacional cumpliendo con estos
                simples requisitos:
              </p>
              <ul className="space-y-6">
                {REQUIREMENTS.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                      <span
                        className="material-symbols-outlined text-base"
                        data-weight="fill"
                      >
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">
                        {item.title}
                      </h4>
                      <p className="text-label-bold text-outline">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-auto object-cover aspect-[4/3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCea5j-G1cLEXsjqDocwQPontigR91CLKNRR4EBccAViegBO5Y1QKow9fXY0oPC9j9kzA_jkQbdgzTqCIAcFtz7cRxEJCmZfMVrDgk05iLqy1c6M6MYD9nlJYAYIpvQ1_Nc1SEGhVdwbfYaJyuLA2Yfr8KmTB3XdVe7t8VUdhMZ5XzUaL6UJXiyXXu8Ln-e7RmF8EcT-NbXJlLFg0-KCCBAO33MNZ_ZiJb4avKneMz77hfgCkbx0v18"
                  alt="Familia recibiendo asesoría sobre requisitos de postulación"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
