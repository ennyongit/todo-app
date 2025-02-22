let taskInput = document.getElementById("task-input"); // input
let addBtn = document.getElementById("add-task-btn"); // Add Button
let taskList = document.getElementById("task-list") // ul

let tasksArray = [];

addBtn.addEventListener("click", function(){
    if(taskInput.value.trim() !== ""){
    addTask();
    taskInput.value = "";
}else{ 
    alert("Pls enter a task");
}
})

function addTask(){
    let inputText = taskInput.value;
    let task = {id: Date.now(), taskName: inputText};
    tasksArray.push(task);
    console.log(tasksArray);
    renderHtml();
}

function renderHtml(){
    taskList.innerHTML = "";

    tasksArray.forEach(task => {
        let li = document.createElement("li");
        li.classList.add("task");
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.textContent = task.taskName;
        span.classList.add("task");
        li.appendChild(span);

        let editBtn = document.createElement("button");
        editBtn.textContent = "edit"
        editBtn.classList.add("edit-btn");
        li.appendChild(editBtn);
        editBtn.addEventListener("click", function(){
            taskInput.value = task.taskName;
        })
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete"
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
            let index = tasksArray.findIndex(t => t.id === task.id)
           tasksArray.splice(index, 1);
           renderHtml();
        })
    })
}
