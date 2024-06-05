const keys = [...document.querySelector('.table').children];
const options = [...document.querySelectorAll('.opt')];

let victoryFlag = false;
let whoStarts = null;
let c = 0;

const verifyVictory = (p) => {

    if (keys[0].textContent == keys[1].textContent && keys[1].textContent == keys[2].textContent && keys[0].textContent == p) {
        victoryFlag = true;
    } else if (keys[0].textContent == keys[3].textContent && keys[3].textContent == keys[6].textContent && keys[0].textContent == p) {
        victoryFlag = true;
    } else if (keys[0].textContent == keys[4].textContent && keys[4].textContent == keys[8].textContent && keys[0].textContent == p) {
        victoryFlag = true;
    } else if (keys[2].textContent == keys[5].textContent && keys[5].textContent == keys[8].textContent && keys[2].textContent == p) {
        victoryFlag = true;
    } else if (keys[3].textContent == keys[4].textContent && keys[4].textContent == keys[5].textContent && keys[3].textContent == p) {
        victoryFlag = true;
    } else if (keys[6].textContent == keys[7].textContent && keys[7].textContent == keys[8].textContent && keys[6].textContent == p) {
        victoryFlag = true;
    } else if (keys[1].textContent == keys[4].textContent && keys[4].textContent == keys[7].textContent && keys[1].textContent == p) {
        victoryFlag = true
    } else if (keys[6].textContent == keys[4].textContent && keys[4].textContent == keys[2].textContent && keys[6].textContent == p) {
        victoryFlag = true
    }

};

const xPlays = () => {

    keys.map((el) => {

        el.addEventListener("click", (e) => {
            e.target.innerHTML = 'X';

            verifyVictory(e.target.innerHTML);
        });

    });

};


const oPlays = () => {

    keys.map((el) => {

        el.addEventListener("click", (e) => {
            e.target.innerHTML = 'O';

            verifyVictory(e.target.innerHTML);
        });

    });

};

options.map((el) => {

    el.addEventListener("click", (e) => {

        whoStarts = e.target.innerHTML;

        console.log(whoStarts);

        e.target.parentNode.classList.add('hide');

    });

});





// if (keys[0].textContent == keys[1].textContent == 'X') {
//     console.log('igual')
// } else {
//     console.log('diferente')
// }

