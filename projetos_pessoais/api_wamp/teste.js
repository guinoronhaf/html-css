const endpoint = 'http://localhost:3000/usuarios/4';
const bodyx = {
    "nome": "Nilson",
    "email": "nilson@gmail.com",
    "senha": "nilson12345",
    "data": "2002-05-26"
};

fetch(endpoint, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyx)
})
.then(res => {
    if (res.status == 200) {
        console.log('ok');
    } else {
        console.log('erro')
    }
})