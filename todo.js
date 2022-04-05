// var bttn = document.getElementById('add-item')
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
    document.getElementById('todo').value='';
    removeTodo()
}

// removeTodo function that detaches the li double-clicked from the list
function removeTodo(){
    todo_list.querySelectorAll('li').forEach(function(li){
        li.addEventListener('dblclick', (ev)=>{
            ev.target.remove();
        })
    });
}



// bttn.addEventListener( 'click' , function(){
//     var wrapper = document.createElement('div');
//     wrapper.classList.add('todo-set')
//     var checkBox = document.createElement('input');
//     checkBox.classList.add('input1')
//     var todoItem = document.createElement('input');
//     todoItem.classList.add('input-area')
//     todoItem.placeholder ='create a new todo'
//     wrapper.appendChild(checkBox);
//      wrapper.appendChild(todoItem);
//     New.appendChild(wrapper);
// });
// button.addEventListener('click',function(){
//     var wrapper = document.createElement('div');
//     wrapper.classList.add('todo-set')
//     var checkBox = document.createElement('input');
//     checkBox.classList.add('input1')
//     var todoItem = document.createElement('input');
//     todoItem.classList.add('input-area')
//     todoItem.placeholder ='create a new todo'
//     wrapper.appendChild(checkBox);
//      wrapper.appendChild(todoItem);
//     New.appendChild(wrapper);
//     New.removeChild(wrapper)
// })
