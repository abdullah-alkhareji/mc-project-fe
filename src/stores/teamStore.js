import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TeamStore {
  constructor() {
    makeAutoObservable(this);
  }
  teams = [];

  fetchTeams = async () => {
    try {
      const res = await instance.get("api/team/");
      this.teams = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  addTeam = async (teams, projectId, handleClose) => {
    try {
      teams.forEach(async (team) => {
        team.project = projectId;
        const res = await instance.post("api/team/", team);
        this.teams.push(res.data);
      });
      handleClose();
    } catch (error) {
      console.log({ error });
    }
  };
}

const teamStore = new TeamStore();
teamStore.fetchTeams();
export default teamStore;
