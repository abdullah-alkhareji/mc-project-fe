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

  const evaluation = evalStore.evals.find((evall) => evall.id === evalId);

  const project = projectStore.projects.find(
    (project) => project.id === evaluation.project
  );

  const semester = semesterStore.semesters.find(
    (semester) => semester.id === project.semester
  );

  console.log({ evalId, evaluation, project, semester });

  return (
    <div className="evaluation">
      <div className="evaluation__side-menu">
        <NavBar />
      </div>
      <div className="evaluation__playground container">
        <div className="evaluation__playground-header">
          <h2>{project ? project.name : "hi"}</h2>
          <h5>{semester ? semester.name : "hi2"}</h5>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<EvalName />} />
          <Route path="eval" element={<EvalPage />} />
          <Route path="thanks" element={<EvalThanks />} />
        </Routes>
      </div>
    </div>
  );
};

export default observer(Evaluation);
