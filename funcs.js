//functions declarations

function greet(firstName = 'Rohan', lastName = 'Doe'){
  //console.log('hello');

  return 'Hello ' + firstName + ' ' +  lastName;
}

/* console.log(greet()); */

//function  expressions

const square = function(x){
  return x*x;
};
/* 
console.log(square(8)); */


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES
/* 

(function(){
  console.log('IIFE ran...');
})(); */
/* 
(function(name){
  console.log('IIFE ran...' + name);
})('Brad'); */



//PROPERTY METHODS

const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}



todo.add();
todo.edit(22);
