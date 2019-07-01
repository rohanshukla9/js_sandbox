//Create the element to add


const li = document.createElement('li');

//Add a class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

//create Text node and append
li.appendChild(document.createTextNode('Hello World'));

//Create new Link element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon html

link.innerHTML = '<i class="fa fa-remove"></i>'; 

// append 2 elements, link into li
li.appendChild(link);

//Append the new LI as a child to the UL
document.querySelector('ul.collection').appendChild(li);

console.log(li);