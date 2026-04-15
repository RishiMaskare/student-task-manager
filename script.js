function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  li.appendChild(document.createTextNode(" "));

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
