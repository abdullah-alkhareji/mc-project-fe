import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";
import "./EvalName.css";

const EvalName = () => {
  const { projectId, semesterId } = useParams();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(`/evaluation/${projectId}/${semesterId}/eval`);
  };
  return (
    <div className="eval-name">
      <form onSubmit={handleNext}>
        <div className="eval-name__card">
          <input
            className="ak-input"
            type="text"
            placeholder="Judge Name"
            onChange={(e) => {}}
          />
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default EvalName;
