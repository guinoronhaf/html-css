let bigger = document.querySelector('.bigger')
let circle = document.querySelector('.circle')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let anually = document.querySelector('.anually')
let monthly = document.querySelector('.monthly')

monthly.style.color = 'hsl(237, 63%, 64%)'

function clicked() {
    if (bigger.style.justifyContent != 'flex-start') {
        bigger.style.justifyContent = 'flex-start'
        bigger.style.background = 'hsl(234, 14%, 74%)'
        circle.style.background = 'hsl(237, 63%, 64%)'
        first.innerHTML = '<span>$ </span>199.99'
        second.innerHTML = '<span>$ </span>249.99'
        third.innerHTML = '<span>$ </span>399.99' 
        anually.style.color = 'hsl(237, 63%, 64%)'
        monthly.style.color = 'hsl(234, 14%, 74%)'
    } else {
        bigger.style.justifyContent = 'flex-end'
        bigger.style.background = 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))'
        circle.style.background = 'white'
        first.innerHTML = '<span>$ </span>19.99'
        second.innerHTML = '<span>$ </span>24.99'
        third.innerHTML = '<span>$ </span>39.99'
        anually.style.color = 'hsl(234, 14%, 74%)'
        monthly.style.color = 'hsl(237, 63%, 64%)'
    }
}