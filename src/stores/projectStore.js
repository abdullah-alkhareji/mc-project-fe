import { makeAutoObservable } from "mobx";
import evalStore from "./evalStore";
import { instance } from "./instance";
import semesterStore from "./semesterStore";
import teamStore from "./teamStore";

class ProjectStore {
  constructor() {
    makeAutoObservable(this);
  }
  projects = [];

  fetchProjects = async () => {
    try {
      const res = await instance.get("api/project/");
      this.projects = res.data;
      return res;
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
      const res = await instance.post("api/project/", project);
      evalStore.createEval(res.data.id);
      this.projects.push(res.data);
      await semesterStore.fetchSemesters();
      await teamStore.fetchTeams();
      this.fetchProjects();
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
