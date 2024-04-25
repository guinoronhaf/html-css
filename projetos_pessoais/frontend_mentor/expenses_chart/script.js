const box = [...document.querySelectorAll('.box')]
const bar = [...document.querySelectorAll('.bar')]
let now = new Date()
let nowDay = now.getDay()

// bar[2].classList.add('sele')

bar.map((el, pos) => {
    el.addEventListener("mouseenter", () => {
        if (el.dataset.day== nowDay) {
            el.classList.add('sele')
        }
        box[pos].classList.remove('disappear')
    })
    el.addEventListener("mouseleave", () => {
        el.classList.remove('sele')
        box[pos].classList.add('disappear')
    })
})
