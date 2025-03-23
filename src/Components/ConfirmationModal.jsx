import React from 'react';
import { Button, Modal } from 'react-bootstrap'; 


function ConfirmationModal({show, handleClose, handleConfirm }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Would you like to confirm your details?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal;