import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class EvalStore {
  constructor() {
    makeAutoObservable(this);
  }

  evals = [];
  eval = null;

  fetchEval = async () => {
    try {
      const res = await instance.get("api/eval/");
      this.evals = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  createEval = async (project) => {
    try {
      const Project = { project: project.id };
      const res = await instance.post("api/eval/", Project);
      this.eval = res.data;
    } catch (error) {
      console.log({ error });
    }
  };
}

const evalStore = new EvalStore();
evalStore.fetchEval();
export default evalStore;
