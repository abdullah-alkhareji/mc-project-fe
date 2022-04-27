import React from "react";
import { Accordion } from "react-bootstrap";
import EvalCriteriaItem from "./EvalCriteriaItem";

const EvalTeamItem = ({ team, setMark, judgeMarking }) => {
  const criteriaList = team.grade.map((criteria) => (
    <EvalCriteriaItem
      key={criteria.id}
      criteria={criteria}
      setMark={setMark}
      judgeMarking={judgeMarking}
    />
  ));
  console.log(team);
  return (
    <Accordion.Item eventKey={String(team.teamId)}>
      <Accordion.Header>
        <h6 className="text-capitalize">{team.teamName}</h6>
      </Accordion.Header>
      <Accordion.Body>
        <h5 className="mb-2">
          Please judje this team based on the following criteria:
        </h5>
        <form>{criteriaList}</form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default EvalTeamItem;
