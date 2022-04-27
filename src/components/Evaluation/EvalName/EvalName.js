import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import evalStore from "../../../stores/evalStore";
import Button from "../../Button";
import "./EvalName.css";

const EvalName = () => {
  const [judge, setJudge] = useState(null);
  console.log(judge);
  const { evalId } = useParams();

  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    evalStore.addJudge(judge, evalId, navigate);
  };
  return (
    <div className="eval-name">
      <form onSubmit={handleNext}>
        <div className="eval-name__card">
          <input
            className="ak-input"
            type="text"
            placeholder="Judge Name"
            onChange={(e) => {
              setJudge({ ...judge, name: e.target.value });
            }}
          />
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default EvalName;
