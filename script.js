function createListItem () {
  if(inputText.value === ''){
    alert("Campo de texto vazio, favor preencher");
  } else{
    let newLi = document.createElement('li');
    newLi.innerText = inputText.value;
    document.getElementById('lista-tarefas').appendChild(newLi);
    inputText.value = ''; 
  }
}

let buttonCreateTask = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');

buttonCreateTask.addEventListener('click', createListItem);

let toDoList = document.getElementById('lista-tarefas');

toDoList.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})