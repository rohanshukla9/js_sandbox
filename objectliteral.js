const person = {
  firstName: 'Rohan',
  lastName: 'Shukla',
  age: 32,
  email: 'rohan@rohan.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },

  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
//get specific value

val  = person.firstName;
val = person.age;

val = person.hobbies;
val = person.address.state;
val = person.address['city'];

val = person.getBirthYear();

//console.log(val);

const people = [
  {name: 'John', age:30},
  {name: 'Mike', age:23}
];

for(let i =0; i<people.length; i++){
  console.log(people[i].name);
}



