"use strict";

let userEmailInput = document.querySelector('#email');
let userPasswordInput = document.querySelector('#password');
let SignInBtn = document.querySelector('#signInBtn');
let alertDiv = document.querySelector('#alert');
let successDiv = document.querySelector('#success');
let users = [];

if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
}

if(localStorage.getItem('success')){
    successDiv.classList.replace('d-none','d-block');
    successDiv.innerText = localStorage.getItem('success');
    localStorage.removeItem('success');
}

signInBtn.addEventListener('click',function(){
    let userEmail = userEmailInput.value;
    let userPassword = userPasswordInput.value;
    let errors = [];
    alertDiv.classList.replace('d-block','d-none')

    if(!userEmail){
        errors.push('Please enter your email');
    }
    if(!userPassword){
        errors.push('Please enter your password');
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

    for(let i = 0; i < users.length; i++){
        if(users[i].email == userEmail && users[i].password == userPassword){
            localStorage.setItem('user_email', users[i].email);
            location.assign('/home.html')
            return;
        }
    }

    alertDiv.classList.replace('d-none','d-block');
    alertDiv.innerHTML = 'Incorrect Email or Password';
});