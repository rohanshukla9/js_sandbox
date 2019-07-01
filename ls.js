//Set local storage item

/* localStorage.setItem('name', 'Rohan');

localStorage.setItem('age', '30');

//set Session storage

sessionStorage.setItem('name', 'Shukla'); */

//remove from storage
/* 
localStorage.removeItem('name'); */

//get from Storage

/* const name = localStorage.getItem('name');

console.log(name); */

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  console.log(task);

  e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);

});