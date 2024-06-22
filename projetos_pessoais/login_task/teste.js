const endpoint = 'http://localhost:3000/users';

async function add() {
    const body = {
        name: "Alberto",
        email: "alberto@gmail.com",
        password: "alberto1234",
        date: "2019-09-23"
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })

    return response.json();
}

add();