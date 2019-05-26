const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

// Append existing tasks in list
for (let task of tasks) {
	const existingTodo = document.createElement("li");
	existingTodo.textContent = task;
	document.querySelector('#todo-list').appendChild(existingTodo);
}

// Toggle Done
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => event.target.classList.toggle('done'));

// Add Todo via form
const todoForm = document.querySelector('#todo-form');
const todoFormSubmit = document.querySelector('#todo-form-button');

todoFormSubmit.addEventListener('click', () => {
	const newTodo = document.createElement("li");
	newTodo.textContent = todoForm.value;
	document.querySelector('#todo-list').appendChild(newTodo);
});

// Listen for 'Enter' key to submit form
todoForm.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && todoForm.value.trim() !== '') { // Prevents whitespace entries
		const newTodo = document.createElement("li");
		newTodo.textContent = todoForm.value;
		document.querySelector('#todo-list').appendChild(newTodo);
		todoForm.value = ''; // Resets form
	}
});

