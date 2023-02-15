{
    "use strict";

    let users = JSON.parse(localStorage.getItem('users'));
    let user_email = localStorage.getItem('user_email');

    if(user_email != null && IsValidId(user_email)) {
        location.assign('/home.html')
    }

    function IsValidId(query){
        for(let i = 0; i < users.length; i++){
            if(users[i].email == query){
                return true;
            }
        }
        return false;
    }
}