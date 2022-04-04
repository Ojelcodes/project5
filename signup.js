var form= document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    var userPassword=document.getElementById('password').value;
    var userEmail= document.getElementById('email').value;
    var user ={
        email:userEmail,
        password:userPassword
    };
    var json=JSON.stringify(user);
    localStorage.setItem('user',json)
    let userDetails = localStorage.getItem('user');


        console.log(userDetails)
})
 