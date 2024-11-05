const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'front_nebul.html'));
});

const apiKey = 'sk-cA7PpTJdkwX1tMW6H7zj7LsTTD_EHqzKBGWZD10m5lT3BlbkFJArUb7uCWYhmduTAHhiv-PWIhifIX65pblvRlS5Px4A';

app.post('/chatgpt', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: userMessage }],
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de OpenAI');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al comunicarse con la API de OpenAI:', error);
        res.status(500).json({ error: 'Error al obtener la respuesta de la IA.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});