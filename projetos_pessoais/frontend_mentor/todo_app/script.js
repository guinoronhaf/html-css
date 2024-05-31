const task = document.querySelector('#task');
const circleInput = document.querySelector('.circleInput');
const mainTasks = document.querySelector('#mainTasks');
const circle = [...document.querySelectorAll('.circle')];
const cross = [...document.querySelectorAll('.cross')];
const itemsQuantity = document.querySelector('#itemsQuantity');
const clear = document.querySelector('#clear');

circle.forEach((circle) => {
    circle.addEventListener("click", () => {
        circle.classList.toggle('gradient');
        circle.firstChild.nextSibling.classList.toggle('hide');
        circle.nextSibling.nextSibling.classList.toggle('checked');
    });
});

cross.forEach((cross) => {
    cross.addEventListener("click", (e) => {
        e.target.previousSibling.previousSibling.parentNode.remove();
    });
});

clear.addEventListener("click", () => {
    circle.map((el) => {
        if (el.classList.contains('gradient')) {
            el.parentNode.parentNode.remove();
        };
    });
});

