const fUser = document.querySelector('#f_user')
const fPeople = document.querySelector('#f_people')
const btnTips = [...document.querySelectorAll('#tips > input, button')]
const number = document.querySelector('.number')
const custom = document.querySelector('#custom')

fPeople.addEventListener("input", () => {
    if (!fPeople.value || fPeople.value <= 0) {
        fPeople.classList.add('wrong')
    } else {
        fPeople.classList.remove('wrong')
    }
})

btnTips.map((el) => {
    if (el != btnTips[5]) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            custom.value = 'Custom'
            let t = el.value
            if (fUser.value && fPeople.value > 0) {
                let finalValue = (fUser.value * (t/100))/fPeople.value
                number.textContent = finalValue
            } else {
                alert('Por favor, selecione uma das opções ou digite um valor customizado e defina o número válido de pessoas.')
            }
        })
    } else {
        el.addEventListener("input", () => {
            let t = el.value
            if (fUser.value && fPeople.value > 0) {
                let finalValue = (fUser.value * (t/100))/fPeople.value
                number.textContent = finalValue
            } else {
                alert('Por favor, selecione uma das opções ou digite um valor customizado e defina o número válido de pessoas.')
                custom.value = 'Custom'
            }
        })
    }
})
