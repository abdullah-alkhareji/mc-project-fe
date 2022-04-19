import React from "react";
import { Accordion } from "react-bootstrap";
import "./SemesterList.css";

const SemesterItem = ({ semester }) => {
  return (
    <Accordion.Item key={semester.id} eventKey={String(semester.id)}>
      <Accordion.Header>{semester.name.toUpperCase()}</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, totam.
        Vitae cum odit nulla temporibus error, eius molestiae alias numquam?
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SemesterItem;
