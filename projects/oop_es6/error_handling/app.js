const user = { email: 'root@gmail.com' };

try {
  //this will produce a reference error
  //myFunction();

  //produce a type error

  //null.myFunction();

  if (!user.name) {
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
} finally {
  //no matter above output it will run

  console.log('finally runs bro');
}

console.log('Program continues...');
