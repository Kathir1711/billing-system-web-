const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let bills = [];

// Get all bills
app.get('/bills', (req, res) => {
    res.json(bills);
});

// Add a new bill item
app.post('/bills', (req, res) => {
    const billItem = req.body;
    bills.push(billItem);
    res.status(201).json({ message: 'Item added to bill successfully!' });
});

// Delete an item from the bill
app.delete('/bills/:index', (req, res) => {
    const index = req.params.index;
    if (index < bills.length) {
        bills.splice(index, 1);
        res.json({ message: 'Item removed successfully!' });
    } else {
        res.status(404).json({ message: 'Item not found!' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
