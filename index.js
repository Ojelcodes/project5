var form= document.querySelector('form');
form.addEventListener('submit', login)
 
// login function that gets form data, checks local storage,
// if email and password match records,
// if yes redirect to todo page, else display error message
function login(event){
    event.preventDefault();
    var userPassword=document.getElementById('password').value;
    var userEmail= document.getElementById('email').value;
    var errorField= document.getElementById('error-message');

    var users= JSON.parse(localStorage.getItem('users'));
    if(!users){
        errorField.innerHTML= 'user not found';
        return
    }
    var user= users.find(user=>user.email===userEmail && user.password===userPassword);
    if(user){
        window.location.href='todo.html';
    } else {
        errorField.innerHTML= 'email or password is incorrect';
    }
}


