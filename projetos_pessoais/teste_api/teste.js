const endpoint = 'http://localhost:3000/clientes';

// fetch(endpoint)
// .then(data => data.json())
// .then(p => console.log(p));

fetch(endpoint, {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        "nome": "Gilson",
        "email": "gilson@gmail.com",
        "senha": "gilsao123",
        "data": "1987-09-23"
    }
}).then((res) => {
    if (res.status == 200) {
        console.log('ok');
    } else {
        console.log('erro');
    }
})