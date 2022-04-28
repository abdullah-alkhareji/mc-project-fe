import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import projectStore from "../../stores/projectStore";
import semesterStore from "../../stores/semesterStore";
import "./TeamDetails.css";
import Button from "../Button";
import { baseUrlFe } from "../../stores/instance";
import evalStore from "../../stores/evalStore";
import { observer } from "mobx-react";
import teamStore from "../../stores/teamStore";

const TeamDetails = () => {
  const navigate = useNavigate();
  const { projectId, teamId } = useParams();

  const [showAlert, setShowAlert] = useState(false);

  const project = projectStore.projects
    ? projectStore.projects.find(
        (project) => String(project.id) === String(projectId)
      )
    : "";

  const [team, setTeam] = useState(
    teamId
      ? project.team.find((team) => String(team.id) === String(teamId))
      : null
  );

  const semester =
    semesterStore.semesters && project
      ? semesterStore.semesters.find(
          (semester) => semester.id === project.semester
        )
      : "";

  const teams =
    teamStore.teams && project
      ? teamStore.teams
          .map((team) => (team.project === project.id ? team : null))
          .filter((team) => team !== null)
      : "";

  const teamList =
    teams && project
      ? teams.map((t) => (
          <NavLink
            key={t.id}
            className="team-details__filter-item"
            to={`/details/${t.project}/${t.id}`}
            onClick={() =>
              setTeam(
                project.team.find((team) => String(team.id) === String(t.id))
              )
            }
          >
            {t.name}
          </NavLink>
        ))
      : "";

  // const criteria = criteriaStore.criterias && project ? project.criteria.map((criteria) => criteria) : "";

  const evaluation =
    evalStore.evals && project
      ? evalStore.evals.find((e) => (e.id === project.linkId.id ? e : ""))
      : "";

  const criteria = evaluation ? evaluation.avg[0].criteria.map((c) => c) : "";

  let teamCriteria =
    teamId && evaluation ? evaluation.avg[teamId].criteria.map((c) => c) : "";

  console.log({
    projectId,
    teamId,
    project,
    criteria,
    teamCriteria,
    semester,
    teams,
    team,
    evaluation,
  });

  const projectCriteria = criteria
    ? criteria.map((criteria) => (
        <tr key={criteria.criteria_id && criteria.criteria_id}>
          <th>{criteria.criteria_name ? criteria.criteria_name : ""}</th>
          <th className="text-center">{criteria.avg ? criteria.avg : "0"}%</th>
          <th className="text-center">
            {criteria.criteria_weight ? criteria.criteria_weight : "0"}
          </th>
          <th className="text-center">
            {criteria.avg_weight ? criteria.avg_weight : "0"}
          </th>
        </tr>
      ))
    : "";

  const teamsCriteria = teamCriteria
    ? teamCriteria.map((criteria) => (
        <tr key={criteria.criteria_id && criteria.criteria_id}>
          <th>{criteria.criteria_name ? criteria.criteria_name : ""}</th>
          <th className="text-center">{criteria.avg ? criteria.avg : "0"}%</th>
          <th className="text-center">
            {criteria.criteria_weight ? criteria.criteria_weight : "0"}
          </th>
          <th className="text-center">
            {criteria.avg_weight ? criteria.avg_weight : "0"}
          </th>
        </tr>
      ))
    : "";

  useEffect(() => {
    setTimeout(() => setShowAlert(false), 4000);
  }, [showAlert]);

  const handleCopy = async () => {
    navigator.clipboard.writeText(`${baseUrlFe}/evaluation/${evaluation.id}`);
    setShowAlert(true);
  };

  const handleLock = (e) => {
    e.preventDefault();
    evaluation.isLocked = true;
    evalStore.evaluationLock(evaluation);
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    evaluation.isLocked = false;
    evalStore.evaluationLock(evaluation);
  };

  return (
    <div className="team-details">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{project.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="team-details__header">
        <div className="team-details__header-left">
          <h2 className="team-details__header-project">
            {project ? project.name : "Loading"}
          </h2>
          <h5 className="team-details__header-semester">
            {semester ? semester.name : "Loading"}
          </h5>
        </div>
        <div className="team-details__header-right">
          {evaluation.isLocked ? (
            <Button onClick={handleUnlock}>Unlock</Button>
          ) : (
            <Button onClick={handleLock}>Lock</Button>
          )}
          <Button onClick={handleCopy}>Copy Share Link</Button>
        </div>
      </div>
      {showAlert && (
        <div className="my-3 alert alert-primary" role="alert">
          Link Copied Successful
        </div>
      )}
      <div className="team-details__filter">
        <NavLink
          className="team-details__filter-item"
          to={`/details/${projectId}`}
          onClick={() => setTeam(null)}
        >
          All
        </NavLink>
        {teamList}
      </div>
      <hr className="mt-1" />
      <div className="team-details__body">
        <div className="team-details__body-table table-responsive ">
          <table className="table align-middel table-hover">
            <thead className="text-primary">
              <tr>
                <th style={{ width: "50%" }}>Criteria</th>
                <th className="text-center">Avg. Score</th>
                <th className="text-center">Weight</th>
                <th className="text-center">Weighted Avg.</th>
              </tr>
            </thead>
            <tbody>{teamId ? teamsCriteria : projectCriteria}</tbody>
          </table>
          <h4 className="px-1 pb-3">
            Total:{" "}
            {teamId ? evaluation.avg[teamId].total : evaluation.avg[0].total}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default observer(TeamDetails);
