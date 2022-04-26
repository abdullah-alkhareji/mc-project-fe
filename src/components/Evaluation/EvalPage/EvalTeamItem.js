import React from "react";
import { Accordion } from "react-bootstrap";
import criteriaStore from "../../../stores/criteriaStore";
import EvalCriteriaItem from "./EvalCriteriaItem";

const EvalTeamItem = ({ team, project }) => {
  const criteriaList = criteriaStore.criterias
    .filter((criteria) => project.criteria.includes(criteria.id))
    .map((criteria) => (
      <EvalCriteriaItem key={criteria.id} criteria={criteria} />
    ));
  console.log({ project, criteriaList });
  return (
    <Accordion.Item eventKey={String(team.id)}>
      <Accordion.Header>{team.name.toUpperCase()}</Accordion.Header>
      <Accordion.Body>
        <h5>Please judje this team based on the following criteria:</h5>
        <form>
          {criteriaList}
          <div className="d-flex">
            <label for="customRange1" className="form-label flex-grow-1">
              Example range
            </label>
            <input
              type="range"
              className="form-range flex-grow-1"
              id="customRange1"
              min={0}
              max={10}
            />
          </div>
        </form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default EvalTeamItem;
