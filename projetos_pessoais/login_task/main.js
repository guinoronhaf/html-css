//Sections
const login = document.querySelector('#login');
const signUp = document.querySelector('#signup');
const forgotPage = document.querySelector('#forgotPage');

//Inputs
const fUser = document.querySelector('#f_user');
const fPass = document.querySelector('#f_pass');
const fNome = document.querySelector('#f_nome');
const fEmail = document.querySelector('#f_email');
const fDate = document.querySelector('#f_date');
const fPassSign = document.querySelector('#f_passSign');
const fPassSignConfirm = document.querySelector('#f_passSignConfirm');
const fgtEmail = document.querySelector('#fgtEmail');
const newPass = document.querySelector('#nPass');

//Buttons
const eyeIcon = [...document.querySelectorAll('.eyeIcon')];
const account = document.querySelector('#have');
const forgot = document.querySelector('#forgot');
const btnLogin = document.querySelector('#loginBtn');
const btnSign = document.querySelector('#btnSign');
const arrowIcon = [...document.querySelectorAll('section > i')];
const btnUpdate = document.querySelector('#btnUpdate');

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

arrowIcon.map((arrow) => {
    arrow.addEventListener("click", () => {
        backToLoginPage();
    })
});

//"Don't you have an account?" page
account.addEventListener("click", () => {
    login.classList.add("hide");
    signUp.classList.remove("hide");
});

//Signup operation
const signUpOperation = () => {
    const endpoint = 'http://localhost:3000/users';
    fetch(endpoint, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "name":fNome.value,
            "email":fEmail.value,
            "password":fPassSign.value,
            "date":fDate.value
        })
    })
    .then(res => {
        if (res.status == 200) {
            console.log('ok');
            const allInputs = [...document.querySelectorAll('.signup input')];
            allInputs.map((inp) => {
                inp.value = '';
            });
            backToLoginPage();
        } else {
            console.log('erro');
        }
    })
    .catch(err => {
        console.log(`O erro é esse: ${err}`);
    }) 
};

btnSign.addEventListener("click", (e) => {
    e.preventDefault();
    signUpOperation();
});

//"Forgot your password?" page
forgot.addEventListener("click", () => {
    login.classList.add('hide');
    forgotPage.classList.remove('hide');
});

const updateOperation = () => {
    const endpoint = `http://localhost:3000/users/${fgtEmail.value}`;
    fetch(endpoint, {
        method: "PATCH",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "password":newPass.value
        })
    })
    .then(res => {
        if (res.status == 200) {
            console.log('ok')
            const allInputs = [...document.querySelectorAll('.forgot input')];
            allInputs.map((inp) => {
                inp.value = '';
            });
            backToLoginPage();
        } else {
            console.log('erro')
        }
    })
    .catch(err => {
        console.log(`O erro é esse: ${err}`)
    })
};

btnUpdate.addEventListener("click", (e) => {
    e.preventDefault();
    updateOperation();
});