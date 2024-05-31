const main = document.querySelector('#main');
const inputCircle = document.querySelector('#inputCircle');
const inputTask = document.querySelector('#iTask');
const tasksContainer = document.querySelector('#tasks');
let tasksContainerChildren = [...document.querySelector('#tasks').children];
const quantity = document.querySelector('#quantity');
const clear = document.querySelector('#clear');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completed = document.querySelector('#completed');
const mainStatusChildren = [...document.querySelector('.mainStatus').children];

const windowWidth = (e) => {

    if (e.innerWidth >= 992) {
        main.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
    } else {
        main.style.backgroundImage = "url('images/bg-mobile-dark.jpg')";
    }

};

window.addEventListener("resize", windowWidth(window));

const itemsLeft = () => {

    const notCompleted = tasksContainerChildren.filter((el) => {
        const circle = el.firstElementChild.firstElementChild;
        return !circle.classList.contains('gradient');
    });

    quantity.textContent = notCompleted.length

};
    
tasksContainerChildren.forEach((task) => {
        
    const circle = task.firstElementChild.firstElementChild;
        
    circle.addEventListener("click", () => {
        circle.classList.toggle('gradient');
        circle.firstElementChild.classList.toggle('hide');
        circle.parentNode.classList.toggle('checked');
        itemsLeft();
    });

    const cross = task.firstElementChild.nextElementSibling;
    
    cross.addEventListener("click", (e) => {
        removeTask(e.target.parentNode);
        itemsLeft();
    });

});


const showTasks = (array) => {
    tasksContainer.innerHTML = '';
    array.map((t) => {
        tasksContainer.appendChild(t);
    });

    itemsLeft();
};

windowWidth(window);
showTasks(tasksContainerChildren);
itemsLeft();

const removeTask = (e) => {

    const pos = tasksContainerChildren.indexOf(e);

    tasksContainerChildren.splice(pos, 1);

    showTasks(tasksContainerChildren);

    itemsLeft();
    
};

class Task {
    constructor(task) {
        this.task = task;
    };

    addNewTask = () => {
        
        const taskBox = document.createElement('div');
        taskBox.setAttribute('class', 'taskBox darkBox');

        const paragraph = document.createElement('p');

        let circle = document.createElement('span');
        circle.setAttribute('class', 'circle');

        const imgCheck = document.createElement('img');
        imgCheck.setAttribute('src', 'images/icon-check.svg');
        imgCheck.classList.add('hide');

        const imgCross = document.createElement('img');
        imgCross.setAttribute('src', 'images/icon-cross.svg');
        imgCross.classList.add('cross');

        circle.appendChild(imgCheck);
        paragraph.appendChild(circle);
        paragraph.innerHTML += this.task;
        taskBox.appendChild(paragraph);
        taskBox.appendChild(imgCross);

        tasksContainer.appendChild(taskBox);
        
        tasksContainerChildren.push(taskBox);

        const circleElement = taskBox.firstElementChild.firstElementChild;
        circleElement.addEventListener("click", () => {
            circleElement.classList.toggle('gradient');
            circleElement.firstElementChild.classList.toggle('hide');
            itemsLeft();
            circleElement.parentNode.classList.toggle('checked');
        });

        const crossElement = taskBox.firstElementChild.nextElementSibling;
        crossElement.addEventListener("click", () => {
            removeTask(taskBox);
            itemsLeft();
        });

    };
}
 
inputCircle.addEventListener("click", () => {
    
    if (!inputTask.value) {
        alert('Error!');
    } else {
        const t = new Task(inputTask.value);
        t.addNewTask();
        inputTask.value = '';
        inputTask.focus();
        itemsLeft();
    }

});

clear.addEventListener("click", () => {

    tasksContainerChildren = tasksContainerChildren.filter((el) => {
        const circle = el.firstElementChild.firstElementChild;
        return !circle.classList.contains('gradient');
    });
    showTasks(tasksContainerChildren);
    itemsLeft();
    
});

const complete = () => {

    const completed = tasksContainerChildren.filter((el) => {
        const circle = el.firstElementChild.firstElementChild;
        return circle.classList.contains('gradient');
    });

    return completed;

};

const notComplete = () => {

    const notCompleted = tasksContainerChildren.filter((el) => {
        const circle = el.firstElementChild.firstElementChild;
        return !circle.classList.contains('gradient');
    });

    return notCompleted;

};

const statusSelected = (status) => {

    mainStatusChildren.forEach((st) => {
        st.classList.remove('selected');
    });

    status.classList.add('selected');

};

all.addEventListener("click", (e) => {
    showTasks(tasksContainerChildren);
    statusSelected(e.target);
    itemsLeft();
});


active.addEventListener("click", (e) => {
    showTasks(notComplete());
    statusSelected(e.target);
    itemsLeft();
});

completed.addEventListener("click", (e) => {
    showTasks(complete());
    statusSelected(e.target);
    itemsLeft();
});



// DARK MODE AND LIGHT MODE