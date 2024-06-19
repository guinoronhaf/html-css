const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const fEmail = document.querySelector('#f_email');
const fPassworDiv = document.querySelector('#formPasswordInput');
const fPassword = document.querySelector('#f_pass');
const eyeIcon = document.querySelector('#eyeIcon');
const loginBtn = document.querySelector('#loginBtn');
const signUpBtn = document.querySelector('#signup');
const forgotBtn = document.querySelector('#forgot');
const arrowIcon = document.querySelector('#arrowIcon');

eyeIcon.addEventListener("click", (e) => {
    if (e.target.classList.contains('bi-eye-slash')) {
        e.target.setAttribute('class', 'bi bi-eye');
        fPassword.setAttribute('type', 'text');
    } else {
        e.target.setAttribute('class', 'bi bi-eye-slash');
        fPassword.setAttribute('type', 'password');
    }
});

const emailValidation = (email) => {
    const regex = /([\a-z0-9]{2,})@([a-z]{2,})(\.com)(\.[a-z]{2,})?/;
    return regex.test(email)?true:false;
};

const passwordValidation = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[\a-zA-Z0-9]{8,}$/;
    return regex.test(password)?true:false;
}

loginBtn.addEventListener("click", () => {
});

signUpBtn.addEventListener("click", () => {
    login.classList.toggle('hide');
    signup.classList.toggle('hide');
});

arrowIcon.addEventListener("click", () => {
    login.classList.toggle('hide');
    signup.classList.toggle('hide');
});