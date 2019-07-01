const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function(newLastName){

  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName =  'Will';
mary.age = 30;

console.log(mary);

