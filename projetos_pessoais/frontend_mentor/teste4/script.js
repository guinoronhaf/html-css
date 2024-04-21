const fUser = document.querySelector('#f_user')
const btnTips = [...document.querySelectorAll('#tips > input, button')]
const number = document.querySelector('.number')
const custom = document.querySelector('#custom')

btnTips.map((el) => {
    if (el != btnTips[5]) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            custom.value = 'Custom'
            let t = el.value
            if (fUser.value) {
                let finalValue = fUser.value * (t/100)
                number.textContent = finalValue
            } else {
                alert('Por favor, selecione uma das opções ou digite um valor customizado.')
            }
        })
    } else {
        el.addEventListener("input", () => {
            let t = el.value
            if (fUser.value) {
                let finalValue = fUser.value * (t/100)
                number.textContent = finalValue
            } else {
                alert('Por favor, selecione uma das opções ou digite um valor customizado.')
                custom.value = 'Custom'
            }
        })
    }
})
