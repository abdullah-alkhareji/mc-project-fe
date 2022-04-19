import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./AddProject.css";
import Button from "../Button";
import projectStore from "../../stores/projectStore";

const AddProject = ({ semester }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    projectStore.addProject(project, semester.id, handleClose);
  };
  return (
    <>
      <Button
        variant="outline-primary"
        className="btn-sm add-project__btn"
        onClick={handleOpen}
      >
        <b>+</b> Add Project
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="add-project__body">
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              required
              className="ak-input"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Project Weight"
              name="weight"
              required
              className="ak-input"
              onChange={(e) => handleChange(e)}
            />
            <div className="add-project__btns-group">
              <Button variant="primary" className="">
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

export default AddProject;
