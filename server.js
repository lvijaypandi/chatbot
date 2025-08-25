const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! I am your chatbot.');
});

app.post('/chat', (req, res) => {
    const message = req.body.message;
    res.json({ reply: `You said: ${message}` });
});

app.listen(PORT, () => {
    console.log(`Chatbot running on port ${PORT}`);
});

