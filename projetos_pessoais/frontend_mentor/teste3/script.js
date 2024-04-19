const hamb = document.querySelector('#hamburguer')
const nave = document.getElementsByTagName('nav')[0]
const sectionn = document.querySelector('#sec')
const seta = document.querySelector('#seta')

hamb.addEventListener("click", () => {
    nave.classList.toggle('sai')
    sectionn.classList.toggle('opaco')
})

seta.addEventListener("click", () => {
    nave.classList.toggle('sai')
    sectionn.classList.toggle('opaco')
})