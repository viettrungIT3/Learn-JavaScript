"use strict";

var todos = [];

function onAddClick() {
  var newTodo = document.getElementById('newTodo').value;
  todos.push(newTodo);
  updateTodoList();
  document.getElementById('newTodo').value = '';
}

function updateTodoList() {
  var eleToDoList = document.getElementById('todo-list');
  eleToDoList.innerHTML = '';

  for (var i = 0; i < todos.length; i++) {
    eleToDoList.innerHTML += '<li onclick="onTodoClick(' + i + ')">' + todos[i] + '</li>';
  }
}

function onTodoClick(i) {
  todos.splice(i, 1); // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  updateTodoList();
}