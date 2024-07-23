// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// document.addEventListener("DOMContentLoaded", getLocalTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("change", filterTodo);

// function addTodo(event) {
//   event.preventDefault();
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   //ADDING TO LOCAL STORAGE
//   saveLocalTodos(todoInput.value);

//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fas fa-trash"></li>';
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);

//   todoList.appendChild(todoDiv);
//   todoInput.value = "";
// }

// function deleteCheck(e) {
//   const item = e.target;

//   if (item.classList[0] === "trash-btn") {
//     const todo = item.parentElement;
//     todo.classList.add("slide");

//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", function () {
//       todo.remove();
//     });
//   }

//   if (item.classList[0] === "complete-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
//   }
// }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "incomplete":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getLocalTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function (todo) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);

//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fas fa-trash"></li>';
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);

//     todoList.appendChild(todoDiv);
//   });
// }

// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const selectFilter = document.getElementById("filter-tasks");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
const selectedOption = selectFilter.value;
const tasks = listContainer.children;

for (let i = 0; i < tasks.length; i++) {
  switch (selectedOption) {
    case "all":
      tasks[i].style.display = "block";
      break;
    case "completed":
      tasks[i].style.display = tasks[i].classList.contains("complete")
        ? "block"
        : "none";
      break;
    case "incomplete":
      tasks[i].style.display = tasks[i].classList.contains("incomplete")
        ? "block"
        : "none";
      break;
  }
}
function filterTasks() {
  const selectedOption = selectFilter.value;
  const tasks = listContainer.children;

  for (let i = 0; i < tasks.length; i++) {
    switch (selectedOption) {
      case "all":
        tasks[i].style.display = "block";
        break;
      case "completed":
        tasks[i].style.display = tasks[i].classList.contains("complete")
          ? "block"
          : "none";
        break;
      case "incomplete":
        tasks[i].style.display = tasks[i].classList.contains("incomplete")
          ? "block"
          : "none";
        break;
    }
  }
}
