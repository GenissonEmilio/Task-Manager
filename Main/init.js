(function () {
  //Start the functionalites
  const functionality = new Functionality({
    element: document.querySelector('.mainScreen')
  });
  
  //Add a new Task
  document.querySelector('#addTask').addEventListener('click', () => {
    functionality.addTask();
  })
  
  //Add new Widgets
  document.querySelector('#widgets').addEventListener('click', () => {
    functionality.addWedgets();
  })
  
  //See all Tasks
  document.querySelector('#allTasks').addEventListener('click', () => {
    functionality.seeTasks();
  })
  
})()