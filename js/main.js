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
    load_statistics();
    load_statistics_usa();
    load_statistics_china();
    load_statistics_brazil();
    load_statistics_spain();
})

async function load_statistics() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/all")
        const data = await res.json();

        set_content(".global-cases", data.cases.toLocaleString())
        set_content(".global-deaths", data.deaths.toLocaleString())
        set_content(".global-recovered", data.recovered.toLocaleString())
        set_content(".today-deaths", data.todayDeaths.toLocaleString())

    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}


async function load_statistics_usa() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/countries/usa")
        const data = await res.json();

        set_content(".global-cases-usa", data.cases.toLocaleString())
        set_content(".global-deaths-usa", data.deaths.toLocaleString())
        set_content(".global-recovered-usa", data.recovered.toLocaleString())
        set_content(".today-deaths-usa", data.todayDeaths.toLocaleString())

    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}


async function load_statistics_china() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/countries/china")
        const data = await res.json();

        set_content(".global-cases-china", data.cases.toLocaleString())
        set_content(".global-deaths-china", data.deaths.toLocaleString())
        set_content(".global-recovered-china", data.recovered.toLocaleString())
        set_content(".today-deaths-china", data.todayDeaths.toLocaleString())

    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}

async function load_statistics_brazil() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/countries/brazil")
        const data = await res.json();

        set_content(".global-cases-brazil", data.cases.toLocaleString())
        set_content(".global-deaths-brazil", data.deaths.toLocaleString())
        set_content(".global-recovered-brazil", data.recovered.toLocaleString())
        set_content(".today-deaths-brazil", data.todayDeaths.toLocaleString())

    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}

async function load_statistics_spain() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/countries/spain")
        const data = await res.json();

        set_content(".global-cases-spain", data.cases.toLocaleString())
        set_content(".global-deaths-spain", data.deaths.toLocaleString())
        set_content(".global-recovered-spain", data.recovered.toLocaleString())
        set_content(".today-deaths-spain", data.todayDeaths.toLocaleString())

    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}

// fetch('https://source.unsplash.com/800x600/?doctor')
//   .then(response => {
//     const img = document.createElement('img');
//     img.src = response.url;
//     document.body.appendChild(img);
//   });

const img = document.createElement('img');
img.src = 'https://source.unsplash.com/800x600/?female-doctor';
document.body.appendChild(img);
