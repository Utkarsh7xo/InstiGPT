const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
const users = [];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulated user authentication (replace with database query)
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        // User found, create a session (or token)
        const sessionId = Date.now().toString();
        user.sessionId = sessionId;

        res.status(200).json({ message: 'Login successful', sessionId });
    } else {
        res.status(401).json({ message: 'Login failed' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    const sessionId = req.body.sessionId;

    // Simulated logout (replace with actual session management)
    const user = users.find((u) => u.sessionId === sessionId);

    if (user) {
        // Clear the user's session (or token)
        user.sessionId = null;
        res.status(200).json({ message: 'Logout successful' });
    } else {
        res.status(401).json({ message: 'Logout failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  