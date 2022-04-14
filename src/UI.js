import TodoList from "./todolist";
import Project from "./projects";
import Task from "./task";
import { compareAsc, format } from "date-fns";

const myList = new TodoList();
const projectsdiv = document.getElementById("projects-container");
const addProjectBtn = document.getElementById("add-project-button");
const addProjectDiv = document.querySelector("#add-project");
const mainContent = document.querySelector("#main-content");

myList.addToInbox(new Task("Test", new Date(2022, 03, 14), "high"));

class UI {
  static loadHome() {
    this.displayProjects();
    this.loadInboxContent();
    this.loadWeekContent();
    //this.initButtons();
  }
  static displayProjects() {
    let projects = myList.getProjects();
    projectsdiv.innerHTML = "";
    projects.forEach((item) => {
      projectsdiv.innerHTML += `<h3>${item.name}</h3>`;
    });
  }
  static showProjectInput() {
    addProjectBtn.style.visibility = "hidden";
    addProjectBtn.style.position = "absolute";
    addProjectDiv.innerHTML += "<input id='projects-input' type='text'>";
    addProjectDiv.innerHTML += "<button id='submit-project'>Add</button>";
    addProjectDiv.innerHTML += "<button id='cancel'>Cancel</button>";
  }
  static cancelProject() {
    addProjectDiv.innerHTML =
      "<button id='add-project-button' class='add'>+ Add Project</button>";
  }

  static loadInboxContent() {
    mainContent.innerHTML = "<h2>Inbox</h2>";
    let tasks = myList.getInbox();
    console.log(tasks);
    tasks.forEach((task) => {
      mainContent.innerHTML += `<div class='task-card'>
                                <input type='checkbox' class='task-item'>    
                                <h3 class='task-item'>${task.title}</h3>
                                <h3 class='task-item'>${task.dueDate.toDateString()}</h3>
                                </div>`;
    });
  }

  static loadTodayContent() {
    mainContent.innerHTML = "<h2>Today</h2>";
    let tasks = myList.getToday();
    console.log(tasks);
    tasks.forEach((task) => {
      mainContent.innerHTML += `<div class='task-card'>
                                  <input type='checkbox' class='task-item'>    
                                  <h3 class='task-item'>${task.title}</h3>
                                  <h3 class='task-item'>${task.dueDate.toDateString()}</h3>
                                  </div>`;
    });
  }
  static loadWeekContent() {
    mainContent.innerHTML = "<h2>This Week</h2>";
    let tasks = myList.getWeek();
    console.log(tasks);
    tasks.forEach((task) => {
      mainContent.innerHTML += `<div class='task-card'>
                                  <input type='checkbox' class='task-item'>    
                                  <h3 class='task-item'>${task.title}</h3>
                                  <h3 class='task-item'>${task.dueDate.toDateString()}</h3>
                                  </div>`;
    });
  }

  /*static addProject() {
    addProjectBtn.style.visibility = "hidden";
    addProjectBtn.style.position = "absolute";
    addProjectDiv.innerHTML += "<input id='projects-input' type='text'>";
    addProjectDiv.innerHTML += "<button id='submit-project'>Add</button>";
    addProjectDiv.innerHTML += "<button>Cancel</button>";
    document.querySelector("#submit-project").addEventListener("click", () => {
      let newProject = document.querySelector("#projects-input").value;
      newProject = new Project(newProject);
      myList.addProject(newProject);
      this.displayProjects();
      addProjectDiv.innerHTML =
        "<button id='add-project-button' class='add'>+ Add Project</button>";
    });
  }*/
}

export default UI;
