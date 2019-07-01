let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


// Get Child nodes of the UL

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element of the html
// 2 - Attribute (deprecated)
// 3 -Text Node
// 8 - Comment
// 9 - Document itself
// 10- Doctype


// get children Element Nodes

val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Children of Children

val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//Last child

val = list.lastChild;
val = list.lastElementChild;

//count child elements

val = list.childElementCount;

//Get ParentNode

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

console.log(val);

