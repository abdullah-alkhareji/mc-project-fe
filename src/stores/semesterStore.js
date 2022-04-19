import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class SemesterStore {
  constructor() {
    makeAutoObservable(this);
  }
  semesters = [];

  fetchSemesters = async () => {
    try {
      const res = await instance.get("api/semester/");
      this.semesters = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  addSemester = async (data) => {
    try {
      const res = await instance.post("api/semester/", data);
      this.semesters.push(res.data);
    } catch (error) {
      console.log({ error });
    }
  };
}

const semesterStore = new SemesterStore();
semesterStore.fetchSemesters();
export default semesterStore;
