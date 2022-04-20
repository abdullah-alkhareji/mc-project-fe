import { observer } from "mobx-react";
import React from "react";
import { Button } from "react-bootstrap";
import AddTeam from "../AddTeam/AddTeam";
import TeamList from "../TeamList/TeamList";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-list__item">
      <div className="project-list__item-header">
        <h6 style={{ textTransform: "capitalize" }}>
          {project.name}{" "}
          <span className="text-secondary fw-light">({project.weight})</span>
        </h6>
        <AddTeam project={project} />
      </div>
      <hr className="my-2" />
      <div className="project-list__item-teams">
        <div className="project-list__item-team">
          <TeamList project={project} />
        </div>
      </div>
    </div>
  );
};

export default observer(ProjectItem);
