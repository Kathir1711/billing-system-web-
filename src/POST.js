fetch('http://localhost:3000/bills', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item, price, quantity, total }),
});
