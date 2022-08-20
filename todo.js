const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoSave = document.querySelector("#todo-form button");
const todoContainer = document.getElementById("todo-list");

const TODO_KEY = "todo-list";
const todoList = [];

const saveClicked = (event) => {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";

  saveTodo(todo);
};

const saveTodo = (todo) => {
  const newTodo = {
    id: Date.now(),
    content: todo,
    complete: false,
  };
  todoList.push(newTodo);

  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  paintTodo(newTodo);
};

const paintTodo = (newTodo) => {
  //const getTodo = JSON.parse(localStorage.getItem(TODO_KEY));
  const todoBox = document.createElement("div");
  todoBox.className = "todo-box";
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const todoSpan = document.createElement("span");
  todoSpan.innerText = newTodo.content;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  todoBox.appendChild(checkBox);
  todoBox.appendChild(todoSpan);
  todoBox.appendChild(deleteBtn);
  todoContainer.appendChild(todoBox);
};

const deleteTodo = () => {};

todoForm.addEventListener("submit", saveClicked);

if (localStorage.getItem(TODO_KEY)) {
  const todos = JSON.parse(localStorage.getItem(TODO_KEY));
  //todos.forEach(paintTodo(todos.content));

  //todos.forEach(console.log(""));
}
