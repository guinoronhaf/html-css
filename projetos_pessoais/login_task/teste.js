const endpoint = 'http://localhost:3000/users';

const add = async() => {
    await fetch(endpoint, {
    method: "POST",
    mode: "no-cors", 
    headers: {"Content-Type":"application/json"},
    body: {
        "name": "Gui", 
        "email": "gui@gmail.com", 
        "password": "e99r8329023",
        "date": "2020-09-08"
    }
    }).then(res => {
        if (res.status == 201) {
        console.log('ok');
        } else {
        console.log('erro');
        }
})};

add();