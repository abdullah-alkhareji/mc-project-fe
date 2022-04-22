import React from "react";
import { useNavigate } from "react-router-dom";
import projectStore from "../../stores/projectStore";
import "./TeamItem.css";

const TeamItem = ({ team, project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${project.id}/${team.id}`)}
      className="team-item"
    >
      <p>{team.name}</p>
      <p className="text-primary text-end">View details</p>
    </div>
  );
};

export default TeamItem;
