function createListItem() {
  if (inputText.value === '') {
    alert("Campo de texto vazio, favor preencher");
  } else {
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
let getLi = document.getElementsByTagName('li');

toDoList.addEventListener('click', function (event) {
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      getLi[index].style.backgroundColor = 'transparent';
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
})

toDoList.addEventListener('dblclick', function (event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})

let buttonDeleteList = document.getElementById('apaga-tudo');

function deleteList () {
  let getLi = document.querySelectorAll('li');
  for(let index = 0; index < getLi.length; index += 1){
    getLi[index].remove();
  }
}

buttonDeleteList.addEventListener('click', deleteList);

let buttonRemoveCompleted = document.getElementById('remover-finalizados');

function removeCompleted () {
  let getLiCompleted = document.querySelectorAll('.completed');
  for(let index = 0; index < getLiCompleted.length; index += 1){
    getLiCompleted[index].remove();
  }
}

buttonRemoveCompleted.addEventListener('click', removeCompleted);