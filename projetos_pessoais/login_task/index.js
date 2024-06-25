require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db');
const cors = require('cors');
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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
});

app.post('/users', cors(corsOptions), async(req, res) => {
    await db.addUser(req.body);
    res.sendStatus(200);
});

app.patch('/users/:email', async(req, res) => {
    await db.updateUser(req.params.email, req.body);
    res.sendStatus(200);
});

app.listen(port, () => {console.log('Server on!')});