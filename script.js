const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoFormSubmit = document.querySelector("#todo-form-button");

// New Todo template
const createTodo = task => {
  const listRow = document.createElement("li");
  // const checkBox = document.createElement("button");
  const taskName = document.createElement("span");
  const delbutton = document.createElement("button");

  taskName.textContent = task;
  listRow.className = "todo";
  // checkBox.className = "unchecked";
  delbutton.className = "delbutton";

  // listRow.appendChild(checkBox);
  listRow.appendChild(taskName);
  listRow.appendChild(delbutton);
  document.querySelector("#todo-list").appendChild(listRow);
};

// New Todo via form
const newTodo = event => {
  if (
    todoForm.value.trim() !== "" &&
    (event.type == "click" || event.key === "Enter")
  ) {
    tasks.push(todoForm.value);
    createTodo(todoForm.value);
    todoForm.value = "";
  }
};

tasks.forEach(createTodo);
todoFormSubmit.addEventListener("click", newTodo);
todoForm.addEventListener("keydown", newTodo);

// Toggle done and delete
todoList.addEventListener("click", event => {
  if (event.target.className === "delbutton") {
    todoList.removeChild(event.target.parentNode);
  } else {
    event.target.classList.toggle("done");
  }
});
