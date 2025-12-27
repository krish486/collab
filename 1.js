var fullelems = document.querySelectorAll('.fullelems');
var closebtn = document.querySelectorAll('.closebtn');
var cardselem = document.querySelectorAll('.elem');
console.log(cardselem);
cardselem.forEach(function (card) {
    card.addEventListener('click', function () {
        fullelems[card.id].style.display = 'block';
    });
});
closebtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        fullelems[btn.id].style.display = 'none';
    });
});
var taskcomplete = document.querySelector('#Taskhandler');
var taskdeleter = document.querySelector('#Taskdeleter');
var addtaskbtn = document.getElementById('addtaskbtn');
var form = document.querySelector('.taskadder form');
var input = document.querySelector('.Taskform input');
var taskdesc = document.querySelector('.Taskform textarea');
var impcheck = document.getElementById('impcheckbox');
var tasklist = document.querySelector('.addlist');
let todotask = []
if(localStorage.getItem('todotask')) {
    todotask = JSON.parse(localStorage.getItem('todotask'));
} else {
    localStorage.setItem('todotask', JSON.stringify(todotask))
    console.log('No existing tasks found, initializing storage.');
}
var sum = '';
function renderTasks() {
    sum = '';
    todotask.forEach(function (task) {
        sum = sum + `<div class="task">
                        <div class="taskdetails">
                            <h1>${task.task}</h1> <span class='impmarker ${task.important}'>imp</span>
                        </div>
                        <div id="controlsbutton">
                            <button id="Taskhandler" class="cbutton">Mark as completed</button>
                            <button id="Taskdeleter" class="cbutton">Delete</button>
                        </div>
                    </div>`
    });
    tasklist.innerHTML = sum;
}
renderTasks();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(taskdesc.value);
    console.log(impcheck.checked);
    console.log(input.value);
    todotask.push({
        task: input.value,
        important: impcheck.checked
    });
    renderTasks();
    localStorage.setItem('todotask', JSON.stringify(todotask));
    input.value = '';
    taskdesc.value = '';
    impcheck.checked = false;
});
tasklist.addEventListener('click', function (e) {
    if (e.target.id === 'Taskhandler') {

        const taskElem = e.target.closest('.task');
        const taskTitle = taskElem.querySelector('h1');

        taskTitle.style.textDecoration = 'line-through';
        taskTitle.style.opacity = '0.6';
    }
    else if (e.target.id === 'Taskdeleter') {

        const taskElem = e.target.closest('.task');
        taskElem.remove();}
});

