//EACH  object in javascript has a PROTOTYPE
// PROTOTYPE is an Object itself
//All objects inherit their properties and methods from their prototype

//Object.prototype

//Person Constructor

function Person(firstName, lastName, dob){

  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  //method within the constructor
  
 /*  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } */
}

//Calculate age

Person.prototype.calculateAge  = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}



const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Doe', '8-12-92');

console.log(mary);

console.log(john.calculateAge());