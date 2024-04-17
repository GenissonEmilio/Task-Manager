let input = document.querySelector('.task-name')
const key = 'taks'
const add = document.querySelector('.add')

input.addEventListener('click', () => {
  input.value = ' ';
});

add.addEventListener('click', () => {
  saveName(input.value);
})

function saveName(name) {
  window.localStorage.setItem(key, JSON.stringify({
    name: name
  }));
}


/*save() {
    window.localStorage.setItem(this.saveFileKey, JSON.stringify({
      mapId: this.mapId,
      startingHeroX: this.startingHeroX,
      startingHeroY: this.startingHeroX,
      startingHeroDirection: this.startingHeroDirection,
      playerState: {
        pizzas: playerState.pizzas,
        lineup: playerState.lineup,
        items: playerState.items,
        storyFlags: playerState.storyFlags
      }
    }));
  }
  
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