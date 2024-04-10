const rating = document.querySelectorAll('.num')
const rated = document.getElementById('message')
const submitButton = document.getElementById('submit')
const form = document.getElementById('form')
const feedback = document.getElementById('feedback')

for (let i = 0; i < rating.length; i++) {//rating.lenght é justamente a quantidade de elementos com a class "rating". Ademais, esse "for" é necessário para selecionar todos os elementos dessa classe, e não só o primeiro, como indica o padrão.
    rating[i].addEventListener("click", function(e) {
        e.preventDefault() //retira as ações padrão
        rated.innerText = rating[i].innerText
    })
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    if (rated.innerText !== '') {
        form.style.display = 'none'
        feedback.style.display = 'flex'
    } else {
        alert('Por favor, selecione uma das opções de nota.')
    }
})