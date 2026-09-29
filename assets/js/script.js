// 1. Gráfico de Habilidades (Chart.js)
const ctxSkills = document.getElementById('skillsChart').getContext('2d');
new Chart(ctxSkills, {
    type: 'radar',
    data: {
        labels: ['Java', 'Kotlin', 'Ruby', 'PHP', 'HTML/CSS', 'JavaScript', 'Spring Boot', 'Python', 'PostgreSQL'],
        datasets: [{
            label: 'Nivel Técnico',
            data: [90, 85, 60, 65, 80, 75, 80, 75, 70],
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
new Chart(ctxImpact, {
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