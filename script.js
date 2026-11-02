// 1. Initialize Smooth Scrolling (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Handle anchor links with smooth scroll
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) lenis.scrollTo(target);
    });
});

// 2. Scroll Reveal Animations (Intersection Observer)
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
});

// 3. Magnetic Buttons
const magneticBtns = document.querySelectorAll('.magnetic-btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// 4. Custom Target Cursor Logic
const cursorRing = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

// Track actual mouse position
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instantly move the small dot
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

// Animate the larger ring with a slight delay (smooth follow)
function animateCursor() {
    // Calculate easing (how fast the ring catches up to the dot)
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Add hover effects when pointing at clickable things
const clickables = document.querySelectorAll('a, button, .project-card, .about-box');

clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovering');
        cursorDot.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovering');
        cursorDot.classList.remove('hovering');
    });
});
