
const countryData = [
    {
        country: 'USA',
        totalCases: '10,527,456',
        death: '2,767,897',
        recovered: '8,567,754',
        rank: '1',
        tracking: 'IN335942'
    },
    {
        country: 'CHINA',
        totalCases: '8,627,456',
        death: '2,232,876',
        recovered: '6,231,875',
        rank: '2',
        tracking: 'IN335942'
    },
    {
        country: 'INDIA',
        totalCases: '4,623,787',
        death: '1,795,752',
        recovered: '3,756,771',
        rank: '3',
        tracking: 'IN335942'
    },
    {
        country: 'BRAZIL',
        totalCases: '2,532,428',
        death: '1,478,564',
        recovered: '1,746,781',
        rank: '4',
        tracking: 'IN335942'
    },
    {
        country: 'MEXICO',
        totalCases: '2,221,533',
        death: '1,545,076',
        recovered: '1,577,198',
        rank: '5',
        tracking: 'IN335942'
    },
    {
        country: 'IRAN',
        totalCases: '1,783,874',
        death: '1,156,871',
        recovered: '1,582,812',
        rank: '6',
        tracking: 'IN335942'
    },
    {
        country: 'CANADA',
        totalCases: '1,234,123',
        death: '1,185,456',
        recovered: '1,876,321',
        rank: '7',
        tracking: 'IN335942'
    }
];

const createCharts = () => {
    console.log('Charts would be initialized here');
}; 

window.addEventListener('load', function() {
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