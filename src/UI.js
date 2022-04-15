import TodoList from "./todolist";
import Project from "./projects";
import Task from "./task";
import { compareAsc, format } from "date-fns";

const myList = new TodoList();
const projectsdiv = document.getElementById("projects-container");
const addProjectBtn = document.getElementById("add-project-button");
const addProjectDiv = document.querySelector("#add-project");
const mainContent = document.querySelector("#main-content");
const inboxTab = document.querySelector("#inbox-tab");
const todayTab = document.querySelector("#today-tab");
const weekTab = document.querySelector("#week-tab");

myList.addToInbox(new Task("Test", new Date(2022, 03, 14), "high"));
myList.addToInbox(new Task("Test2", new Date(2022, 03, 15), "high"));
myList.addToInbox(new Task("Test3", new Date(2022, 03, 16), "high"));
myList.addProject(new Project("Test"));
myList.addProject(new Project("Test2"));
let tester = new Project("Test3");
tester.addTask(new Task("Laundry", new Date(2023, 2, 22), "High"));
myList.addProject(tester);

class UI {
  static loadHome() {
    this.displayProjects();
    this.setupProjectBtns();
    this.loadInboxContent();
    //this.loadTodayContent();
    //this.loadWeekContent();
    //this.initButtons();
  }

  static displayProjects() {
    let projects = myList.getProjects();
    projectsdiv.innerHTML = "";
    projects.forEach((item) => {
      projectsdiv.innerHTML += `<div class="project-tab">
      <h3 class="project-buttons"><span><i class="fa-solid fa-list-check"></i></span>${item.name}</h3>
      </div>`;
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
  static loadProjectContent(project) {
    console.log(project);
    let obj = myList.findProject(project);
    console.log(obj);
    mainContent.innerHTML = `<h2>${obj.name}</h2>`;
    let tasks = obj.getTasks();
    tasks.forEach((task) => {
      mainContent.innerHTML += `<div class='task-card'>
                                    <input type='checkbox' class='task-item'>    
                                    <h3 class='task-item'>${task.title}</h3>
                                    <h3 class='task-item'>${task.dueDate.toDateString()}</h3>
                                    </div>`;
    });
  }
  static setupProjectBtns() {
    let projectBtns = document.getElementsByClassName("project-buttons");
    inboxTab.addEventListener("click", () => {
      this.loadInboxContent();
    });
    todayTab.addEventListener("click", () => {
      this.loadTodayContent();
    });
    weekTab.addEventListener("click", () => {
      this.loadWeekContent();
    });
    for (let projectBtn of projectBtns) {
      projectBtn.addEventListener("click", function () {
        UI.loadProjectContent(projectBtn.textContent);
      });
    }
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
