require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "it's working!"});
});

app.get('/users', async(req, res) => {
    const results = await db.getUsers();
    res.json(results);
});

app.get('/users/:id', async(req, res) => {
    const results = await db.getUser(req.params.id);
    res.json(results);
});

app.get('/g', async(req, res) => {
    const resu = await db.getGreatestId();
    res.json(resu);
})

app.post('/users', async(req, res) => {
    await db.addUser(req.body);
    res.sendStatus(201);
});

app.patch('/users/:id', async(req, res) => {
    await db.updateUser(req.params.id, req.body);
    res.sendStatus(200);
});

app.listen(port, () => {console.log('Server on!')});