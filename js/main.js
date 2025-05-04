window.addEventListener('load', function () {
    const totalCasesCtx = document.getElementById('totalCasesChart').getContext('2d');
    new Chart(totalCasesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Total Cases',
                data: [65, 59, 80, 81, 56, 85],
                borderColor: '#00F2B1',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const deathsCtx = document.getElementById('deathsChart').getContext('2d');
    new Chart(deathsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Deaths',
                data: [28, 48, 40, 19, 86, 27],
                borderColor: '#FF4B4B',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
fetch("https://disease.sh/v3/covid-19/all")
    .then((res) => res.json())
    .then((data) => {
        document.querySelectorAll(".global-cases").forEach(elem => elem.textContent = data.cases.toLocaleString());
        document.querySelectorAll(".global-deaths").forEach(elem => elem.textContent = data.deaths.toLocaleString());
        document.querySelectorAll(".global-recovered").forEach(elem => elem.textContent = data.recovered.toLocaleString());
    })
    .catch((err) => console.error("خطا در گرفتن آمار جهانی:", err));
