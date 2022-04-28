import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./EvalPage.css";
import EvalTeamItem from "../EvalPage/EvalTeamItem";
import evalStore from "../../../stores/evalStore";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";

const EvalPage = ({ evaluation }) => {
  const { judgeId } = useParams();
  const judge = evalStore.judge.find((judge) => judge.id === +judgeId);
  const [mark, setMark] = useState(judge);

  const navigate = useNavigate();

  const judgeMarking = { ...mark };

  const teamList = judgeMarking.grade.map((team) => (
    <EvalTeamItem
      key={team.team_id}
      team={team}
      setMark={setMark}
      judgeMarking={judgeMarking}
    />
  ));

  return (
    <div className="eval-page">
      <Accordion className="w-100" defaultActiveKey={0}>
        {teamList}
      </Accordion>
      <Button
        onClick={(e) => {
          e.preventDefault();
          evalStore.updateJudge(mark, navigate);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default EvalPage;
