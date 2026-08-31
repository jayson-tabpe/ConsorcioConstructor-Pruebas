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
        badge: 'Sede Carabayllo',
        title: 'Lima - Carabayllo',
        address: 'Av. Peruirbana Mz. W Lt10, Condominio Villa Club 3, Carabayllo',
        mapUrl: 'https://maps.app.goo.gl/ubsK8wAFer7M6KZG7',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBANzZZvC4n8OPcTNIpVVUuQlH2wzv6zMAzByb-BVCwqwsYcVPPVfX6Jqz--ppvEfB0ZvnMrFGP7Gnm5rNHuRmJ-e9HGvfKFSGgjYeJVYA9RXivzb0e7DUhkIsZYCgy_OLvbU-SXjMF7zQMNZFXyS9Y3nIgTzEsez5MjFuWjWYZKDWzMllUxkzyvMZkyNf3nqmUbbR0JP_YZxK7tPZ7cArrfrCe3I4x4rmcmiTE7Z5ZX-cBUc_j8gbL'
    },
    'ica': {
        badge: 'Sede Pueblo Nuevo',
        title: 'Ica - Pueblo Nuevo',
        address: 'Calle 20 Mz M, Lotes 19, 20 y 21, Urb. Valle Esmeralda, Distrito de Pueblo Nuevo',
        mapUrl: 'https://maps.app.goo.gl/ubsK8wAFer7M6KZG7', // <-- Reemplazar
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBANzZZvC4n8OPcTNIpVVUuQlH2wzv6zMAzByb-BVCwqwsYcVPPVfX6Jqz--ppvEfB0ZvnMrFGP7Gnm5rNHuRmJ-e9HGvfKFSGgjYeJVYA9RXivzb0e7DUhkIsZYCgy_OLvbU-SXjMF7zQMNZFXyS9Y3nIgTzEsez5MjFuWjWYZKDWzMllUxkzyvMZkyNf3nqmUbbR0JP_YZxK7tPZ7cArrfrCe3I4x4rmcmiTE7Z5ZX-cBUc_j8gbL' // <-- Reemplaza por imagen Ica
    },
    'lambayeque': {
        badge: 'Sede Olmos',
        title: 'Lambayeque - Olmos',
        address: 'Av Augusto B Leguía N° 190, Distrito Olmos',
        mapUrl: 'https://maps.app.goo.gl/ubsK8wAFer7M6KZG7', // <-- Reemplazar
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBANzZZvC4n8OPcTNIpVVUuQlH2wzv6zMAzByb-BVCwqwsYcVPPVfX6Jqz--ppvEfB0ZvnMrFGP7Gnm5rNHuRmJ-e9HGvfKFSGgjYeJVYA9RXivzb0e7DUhkIsZYCgy_OLvbU-SXjMF7zQMNZFXyS9Y3nIgTzEsez5MjFuWjWYZKDWzMllUxkzyvMZkyNf3nqmUbbR0JP_YZxK7tPZ7cArrfrCe3I4x4rmcmiTE7Z5ZX-cBUc_j8gbL' // <-- Reemplaza por imagen Lambayeque
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

    // Preparar elementos para animación
    const mapBadge = document.getElementById('map-badge');
    const mapImg = document.getElementById('map-image');
    const vTitle = document.getElementById('visitanos-title');
    const vAddress = document.getElementById('visitanos-address');
    const dLink = document.getElementById('directions-link');

    mapImg.style.opacity = '0';
    vTitle.style.opacity = '0';
    vAddress.style.opacity = '0';

    // Intercambiar datos con efecto fade
    setTimeout(() => {
        mapBadge.textContent = sedesData[sede].badge;
        vTitle.textContent = sedesData[sede].title;
        vAddress.textContent = sedesData[sede].address;
        dLink.href = sedesData[sede].mapUrl; 
        mapImg.src = sedesData[sede].image; 
        
        mapImg.style.opacity = '1';
        vTitle.style.opacity = '1';
        vAddress.style.opacity = '1';
    }, 300);
}

// Función para copiar enlace al portapapeles
function copyMapLink(e) {
    e.preventDefault();
    const link = document.getElementById('directions-link').href;
    
    navigator.clipboard.writeText(link).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast) {
            // Mostrar notificación
            toast.classList.remove('opacity-0');
            toast.classList.add('opacity-100');
            
            // Ocultar automáticamente después de 2.5 segundos
            setTimeout(() => {
                toast.classList.remove('opacity-100');
                toast.classList.add('opacity-0');
            }, 2500);
        }
    }).catch(err => {
        console.error('Error al copiar el enlace: ', err);
    });
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
