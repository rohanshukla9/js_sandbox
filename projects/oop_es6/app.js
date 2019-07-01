//Person Contructor

function Person(name, dob){
  this.name = name;

  this.birthday = new Date(dob);

  //method within the constructor
  
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const rohan = new Person('rohan', '12-01-1994');

console.log(rohan.calculateAge());