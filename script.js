let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task-btn");
let taskList = document.getElementById("task-list");

function addTask() {
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    } 

    let li = document.createElement("li");
    li.innerHTML = `
     <span>${taskText}</span>
     <button class="delete-btn">Delete</button>
  `
    taskList.appendChild(li);
    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        console.log(event.key);
        addTask();
    }
});

