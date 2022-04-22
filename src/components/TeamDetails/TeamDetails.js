import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import projectStore from "../../stores/projectStore";
import semesterStore from "../../stores/semesterStore";
import teamStore from "../../stores/teamStore";
import criteriaStore from "../../stores/criteriaStore";
import "./TeamDetails.css";

const TeamDetails = () => {
  const navigate = useNavigate();
  const { projectId, teamId } = useParams();

  const [project, setProject] = useState(
    projectStore.projects.find(
      (project) => String(project.id) === String(projectId)
    )
  );

  const [semester, setSemester] = useState(
    semesterStore.semesters.find(
      (semester) => String(semester.id) === String(project.semester)
    )
  );

  const [team, setTeam] = useState(
    teamId
      ? teamStore.teams.find((team) => String(team.id) === String(teamId))
      : null
  );

  !project && <p>Loading</p>;

  const teamList = project.team.map((t) => (
    <NavLink
      className="team-details__filter-item"
      to={`/details/${t.project}/${t.id}`}
    >
      {t.name}
    </NavLink>
  ));

  const projectCriteria = criteriaStore.criterias
    .filter((criteria) => project.criteria.includes(criteria.id))
    .map((criteria) => (
      <tr>
        <th>{criteria.name}</th>
        <th className="text-center">0%</th>
        <th className="text-center">{criteria.weight}</th>
        <th className="text-center">0%</th>
      </tr>
    ));

  console.log({
    projectId,
    teamId,
    project,
    semester,
    team: project.team,
    projectCriteria,
  });
  return (
    <div className="team-details">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{project.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="team-details__header">
        <h2 className="team-details__header-project">{project.name}</h2>
        <h5 className="team-details__header-semester">{semester.name}</h5>
      </div>
      <hr />
      <div className="team-details__filter">
        <NavLink
          className="team-details__filter-item"
          to={`/details/${projectId}`}
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

export default TeamDetails;
