// Variables
const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");

  btn.addEventListener("click", addTask);

  function addTask() {
    if (input.value !== "") {
      addTaskToLS();
      todoList.innerHTML = "";
      displayTask();
    } else {
      alert("Delete Tasks?");
    }
  }
  
  //   Save task to local storage
function addTaskToLS() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}


// Display task on the page
function displayTask() {
  getTasks();

  tasks.forEach((task, index) => {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `;

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

// Delete Tasks
function deleteTask(index) {
  const del = confirm("You are about to delete this task!!!");
  if (del == true) {
    getTasks();
  }

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoList.innerHTML = "";
  displayTask();
}

// clear tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
  const delTasks = confirm("Delete all tasks");

  if (delTasks == true) {
    localStorage.clear();
    todoList.innerHTML = "";
    displayTask();
  }
}