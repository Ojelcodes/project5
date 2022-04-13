 let back = document.getElementById('add-item')
// let button = document.getElementById('remove-item')
// let New = document.getElementById('content')

// function that gets todo from form and renders them in #todo-list
const todo_list = document.querySelector("#todo-list")
document.querySelector('form').addEventListener('submit', addTodo);

function addTodo(event){
    event.preventDefault();
    let todo= document.getElementById('todo').value;
    // first of all store it in local storage
    storeTodo(todo);

    let li= document.createElement('li');
    li.innerHTML= todo;
    todo_list.appendChild(li);
    document.getElementById('todo').value=''; 
    removeTodo()
}
// removeTodo function that detaches the li double-clicked from the list
function removeTodo(){
    todo_list.querySelectorAll('li').forEach(function(li){
        li.addEventListener('dblclick', (ev)=>{
            // first of all search and remove the todo from local storage
            let loggedInUser = localStorage.getItem("login_user");
            // let users= JSON.parse(localStorage.getItem('users'));
            // let todos= JSON.parse(localStorage.getItem('todos'));
            loggedInUser.splice(loggedInUserEmail.indexOf(li.innerHTML), 1);
            
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            // then detach the li from the list
            ev.target.remove();
        })
    });
}

function checkUser(){
    // check if users exist in local storage,
    // if yes load page, else redirect to signup page
    if(!localStorage.getItem('users')){
        window.location.href='signup.html';
    }
}

// function that gets user from local storage and returns the user object
function getUser(){
    // using array destructuring, get the first user from the array
    return [user]= JSON.parse(localStorage.getItem('users'));
}

// function that stores todo(passed into it) in an array in
// local storage without overriding the existing array
function storeTodo(todo){
     let loggedInUserEmail = localStorage.getItem("login_user");
    console.log(loggedInUserEmail);
    var users= JSON.parse(localStorage.getItem('users'));
    let loggedinUser = users.find(user=> user.email=== loggedInUserEmail);
    console.log(loggedinUser);

    if(loggedinUser.todos){
        loggedinUser.todos.push(todo);
    }
    else{
        loggedinUser.todos = [];
        loggedinUser.todos.push(todo);
    }
    let userIndex ;
    users.forEach(function(user, i){
        if(user.email == loggedInUserEmail){
            userIndex = i
        }
    });
    users[userIndex] = loggedinUser;
    localStorage.setItem('users', JSON.stringify(users));

    // let todos=null;
    // todos= JSON.parse(localStorage.getItem('todos'));
    // if(!todos){
        
    //     localStorage.setItem('todos', JSON.stringify([]));
        
    //     todos= JSON.parse(localStorage.getItem('todos'));
    // }
    
    // todos.push(todo);
    
    // localStorage.setItem('todos', JSON.stringify(todos));
}

// function that gets todo from local storage and renders them in #todo-list
// this function would run once on page load...
// it is called below at the window.onload event
function getTodo(){
    // get the todos array from local storage
    let loggedInUserEmail = localStorage.getItem("login_user");
    var users= JSON.parse(localStorage.getItem('users'));
    let loggedinUser = users.find(user=> user.email=== loggedInUserEmail);
    let todos = loggedinUser.todos;
    // if todos array exists in local storage,
    // loop through the array and render each todo in #todo-list
    if(todos){
        todos.forEach(function(todo){
            let li= document.createElement('li');
            li.innerHTML= todo;
            todo_list.appendChild(li);
        });
    }
}

var logoutButton = document.getElementById('back');
logoutButton.addEventListener('click', logout)

function logout(){
    console.log("hdksfds")
    localStorage.setItem("login_user","")
    window.location.href='index.html';
}

// run the checkUser function once page loads
window.addEventListener('load', ()=>{
    checkUser()
    getTodo()
    removeTodo()
})
