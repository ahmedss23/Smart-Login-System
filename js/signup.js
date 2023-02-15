"use strict";

let userNameInput = document.querySelector('#name');
let userEmailInput = document.querySelector('#email');
let userPasswordInput = document.querySelector('#password');
let SignUpBtn = document.querySelector('#signUpBtn');
let alertDiv = document.querySelector('#alert');
let successDiv = document.querySelector('#success');
let users = [];
if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
}

signUpBtn.addEventListener('click',function(){
    let userName = userNameInput.value;
    let userEmail = userEmailInput.value;
    let userPassword = userPasswordInput.value;
    let errors = [];

    alertDiv.classList.replace('d-block','d-none')
    successDiv.classList.replace('d-block','d-none')

    if(!userName){
        errors.push('Please enter your name');
    }
    if(!userEmail){
        errors.push('Please enter your email');
    }
    if(!userPassword){
        errors.push('Please enter your password');
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].name == userName){
            errors.push('Name is already taken');
        }

        if(users[i].email == userEmail){
            errors.push('Email is already taken');
        }
    }

    if(errors.length){
        alertDiv.classList.replace('d-none','d-block')
        let html = '';
        for(let i = 0; i < errors.length; i++){
            html += errors[i] + '<br>'
        }
        alertDiv.innerHTML = html;
        return;
    }

    users.push({
        name: userName,
        email: userEmail,
        password: userPassword
    });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('success','Sucess, Please login to continue.');
    location.assign('/');

});