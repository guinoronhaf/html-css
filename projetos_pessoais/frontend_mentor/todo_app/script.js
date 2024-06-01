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
const statusDesktop = document.querySelector('#status1');
const statusMobile = document.querySelector('#status2');
const statusDesktopChildren = [...document.querySelector('#status1').children];
const statusMobileChildren = [...document.querySelector('#status2').children];
const appMode = document.querySelector('#appMode');
let styleFlag = null;
let widthFlag = null;

const windowWidth = (e) => {

    main.classList.contains('darkMain')?styleFlag='dark':styleFlag='light' 

    if (e.innerWidth >= 992) {
        main.style.backgroundImage = `url('images/bg-desktop-${styleFlag}.jpg')`;
        statusDesktop.classList.remove('hide');
        statusMobile.classList.add('hide');
        widthFlag = 1;
    } else {
        main.style.backgroundImage = `url('images/bg-mobile-${styleFlag}.jpg')`;
        statusDesktop.classList.add('hide');
        statusMobile.classList.remove('hide');
        widthFlag = 2;
    }

};

window.addEventListener("resize", windowWidth(window));

const addBorder = (list) => {

    list.map((box, pos) => {
        if (pos == 0) {
            box.style.borderRadius = '5px 5px 0px 0px';
        } else {
            box.style.borderRadius = '0%';
        }
    });

};

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
addBorder(tasksContainerChildren);

let mainStatusChildren = [...document.querySelector(`#status${widthFlag}`).children];

window.addEventListener("resize", (e) => {

    e.target.innerWidth>=992?mainStatusChildren=statusDesktopChildren:mainStatusChildren=statusMobileChildren;

});

const removeTask = (e) => {

    const pos = tasksContainerChildren.indexOf(e);

    tasksContainerChildren.splice(pos, 1);

    showTasks(tasksContainerChildren);

    itemsLeft();

    addBorder(tasksContainerChildren);
    
};

class Task {
    constructor(task) {
        this.task = task;
    };

    addNewTask = () => {
        
        const taskBox = document.createElement('div');
        taskBox.setAttribute('class', `taskBox ${styleFlag}Box`);

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
            addBorder(tasksContainerChildren);
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
        addBorder(tasksContainerChildren);
    }

});

clear.addEventListener("click", () => {

    tasksContainerChildren = tasksContainerChildren.filter((el) => {
        const circle = el.firstElementChild.firstElementChild;
        return !circle.classList.contains('gradient');
    });
    showTasks(tasksContainerChildren);
    itemsLeft();
    addBorder(tasksContainerChildren);
    
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

mainStatusChildren[0].addEventListener("click", (e) => {
    showTasks(tasksContainerChildren);
    statusSelected(e.target);
    itemsLeft();
    addBorder(tasksContainerChildren);
});


mainStatusChildren[1].addEventListener("click", (e) => {
    addBorder(notComplete());
    showTasks(notComplete());
    statusSelected(e.target);
    itemsLeft();
});

mainStatusChildren[2].addEventListener("click", (e) => {
    addBorder(complete());
    showTasks(complete());
    statusSelected(e.target);
    itemsLeft();
});



// DARK MODE AND LIGHT MODE

appMode.addEventListener("click", () => {

    main.classList.contains('darkMain')?styleFlag='dark':styleFlag='light' 

    if (styleFlag == 'dark') {

        appMode.setAttribute('src', 'images/icon-moon.svg');

        const boxes = [...document.querySelectorAll('.darkBox')];

        boxes.map((dB) => {
            dB.classList.toggle('darkBox');
            dB.classList.toggle('lightBox');
        });

        main.classList.toggle('darkMain');
        main.classList.toggle('lightMain');

    } else {

        appMode.setAttribute('src', 'images/icon-sun.svg');

        const boxes = [...document.querySelectorAll('.lightBox')];

        boxes.map((dB) => {
            dB.classList.toggle('lightBox');
            dB.classList.toggle('darkBox');
        });

        main.classList.toggle('lightMain');
        main.classList.toggle('darkMain');

    }

    windowWidth(window);

});