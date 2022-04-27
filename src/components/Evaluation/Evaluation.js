import { observer } from "mobx-react";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import evalStore from "../../stores/evalStore";
import projectStore from "../../stores/projectStore";
import semesterStore from "../../stores/semesterStore";
import NavBar from "../NavBar/NavBar";
import EvalName from "./EvalName/EvalName";
import EvalPage from "./EvalPage/EvalPage";
import EvalThanks from "./EvalThanks/EvalThanks";
import "./Evaluation.css";

const Evaluation = () => {
  const { evalId } = useParams();

  const evaluation = evalId
    ? evalStore.evals.find((evall) => evall.id === evalId)
    : null;

  const project = projectStore.projects
    ? projectStore.projects.find((project) => project.id === evaluation.project)
    : null;

  const semester = semesterStore.semesters
    ? semesterStore.semesters.find(
        (semester) => semester.id === project.semester
      )
    : "";

  console.log({ evalId, evaluation, project, semester });

  return (
    <div className="evaluation">
      <div className="evaluation__side-menu">
        <NavBar />
      </div>
      <div className="evaluation__playground container">
        <div className="evaluation__playground-header">
          <h2>{project != null ? project.name : ""}</h2>
          <h5>{semester != null ? semester.name : ""}</h5>
        </div>
        <hr />
        <Routes>
          <Route
            path="/:evalId"
            element={<EvalName evaluation={evaluation} />}
          />
          <Route
            path="/:evalId/:judgeId"
            element={<EvalPage evaluation={evaluation} project={project} />}
          />
          <Route path="/thanks" element={<EvalThanks />} />
        </Routes>
      </div>
    </div>
  );
};

export default observer(Evaluation);
