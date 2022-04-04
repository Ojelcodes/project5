var bttn= document.getElementById('login');
var userName=document.getElementById('name').value
var userEmail= document.getElementById('email').value
var user ={
    Name:userName,
    email:userEmail
};
var json=JSON.stringify(user);
localStorage.setItem(userName,json)
console.log(user added) 