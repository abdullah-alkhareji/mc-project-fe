import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import AddTeam from "../AddTeam/AddTeam";
import TeamList from "../TeamList/TeamList";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-list__item">
      <div className="project-list__item-header">
        <div className="project-list__item-header-right">
          <h6
            style={{
              textTransform: "capitalize",
              // flexGrow: 20,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {project.name}{" "}
            <span className="text-secondary fw-light">({project.weight})</span>
            {"  "}
          </h6>
          <Link to={`/details/${project.id}`} className="text-end">
            Show Project Details
          </Link>
        </div>
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
