const used = document.querySelector('#used')
const left = document.querySelector('#left')
const sto = document.querySelector('#sto')

sto.addEventListener("input", (evt) => {
    let infoLeft = 1000 - sto.value
    used.textContent = `${sto.value} GB`
    left.textContent = infoLeft
})