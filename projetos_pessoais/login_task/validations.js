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
const btnLogin = document.querySelector('#loginBtn');
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
async function signUpOperation() {
    const endpoint = 'http://localhost:3000/users';
    const body = {
        name: "Gilson",
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

btnSign.addEventListener("click", () => {
    signUpOperation();
});