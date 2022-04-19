import React from "react";
import { Button } from "react-bootstrap";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-list__item">
      <div className="project-list__item-header">
        <h6>
          {project.name}{" "}
          <span className="text-secondary fw-light">({project.weight})</span>
        </h6>
        <Button variant="primary" className="btn-sm project-list__header-btn">
          + Add Team
        </Button>
      </div>
      <hr className="my-2" />
      <div className="project-list__item-teams">
        <div className="project-list__item-team">
          <p>Team 1</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
