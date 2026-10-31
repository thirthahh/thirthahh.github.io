/* =========================================
   RESET & VARIABLES
   ========================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent-color: #3b82f6;
    --accent-hover: #2563eb;
    --border-color: #334155;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
    /* Background glow effect */
    background-image: radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.08), transparent 25%),
                      radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.08), transparent 25%);
    background-attachment: fixed;
}

/* =========================================
   NAVIGATION
   ========================================= */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}

.nav-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
    text-decoration: none;
    letter-spacing: 1px;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    margin-left: 24px;
    font-weight: 400;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-color);
}

/* =========================================
   GLOBAL LAYOUT & TYPOGRAPHY
   ========================================= */
section {
    padding: 100px 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--accent-color);
    margin: 12px auto 0;
    border-radius: 2px;
}

.highlight {
    color: var(--accent-color);
}

/* =========================================
   BUTTONS
   ========================================= */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn.primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn.primary:hover {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}

.btn.secondary {
    background-color: transparent;
    color: var(--text-main);
    border: 1px solid var(--border-color);
}

.btn.secondary:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-2px);
}

.btn-small {
    padding: 8px 16px;
    font-size: 0.9rem;
}

/* =========================================
   HERO SECTION
   ========================================= */
#hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 80px;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -1px;
}

.hero-content h2 {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--text-muted);
    margin-bottom: 24px;
}

.hero-content p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 40px;
    color: var(--text-muted);
}

.hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
}

/* =========================================
   ABOUT SECTION
   ========================================= */
#about {
    text-align: center;
}

.about-content p {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 750px;
    margin: 0 auto 20px;
}

/* =========================================
   PROJECTS SECTION
   ========================================= */
.project-card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 40px;
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(59, 130, 246, 0.5);
}

.project-image-placeholder {
    flex: 1;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8));
    backdrop-filter: blur(10px);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: var(--accent-color);
    border: 1px solid rgba(59, 130, 246, 0.3);
    min-height: 250px;
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
    box-shadow: inset 0 0 30px rgba(59, 130, 246, 0.1);
    transition: all 0.4s ease;
}

.project-card:hover .project-image-placeholder {
    box-shadow: inset 0 0 50px rgba(59, 130, 246, 0.2);
    transform: scale(1.02);
}

/* Image styling for Projects (when you add screenshots later) */
.project-image-wrapper {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    min-height: 250px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background-color: var(--card-bg);
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-card:hover .project-img {
    transform: scale(1.05);
}

.project-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-info h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
}

.project-info p {
    color: var(--text-muted);
    margin-bottom: 24px;
    font-size: 1.05rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
}

.tech-stack span {
    background-color: rgba(59, 130, 246, 0.1);
    color: var(--accent-color);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-links {
    display: flex;
    gap: 16px;
}

/* =========================================
   SKILLS SECTION
   ========================================= */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.skill-category {
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.skill-category h3 {
    margin-bottom: 20px;
    color: var(--accent-color);
    font-size: 1.2rem;
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    color: var(--text-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-category li::before {
    content: '▹';
    color: var(--accent-color);
    font-weight: bold;
}

/* =========================================
   CERTIFICATIONS SECTION
   ========================================= */
#certifications {
    text-align: center;
}

.cert-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.cert-item {
    background-color: var(--card-bg);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    text-align: left;
    transition: transform 0.3s ease;
}

.cert-item:hover {
    transform: translateY(-3px);
    border-color: var(--accent-color);
}

.cert-item h4 {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 8px;
    line-height: 1.4;
}

.cert-item p {
    color: var(--accent-color);
    font-size: 0.9rem;
    font-weight: 600;
}

/* =========================================
   CONTACT SECTION
   ========================================= */
#contact {
    text-align: center;
    padding-bottom: 120px;
}

#contact p {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 40px;
}

.contact-links {
    display: flex;
    gap: 20px;
    justify-content: center;
}

/* =========================================
   FOOTER
   ========================================= */
footer {
    text-align: center;
    padding: 30px;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* =========================================
   ANIMATIONS & RESPONSIVE
   ========================================= */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .hero-content h1 { font-size: 2.8rem; }
    .hero-content h2 { font-size: 1.3rem; }
    .project-card { flex-direction: column; padding: 24px; }
    .skills-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; } 
    .hero-buttons, .contact-links { flex-direction: column; }
    .project-links { flex-direction: column; }
    .cert-list { grid-template-columns: 1fr; }
}
