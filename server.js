const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to My Node.js Web Service!" });
});

app.get('/api/data', (req, res) => {
    res.json({ id: 1, name: "Node.js API", status: "Running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
