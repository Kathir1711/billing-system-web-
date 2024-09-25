document.addEventListener('DOMContentLoaded', () => {
    const billTable = document.querySelector('#billTable tbody');
    const totalAmount = document.getElementById('totalAmount');
    const roundOffTotal = document.getElementById('roundOffTotal');
    const savingsElement = document.getElementById('savings');
    const quoteElement = document.getElementById('quote');
    let items = [];

    
    const currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString();
    document.getElementById('currentTime').textContent = currentDate.toLocaleTimeString();
    document.getElementById('billNo').textContent = 'SMK-' + Math.floor(Math.random() * 1000000);

    
    const quotes = [
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "Opportunities don't happen, you create them.",
        "Don't watch the clock; do what it does. Keep going.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Great things never come from comfort zones."
    ];

    
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById('addItem').addEventListener('click', () => {
        const item = document.getElementById('item').value;
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseInt(document.getElementById('quantity').value);

        if (item && price > 0 && quantity > 0) {
            const total = price * quantity;
            items.push({ item, price, quantity, total });
            updateTable();
        }
    });

    function updateTable() {
        billTable.innerHTML = '';
        let totalBill = 0;

        items.forEach((item, index) => {
            const row = `
                <tr>
                    <td>${item.item}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>${item.total.toFixed(2)}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
                </tr>
            `;
            billTable.innerHTML += row;
            totalBill += item.total;
        });

        
        const savings = totalBill * 0.1;
        savingsElement.textContent = savings.toFixed(2);

        
        totalAmount.textContent = totalBill.toFixed(2);
        roundOffTotal.textContent = Math.round(totalBill - savings);
    }

    window.removeItem = function(index) {
        items.splice(index, 1);
        updateTable();
    };
});
