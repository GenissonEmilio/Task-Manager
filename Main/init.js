(function () {
  //Start functionality
  const functionality = new Functionality();
  
  //Add a new Task
  document.querySelector('#addTask').addEventListener('click', () => {
    functionality.addTask();
  });
  
  //Add new Widgets
  document.querySelector('#widgets').addEventListener('click', () => {
    
  });
  
  //See all Tasks
  document.querySelector('#allTasks').addEventListener('click', () => {
    functionality.seeTasks();
  });
  
})()