document.addEventListener("DOMContentLoaded", function () {
  taskInput = document.getElementById("taskInput");
  addTaskButton = document.getElementById("addTaskButton");
  tasksList = document.getElementById("tasksList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });


  console.log(tasksList.childNodes);
  tasksList.childNodes.forEach((taskElement) => {
    taskElement.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        tasks = tasks.filter((task) => task.id != taskElement.id);
        saveTasksLocalStorage();
        taskElement.remove();
      }
    });
  });

  addTaskButton.addEventListener("click", function () {
    taskText = taskInput.value.trim();
    if (taskText.length == 0) {
      alert("Please enter a task");
      return;
    }
    console.log(taskText);
    taskInput.value = "";

    const newTask = {
      id: Date.now(),
      text: taskText,
      done: false,
    };
    tasks.push(newTask);
    console.log(newTask);
    saveTasksLocalStorage();
    renderTask(newTask);
  });

  function renderTask(task) {
    const taskElement = document.createElement("li");
    taskElement.className =
      "m-2 px-2 py-2 flex justify-between rounded-lg bg-white bg-opacity-10";
    taskElement.id = task.id;

    const taskTextDiv = document.createElement("div");
    taskTextDiv.className = "px-2 py-1";
    taskTextDiv.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "px-2 py-1 bg-red-700 rounded-lg";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter((t) => t.id != task.id);
      saveTasksLocalStorage();
      taskElement.remove();
    });

    taskElement.appendChild(taskTextDiv);
    taskElement.appendChild(deleteButton);


    tasksList.appendChild(taskElement);

    
  }

  function saveTasksLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
