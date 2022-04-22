import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import projectStore from "../stores/projectStore";
import semesterStore from "../stores/semesterStore";
import teamStore from "../stores/teamStore";
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

  console.log({ projectId, teamId, project, semester, team: project.team });
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
        <div className="team-details__body-card"></div>
      </div>
    </div>
  );
};

export default TeamDetails;
