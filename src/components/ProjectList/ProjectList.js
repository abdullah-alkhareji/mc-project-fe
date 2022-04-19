import React from "react";
import { Button } from "react-bootstrap";
import projectStore from "../../stores/projectStore";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

const ProjectList = ({ semester }) => {
  const projectList = projectStore.projects
    .filter((project) => project.semester === semester.id)
    .map((project) => <ProjectItem key={project.id} project={project} />);

  return (
    <div className="project-list">
      <div className="project-list__header">
        <h4>Projects</h4>
        <Button variant="primary" className="btn-sm project-list__header-btn">
          + Add Project
        </Button>
      </div>
      <div className="project-list__body">{projectList}</div>
    </div>
  );
};

export default ProjectList;
