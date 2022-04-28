import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./AddProject.css";
import Button from "../Button";
import projectStore from "../../stores/projectStore";
import criteriaStore from "../../stores/criteriaStore";
import { observer } from "mobx-react";

const AddProject = ({ semester }) => {
  const [project, setProject] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [criteriaa, setCriteriaa] = useState([]);

  const [showAddCriteria, setShowAddCriteria] = useState(false);

  const [newCriteria, setNewCriteria] = useState(null);

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    projectStore.addProject(
      project,
      criteriaa,
      semester.id,
      handleClose,
      setCriteriaa
    );
  };

  const projectCriteria = criteriaStore.criterias
    // .filter((cri) => criteriaa.includes(cri))
    .map((criteria) => (
      <div
        key={criteria.id}
        className={`add-project__criteria-item ${
          criteriaa.includes(criteria.id) ? "selected" : ""
        }`}
        onClick={() => handleSelect(criteria.id)}
      >
        <p className="add-project__criteria-item-name">{criteria.name}</p>
        <p className="add-project__criteria-item-weight">{criteria.weight}</p>
      </div>
    ));

  const handleSelect = (e) => {
    if (criteriaa.includes(e)) {
      const unSelect = criteriaa.filter((cri) => cri !== e);
      setCriteriaa(unSelect);
    } else {
      setCriteriaa([...criteriaa, e]);
    }
  };

  const handleChangeCriteria = (e) => {
    setNewCriteria({ ...newCriteria, [e.target.name]: e.target.value });
  };

  const handleAddCriteria = (e) => {
    e.preventDefault();
    criteriaStore.addCriteria(newCriteria, setShowAddCriteria);
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
              type="number"
              placeholder="Project Weight"
              name="weight"
              required
              className="ak-input"
              onChange={(e) => handleChange(e)}
            />

            <div className="add-project__criteria">
              {projectCriteria}
              {showAddCriteria && (
                <div className="add-project__criteria-item">
                  <input
                    type="text"
                    name="name"
                    placeholder="Criteria Name"
                    className="ak-input flex-grow-1"
                    onChange={handleChangeCriteria}
                  />
                  <input
                    type="number"
                    name="weight"
                    placeholder="Criteria Weight"
                    className="ak-input"
                    onChange={handleChangeCriteria}
                  />
                  <div className="d-flex">
                    <Button onClick={handleAddCriteria}>Add</Button>
                    <Button onClick={() => setShowAddCriteria(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              {!showAddCriteria && (
                <div
                  onClick={() => setShowAddCriteria(true)}
                  className="add-project__criteria-item add-btn"
                >
                  <p className="add-project__criteria-item-name">
                    + Add Criteria
                  </p>
                </div>
              )}
            </div>

            <div className="add-project__btns-group">
              <Button variant="primary">Add</Button>

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

export default observer(AddProject);
