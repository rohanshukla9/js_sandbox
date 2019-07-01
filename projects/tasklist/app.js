//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners();

//Load all event listeners

function loadEventListeners(){

  // DOM load event

  document.addEventListener('DOMContentLoaded', getTasks);
  
  //Add task event
  form.addEventListener('submit', addTask);

  //Remove task Event
  taskList.addEventListener('click', removeTask);

  //clear task event
  clearBtn.addEventListener('click', clearTasks);

  filter.addEventListener('keyup', filterTasks);

}

//Get Task from LS

function getTasks(){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    //Create Text node and appened to li
    li.appendChild(document.createTextNode(task));
  
    // create new link element
  
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
  
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
  
    //Append the link to Li
    li.appendChild(link);
    //Append Li to UL
    taskList.appendChild(li);


  });

}

function addTask(e){

  if(taskInput.value === ''){
    alert('add a task');
  }

  // Create li element

  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //Create Text node and appened to li
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element

  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';

  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to Li
  li.appendChild(link);
  //Append Li to UL
  taskList.appendChild(li);


  //store in LS
  storeTaskInLocalStorage(taskInput.value);

  //clear input

  taskInput.value = '';

  e.preventDefault();

}

//Store Task in LocalStorage

function storeTaskInLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){

    if(confirm('Are  you sure  you want to delete')){
      e.target.parentElement.parentElement.remove();

      // Remove FRom LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }
  }
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){

    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }

  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

  //Clear Task

  function clearTasks(){


    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }

    //Clear FROM LS

    clearTasksFromLocalStorage();

  }

  //clear tasks from Localstorage
  function clearTasksFromLocalStorage(){
    localStorage.clear();
  }

  //filter tasks
  function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
      const item = task.firstChild.textContent;

      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display =  'block';
      } else {
        task.style.display = 'none';
      }

    });
  }





