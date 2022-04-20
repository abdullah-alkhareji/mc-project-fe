import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./TeamDetails.css";

const TeamDetails = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <div onClick={handleOpen} className="team-details">
        <p>{team.name}</p>
        <p className="text-primary">View details</p>
      </div>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
      </Modal>
    </>
  );
};

export default TeamDetails;
