import React from "react";
import { Modal } from "react-bootstrap";
import "../../../styles//modals.module.scss";

const Modals = (props) => {
  return (
    <Modal
      {...props}
      size={props.size || "md"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=".modal-content"
    >
      <Modal.Body className="modalBody">{props.children}</Modal.Body>
    </Modal>
  );
};

export default Modals;
