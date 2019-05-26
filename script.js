const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoFormSubmit = document.querySelector("#todo-form-button");

// New Todo template
const createTodo = task => {
  const listRow = document.createElement("li");
  const checkBox = document.createElement("button");
  const taskName = document.createElement("span");
  const delbutton = document.createElement("button");

  taskName.textContent = task;
  listRow.className = "todo";
  checkBox.className = "unchecked";
  delbutton.className = "delbutton";

  listRow.appendChild(checkBox);
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
}

tasks.forEach(createTodo);
todoFormSubmit.addEventListener("click", newTodo);
todoForm.addEventListener("keydown", newTodo);


// Delete task
const delbutton = document.querySelectorAll(".delbutton");
delbutton.forEach(row => {
	row.addEventListener("click", event => {
		// for (i = 0; i < tasks.length; i++) {
		// 	if (tasks[i] === event.target.previousSibling.textContent) {
		// 		tasks.splice(i);
		// 		console.log(tasks);
		// 	}
		event.target.parentNode.remove();
		});
});

// Toggle done
const todo = document.querySelectorAll(".todo");
todo.forEach(row => {
	row.addEventListener("click", event => {
		event.currentTarget.children[0].classList.toggle('checked');
		event.currentTarget.classList.toggle("done");
	});
});