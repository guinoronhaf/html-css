const mysql = require('mysql2/promise');
const client = mysql.createPool(process.env.CONNECTION_STRING);

const obterUsuarios = async() => {
    const res = await client.query('SELECT * FROM usuarios');
    return res[0];
};

const obterUsuario = async(id) => {
    const res = await client.query('SELECT * FROM usuarios WHERE i_id_usuarios=?', [id]);
    return res[0];
};

const deletarUsuario = async(id) => {
    return await client.query('DELETE FROM usuarios WHERE i_id_usuarios=?', [id]);
};

const adcUsuario = async(user) => {
    const sql = 'INSERT INTO usuarios (s_nome_usuarios, s_email_usuarios, s_senha_usuarios, d_nasc_usuarios) VALUES (?, ?, ?, ?)';
    const valores = [user.nome, user.email, user.senha, user.data];
    await client.query(sql, valores);
};

const updateUsuario = async(id, user) => {
    const sql = 'UPDATE usuarios SET s_nome_usuarios=?, s_email_usuarios=?, s_senha_usuarios=?, d_nasc_usuarios=? WHERE i_id_usuarios=?';
    const valores = [user.nome, user.email, user.senha, user.data, id];
    await client.query(sql, valores);
};

module.exports = { obterUsuarios, obterUsuario, deletarUsuario, adcUsuario, updateUsuario };