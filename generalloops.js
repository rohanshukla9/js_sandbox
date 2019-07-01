//FOR LOOPS



const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
/* 
for(let  i  = 0;  i < cars.length; i++){
  console.log(cars[i]);
}
 */

 cars.forEach(function(car, index){
   console.log(`${index} : ${car}`);
 })



 //   MAP
/* 
 const users = [
   {id:1, name:'John'},
   {id:2, name:'Rohan'},
   {id:3, name:'Kate'}
 ];

 const ids = users.map(function(user){
   return user.id;
 });

 console.log(ids); */