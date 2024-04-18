class Ka {
  constructor() {
    
  }
  
  async ob() {
    const name = await window.localStorage.getItem('task');
    return name ? JSON.parse(name) : null
  }
  
}