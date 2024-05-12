const login_container = document.querySelector('.login_container')
const f_email = document.querySelector('#f_email')
const p_error = document.querySelector('#p_error')
const submit = document.querySelector('#submit')
const success_container = document.querySelector('.success_container')
const success_email = document.querySelector('.success_email')
const btnDismiss = document.querySelector('#dismiss')
let eFlag = false

f_email.addEventListener("input", () => {
    const regex = /([a-z]{1,})([0-9]{1,})?@([a-z]{1,})?\.(com)\.?([a-z])?/
    if (regex.test(f_email.value)) {
        eFlag = true
    } else {
        eFlag = false
    }
})

submit.addEventListener("click", () => {
    if (eFlag) {
        console.log('ok')
        p_error.classList.add('hide')
        f_email.classList.remove('error')
        f_email.style.border = '1px solid hsl(231, 7%, 60%)'
        login_container.classList.add('hide')
        success_container.classList.remove('hide')
        success_email.textContent = f_email.value
    } else {
        p_error.classList.remove('hide')
        f_email.classList.add('error')
        f_email.style.border = '1px solid hsl(4, 100%, 67%)'
        // f_email.style.bakgroundColor = 'rgba(255, 0, 0, 0.192)'
    }
})

btnDismiss.addEventListener("click", () => {
    success_container.classList.add('hide')
    login_container.classList.remove('hide')
    p_error.classList.add('hide')
    f_email.classList.remove('error')
    eFlag = false
    f_email.value = ''
})