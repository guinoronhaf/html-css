var email = document.querySelector('#iemail')
var msg = document.querySelector('#msg')

function verify() {
    if ('@' in email && '.com' in email) {
        window.location.href = "login.html"
    } else {
        email.style.color = 'hsl(4, 100%, 67%)'
        email.style.border = '1px solid hsl(4, 100%, 67%)'
        email.style.background = 'pink'
        var parag = document.createElement('p')
        parag.innerHTML = 'Invalid email addres'
        parag.style.color = 'hsl(4, 100%, 67%)'
        msg.appendChild(parag)
    }
}