const connection = async() => {
    if (global.connection && global.connection.state != 'disconected') {
        return global.connection;
    };
    const mysql = require('mysql2/promise');
    const con = mysql.createConnection("mysql://root:fragoso01@localhost:3306/vascodagama");
    console.log('Connected');
    global.connection = con;
    return con;
};

const signUp = async(user) => {
    const con = await connection();
    const sql = 'INSERT INTO usuarios (s_nome_usuario, s_email_usuario, s_senha_usuario, d_nasc_usuario) VALUES (?, ?, ?, ?)';
    const valores = [user.name, user.email, user.password, user.date];
    await con.query(sql, valores);
};

module.exports = {signUp};