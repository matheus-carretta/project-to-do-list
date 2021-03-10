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

toDoList.addEventListener('click', function (event) {
  let getLi = document.getElementsByTagName('li');
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
  if (event.target.className === 'completede') {
    event.target.classList.remove('completede');
  } else {
    event.target.className = 'completede';
  }
})
