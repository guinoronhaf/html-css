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

const signUpOperation = async() => {
    const endpoint = 'http://localhost:3000/users';
    await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: "guilherme",
            email: "guilhermenoronhaf@gmail.com",
            password: "fragoso01",
            date: "2006-05-26"
        })
    })
    .then(res => res.json())
    .catch(err => {console.log(err)}) 
};

signUpOperation();
