// Let's assume you have an array of moon phases for each day of the year
// This is just an example; you should replace it with your actual data
const moonPhases = [
    // Format: ['YYYY-MM-DD', 'Moon Phase']
    // Example for New Moon and First Quarter, replace with actual data
    ['2024-01-01', 'New Moon'],
    ['2024-01-08', 'First Quarter'],
    // Continue for the entire year...
];

// Function to create table rows
function createTableRow(dateRange, moonPhase) {
    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    const phaseCell = document.createElement('td');

    dateCell.textContent = dateRange;
    phaseCell.textContent = moonPhase;

    row.appendChild(dateCell);
    row.appendChild(phaseCell);
    tbody.appendChild(row);
}

// Function to populate the table for a specific month
function populateTable(monthId) {
    const monthSection = document.getElementById(monthId);
    const monthPhases = moonPhases.filter(phase => phase[0].includes(monthId));

    const tbody = monthSection.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows

    monthPhases.forEach(phase => {
        createTableRow(phase[0], phase[1]);
    });
}

// Populate tables for each month
populateTable('january');
populateTable('february');
// Add calls to populateTable for other months
