require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => res.json({message: 'Funcionando!'}));

app.get('/clientes', async (req, res) => {
    const results = await db.obterUsuarios();
    return res.json(results)
});

app.get('/clientes/:id', async (req, res) => {
    const results = await db.obterUsuario(req.params.id);
    return res.json(results);
});

app.post('/clientes', async (req, res) => {
    await db.adcUsuarios(req.body);
    res.sendStatus(201);
})

app.listen(port);
console.log('API funcionando!');