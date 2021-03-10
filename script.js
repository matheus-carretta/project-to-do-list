function createListItem () {
  let newLi = document.createElement('li');
  newLi.innerText = inputText.value;
  document.getElementById('lista-tarefas').appendChild(newLi);
  inputText.value = ''; 
}

let buttonCreateTask = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');

buttonCreateTask.addEventListener('click', createListItem);