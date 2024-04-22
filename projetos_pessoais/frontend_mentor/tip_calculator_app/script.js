const fBill = document.querySelector('#f_bill')
const infosInput = [...document.querySelectorAll('.infos-input')]
const infosTipBtn = [...document.querySelector('#infos-tip-btn').children]
const error = [...document.querySelectorAll('.error')]
const fPeople = document.querySelector('#f_people')
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const reset = document.querySelector('#reset')
const custom = document.querySelector('#f_tip')
custom.setAttribute('placeholder', 'Custom')

fBill.addEventListener("input",() => {
    if (fBill.value <= 0) {
        fBill.parentNode.classList.add('wrong')
        error[0].classList.remove('disappear')
    } else {
        fBill.parentNode.classList.remove('wrong')
        error[0].classList.add('disappear')
    }
}) 

fPeople.addEventListener("input",() => {
    if (fPeople.value <= 0) {
        fPeople.parentNode.classList.add('wrong')
        error[1].classList.remove('disappear')
    } else {
        fPeople.parentNode.classList.remove('wrong')
        error[1].classList.add('disappear')
    }
})

infosInput.map((el) => {
    el.addEventListener("mouseenter", () => {
        el.classList.add('typing')
    })
    el.addEventListener("mouseleave", () => {
        el.classList.remove('typing')
    })
})

infosTipBtn.map((el) => {
    if (el != infosTipBtn[5]) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            custom.value = 'Custom'
            let t = el.value
            if (fBill.value > 0 && fPeople > 0) {
                let finalValue1 = (fBill.value * t/100)/fPeople.value
                val1.innerHTML = `$${finalValue1.toFixed(2)}`
                let finalValue2 = (fBill.value/fPeople.value) + finalValue1
                val2.innerHTML = `$${finalValue2.toFixed(2)}`
            } else {
                alert('Make sure you fill "Bill" and "Number of People" with valid values before selecting the tip.')
            }
        })
    } else {
        el.addEventListener("input", () => {
            let t = el.value 
            if (fBill.value > 0 && fPeople.value > 0) {
                let finalValue1 = (fBill.value * t/100)/fPeople.value
                val1.innerHTML = `$${finalValue1.toFixed(2)}`
                let finalValue2 = (fBill.value/fPeople.value) + finalValue1
                val2.innerHTML = `$${finalValue2.toFixed(2)}`
            } else {
                alert('Make sure you fill "Bill" and "Number of People" with valid values before selecting the tip.')
                custom.value = 'Custom'
            }
        })
    }
})

reset.addEventListener("click", () => {
    error.forEach((el) => {
        el.classList.add('disappear')
    })
    infosInput.forEach((el) => {
        el.classList.remove('wrong')
    })
    val1.textContent = '$0.00'
    val2.textContent = '$0.00'
    custom.value = 'Custom'
})