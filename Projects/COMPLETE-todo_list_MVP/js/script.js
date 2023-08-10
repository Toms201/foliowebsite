// JS Document Creator - Tom Sargent
// Last Edited Date - 17/04/2023
// Work adapted from Michael Borck in Curtin Universities ISYS3004 - Business Web and Mobile Technolgoies. Semester 1 2023.
// Description: Javascript for a To-Do list including saving the list contents, filtering the list by all, completed and active, and creating to-do items with a strikethrough when completed.


// Get references to the HTML elements
let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active");
var showAllButton = document.getElementById("show-all");
var showCompletedButton = document.getElementById("show-completed");

let templateElement = document.getElementById("list-item-template");
let template = templateElement.innerHTML;

// Store task name and completion status in local storage
function saveTasks(name, isCompleted){
    localStorage.setItem(name, isCompleted);
}

// Add new task when "Add Task" button is clicked
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    saveTasks(taskName,false);
}

// Update task completion status when checkbox is clicked
function onTodolistClicked(event) {
    let targetElement = event.target;
    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    let checkbox = targetElement.querySelector(".checkbox");

    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
    var taskNameElement = targetElement.querySelector(".task-name") //I had to fix the .task-name class here as there was no reference to it in the original HTML. I added it myself.
    var taskName = taskNameElement.innerText;

    saveTasks(taskName, checkbox.checked)
}

// Show only active tasks (not completed)
function showActiveTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "block";
        }
    }
}

// Show all tasks
function showAllTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        (tasks[i].style.display = 'block');
}
}

// Show only completed tasks
function showCompletedTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
    }
} 

// Render saved tasks from local storage on page load
// The following Javascript was adapted from both Michael Borck and Chat GPT (2023) to add a function to recall if a list item is completed or not on page load.
// Please note although I used these sources, I've noted below each steps function to demonstrate my understanding of the code added and edited
function renderTasks() {
    for (i = 0; i < localStorage.length; i++){ // Loop through all items in the local storage
        var taskName = localStorage.key(i) // Get the name of the task
        var isCompleted = localStorage.getItem(taskName) == "true"; // Check task completion in the local storage
        var taskHTML = template.replace("<!-- TASK_NAME -->", taskName); // Replace the placeholder with the task name
        var taskElement = document.createElement('div'); //create a new task element using the HTML code
        taskElement.innerHTML = taskHTML.trim();

        // Set checkbox status based on saved completion status
        var checkbox = taskElement.querySelector('.checkbox');
        if (isCompleted) {
            checkbox.checked = true; // If the task is completed, set the checked property to true, and add completed class to task element
            taskElement.classList.add('completed');
        } else {
            checkbox.checked = false; // If the task is not completed, set the checked property to false, and add remove the completed class from task element
            taskElement.classList.remove('completed');
        }
        todoListContainer.appendChild(taskElement); // Add the new task element to the container element on the page
    }
}

// Add event listeners for UI interactions
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);
// Do the function render tasks on page load
renderTasks()