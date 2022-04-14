import Project from "./projects";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.inbox = [];
    this.today = [];
    this.week = [];
  }
  addProject(project) {
    this.projects.push(project);
  }
  getProjects() {
    return this.projects;
  }
  addToInbox(task) {
    this.inbox.push(task);
    let todaysDate = new Date();
    let lastDay = new Date(todaysDate);

    lastDay.setDate(lastDay.getDate() + 6);
    console.log(lastDay);
    if (task.dueDate.toDateString() === todaysDate.toDateString()) {
      this.today.push(task);
    }
    if (task.dueDate >= todaysDate && task.dueDate <= lastDay) {
      this.week.push(task);
    }
  }
  getInbox() {
    return this.inbox;
  }
  getToday() {
    return this.today;
  }
  getWeek() {
    return this.week;
  }
}
