class Functionality {
  constructor() {
    
  }
  
  addTask() {
    window.location.href = 'taskAdd/addTask.html';
  }
  
  takAllTask() {
    const allTask = window.localStorage.getItem('allTask');
    return allTask ? JSON.parse(allTask) : null
  }
  
  seeTasks() {
    
  }
}