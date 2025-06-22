let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");

    const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (!taskText || !taskDateTime) {
    alert("Please enter task and time.");
    return;
  }

  tasks.push({ text: taskText, time: taskDateTime, completed: false });
      taskInput.value = "";
  taskTime.value = "";
  renderTasks();
}

function renderTasks() {
     const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
       const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const taskInfo = document.createElement("div");
       taskInfo.innerHTML = `<strong>${task.text}</strong><br><small>${new Date(task.time).toLocaleString()}</small>`;

    const actions = document.createElement("div");
      actions.className = "task-actions";

    const completeBtn = document.createElement("button");
       completeBtn.textContent = task.completed ? "Undo" : "Done";
    completeBtn.onclick = () => toggleComplete(index);

       const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(index);

       const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

        actions.append(completeBtn, editBtn, deleteBtn);
    li.append(taskInfo, actions);
       taskList.appendChild(li);
  });
}

function toggleComplete(index) {
     tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
     tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
      const newText = prompt("Edit task:", tasks[index].text);
  if (newText) {
       tasks[index].text = newText;
    renderTasks();
  }
}
