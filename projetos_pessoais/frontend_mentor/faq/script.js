const img = document.querySelectorAll('.icons')
const ans = document.querySelectorAll('.answer')


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function clicked() {
        if (ans[i].style.display != 'flex') {
            ans[i].style.display = 'flex'
            img[i].src = 'images/icon-minus.svg'
        } else {
            ans[i].style.display = 'none'
            img[i].src = 'images/icon-plus.svg'
        }
    })
}
