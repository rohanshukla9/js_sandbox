/* const sayHello = function(){
  console.log('hello');
}
 */
/* const sayHello = () => {
  console.log('hello');
}
 */

 //one liner doesn't need braces

/* const sayHello = () => console.log('hello');
 */

//return one line object literal
/* const sayHello = () =>  ({msg: 'helloasad'});
 */

//single param doesnt need parenthesis

/* const sayHello = name => console.log(`Hello ${name}`);
 */
//multiple params need parenthesis

/* const sayHello  = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


sayHello('Brad', 'traversy'); */

const users = ['rohan', 'nathan', 'john'];

/* const nameLengths  =  users.map(function(name){

  return name.length;

}); */

/* const nameLengths  =  users.map((name) => {

  return name.length;

}); */

//shortest

const nameLengths = users.map(name => name.length);


console.log(nameLengths);