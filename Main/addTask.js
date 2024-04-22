let input = document.querySelector('.task-name');
const add = document.querySelector('.add');
const key = 'task';

function saveName(name) {
  window.localStorage.setItem(key, JSON.stringify({
    name: name
  }));
}

//Delete the text
input.addEventListener('click', () => {
    input.value = ' '
  });
    
//Save task name
add.addEventListener('click', () => {
  saveName(input.value);
});