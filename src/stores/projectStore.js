const { makeAutoObservable } = require("mobx");
const { instance } = require("./instance");

class ProjectStore {
  constructor() {
    makeAutoObservable(this);
  }
  projects = [];

  fetchProjects = async () => {
    try {
      const res = await instance.get("api/project/");
      this.projects = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  addProject = async (project, semesterId, handleClose) => {
    try {
      project.semester = semesterId;
      console.log("project store", project);
      const res = await instance.post("api/project/", project);
      this.projects.push(res.data);
      handleClose();
    } catch (error) {
      console.log({ error });
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fetchProjects();
export default projectStore;
