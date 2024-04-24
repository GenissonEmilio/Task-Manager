let input = document.querySelector('.task-name');
const add = document.querySelector('.add');
const key = 'task';

function saveName(name) {
  window.localStorage.setItem(key, JSON.stringify({
    mainTask: name
  }));
}

//Delete the text
input.addEventListener('click', () => {
    input.value = ' '
  });

//Add all task


//Chek markup and add MainTask
function checkMarked() {
  let isCheked = document.getElementById('likeMainTask').checked;
  if (isCheked) {
    add.addEventListener('click', () => {
      saveName(input.value);
    });
  }
}