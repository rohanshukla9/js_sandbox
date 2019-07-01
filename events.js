/* document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('hello world');

  //e.preventDefault();
}); */

document.querySelector('.clear-tasks').addEventListener('click', onClick);


function onClick(e){
  //console.log('clicked');

  let val;

  val = e;

  //event target element

  val = e.target;

  console.log(val);
}