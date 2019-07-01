class Person {
  constructor(firstName, lastName) {

    this.firstName =  firstName;
    this.lastName = lastName;

  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const mary  = new Person('Mary', 'Last');

console.log(mary.greeting());