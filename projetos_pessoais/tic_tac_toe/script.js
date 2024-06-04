const keys = [...document.querySelector('.table').children];
const options = [...document.querySelectorAll('.opt')];

let victoryFlag = null;
let tieFlag = null;

options.map((el) => {
    el.addEventListener("click", (e) => {
        e.target.parentNode.classList.add('hide');
    });
});

const verifyVictory = (a) => {

    if (a[0].innerHTML == a[1].innerHTML == a[2].innerHTML != '' || a[0].innerHTML == a[3].innerHTML == a[6].innerHTML != '' || a[0].innerHTML == a[4].innerHTML == a[8].innerHTML != '' || a[2].innerHTML == a[5].innerHTML == a[8].innerHTML != 0 || a[6].innerHTML == a[7].innerHTML == a[8].innerHTML != '') {
        victoryFlag = true;
    } else {
        victoryFlag = false;
    }

};

const addElements = (p) => {

    keys.map((el) => {
        el.addEventListener("click", (e) => {
            e.target.innerHTML = p;
            verifyVictory(keys);
            victoryFlag?console.log('vitória'):console.log('nada');
        });
    });

};

addElements('X');

