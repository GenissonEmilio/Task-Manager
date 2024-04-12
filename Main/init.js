(function () {
  //select modal, close span and functionality
  let modal = document.getElementById('mymodal');
  let span = document.getElementsByClassName('close')[0];
  let mbt = document.querySelectorAll('.mbut');
  
  //Open and close the model
  mbt.forEach(button => {
    button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  });
  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  //Add a new Task
  document.querySelector('#addTask').addEventListener('click', bu => {
    const functionality = new Functionality({
      button: bu,
      modal: modal,
      span: span
    });
    functionality.addTask();
  });
  
  //Add new Widgets
  document.querySelector('#widgets').addEventListener('click', bu => {
    const functionality = new Functionality({
      button: bu,
      modal: modal,
      span: span
    });
    functionality.addWedgets();
  });
  
  //See all Tasks
  document.querySelector('#allTasks').addEventListener('click', bu => {
    const functionality = new Functionality({
      button: bu,
      modal: modal,
      span: span
    });
    functionality.seeTasks();
  });
  
})()