// 1. Анимация появления элементов при скролле
const animatedElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    root: null,
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hide');
        }
    });
}, observerOptions);

animatedElements.forEach(el => observer.observe(el));

// 2. Модальное окно контактов
const contactBtn = document.querySelector('.nav-link');
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.style.display = 'flex';
});

closeContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// 3. Смена тем (Красная -> Тёмная -> Неоновая)
const themeBtn = document.getElementById('themeToggle');
const themes = ['theme-red', 'theme-dark', 'theme-neon'];
let currentThemeIndex = 0;

themeBtn.addEventListener('click', () => {
    document.body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
});

// 4. Кнопка «Наверх»
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 5. Увеличение фото (Lightbox)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const zoomableImages = document.querySelectorAll('.zoomable');
const lightboxClose = document.querySelector('.lightbox-close');

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});