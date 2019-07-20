let re;
re = /hello/;
re = /hello/i; // i = case insensitive
/* re = /hello/g; //Global search */
/* 
console.log(re);
console.log(re.source); */

//exec() - Return result in an array or null if no match

/* const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
 */

//test() returns true or false

/* const result = re.test('Hello');
console.log(result);
 */

//match() - return result array or null

/* const str = 'Hello tghere';
const result = str.match(re);
console.log(result);
 */

//search() - returns index of first match if not found returns -1
/* 
const str = 'Hello there';
const result = str.search(re);

console.log(result); */

     
