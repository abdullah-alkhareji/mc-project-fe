import { observer } from "mobx-react";
import React from "react";
import teamStore from "../../stores/teamStore";
import TeamItem from "../TeamItem/TeamItem";

const TeamList = ({ project }) => {
  const teamList = teamStore.teams
    .filter((team) => team.project === project.id)
    .map((team) => <TeamItem key={team.id} team={team} project={project} />);
  return teamList;
};

export default observer(TeamList);
