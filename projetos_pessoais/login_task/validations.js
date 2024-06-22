//Sections
const login = document.querySelector('#login');
const signUp = document.querySelector('#signup');

//Inputs
const fUser = document.querySelector('#f_user');
const fPass = document.querySelector('#f_pass');
const fNome = document.querySelector('#f_nome');
const fEmail = document.querySelector('#f_email');
const fDate = document.querySelector('#f_date');
const fPassSign = document.querySelector('#f_passSign');
const fPassSignConfirm = document.querySelector('#f_passSignConfirm');

//Buttons
const eyeIcon = [...document.querySelectorAll('.eyeIcon')];
const account = document.querySelector('#have');
const forgot = document.querySelector('#forgot');
const btnLogin = document.querySelector('#btnLogin');
const btnSign = document.querySelector('#btnSign');
const arrowIcon = document.querySelector('#arrowIcon');

//Function to visualize password
eyeIcon.map(eye => {
    eye.addEventListener("click", (e) => {
        const input = e.target.previousSibling.previousSibling;
        const currentType = input.type;
        if (currentType == 'password') {
            input.setAttribute('type', 'text');
            eye.setAttribute('class', 'bi bi-eye eyeIcon');
        } else {
            input.setAttribute('type', 'password');
            eye.setAttribute('class', 'bi bi-eye-slash eyeIcon');
        }
    });
});

//"Don't you have an account?" page
account.addEventListener("click", () => {
    login.classList.add("hide");
    signUp.classList.remove("hide");
});

//Login page
const sections = [...document.getElementsByTagName('section')];

const backToLoginPage = () => {
    sections.map(s => {
        if (!s.classList.contains('login')) {
            s.classList.add('hide');
        } else {
            s.classList.remove('hide');
        }
    });
}

arrowIcon.addEventListener("click", () => {
    backToLoginPage();
});

//Signup operation
btnSign.addEventListener("click", async() => {
    const endpoint = 'http://localhost:3000/users';
    const bodyx = {
        "name": fNome.value, 
        "email": fEmail.value, 
        "password": fPassSign.value, 
        "date": fDate.value
    };
    await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type":"application/json"},
        body: bodyx 
    })
    .then(res => {
        if (res.status == 201) {
            console.log('ok');
        } else {
            console.log('erro');
        }
    }).catch(err => {
        console.log(err);
    })
})
