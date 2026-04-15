function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;
  const errorMsg = document.getElementById("errorMsg");

  if (task.trim()=== "") {
    errorMsg.textContent = " Please enter a task.";
    return;
  };

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">❌</button>`;

  document.getElementById("taskList").appendChild(li);
  
  input.value = "";
  updateEmptyState();
}
function clearTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    updateEmptyState();
  }
function updateEmptyState() {
    const taskList = document.getElementById("taskList");
    const emptyState = document.getElementById("emptyState");

    if (taskList.children.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}