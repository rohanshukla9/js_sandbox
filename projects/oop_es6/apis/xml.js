
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  
  const xhr = new XMLHttpRequest();

  //open (specifiy type of requewst)

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    if(this.status === 200){

      console.log(this.responseText);

    }
  }

  xhr.send();
}