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
            let todos= JSON.parse(localStorage.getItem('todos'));
            todos.splice(todos.indexOf(li.innerHTML), 1);
            localStorage.setItem('todos', JSON.stringify(todos));
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
    let todos=null;
    todos= JSON.parse(localStorage.getItem('todos'));
    if(!todos){
        // if todos array does not exist in local storage, create new array and push todo to it
        localStorage.setItem('todos', JSON.stringify([]));
        // get the just created todos array from local storage
        todos= JSON.parse(localStorage.getItem('todos'));
    }
    // add the new todo
    todos.push(todo);
    // store the updated todos array in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function that gets todo from local storage and renders them in #todo-list
// this function would run once on page load...
// it is called below at the window.onload event
function getTodo(){
    // get the todos array from local storage
    let todos= JSON.parse(localStorage.getItem('todos'));
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


// run the checkUser function once page loads
window.addEventListener('load', ()=>{
    checkUser()
    getTodo()
    removeTodo()
})
