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
}

const projectStore = new ProjectStore();
projectStore.fetchProjects();
export default projectStore;
