const situacao = document.querySelector('#s')
const ch = document.getElementById('chk')

ch.addEventListener("change", () => {
    situacao.innerHTML = 'MARCADO'
})