 function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = '';
 }
 function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
  saveTasks();
 }
 function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
 }
 function saveTasks() {
  const tasks = document.getElementById('taskList').innerHTML;
  localStorage.setItem('tasks', tasks);
 }
 function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    document.getElementById('taskList').innerHTML = tasks;
  }
 }
 window.onload = loadTasks