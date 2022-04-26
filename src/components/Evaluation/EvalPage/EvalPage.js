import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import projectStore from "../../../stores/projectStore";
import semesterStore from "../../../stores/semesterStore";
import teamStore from "../../../stores/teamStore";
import "./EvalPage.css";
import EvalTeamItem from "./EvalTeamItem";

const EvalPage = ({ semester, project, teams }) => {
  console.log({ semester, project, teams });
  const teamList = teams.map((team) => (
    <EvalTeamItem key={team.id} team={team} project={project} />
  ));
  return (
    <div className="eval-page">
      <Accordion defaultActiveKey={0}>{teamList}</Accordion>
    </div>
  );
};

export default EvalPage;
