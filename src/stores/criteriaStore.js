import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class CriteriaStore {
  constructor() {
    makeAutoObservable(this);
  }

  criterias = [];

  fetchCriterias = async () => {
    try {
      const res = await instance.get("api/criteria/");
      this.criterias = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  addCriteria = async (newCriteria, setShowAddCriteria) => {
    try {
      const res = await instance.post("api/criteria/", newCriteria);
      this.criterias.push(res.data);
      setShowAddCriteria(false);
    } catch (error) {
      console.log({ error });
    }
  };
}

const criteriaStore = new CriteriaStore();
criteriaStore.fetchCriterias();
export default criteriaStore;
