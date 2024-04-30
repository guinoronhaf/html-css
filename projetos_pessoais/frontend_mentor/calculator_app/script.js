const body = document.getElementsByTagName('body')[0]
const theme_keys = document.querySelector('#theme_keys')
const choices = document.querySelector('#choices')
const slider = document.querySelector('#slider')
const display = document.querySelector('#display')
const key = [...document.querySelectorAll('.key')]
const num = [...document.querySelectorAll('.num')]
const op = [...document.querySelectorAll('.op')]
const kdel = document.querySelector('#kdel')
const kreset = document.querySelector('#kreset')
const kequal = document.querySelector('#kequal')

let opflag = false
let pointflag = false

num.forEach((el) => {
    el.addEventListener("click", (e) => {
        opflag = false
        if (e.target.innerHTML == '.') {
            if (!pointflag) {
                pointflag = true
                if (display.innerHTML == '0') {
                    display.innerHTML = '0,'
                } else {
                    display.innerHTML += ','
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            display.innerHTML += e.target.innerHTML
        }
    })
})

op.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (!opflag) {
            opflag = true
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            if (e.target.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += e.target.innerHTML
            }
        }
    })
})

kdel.addEventListener("click", () => {
    display.innerHTML = '0'
})

kequal.addEventListener("click", () => {
    const result = eval(display.innerHTML)
    display.innerHTML = result
})