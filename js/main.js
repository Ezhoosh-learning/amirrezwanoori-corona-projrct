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

function set_content(tag, data) {
    document.querySelectorAll(tag).forEach(e => e.textContent = data)
}

window.addEventListener("load", () => {
    const countries = ["all", "usa", "china", "brazil", "spain"];
    countries.forEach(load_statistics);
});

async function load_statistics(country) {
    const url = country === "all"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${country}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const suffix = country === "all" ? "" : `-${country}`;

        set_content(`.global-cases${suffix}`, data.cases.toLocaleString());
        set_content(`.global-deaths${suffix}`, data.deaths.toLocaleString());
        set_content(`.global-recovered${suffix}`, data.recovered.toLocaleString());
        set_content(`.today-deaths${suffix}`, data.todayDeaths.toLocaleString());
    } catch (err) {
        alert(`Load statistics failed for ${country}`);
        console.error(err);
    }
}



