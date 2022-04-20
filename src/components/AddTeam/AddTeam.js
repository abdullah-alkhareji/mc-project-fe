import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import teamStore from "../../stores/teamStore";
import Button from "../Button";

import "./AddTeam.css";

const AddTeam = ({ project }) => {
  const [team, setTeam] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = team.name
      .replace(/\s/g, "")
      .split(",")
      .filter((name) => name !== "")
      .map((name) => {
        return { name, project: project.id };
      });
    teamStore.addTeam(data, project.id, handleClose);
  };

  return (
    <>
      <button className="add-team__btn" onClick={handleOpen}>
        <b>+</b> Add Team
      </button>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="add-project__body">
            <input
              type="text"
              placeholder="Team Name: (Seperate names with a comma)"
              name="name"
              required
              className="ak-input"
              onChange={(e) => handleChange(e)}
            />
            <div className="add-team__btn-group">
              <Button variant="primary" onClick={handleSubmit}>
                Add
              </Button>
              <Button variant="outline-primary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTeam;
