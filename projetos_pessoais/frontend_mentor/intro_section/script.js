const info = document.querySelector('#info')
const menu = document.querySelector('#hamb')
const navegation = document.querySelector('.nav')
const x = document.querySelector('#exit')
let navArrows = [...document.querySelectorAll('.nav_arrows')]
let navArrowsImg = [...document.querySelectorAll('.nav_arrows > img')]
let lists = [...document.querySelectorAll('.lists')]

// const checkImage = (l) => {
//     l.map((el, pos) => {
//     if (el.src === "images/icon-arrow-down.svg") {
//         el.src = "images/icon-arrow-up.svg"
//     } else {

//     }
//     })
// }

menu.addEventListener("click", () => {
    info.classList.toggle('opac')
    navegation.classList.toggle('disappear')
})

x.addEventListener("click", () => {
    info.classList.toggle('opac')
    navegation.classList.toggle('disappear')
})

navArrows.map((el, pos) => {
    el.addEventListener("click", () => {
        lists[pos].classList.toggle('disappear')
        if (navArrowsImg[pos].src != "images/icon-arrow-up.svg") {
            navArrowsImg[pos].setAttribute('src', 'images/icon-arrow-up.svg')
        } else if (navArrowsImg[pos].src != "images/icon-arrow-down.svg") {
            navArrowsImg[pos].setAttribute('src', 'images/icon-arrow-down.svg')
        }
    })
})

console.log(navArrowsImg[1])