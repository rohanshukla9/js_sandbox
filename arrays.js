const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);

const fruit = ['Apple', 'Mangoes', 'Banananas'];

const mixed = [22, 'hello', true,  undefined, null, {a:1, b:2}, new Date()];

let val;

//Get array length
val  =  numbers.length;

//check ikf arrayt
val = Array.isArray(numbers);

//get single value
val = numbers[2];
val = numbers[0];

//insert into array
numbers[2] = 100;

//find index of value

val = numbers.indexOf(36);

//MUTATING ARRAYS

/* //ADD ONTO TO END
numbers.push(250);

//add to the front
numbers.unshift(120);

//take off from end
numbers.pop();

//take off from frontg
numbers.shift();

//splice values
numbers.splice(1, 3);
//reverse

numbers.reverse();
 */
//concatenate array

val = numbers.concat(numbers2);

//Sorting Arrays
val = fruit.sort();
/* val = numbers.sort();

//using compare function

val = numbers.sort(function(x, y){
  return x - y;
});

//reverse sort
val = numbers.sort(function(x, y){
  return y - x;
}); */

//find

function under50(num){
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);

