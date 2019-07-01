//init github
const github = new Github;

//init ui.js
const ui = new UI;

//search input

const searchUser = document.getElementById('searchUser');

//search input event listener

searchUser.addEventListener('keyup', (e) => {
  
  //get input text

  const userText = e.target.value;

  if(userText !== ''){
    //Make http call

    github.getUser(userText).then(data => {
    // console.log(data);

     if(data.profile.message === 'Not Found'){
       //show alert

       ui.showAlert('User not found', 'alert alert-danger');

     } else {
       //show profile
       ui.showProfile(data.profile);
       ui.showRepos(data.repos);

     }
    })
  } else {
    //clear profile

    ui.clearProfile();

  }

});