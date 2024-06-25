const mysql = require('mysql2/promise');
const client = mysql.createPool(process.env.CONNECTION_STRING);

const getUsers = async() => {
    const res = await client.query('SELECT * FROM usuarios');
    return res[0];
};

const getUser = async(id) => {
    const res = await client.query('SELECT * FROM usuarios WHERE i_id_usuarios=?', [id]);
    return res[0];
};

const getGreatestId = async() => {
    const res = await client.query('SELECT max(i_id_usuarios) as max FROM usuarios');
    return Object.values(res[0][0])[0];
};

const addUser = async(user) => {
    const sql = 'INSERT INTO usuarios VALUES (?, ?, ?, ?, ?)';
    const values = [await getGreatestId()+1, user.name, user.email, user.password, user.date];
    await client.query(sql, values);
};

const updateUser = async(email, user) => {
    const sql = 'UPDATE usuarios SET s_senha_usuarios=? WHERE s_email_usuarios=?';
    const values = [user.password, email];
    await client.query(sql, values);
};

module.exports = {getUsers, getUser, getGreatestId, addUser, updateUser};
