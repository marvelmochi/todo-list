const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoSave = document.querySelector("#todo-form button");
const todoContainer = document.getElementById("todo-list");

const TODO_KEY = "todo-list";
let todoList = [];

const saveClicked = (event) => {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";

  const newTodo = {
    id: Date.now(),
    content: todo,
    complete: false,
  };
  todoList.push(newTodo);
  saveTodo();
  paintTodo(newTodo);
};

const saveTodo = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
};

const paintTodo = (newTodo) => {
  //const getTodo = JSON.parse(localStorage.getItem(TODO_KEY));
  const todoBox = document.createElement("div");
  todoBox.className = "todo-box";
  todoBox.id = newTodo.id;
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("click", checkTodo);

  const todoSpan = document.createElement("span");
  todoSpan.innerText = newTodo.content;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  deleteBtn.addEventListener("click", deleteTodo);

  todoBox.appendChild(checkBox);
  todoBox.appendChild(todoSpan);
  todoBox.appendChild(deleteBtn);
  todoContainer.appendChild(todoBox);
};

const deleteTodo = (event) => {
  const targetBox = event.target.parentElement;
  console.log(targetBox);
  targetBox.remove();
  todoList = todoList.filter(
    (element) => element.id !== parseInt(targetBox.id)
  );
  console.log(todoList);
  saveTodo();
};

todoForm.addEventListener("submit", saveClicked);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  todoList = parseTodos;
  parseTodos.forEach(paintTodo);
}

function checkTodo(event) {
  const checkTarget = event.target;
  console.log(checkTarget.parentElement);
  const parseTodos = JSON.parse(savedTodos);
  console.log(parseTodos);

  if (checkTarget.checked) {
    console.log("checked!");
  } else {
    console.log("unchecked!");
  }

  console.log(todoList);
}

function checkToggle(element) {
  element.classList.toggle("clear");
}
