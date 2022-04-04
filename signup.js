var form= document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    var userPassword=document.getElementById('password').value;
    var passWord1 = document.getElementById('initial-password').value
    var userEmail= document.getElementById('email').value;
    if (passWord1!== userPassword) {
        console.log(alert('password is in correct'))
    } return user
    var user ={
        email:userEmail,
        password1: passWord1,
        password:userPassword
    };
    var json=JSON.stringify(user);
    localStorage.setItem('user',json)
    let userDetails = localStorage.getItem('user');


        console.log(userDetails)
})
 