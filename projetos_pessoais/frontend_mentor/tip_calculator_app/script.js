const bill = document.querySelector('#ibill')
const divBill = document.querySelector('.bill_values')
let tip = document.getElementsByTagName('button')
const custom = document.querySelector('#custom')
const divPeople = document.querySelector('.people_values')
const people = document.querySelector('#ipeople')
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const resetButton = document.querySelector('#reset')

function billv(){
    if (bill.value == '' || bill.value < 1) {
        divBill.classList.add('wrong')
        return false
    } else {
        divBill.classList.remove('wrong')
        return true
    }
}

function customv() {
    if (custom.value != '') {
        return true
    } else {
        return false
    }
}

function peoplev() {
    if (people.value < 1) {
        divPeople.classList.add('wrong')
        return false
    } else {
        divPeople.classList.remove('wrong')
        return true
    }
}

for (let i = 0; i < tip.length; i++) {
    tip[i].addEventListener("click", function(e) {
        e.preventDefault()
        let v = tip[i].value
        if (billv() && peoplev()) {
            val1.innerHTML = (bill.value*(v/100))/people.value
            val2.innerHTML = bill.value/people.value
        } else {
            alert('Valores faltando.')
        }
    })
}


resetButton.addEventListener("click", function(e) {
    val1.innerHTML = '0.00'
    val2.innerHTML = '0.00'
    divPeople.classList.remove('wrong')
    divBill.classList.remove('wrong')
})