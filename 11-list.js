const todoList = [{
  name: '',
  dueDate: ''
}];

renderList ()

function renderList () {
let todoListHTML = ''

for (let i = 0 ; i < todoList.length; i++) {
const todoObject = todoList [i]
const name = todoObject.name
const date = todoObject.dueDate
const html =  `<p class = 'name'> ${name}</p> <p class = 'date'>${date}</p> <p ><button 
class = '
delete-button
' 

onclick = '

  todoList.splice(${i}, 1)
  renderList ()

'>Delete</button> </p>`;
todoListHTML += html

}
document.querySelector ('.js-todo-div').innerHTML = todoListHTML
console.log (todoListHTML)

document.querySelector('.js-todo-div')
.innerHTML = todoListHTML;}

function addTodo () {
  let inputElement = document.querySelector ('.js-name-input');
let name = inputElement.value;
let dateInputElement = document.querySelector('.js-date-input');
const dueDate = dateInputElement.value;
 todoList.push ({
  name,
  dueDate}
  )
console.log (todoList);



inputElement.value = ''
renderList ();
};
