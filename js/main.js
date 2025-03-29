// Sample data for the table
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

// Populate table with data
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('tbody');
    
    countryData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <img src="images/${data.country.toLowerCase()}-flag.png" alt="${data.country}" style="width: 24px; height: 24px; border-radius: 50%;">
                    ${data.country}
                </div>
            </td>
            <td>${data.totalCases}</td>
            <td>${data.death}</td>
            <td>${data.recovered}</td>
            <td>${data.rank}</td>
            <td>${data.tracking}</td>
            <td>
                <button style="background: none; border: none; cursor: pointer;">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Add click events for filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Filter functionality will be implemented here');
        });
    });

    // Add click event for country select
    const countrySelect = document.querySelector('.country-select');
    if (countrySelect) {
        countrySelect.addEventListener('click', () => {
            alert('Country selection will be implemented here');
        });
    }

    // Add click event for date select
    const dateSelect = document.querySelector('.date-select');
    if (dateSelect) {
        dateSelect.addEventListener('click', () => {
            alert('Date selection will be implemented here');
        });
    }

    // Add click event for see more button
    const seeMoreBtn = document.querySelector('.see-more');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            alert('More data will be loaded here');
        });
    }
});

// Placeholder for chart functionality
// In a real application, you would use a charting library like Chart.js
const createCharts = () => {
    // Implementation for charts would go here
    console.log('Charts would be initialized here');
}; 