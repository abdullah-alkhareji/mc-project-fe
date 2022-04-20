import { observer } from "mobx-react";
import React from "react";
import teamStore from "../../stores/teamStore";
import TeamDetails from "../TeamDetails/TeamDetails";

const TeamList = ({ project }) => {
  const teamList = teamStore.teams
    .filter((team) => team.project === project.id)
    .map((team) => <TeamDetails key={team.id} team={team} />);
  return teamList;
};

export default observer(TeamList);
