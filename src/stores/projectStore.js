import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

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

  addProject = async (
    project,
    criteria,
    semesterId,
    handleClose,
    setCriteriaa
  ) => {
    try {
      project.semester = semesterId;
      project.criteria = criteria;
      console.log({ project });
      const res = await instance.post("api/project/", project);
      this.projects.push(res.data);
      handleClose();
      setCriteriaa([]);
    } catch (error) {
      console.log({ error });
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fetchProjects();
export default projectStore;
