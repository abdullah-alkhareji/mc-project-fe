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
import criteriaStore from "../../stores/criteriaStore";

const TeamDetails = () => {
  const navigate = useNavigate();
  const { projectId, teamId } = useParams();

  const [showAlert, setShowAlert] = useState(false);

  const project = projectId
    ? projectStore.projects.find(
        (project) => String(project.id) === String(projectId)
      )
    : "null???";

  const criteria = criteriaStore.criterias
    .filter((criteria) => project.criteria.includes(criteria.id))
    .map((criteria) => criteria);

  const [url, setUrl] = useState(
    project.linkId ? `${baseUrlFe}/evaluation/${project.linkId.id}` : null
  );

  const semester = semesterStore.semesters.find(
    (semester) => semester.id === project.semester
  );

  const [team, setTeam] = useState(
    teamId
      ? project.team.find((team) => String(team.id) === String(teamId))
      : null
  );

  console.log({ projectId, teamId, project, criteria, url, semester, team });

  const [evaluation, setEvaluation] = useState(project.linkId);

  const teamList = project.team.map((t) => (
    <NavLink
      key={t.id}
      className="team-details__filter-item"
      to={`/details/${t.project}/${t.id}`}
      onClick={() =>
        setTeam(project.team.find((team) => String(team.id) === String(t.id)))
      }
    >
      {t.name}
    </NavLink>
  ));

  const projectCriteria = criteria.map((criteria) => (
    <tr key={criteria.id}>
      <th>{criteria.name}</th>
      <th className="text-center">0%</th>
      <th className="text-center">{criteria.weight}</th>
      <th className="text-center">0</th>
    </tr>
  ));

  // const url = `${baseUrlFe}/evaluation/${project.id}/${semester.id}`;

  useEffect(() => {
    setTimeout(() => setShowAlert(false), 4000);
  }, [showAlert]);

  const handleCopy = async () => {
    if (evaluation) {
      setUrl(baseUrlFe + "/evaluation/" + evaluation.id);
    } else {
      await evalStore.createEval(project, setEvaluation);
      setUrl(baseUrlFe + "/evaluation/" + evaluation.id);
    }
    await navigator.clipboard.writeText(url);
    setShowAlert(true);
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
          <Button onClick={handleCopy}>Copy Share Link</Button>
        </div>
      </div>
      {showAlert && (
        <div className="my-3 alert alert-primary" role="alert">
          Link Copied Successful ({url})
        </div>
      )}
      <hr />
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
            <tbody>{projectCriteria}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default observer(TeamDetails);
