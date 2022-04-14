class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }
}

export default Project;
