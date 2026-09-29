// 1. Gráfico de Habilidades (Chart.js)
const ctxSkills = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctxSkills, {
    type: 'radar',
    data: {
        labels: ['Java', 'Kotlin', 'Ruby', 'PHP', 'HTML/CSS', 'JavaScript', 'Spring Boot', 'Python', 'PostgreSQL', 'Git/Docker'],
        datasets: [{
            label: 'Nivel Técnico',
            data: [90, 85, 60, 65, 80, 75, 80, 75, 70, 70],
            backgroundColor: 'rgba(13, 202, 240, 0.35)',
            borderColor: '#35d6ff',
            borderWidth: 3,
            pointBackgroundColor: '#0d6efd',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                min: 0,
                max: 100,
                beginAtZero: true,
                angleLines: { color: 'rgba(255,255,255,0.1)' },
                grid: { color: 'rgba(255,255,255,0.1)' },
                pointLabels: {
                    color: '#f8fafc',
                    font: { size: 13, weight: 'bold' }
                },
                ticks: {
                    display: true,
                    stepSize: 20,
                    color: '#adb5bd',
                    backdropColor: 'transparent',
                    font: { size: 10 }
                }
            }
        },
        plugins: {
            legend: { labels: { color: '#f8fafc' } }
        }
    }
});

// 2. Gráfico de Impacto Caso de Estudio (Chart.js)
const ctxImpact = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(ctxImpact, {
    type: 'bar',
    data: {
        labels: ['Antes', 'Después'],
        datasets: [{
            label: 'Tiempo de Consulta (ms)',
            data: [450, 290],
            backgroundColor: ['#dc3545', '#0dcaf0'],
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Optimización de Consultas SQL (ms)', color: '#f8fafc' }
        },
        scales: {
            y: { ticks: { color: '#adb5bd' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#adb5bd' }, grid: { display: false } }
        }
    }
});

// 3. Selector de idioma con preferencia persistente
const translations = {
    'Inicio': 'Home',
    'Sobre Mí': 'About Me',
    'Proyectos': 'Projects',
    'Empresa Objetivo': 'Target Company',
    'FODA': 'SWOT',
    'Caso de Estudio': 'Case Study',
    'Contacto': 'Contact',
    'Seleccionar idioma': 'Select language',
    'Desarrollador Full-Stack | Backend': 'Full-Stack | Backend Developer',
    'Contactar': 'Contact Me',
    'Descargar CV': 'Download CV',
    'Ver Repositorios': 'View Repositories',
    'Perfil profesional y fortalezas técnicas': 'Professional Profile and Technical Strengths',
    'Conoce mi experiencia, las tecnologías que domino y las herramientas que utilizo para crear soluciones eficientes.': 'Explore my experience, the technologies I use, and the tools I rely on to build efficient solutions.',
    'Experiencia profesional': 'Professional Experience',
    'Formación tecnológica': 'Technical Education',
    'Certificaciones': 'Certifications',
    'Idiomas': 'Languages',
    'Lenguajes': 'Languages',
    'Frameworks': 'Frameworks',
    'Bases de Datos': 'Databases',
    'Herramientas': 'Tools',
    'Dominio Técnico': 'Technical Proficiency',
    'Proyectos Destacados': 'Featured Projects',
    'Acceso directo a mis repositorios de código en GitHub.': 'Direct access to my code repositories on GitHub.',
    'Ver Repositorio': 'View Repository',
    'Explorar Todos mis Repositorios en GitHub': 'Explore All My GitHub Repositories',
    'Caso de Estudio Técnico': 'Technical Case Study',
    'Evaluación Rúbrica': 'Assessment Rubric',
    'Contacto': 'Contact',
    'Ponte en contacto para oportunidades laborales.': 'Get in touch for professional opportunities.',
    'Repositorios GitHub': 'GitHub Repositories',
    'Justificación de Selección': 'Selection Rationale',
    'Métricas de Impacto Logradas': 'Impact Metrics Achieved',
    'Especialidad: Backend & Bases de Datos': 'Specialty: Backend & Databases',
    'Resumen profesional': 'Professional Summary',
    'Experiencia laboral': 'Work Experience',
    'Habilidades técnicas': 'Technical Skills',
    'Proyectos': 'Projects',
    'Educación y certificaciones': 'Education and Certifications',
    'Español nativo': 'Native Spanish',
    'Inglés intermedio (B1)': 'Intermediate English (B1)',
    'Desarrollador Full-Stack con experiencia en Java, Python, JavaScript, Kotlin, Ruby on Rails y PHP.': 'Full-Stack Developer with experience in Java, Python, JavaScript, Kotlin, Ruby on Rails, and PHP.',
    'Desarrollador Full-Stack y Backend con experiencia en Ruby on Rails, Python, Java y JavaScript, enfocado en aplicaciones escalables, lógica de negocio, diseño de sistemas y desarrollo Android.': 'Full-Stack and Backend Developer experienced in Ruby on Rails, Python, Java, and JavaScript, focused on scalable applications, business logic, system design, and Android development.',
    'Con una sólida formación en gastronomía y una serie de certificaciones y cursos en desarrollo web y tecnología de la información, busco oportunidades para aplicar mis habilidades como desarrollador Front-End. Soy proactivo, autodidacta y estoy siempre dispuesto a fortalecer mis conocimientos técnicos y mi capacidad para resolver problemas.': 'With a strong background in gastronomy and several certifications and courses in web development and information technology, I am looking for opportunities to apply my skills as a Front-End Developer. I am proactive, self-taught, and always committed to strengthening my technical knowledge and problem-solving skills.',
    'Desarrollador Full Stack en Ziemax Ediciones Ltda.': 'Full-Stack Developer at Ziemax Ediciones Ltda.',
    'julio a diciembre de 2024': 'July to December 2024',
    'Participación en la migración de bases de datos y desarrollo de buscadores y gestores de contenido con PHP, JSON y desarrollo web.': 'Participated in database migration and developed search tools and content management features with PHP, JSON, and web technologies.',
    'Diseño y ejecución de migraciones de bases de datos.': 'Designed and executed database migrations.',
    'Optimización del rendimiento y resolución de cuellos de botella.': 'Optimized performance and resolved bottlenecks.',
    'Creación de buscadores y gestores de contenido con PHP y JSON.': 'Created search tools and content management features with PHP and JSON.',
    'Documentación técnica y colaboración con equipos multidisciplinarios.': 'Created technical documentation and collaborated with cross-functional teams.',
    'Android Trainee': 'Android Trainee',
    'Full-Stack Python': 'Full-Stack Python',
    'Ruby on Rails para emprendimientos': 'Ruby on Rails for Startups',
    'Java y Front End': 'Java and Front End',
    'Fundamentos de programación': 'Programming Fundamentals',
    'Técnico de Nivel Superior en Gastronomía': 'Higher Technical Degree in Gastronomy',
    'Programación en Java, JavaScript, Ruby, PHP, Kotlin, HTML5, CSS3': 'Java, JavaScript, Ruby, PHP, Kotlin, HTML5, CSS3',
    'Desarrollador Full-Stack | Desarrollador Backend': 'Full-Stack Developer | Backend Developer',
    'Sistema web de gestión académica con roles de usuario, operaciones CRUD, API REST y autenticación segura.': 'Academic management web system with user roles, CRUD operations, a REST API, and secure authentication.',
    'Aplicación web para administrar libros, consultar el catálogo y controlar el inventario mediante una arquitectura MVC.': 'Web application for managing books, browsing the catalog, and controlling inventory through an MVC architecture.',
    'Gestor de tareas por consola para crear, listar, completar y eliminar tareas normales o urgentes.': 'Console task manager for creating, listing, completing, and deleting regular or urgent tasks.',
    'App Android para restaurantes con recomendaciones musicales, playlist compartida y menú administrable desde Firebase.': 'Android app for restaurants with music recommendations, shared playlists, and a Firebase-managed menu.',
    'Billetera digital responsive para gestionar saldo, depósitos, contactos e historial de movimientos en pesos chilenos.': 'Responsive digital wallet for managing balances, deposits, contacts, and transaction history in Chilean pesos.',
    'Sistema desarrollado en Java para gestionar procesos organizacionales con arquitectura modular y lógica de negocio mantenible.': 'Java system for managing organizational processes with modular architecture and maintainable business logic.',
    'Aplicación Java para gestionar prevención de riesgos mediante encapsulación, herencia y componentes escalables.': 'Java application for risk prevention management using encapsulation, inheritance, and scalable components.',
    'Migración y Optimización de Consultas en Base de Datos Relacional': 'Relational Database Migration and Query Optimization',
    'Especialidad: Backend & Bases de Datos': 'Specialty: Backend & Databases',
    'Descripción': 'Description',
    'Desafío': 'Challenge',
    'Solución': 'Solution',
    'Aprendizajes': 'Key Learnings',
    'Habilidades': 'Skills',
    'Herramientas': 'Tools',
    'Rediseño del esquema de BD para mejorar eficiencia de consultas y escalabilidad.': 'Redesigned the database schema to improve query efficiency and scalability.',
    'Consultas lentas y riesgo de pérdida de datos durante la migración corporativa.': 'Slow queries and risk of data loss during the corporate migration.',
    'Indización estratégica en PostgreSQL y scripts con control de transacciones en Python.': 'Strategic PostgreSQL indexing and Python scripts with transaction control.',
    'Python, PostgreSQL, Linux.': 'Python, PostgreSQL, Linux.',
    'Gestión de transacciones complejas en SQL y optimización de cuellos de botella.': 'Complex SQL transaction management and bottleneck optimization.',
    'Optimización SQL, Diseño de Arquitectura y Diagnóstico de Métricas.': 'SQL optimization, architecture design, and metric analysis.',
    'Tiempos de respuesta en consultas SQL': 'SQL query response times',
    'Integridad de datos mantenida': 'Data integrity maintained',
    'Elegí este proyecto porque demuestra de manera directa mi habilidad para diagnosticar problemas de rendimiento backend y ejecutar soluciones con métricas de impacto reales y medibles.': 'I chose this project because it directly demonstrates my ability to diagnose backend performance issues and deliver solutions with measurable impact metrics.',
    'Ponte en contacto para oportunidades laborales.': 'Get in touch for professional opportunities.',
    'Antonio Badilla - Portafolio Profesional IT': 'Antonio Badilla - Professional IT Portfolio'
};

const chartLabels = {
    es: {
        skills: ['Java', 'Kotlin', 'Ruby', 'PHP', 'HTML/CSS', 'JavaScript', 'Spring Boot', 'Python', 'PostgreSQL', 'Git/Docker'],
        impact: ['Roles de acceso', 'Recursos CRUD'],
        impactTitle: 'Componentes funcionales implementados'
    },
    en: {
        skills: ['Java', 'Kotlin', 'Ruby', 'PHP', 'HTML/CSS', 'JavaScript', 'Spring Boot', 'Python', 'PostgreSQL', 'Git/Docker'],
        impact: ['Access roles', 'CRUD resources'],
        impactTitle: 'Implemented functional components'
    }
};

const cvDownloads = {
    es: { href: './assets/CV-Antonio-Badilla.pdf', filename: 'CV-Antonio-Badilla.pdf' },
    en: { href: './assets/CV-Antonio-Badilla-en.pdf', filename: 'CV-Antonio-Badilla-en.pdf' }
};

function updateCvDownloads(language) {
    const cv = cvDownloads[language];
    ['downloadCvHero', 'downloadCvContact'].forEach((id) => {
        const link = document.getElementById(id);
        link.href = cv.href;
        link.download = cv.filename;
    });
}

function translatePage(language) {
    document.querySelectorAll('body *').forEach((element) => {
        element.childNodes.forEach((node) => {
            if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) {
                return;
            }

            if (!node.originalText) {
                node.originalText = node.nodeValue;
            }

            const originalText = node.originalText.trim();
            const translatedText = language === 'en' ? translations[originalText] : originalText;
            if (translatedText) {
                node.nodeValue = node.originalText.replace(originalText, translatedText);
            }
        });
    });

    document.querySelectorAll('[data-en]').forEach((element) => {
        if (!element.dataset.es) {
            element.dataset.es = element.textContent;
        }
        element.textContent = language === 'en' ? element.dataset.en : element.dataset.es;
    });

    skillsChart.data.labels = chartLabels[language].skills;
    impactChart.data.labels = chartLabels[language].impact;
    impactChart.options.plugins.title.text = chartLabels[language].impactTitle;
    const typingGreeting = document.getElementById('typingGreeting');
    const greeting = language === 'en' ? "Hello, I'm Antonio Badilla" : 'Hola, soy Antonio Badilla';
    typingGreeting.src = `https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=34DC5F&width=387&height=40&lines=${encodeURIComponent(greeting)}`;
    typingGreeting.alt = greeting;
    skillsChart.update();
    impactChart.update();
    updateCvDownloads(language);
    document.documentElement.lang = language;
    languageSelector.setAttribute('aria-label', language === 'en' ? 'Select language' : 'Seleccionar idioma');
}

const languageSelector = document.getElementById('languageSelector');
const savedLanguage = localStorage.getItem('portfolio-language');
const preferredLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');
languageSelector.value = preferredLanguage;
translatePage(preferredLanguage);

languageSelector.addEventListener('change', (event) => {
    const language = event.target.value;
    localStorage.setItem('portfolio-language', language);
    translatePage(language);
});