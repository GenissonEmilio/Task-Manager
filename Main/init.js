(function () {
  //select modal, close span and functionality
  modal = document.getElementById('mymodal');
  span = document.getElementsByClassName('close')[0];
  
  //Open and close the model
  document.addEventListener('click', () => {
    modal.style.display = 'block';
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