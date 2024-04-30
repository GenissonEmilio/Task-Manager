let input = document.querySelector('.task-name');
const add = document.querySelector('.add');
const key = 'allTask';
const functionality = new Functionality();

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
      window.localStorage.setItem('mainTask', JSON.stringify({
        mainTask: name
      }));
    });
  }
}