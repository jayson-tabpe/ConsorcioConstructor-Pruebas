/* ============================================================
   Consorcio Constructor - Main JavaScript
   ============================================================ */

// --- Scroll Reveal (IntersectionObserver) ---
(function() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
})();

// --- Header Scroll Behavior ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-md');
        header.classList.remove('py-4', 'shadow-sm');
    } else {
        header.classList.add('py-4', 'shadow-sm');
        header.classList.remove('py-2', 'shadow-md');
    }
});

// --- Glow Hover Micro-interaction ---
document.querySelectorAll('.glow-hover').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// --- Card Mouse Tracking (Prototipos) ---
document.querySelectorAll('.card-glow').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

// --- Link Hover Text-Shadow (Requisitos) ---
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (!link.classList.contains('text-secondary')) {
            link.style.textShadow = '0 0 8px rgba(127, 166, 208, 0.4)';
        }
    });
    link.addEventListener('mouseleave', () => {
        link.style.textShadow = 'none';
    });
});

// --- Lógica Dinámica de Sedes y Mapas ---
const sedesData = {
    'lima': {
        badge: 'Sede Los Olivos',
        title: 'Lima - Los Olivos',
        address: 'Av. Próceres de Huandoy Mz. C Lt. 13, 3er Piso, Los Olivos',
        mapUrl: 'https://maps.app.goo.gl/mhcXXkTqkGnoRnbD6',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3869.4851217001496!2d-75.71763102490321!3d-14.10754408632243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA2JzI3LjIiUyA3NcKwNDInNTQuMiJX!5e0!3m2!1ses!2spe!4v1788240121368!5m2!1ses!2spe'
    },
    'ica': {
        badge: 'Sede Pueblo Nuevo',
        title: 'Ica - Pueblo Nuevo',
        address: 'Calle 20 Mz M, Lotes 19, 20 y 21, Urb. Valle Esmeralda, Distrito de Pueblo Nuevo',
        mapUrl: 'https://maps.app.goo.gl/5RfGWYXHLqX3Zhwb8',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d21888.745778829158!2d-75.7244759042409!3d-14.111371905170484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA2JzI3LjIiUyA3NcKwNDInNTQuMiJX!5e0!3m2!1ses!2spe!4v1788240399822!5m2!1ses!2spe'
    },
    'lambayeque': {
        badge: 'Sede Olmos',
        title: 'Lambayeque - Olmos',
        address: 'Av Augusto B Leguía N° 190, Distrito Olmos',
        mapUrl: 'https://maps.app.goo.gl/Adqc457dxT7dMjDeA',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3968.0649818284896!2d-79.741687!3d-5.985791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNTknMDguOSJTIDc5wrA0NCczMC4xIlc!5e0!3m2!1ses!2spe!4v1788240270662!5m2!1ses!2spe'
    }
};

function changeSede(sede) {
    // Actualizar apariencia de los botones
    document.querySelectorAll('.sede-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-md');
        btn.classList.add('bg-surface', 'text-primary', 'border', 'border-outline-variant/30', 'shadow-sm', 'hover:bg-surface-variant');
    });
    const activeBtn = document.getElementById('btn-' + sede);
    activeBtn.classList.remove('bg-surface', 'text-primary', 'border', 'border-outline-variant/30', 'shadow-sm', 'hover:bg-surface-variant');
    activeBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-md');

    // Identificar el Iframe en lugar de la imagen
    const mapBadge = document.getElementById('map-badge');
    const mapIframe = document.getElementById('map-iframe');
    const vTitle = document.getElementById('visitanos-title');
    const vAddress = document.getElementById('visitanos-address');
    const dLink = document.getElementById('directions-link');

    mapIframe.style.opacity = '0';
    vTitle.style.opacity = '0';
    vAddress.style.opacity = '0';

    setTimeout(() => {
        mapBadge.textContent = sedesData[sede].badge;
        vTitle.textContent = sedesData[sede].title;
        vAddress.textContent = sedesData[sede].address;
        dLink.href = sedesData[sede].mapUrl; 
        mapIframe.src = sedesData[sede].embedUrl; // Inserta el mapa interactivo
        
        mapIframe.style.opacity = '1';
        vTitle.style.opacity = '1';
        vAddress.style.opacity = '1';
    }, 300);
}

function copyMapLink(e) {
    e.preventDefault();
    const link = document.getElementById('directions-link').href;
    
    navigator.clipboard.writeText(link).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast) {
            toast.classList.remove('opacity-0');
            toast.classList.add('opacity-100');
            setTimeout(() => {
                toast.classList.remove('opacity-100');
                toast.classList.add('opacity-0');
            }, 2500);
        }
    }).catch(err => console.error('Error:', err));
}


// --- FAQ Toggle (Contacto) ---
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.material-symbols-outlined');

    document.querySelectorAll('.faq-content').forEach(item => {
        if (item !== content) {
            item.style.maxHeight = '0';
            item.style.opacity = '0';
            item.previousElementSibling.querySelector('.material-symbols-outlined').style.transform = 'rotate(0deg)';
        }
    });

    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-content').forEach(content => {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
    });
});

// --- Form Handling (Contacto) ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = '¡Mensaje Enviado!';
            btn.classList.replace('bg-primary', 'bg-green-600');
            e.target.reset();
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('bg-green-600', 'bg-primary');
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
});

// --- Servicios: GSAP Animations (activated on SPA navigation) ---
window.__initServiciosAnimations = function () {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    var page = document.getElementById('page-servicios');
    if (!page) return;

    if (window.__serviciosAnimationsCtx && typeof window.__serviciosAnimationsCtx.revert === 'function') {
        window.__serviciosAnimationsCtx.revert();
    }

    var mm = gsap.matchMedia();
    window.__serviciosAnimationsCtx = mm;

    // Main scope: only run when the user has not requested reduced motion
    mm.add('(prefers-reduced-motion: no-preference)', function () {
        var hero = page.querySelector('.servicios-hero');
        if (hero) {
            gsap.from(hero.children, {
                y: 40,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.06,
                clearProps: 'all'
            });
        }

        var quicknav = page.querySelector('.servicios-quicknav');
        if (quicknav) {
            gsap.from(quicknav.children, {
                y: 30,
                autoAlpha: 0,
                duration: 0.2,
                ease: 'power2.out',
                stagger: 0.45,
                clearProps: 'all',
                scrollTrigger: { trigger: quicknav, start: 'top 85%', once: true }
            });
        }

        ['.presupuesto-cards', '.modalidades-cards'].forEach(function (selector) {
            var group = page.querySelector(selector);
            if (group) {
                gsap.from(group.children, {
                    y: 30,
                    autoAlpha: 0,
                    duration: 0.1,
                    ease: 'power2.out',
                    stagger: 0.5,
                    clearProps: 'all',
                    scrollTrigger: { trigger: group, start: 'top 85%', once: true }
                });
            }
        });

        var lists = page.querySelectorAll('#servicio-reforzamiento ul, #servicio-mivivienda ul');
        lists.forEach(function (ul) {
            gsap.from(ul.children, {
                y: 20,
                autoAlpha: 0,
                duration: 0.18,
                ease: 'power2.out',
                stagger: 0.05,
                clearProps: 'all',
                scrollTrigger: { trigger: ul, start: 'top 85%', once: true }
            });
        });

        page.querySelectorAll('[data-count]').forEach(function (el) {
            var target = parseFloat(el.getAttribute('data-count'));
            if (!isFinite(target)) return;
            var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            var prefix = el.getAttribute('data-prefix') || 'S/ ';
            var counter = { val: 0 };

            gsap.to(counter, {
                val: target,
                duration: 0.6,
                ease: 'power2.out',
                snap: { val: 1 / Math.pow(10, decimals) },
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                onUpdate: function () {
                    el.textContent = prefix + counter.val.toLocaleString('en-US', {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals
                    });
                }
            });
        });
    });

    // Parallax: desktop only (scrub), still respects reduced motion
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', function () {
        var heroBg = page.querySelector('.servicios-hero-bg-img');
        var hero = page.querySelector('.servicios-hero');
        if (heroBg && hero) {
            gsap.fromTo(heroBg, { yPercent: -5, scale: 1.15 }, {
                yPercent: 5,
                scale: 1.15,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    });

    ScrollTrigger.refresh();
};
