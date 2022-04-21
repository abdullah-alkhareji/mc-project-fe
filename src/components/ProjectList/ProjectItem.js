import { observer } from "mobx-react";
import React from "react";
import AddTeam from "../AddTeam/AddTeam";
import TeamList from "../TeamList/TeamList";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-list__item">
      <div className="project-list__item-header">
        <h6
          style={{
            textTransform: "capitalize",
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {project.name}{" "}
          <span className="text-secondary fw-light">({project.weight})</span>
        </h6>
        <AddTeam project={project} />
      </div>
      {/* {project.team.length > 0 && ( */}
      <div className="project-list__item-teams mt-3">
        <TeamList project={project} />
      </div>
      {/* )} */}
    </div>
  );
};

export default observer(ProjectItem);
