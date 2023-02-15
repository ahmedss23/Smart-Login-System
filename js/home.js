"use strict";

let users = JSON.parse(localStorage.getItem('users'));
let user_email = localStorage.getItem('user_email');
let validUser = IsValidId(user_email);

let logOutBtn = document.querySelector('#logOutBtn');
if(user_email == null || !validUser){
    location.assign('/')
}

function IsValidId(query){
    for(let i = 0; i < users.length; i++){
        if(users[i].email == query){
            return users[i];
        }
    }
    return false;
}

if(validUser){
    document.querySelector('#welcomeMsg').innerHTML = 'Welcome ' + validUser.name;
}

logOutBtn.addEventListener('click',function(){
    localStorage.removeItem('user_email');
    location.assign('/')
});