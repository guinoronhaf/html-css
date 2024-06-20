const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const fEmail = document.querySelector('#f_email');
const fPasswordDiv = document.querySelector('#formPasswordInput');
const fPassword = document.querySelector('#f_pass');
const eyeIcon = document.querySelector('#eyeIcon');
const loginBtn = document.querySelector('#loginBtn');
const haveBtn = document.querySelector('#have');
const forgotBtn = document.querySelector('#forgot');
const arrowIcon = document.querySelector('#arrowIcon');
const fNome = document.querySelector('#f_nome');
const fEmailSign = document.querySelector('#f_emailSign');
const fDate = document.querySelector('#f_date');
const fPasswordSign = document.querySelector('#f_passSign');
const fPasswordSignConfirm = document.querySelector('#f_passSignConfirm');
const btnSign = document.querySelector('#btnSign');

eyeIcon.addEventListener("click", (e) => {
    if (e.target.classList.contains('bi-eye-slash')) {
        e.target.setAttribute('class', 'bi bi-eye');
        fPassword.setAttribute('type', 'text');
    } else {
        e.target.setAttribute('class', 'bi bi-eye-slash');
        fPassword.setAttribute('type', 'password');
    }
});

const fieldValidation = (email, target, validation) => {
    validation.test(email)?target.classList.remove("wrong"):target.classList.add('wrong');
};

fEmail.addEventListener("input", (e) => {
    fieldValidation(e.target.value, e.target, /([\a-z0-9]{2,})@([a-z]{2,})(\.com)(\.[a-z]{2,})?/);
});

fPassword.addEventListener("input", (e) => {
    fieldValidation(e.target.value, fPasswordDiv, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[\a-zA-Z0-9]{8,}$/);
});

fNome.addEventListener("input", (e) => {
    fieldValidation(e.target.value, e.target, /[a-z]/i);
    console.log(e.target);
});

fEmailSign.addEventListener("input", (e) => {
    fieldValidation(e.target.value, e.target, /([\a-z0-9]{2,})@([a-z]{2,})(\.com)(\.[a-z]{2,})?/);
});

fPasswordSign.addEventListener("input", () => {
    fieldValidation(e.target.value, fPasswordDiv, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[\a-zA-Z0-9]{8,}$/);
});

const insere = async() => {
    const db = require('./db');
    const data = {
        name: fNome.value,
        email: fEmailSign.value,
        password: fPasswordSign.value,
        date: fDate.value
    };
    console.log('Inserindo novo cliente');
    await db.signUp(data);
};

btnSign.addEventListener("click", insere());

haveBtn.addEventListener("click", () => {
    login.classList.toggle('hide');
    signup.classList.toggle('hide');
});

arrowIcon.addEventListener("click", () => {
    login.classList.toggle('hide');
    signup.classList.toggle('hide');
});
