import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const WelcomeModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Restaurant</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src="https://www.canva.com/design?create&type=TAB7AVEOUWQ&template=EAFpeiTrl4c&category=tACZCvjI6mE&analyticsCorrelationId=5b16fe45-a536-4a6b-b193-73b079a51d39"
          alt="logo"
        />
        <p>Enjoy our delicious Veg and Non-Veg cuisines!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          &#10140;
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
