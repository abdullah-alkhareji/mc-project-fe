import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import projectStore from "../../stores/projectStore";
import ProjectList from "../ProjectList/ProjectList";
import "./SemesterList.css";

const SemesterItem = ({ semester }) => {
  // const [projectsList, setProjectsList] = useState(
  //   projectStore.projects
  //     .filter((p) => p.semester === semester.id)
  //     .map((p) => p.name)
  // );

  // const handleProjectList = () => {

  // }

  // const projectsList = projectStore.projects
  //   .filter((p) => p.semester === semester.id)
  //   .map((p) => p.name);

  return (
    <Accordion.Item key={semester.id} eventKey={String(semester.id)}>
      <Accordion.Header>{semester.name.toUpperCase()}</Accordion.Header>
      <Accordion.Body>
        <ProjectList semester={semester} />
        {/* {projectsList.length > 0 ? (
          projectsList
        ) : (
          <h6 className="text-danger">There is no project</h6>
        )} */}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SemesterItem;
