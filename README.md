

#  Billing System

A simple billing system built using **HTML**, **CSS**, **Bootstrap**, **JavaScript**, and **Node.js** (backend). This system allows users to create a bill by adding items, quantities, and prices, while calculating total amounts, savings, and round-off values. It includes a print functionality and displays rotating quotes for customer engagement.

## Features

- Add multiple items with price and quantity.
- Calculate total bill dynamically.
- Show **bill number**, **date**, and **time**.
- Display **savings** (randomly generated) and calculate **round-off**.
- Print the bill with a simple click.
- Rotating motivational **quotes**.
- User-friendly interface with **Bootstrap** for responsive design.

## Technologies Used

### Frontend:
- **HTML**: Structure of the web page.
- **CSS**: Styling for the web page, including background image.
- **Bootstrap**: For a responsive and mobile-friendly layout.
- **JavaScript**: Handles dynamic interactions like adding items, calculating totals, and printing the bill.

### Backend (optional):
- **Node.js** with **Express**: A backend server to store and retrieve bill data (optional).
- **Body-Parser**: Middleware for parsing request bodies.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.

## Prerequisites

- **Node.js** (for backend functionality)
- Any modern **browser** (for frontend functionality)

## Installation and Setup

### 1. Clone the repository
```bash
git clone
https://github.com/Kathir1711/billing-system-web-/
cd billing system web
```

### 2. Backend Setup (Node.js)

To set up the backend (optional):

- Navigate to the backend directory:
  ```bash
  cd backend
  ```

- Install the required dependencies:
  ```bash
  npm install express body-parser cors
  ```

- Run the server:
  ```bash
  node server.js
  ```

The backend will run on `http://localhost:3000`. 
your local server

### 3. Frontend Setup

- Simply open the `index.html` file from the **frontend** folder in your browser:
  ```bash
  cd frontend
  open index.html  # For MacOS
  # Or manually double-click the file to open in your browser
  ```

### 4. Usage Instructions

- **Add items** by entering the item name, price, and quantity. Click "Add Item" to update the bill.
- The bill will dynamically display the **total amount**, **savings**, and **round-off** values.
- You can **remove items** from the bill by clicking the "Remove" button next to each item.
- Click the **"Print Bill"** button to generate a printable version of the bill.
- The system will display a random **motivational quote** that changes every 10 seconds.

## Project Structure

```
billing-system/
│
├── backend/                 # Backend code
│   ├── server.js            # Express server code
│   ├── package.json         # Dependencies and project configuration
│   └── package-lock.json    # Auto-generated dependency tree
│
├── frontend/                # Frontend code
│   ├── index.html           # Main HTML file
│   ├── styles.css           # Custom CSS styles
│   └── script.js            # JavaScript for dynamic functionality
│
└── README.md                # Documentation
```

## Future Improvements

- **Database Integration**: Add a database (e.g., MongoDB) to store bills permanently.
- **Discount and Tax Calculations**: Add advanced discount and tax calculations for items.
- **User Authentication**: Implement user login for saving billing history.
- **Mobile Optimization**: Further optimize the UI for mobile users.


---

## Screenshots

![image](https://github.com/user-attachments/assets/c71489f7-543b-46b5-844a-b4da692b49a2)
![image](https://github.com/user-attachments/assets/bd2b3af3-fb05-4e40-80b8-69b6b9dfdc36)
![image](https://github.com/user-attachments/assets/3794ca8f-f827-4833-9f29-defd746504ea)
![image](https://github.com/user-attachments/assets/39562e35-a47b-4d97-8036-3e0c28cdfc82)





---

