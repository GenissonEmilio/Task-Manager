input = document.querySelector('.task-name');
add = document.querySelector('.add');
key = 'task';

function saveName(name) {
  window.localStorage.setItem(this.key, JSON.stringify({
    taskName: name
  }));
}

//Delete the text
input.addEventListener('click', () => {
    input.value = ' '
  });
    
//Save task name
add.addEventListener('click', () => {
  console.log(input.value)
  saveName(input.value)
});


/*
  getSaveFile() {
    const file = window.localStorage.getItem(this.saveFileKey);
    return file ? JSON.parse(file) : null
  }
  
  load() {
    const file = this.getSaveFile();
    if (file) {
      this.mapId = file.mapId;
      this.startingHeroX = file.startingHeroX;
      this.startingHeroY = file.startingHeroY;
      this.startingHeroDirection = file.startingHeroDirection;
      Object.keys(file.playerState).forEach(key => {
        playerState[key] = file.playerState[key];
      })
    }
  }*/