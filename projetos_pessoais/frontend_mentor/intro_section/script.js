const background = document.querySelector('#background');
const menuExit = document.querySelector('#menuExit');
const pClick = [...document.querySelectorAll('.pClick')];
const menuImg = [...document.querySelectorAll('.menuImg')];
const menuList = [...document.querySelectorAll('.menuList')];
const hamb = document.querySelector('#hamb');

hamb.addEventListener("click", () => {
    background.classList.remove('hide');
});

menuExit.addEventListener("click", () => {
    background.classList.add('hide');
});

pClick.map((el, pos) => {
    el.addEventListener("click", (e) => {
        const containsHide =  menuList[pos].classList.contains('hide');
    
        containsHide?menuImg[pos].setAttribute('src', 'http://127.0.0.1:5500/intro_section/images/icon-arrow-up.svg'):menuImg[pos].setAttribute('src', 'http://127.0.0.1:5500/intro_section/images/icon-arrow-down.svg');

        menuList[pos].classList.toggle('hide');
    });
});