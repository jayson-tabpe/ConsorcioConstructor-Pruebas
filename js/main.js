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
