require("dotenv").config();

const express = require('express');
const app = express();
const porta = process.env.PORT;
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'funcionando!'});
});

app.get('/usuarios', async(req, res) => {
    const results = await db.obterUsuarios();
    res.json(results);
});

app.get('/usuarios/:id', async(req, res) => {
    const results = await db.obterUsuario(req.params.id);
    res.json(results);
});

app.delete('/usuarios/:id', async(req, res) => {
    await db.deletarUsuario(req.params.id);
    res.sendStatus(204);
});

app.post('/usuarios', async(req, res) => {
    await db.adcUsuario(req.body);
    res.sendStatus(201);
});

app.patch('/usuarios/:id', async(req, res) => {
    await db.updateUsuario(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(porta, () => {console.log('Server on')});