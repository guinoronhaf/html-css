const body = document.getElementsByTagName('body')[0]
const theme_keys = document.querySelector('#theme_keys')
const choices = document.querySelector('#choices')
const slider = document.querySelector('#slider')
const display = document.querySelector('#display')
const keyboard = document.querySelector('#keyboard')
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
        pointflag = false
        if (e.target.innerHTML == '.') {
            if (!pointflag) {
                pointflag = true
                if (display.innerHTML == '0') {
                    display.innerHTML = '0.'
                } else {
                    display.innerHTML += '.'
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



slider.addEventListener("click", () => {
    if (choices.style.justifyContent != 'center' && choices.style.justifyContent != 'flex-end') {
        choices.style.justifyContent = 'center'
        var v = 2
    } else if (choices.style.justifyContent == 'center') {
        choices.style.justifyContent = 'flex-end'
        var v = 3
    } else {
        choices.style.justifyContent = 'flex-start'
        var v = 1
    }
    body.setAttribute('class', `body_theme${v}`)
    theme_keys.setAttribute('class', `theme_keys_theme${v}`)
    choices.setAttribute('class', `choices_theme${v}`)
    slider.setAttribute('class', `slider_theme${v}`)
    display.setAttribute('class', `display_theme${v}`)
    keyboard.setAttribute('class', `keyboard_theme${v}`)
    num.map((el) => {
        el.setAttribute('class', '')
        el.classList.add('key')
        el.classList.add('num')
        el.classList.add(`key_theme${v}`)
    })
    op.map((el) => {
        el.setAttribute('class', '')
        el.classList.add('key')
        el.classList.add('op')
        el.classList.add(`key_theme${v}`)
    })
    kdel.setAttribute('class', '')
    kdel.classList.add('key')
    kdel.classList.add(`rd_theme${v}`)
    kreset.setAttribute('class', '')
    kreset.classList.add('key')
    kreset.classList.add(`bigger`)
    kreset.classList.add(`rd_theme${v}`)
    kequal.setAttribute('class', '')
    kequal.classList.add('key')
    kequal.classList.add(`bigger`)
    kequal.classList.add('res')
    kequal.classList.add(`equal_theme${v}`)
})

kreset.addEventListener("click", () => {
    display.innerHTML = 0
    choices.style.justifyContent = 'flex-start'
    v = 1
    body.setAttribute('class', `body_theme1`)
    theme_keys.setAttribute('class', `theme_keys_theme1`)
    choices.setAttribute('class', `choices_theme${v}`)
    slider.setAttribute('class', `slider_theme${v}`)
    display.setAttribute('class', `display_theme1`)
    keyboard.setAttribute('class', `keyboard_theme1`)
    num.map((el) => {
        el.setAttribute('class', '')
        el.classList.add('key')
        el.classList.add('num')
        el.classList.add(`key_theme1`)
    })
    op.map((el) => {
        el.setAttribute('class', '')
        el.classList.add('key')
        el.classList.add('op')
        el.classList.add(`key_theme1`)
    })
    kdel.setAttribute('class', '')
    kdel.classList.add('key')
    kdel.classList.add(`rd_theme1`)
    kreset.setAttribute('class', '')
    kreset.classList.add('key')
    kreset.classList.add(`bigger`)
    kreset.classList.add(`rd_theme1`)
    kequal.setAttribute('class', '')
    kequal.classList.add('key')
    kequal.classList.add(`bigger`)
    kequal.classList.add('res')
    kequal.classList.add(`equal_theme1`)
})
