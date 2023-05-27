 // Fetch data using .then
 fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
 .then(response => response.json())
 .then(data => {
   renderTable(data);
 })
 .catch(error => {
   console.error('Error:', error);
 });

// Fetch data using async/await
async function fetchData() {
 try {
   const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
   const data = await response.json();
   renderTable(data);
 } catch (error) {
   console.error('Error:', error);
 }
}
fetchData();

// Render table
function renderTable(data) {
 const tableBody = document.getElementById('coinTableBody');
 tableBody.innerHTML = '';
 data.forEach(coin => {
   const row = document.createElement('tr');
   row.innerHTML = `
     <td>${coin.name}</td>
     <td>${coin.id}</td>
     <td><img src="${coin.image}" width="25" height="25"></td>
     <td>${coin.symbol}</td>
     <td>${coin.current_price}</td>
     <td>${coin.total_volume}</td>
   `;
   tableBody.appendChild(row);
 });
}

// Search functionality
function search() {
 const input = document.getElementById('searchInput').value.toLowerCase();
 const rows = document.getElementById('coinTableBody').getElementsByTagName('tr');
 Array.from(rows).forEach(row => {
   const name = row.getElementsByTagName('td')[0].innerText.toLowerCase();
   if (name.includes(input)) {
     row.style.display = '';
   } else {
     row.style.display = 'none';
   }
 });
}

// Sort functionality
function sortDataBy(key) {
 const tableBody = document.getElementById('coinTableBody');
 const rows = Array.from(tableBody.getElementsByTagName('tr'));
 rows.sort((a, b) => {
   const valueA = a.getElementsByTagName('td')[keyMap[key]].innerText;
   const valueB = b.getElementsByTagName('td')[keyMap[key]].innerText;
 }
 )
}