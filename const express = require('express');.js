const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login endpoint to receive form data
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // For demonstration purposes only; log email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Send a response back to the client
    res.send('Login information received');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
