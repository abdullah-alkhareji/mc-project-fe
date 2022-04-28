import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class EvalStore {
  constructor() {
    makeAutoObservable(this);
  }

  evals = [];
  eval = null;
  judge = null;

  fetchEval = async () => {
    try {
      const res = await instance.get("api/evaluation/");
      this.evals = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  createEval = async (project) => {
    try {
      const res = await instance.post("api/evaluation/", { project: project });
      this.eval = res.data;
      this.evals.push(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  addJudge = async (judgeData, evalId, navigate) => {
    try {
      judgeData.evaluation = evalId;
      const res = await instance.post("api/judge/", judgeData);
      this.judge.push(res.data);
      navigate(`/evaluation/${evalId}/${res.data.id}`);
    } catch (error) {
      console.log({ error });
    }
  };

  fetchJudges = async () => {
    try {
      const res = await instance.get(`api/judge/`);
      this.judge = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  updateJudge = async (judge, navigate) => {
    try {
      await instance.put(`api/judge/${judge.id}/`, judge);
      navigate(`/evaluation/${judge.evaluation}/${judge.id}/thanks`);
    } catch (error) {
      console.log(error.response);
    }
  };

  evaluationLock = async (evaluation) => {
    await instance.put(`/api/evaluation/${evaluation.id}/`, evaluation);
    this.fetchEval();
  };
}

const evalStore = new EvalStore();
evalStore.fetchEval();
evalStore.fetchJudges();
export default evalStore;
