import React, { useState } from "react";
import "./SemesterList.css";
import semesterStore from "../../stores/semesterStore";
import { Accordion } from "react-bootstrap";
import Button from "../Button";
import SemesterItem from "./SemesterItem";
import AddSemesterForm from "./AddSemesterForm";
import { observer } from "mobx-react";

const SemesterList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [semester, setSemester] = useState("");

  const handleAddSemester = () => {
    semesterStore.addSemester(semester);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setSemester({ name: e.target.value });
  };

  const semesterList = semesterStore.semesters
    .map((semester) => <SemesterItem key={semester.id} semester={semester} />)
    .reverse();

  return (
    <div className="semester-list">
      <div className="semester-list__header">
        <h2>Semester List</h2>
        <Button onClick={() => setIsOpen(!isOpen)}>Add Semester</Button>
      </div>
      <hr />
      <div className="semester-list__list">
        {isOpen && (
          <AddSemesterForm
            handleAddSemester={handleAddSemester}
            handleChange={handleChange}
            setIsOpen={setIsOpen}
          />
        )}
        <Accordion defaultActiveKey={0}>{semesterList}</Accordion>
      </div>
    </div>
  );
};

export default observer(SemesterList);
