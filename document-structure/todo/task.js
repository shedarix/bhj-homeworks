const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

function loadTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToStorage(tasksArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

function updateTasksInStorage() {
    const tasksArray = Array.from(document.querySelectorAll('.task'))
                           .map(task => task.querySelector('.task__title').textContent);
    saveTasksToStorage(tasksArray);
}

function addTask(title) {
    if (!title.trim()) return; 


    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">${title}</div>
            <a href="#" class="task__remove">×</a>
        </div>
    `);

    const lastTask = tasksList.firstElementChild;
    lastTask.querySelector('.task__remove').addEventListener('click', function(event) {
        event.preventDefault(); 
        lastTask.remove();      
        updateTasksInStorage();  
    });

    updateTasksInStorage();
}

window.onload = function() {
    const savedTasks = loadTasksFromStorage();
    savedTasks.forEach(addTask); 
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        addTask(taskTitle);
        taskInput.value = ''; 
    }
});