const fBill = document.querySelector('#f_bill')
const infosInput = [...document.querySelectorAll('.infos-input')]
const infosTipBtn = [...document.querySelector('#infos-tip-btn').children]
const error = [...document.querySelectorAll('.error')]
const fPeople = document.querySelector('#f_people')
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const reset = document.querySelector('#reset')
const custom = document.querySelector('#f_tip')
let billFlag = false
let peopleFlag = false
custom.setAttribute('placeholder', 'Custom')

fBill.addEventListener("input",() => {
    if (fBill.value <= 0) {
        fBill.parentNode.classList.add('wrong')
        error[0].classList.remove('disappear')
        billFlag = false
    } else {
        fBill.parentNode.classList.remove('wrong')
        error[0].classList.add('disappear')
        billFlag = true
    }
}) 

fPeople.addEventListener("input",() => {
    if (fPeople.value <= 0) {
        fPeople.parentNode.classList.add('wrong')
        error[1].classList.remove('disappear')
        peopleFlag = false
    } else {
        fPeople.parentNode.classList.remove('wrong')
        error[1].classList.add('disappear')
        peopleFlag = true
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
            if (billFlag && peopleFlag) {
                let t = el.value
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
            if (billFlag && peopleFlag) {
                let t = el.value
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
    billFlag = false
    peopleFlag = false
    custom.value = 'Custom'
})