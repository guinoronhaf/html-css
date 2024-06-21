require ("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({message: 'Funcionando!'}));

app.listen(port, () => {console.log('Server on')});

/////////////////////

const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

const obterUsuarios = async() => {
    const query = 
};