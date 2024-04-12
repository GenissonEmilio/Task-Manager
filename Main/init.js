(function () {
  //concertar bug, adição de tarefa apenas quando o botão de adicionar tarefa for clicado
  
  //Select model and close span
  modal = document.getElementById('modal');
  close = document.getElementsByClassName('close')[0];
  
  //Start functionality
  const functionality = new Functionality();
  
  //Open and close the modal
  document.querySelectorAll('.mbut').forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block'; 
    });
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
  //Add a new Task
  document.querySelector('#addTask').addEventListener('click', () => {
    functionality.addTask();
  });
  
  //Add new Widgets
  document.querySelector('#widgets').addEventListener('click', () => {
    functionality.addWedgets();
  });
  
  //See all Tasks
  document.querySelector('#allTasks').addEventListener('click', () => {
    functionality.seeTasks();
  });
  
})()