 var back = document.getElementById('add-item')
// var button = document.getElementById('remove-item')
// var New = document.getElementById('content')

// function that gets todo from form and renders them in #todo-list
const todo_list = document.querySelector("#todo-list")
document.querySelector('form').addEventListener('submit', addTodo);

function addTodo(event){
    event.preventDefault();
    var todo= document.getElementById('todo').value;
    var li= document.createElement('li');




    li.innerHTML= todo;
    todo_list.appendChild(li);
    nItem=document.getElementById('todo').value='';
    removeTodo()

}
var arr=[];
window.onload=function(){
    if (JSON.parse(localStorage.getItem('nItem'))!= null) 
arr=JSON.parse(localStorage.getItem('arr'));
console.log(arr)
display()
    
}
   
    
function closepg(){
    back.addEventListener('click' (ev)=>{
        ev.target.window.close()
    })
}


// removeTodo function that detaches the li double-clicked from the list
function removeTodo(){
    todo_list.querySelectorAll('li').forEach(function(li){
        li.addEventListener('dblclick', (ev)=>{
            ev.target.remove();
        })
    });
}
 

