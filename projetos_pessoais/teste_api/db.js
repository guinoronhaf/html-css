const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function obterUsuarios() {
    const res = await client.query('SELECT * FROM usuarios');
    return res[0];
};

async function obterUsuario(id) {
    const res = await client.query('SELECT * FROM usuarios WHERE i_usuario_usuario=?', [id]);
    return res[0];
};

async function adcUsuarios(dados) {
    const sql = 'INSERT INTO usuarios (s_nome_usuario, s_email_usuario, s_senha_usuario, d_nasc_usuario) VALUES (?, ?, ?, ?)';
    const values = [dados.nome, dados.email, dados.senha, dados.data];
    await client.query(sql, values);
}

module.exports = { obterUsuarios, obterUsuario, adcUsuarios };