//Select Task name
let nameJson = window.localStorage.getItem('task');
let name = nameJson ? JSON.parse(nameJson) : null;

//Select Taskname in MainScreen and add a MainTask
let taskName = document.querySelector('.taskName')
taskName.innerHTML += name.mainTask

/* Verificar em looping? 
while (true) {
  
}*/