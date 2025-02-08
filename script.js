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
    li.classList.add("task");
    li.id = "task" + taskId; 
    li.innerHTML = `
     <span>${taskText}</span>
     <button class="delete-btn">Delete</button>
     <button class="edit-btn">Edit</button>
  `
  let deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function (){
    let taskToDelete = document.getElementById(li.id);
    taskToDelete.remove();
  })

  let editBtn = li.querySelector(".edit-btn");

    taskList.appendChild(li);
    taskList.appendChild(deleteBtn);
    taskList.appendChild(editBtn);
    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        console.log(event.key);
        addTask();
    }
});

