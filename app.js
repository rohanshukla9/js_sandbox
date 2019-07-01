const name = 'rohan';
const age = 24;
const job =  'web  developer';
const city = 'miami';
let html;
//without template strings (es5)

//html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job '+ job + '</li><li>City:' + city +  '</li></ul>';

function hello(){
  return 'hello world';
}


//with Template Strings( es  6)

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${hello()}</li>
</ul>


`;


document.body.innerHTML = html;