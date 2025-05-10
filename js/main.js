let totalCasesChart, deathsChart;

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

        if (totalCasesChart && deathsChart) {
            totalCasesChart.data.datasets[0].data = [data.cases];
            totalCasesChart.data.labels = ["Total Cases"];
            totalCasesChart.update();

            deathsChart.data.datasets[0].data = [data.deaths];
            deathsChart.data.labels = ["Total Deaths"];
            deathsChart.update();
        }

    } catch (err) {
        alert(`Failed to load data for ${country}`);
        console.error(err);
    }
}

async function populateCountryDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/countries");
        const countries = await res.json();

        countries.forEach(country => {
            const countryName = country.country;
            const countryCode = country.countryInfo.iso2 ? country.countryInfo.iso2.toLowerCase() : '';
            const countrySlug = country.country.toLowerCase().replace(/ /g, '-');

            const a = document.createElement("a");
            a.href = "#";
            a.dataset.country = countrySlug;
            a.dataset.flag = countryCode;
            a.textContent = countryName;
            dropdownMenu.appendChild(a);
        });

        document.querySelectorAll(".dropdown-content a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const country = this.dataset.country;
                const flagCode = this.dataset.flag;

                document.querySelector(".selected-country-name").textContent = country.toUpperCase();
                document.querySelector(".selected-flag").src = flagCode
                    ? `https://flagcdn.com/${flagCode}.svg`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/UN_flag.svg/320px-UN_flag.svg.png";

                load_statistics(country);
                dropdown.classList.remove("open");
            });
        });

    } catch (err) {
        console.error("Failed to fetch countries:", err);
    }
}

window.addEventListener('load', async () => {
    const totalCasesCtx = document.getElementById('totalCasesChart').getContext('2d');
    const deathsCtx = document.getElementById('deathsChart').getContext('2d');

    totalCasesChart = new Chart(totalCasesCtx, {
        type: 'bar',
        data: {
            labels: ["Total Cases"],
            datasets: [{
                label: 'Total Cases',
                data: [],
                backgroundColor: '#00F2B1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    deathsChart = new Chart(deathsCtx, {
        type: 'bar',
        data: {
            labels: ["Total Deaths"],
            datasets: [{
                label: 'Deaths',
                data: [],
                backgroundColor: '#FF4B4B'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    await load_statistics("usa");
    await populateCountryDropdown();
});

const toggle = document.getElementById("countryToggle");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
});

document.addEventListener("click", () => {
    dropdown.classList.remove("open");
});
