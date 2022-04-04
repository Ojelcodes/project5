var bttn = document.getElementById('add-item')
var button = document.getElementById('remove-item')
var New = document.getElementById('content')

bttn.addEventListener( 'click' , function(){
    var wrapper = document.createElement('div');
    wrapper.classList.add('todo-set')
    var checkBox = document.createElement('input');
    checkBox.classList.add('input1')
    var todoItem = document.createElement('input');
    todoItem.classList.add('input-area')
    todoItem.placeholder ='create a new todo'
    wrapper.appendChild(checkBox);
     wrapper.appendChild(todoItem);
    New.appendChild(wrapper);
});
button.addEventListener('click',function(){
    var wrapper = document.createElement('div');
    wrapper.classList.add('todo-set')
    var checkBox = document.createElement('input');
    checkBox.classList.add('input1')
    var todoItem = document.createElement('input');
    todoItem.classList.add('input-area')
    todoItem.placeholder ='create a new todo'
    wrapper.appendChild(checkBox);
     wrapper.appendChild(todoItem);
    New.appendChild(wrapper);
    New.removeChild(wrapper)
})
