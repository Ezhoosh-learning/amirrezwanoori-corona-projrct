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
    document.querySelectorAll(tag).forEach(e => e.textContent = data);
}

async function load_statistics(country) {
    const url = country === "all"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${country}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        set_content(".global-cases", data.cases.toLocaleString());
        set_content(".global-deaths", data.deaths.toLocaleString());
        set_content(".global-recovered", data.recovered.toLocaleString());
        set_content(".today-deaths", data.todayDeaths.toLocaleString());
        
    } catch (err) {
        alert(`Failed to load data for ${country}`);
        console.error(err);
    }
}

window.addEventListener("load", () => {
    load_statistics("usa");
});

document.querySelectorAll(".dropdown-content a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const country = this.dataset.country;
        const flagCode = this.dataset.flag;

        document.querySelector(".selected-country-name").textContent = country.toUpperCase();

        const flagUrl = flagCode === "un"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/UN_flag.svg/320px-UN_flag.svg.png"
            : `https://flagcdn.com/${flagCode}.svg`;

        document.querySelector(".selected-flag").src = flagUrl;

        load_statistics(country);

        document.querySelector(".country-select").addEventListener("click", () => {
            const dropdown = document.querySelector(".dropdown-content");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });
    });
    
});



