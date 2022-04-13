var form= document.querySelector('form');
form.addEventListener('submit', signUp)

// function that gets form data and signs up the user
function signUp(event){
    event.preventDefault();
    // create default array to store users if it does not exist on local storage
    if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify([]));
    }

    var userPassword=document.getElementById('password').value;
    var passWord1 = document.getElementById('initial-password').value
    var userEmail= document.getElementById('email').value;
    var errorField= document.getElementById('error-message');

    if (passWord1 !== userPassword) {
        errorField.innerHTML= 'password is incorrect';
        return
    }
    var user ={
        email:userEmail,
        password:userPassword
    };

    // check if users exist in local storage, if yes push new user to the array else create new array and push new user to it
    var users= JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('login_user', user.email);

    // redirect to todo page
    window.location.href='todo.html';
}