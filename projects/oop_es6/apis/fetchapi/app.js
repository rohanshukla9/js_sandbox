document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalApi);

function getText(){

  fetch('test.txt').then(res => res.text())
  .then(data => {
    console.log(data);

    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

//get local json data

function getJson(){

  fetch('posts.json').then(res => res.json())
  .then(data => {
    console.log(data);

    let output = '';

    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });

    document.getElementById('output').innerHTML = output;

  })
  .catch(err => console.log(err));
}

//get external api

function getExternalApi(){

  fetch('posts.json').then(res => res.json())
  .then(data => {
    console.log(data);

    let output = '';

    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });

    document.getElementById('output').innerHTML = output;

  })
  .catch(err => console.log(err));
}