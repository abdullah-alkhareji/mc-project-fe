import React from "react";

const EvalCriteriaItem = ({ criteria, setMark, judgeMarking }) => {
  console.log({ criteria });
  return (
    <div>
      <div className="d-flex flex-column">
        <h6 className="form-label mt-3 text-capitalize">
          {criteria.criteria_name}
        </h6>
        <div className="d-flex gap-3 align-items-center">
          <h6>0</h6>
          <input
            type="range"
            className="form-range"
            id="customRange1"
            step={0.5}
            min={0}
            max={10}
            value={criteria.grade}
            onChange={(e) => {
              criteria.grade = +e.target.value;
              setMark({ ...judgeMarking });
            }}
          />
          <h6>{criteria.grade}</h6>
          <h6>/10</h6>
        </div>
      </div>
    </div>
  );
};

export default EvalCriteriaItem;
