// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    // Добавляем анимации для всех элементов с классом 'animate'
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

    // Анимация счетчиков
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        
        const updateCounter = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Анимация для частиц фона
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const animateParticle = () => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = 3000 + Math.random() * 3000;
            
            particle.style.transform = `translate(${x}vw, ${y}vh)`;
            particle.style.transition = `transform ${duration}ms linear`;
            
            setTimeout(animateParticle, duration);
        };
        animateParticle();
    });

    // Живой фон для hero секции
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = clientX / window.innerWidth;
        const y = clientY / window.innerHeight;
        
        hero.style.background = `linear-gradient(
            ${135 + x * 30}deg, 
            var(--gradient-start), 
            var(--gradient-end)
        )`;
    });

    // Анимация для карточек при наведении
    const cards = document.querySelectorAll('.service-card, .telegram-link, .review-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Анимация печатающегося текста
    const typeWriter = document.querySelector('.typewriter');
    if (typeWriter) {
        const text = typeWriter.innerText;
        typeWriter.innerText = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                typeWriter.innerText += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };
        type();
    }
});
