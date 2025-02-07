let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task-btn");
let taskList = document.getElementById("task-list");

let taskId = 0;

function addTask() {
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    } 

    taskId++;

    let li = document.createElement("li");
    li.id = "task" + taskId; 
    li.innerHTML = `
     <span>${taskText}</span>
     <button class="delete-btn">Delete</button>
  `
  let deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function (){
    let taskToDelete = document.getElementById(li.id);
    taskToDelete.remove();
  })
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

