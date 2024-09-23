import express from 'express';
import fs from 'fs/promises';
import { LoremIpsum } from 'lorem-ipsum';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const lorem = new LoremIpsum();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/generate', (req, res) => {
    const { count } = req.query;
    if (!count || isNaN(count)) {
        return res.status(400).send('Informe um número válido');
    }

    const paragraphs = Array.from({ length: parseInt(count, 10) }, () => lorem.generateParagraphs(1));
    res.json({ paragraphs });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// comando para rodar: npx nodemon server.js