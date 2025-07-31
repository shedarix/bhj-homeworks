// Получаем необходимые элементы
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

// Сохраняем задачи в localStorage
function saveTasksToStorage(tasksArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// Восстанавливаем задачи из localStorage
function loadTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Функция для добавления новой задачи
function addTask(title) {
    // Создаем новый элемент задачи
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    // Заголовок задачи
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = title;

    // Кнопка удаления
    const removeButton = document.createElement('a');
    removeButton.href = "#";
    removeButton.classList.add('task__remove');
    removeButton.textContent = "×";

    // Назначаем обработчик события удаления
    removeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        taskItem.remove(); // Удаляем задачу из DOM
        updateTasksInStorage(); // Обновляем storage
    });

    // Собираем вместе задачу
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(removeButton);

    // Добавляем задачу в список
    tasksList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = "";

    // Обновляем задачи в хранилище
    updateTasksInStorage();
}

// Обновляем задачи в localStorage
function updateTasksInStorage() {
    const tasksArray = Array.from(document.querySelectorAll('.task')).map(task => ({
        title: task.querySelector('.task__title').textContent,
    }));
    saveTasksToStorage(tasksArray);
}

// Восстанавливаем сохранённые задачи при загрузке страницы
window.onload = function() {
    const savedTasks = loadTasksFromStorage();
    savedTasks.forEach(task => addTask(task.title)); // Воспроизводим задачи
};

// Обработчик нажатия на кнопку "Добавить"
addButton.addEventListener('click', function() {
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        addTask(taskTitle);
    }
});

// Обработчик нажатия клавиши Enter
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            addTask(taskTitle);
        }
    }
});