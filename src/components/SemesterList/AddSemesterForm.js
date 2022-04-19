import React from "react";
import { Card, FormControl } from "react-bootstrap";
import Button from "../Button";

const AddSemesterForm = ({ handleAddSemester, handleChange, setIsOpen }) => {
  return (
    <form onSubmit={handleAddSemester}>
      <Card.Header className="bg-white border rounded d-flex align-items-center gap-3">
        <FormControl
          type="text"
          placeholder="Semester Name"
          onChange={(e) => handleChange(e)}
        />
        <div className="d-flex">
          <Button type="submit">Add</Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </div>
      </Card.Header>
    </form>
  );
};

export default AddSemesterForm;
