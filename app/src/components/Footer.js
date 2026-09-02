import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-section-gap pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md text-on-primary mb-4">
            Consorcio Constructor
          </div>
          <p className="text-surface-variant/80 text-sm mb-6">
            Construyendo los sueños de las familias peruanas con integridad,
            calidad y compromiso social.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                location_on
              </span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed-dim">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-surface-variant/80 hover:text-secondary-fixed transition-colors font-label-sm text-label-sm"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed-dim">Legal</h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-surface-variant/80 hover:text-secondary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Privacidad
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-secondary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Términos
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-secondary-fixed transition-colors font-label-sm text-label-sm"
                href="#"
              >
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed-dim">
            Contacto
          </h4>
          <div className="space-y-4 text-surface-variant/80 text-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim">
                call
              </span>
              <span>(01) 445-8900</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim">
                mail
              </span>
              <span>ventas@consorcioconstructor.pe</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim">
                pin_drop
              </span>
              <span>Av. Principal 123, San Isidro, Lima</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
