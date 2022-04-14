class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  addTask(task) {
    this.tasks.push(task);
  }
}

export default Project;
