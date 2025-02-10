let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task-btn");
let taskList = document.getElementById("task-list");

let taskId = 0;

// 2
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
    taskList.appendChild(li);
    taskInput.value = "";

    let deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function(){
        li.remove();
        return;
    })

    let editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", function(){
        editInput = document.createElement("input");
        editInput.value = li.querySelector("span").textContent;
        li.querySelector("span").replaceWith(editInput);
    
        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save";
        editBtn.replaceWith(saveBtn);
        li.appendChild(saveBtn);

        saveBtn.addEventListener("click", function(){
            let updatedText = editInput.value.trim();
            if(updatedText !== ""){
                let span = document.createElement("span");
                span.textContent = updatedText;
                editInput.replaceWith(span);
                saveBtn.replaceWith(editBtn);
            }
        });

        editInput.addEventListener("keypress", function(event){
            if(event.key === "Enter"){
                let updatedText = editInput.value.trim();
                if(updatedText !== ""){
                    let span = document.createElement("span");
                    span.textContent = updatedText;
                    editInput.replaceWith(span);
                    saveBtn.replaceWith(editBtn);
                }
            }
        })
    });
}

// 1
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        console.log(event.key);
        addTask();
    }
});






