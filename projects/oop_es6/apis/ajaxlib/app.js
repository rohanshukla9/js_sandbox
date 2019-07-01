const http = new EasyHTTP;

//get users

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// user data
const data = {
  name: 'John doe',
  username: 'john',
  email: 'jdoe@gmail.com'
}

//create users

/* http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err)); 
 */

 //update post

/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));  */

/* http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(() => console.log(data))
.catch(err => console.log(err)); 
 */
