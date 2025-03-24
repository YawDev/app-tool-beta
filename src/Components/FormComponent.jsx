
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap'; 
import ConfirmationModal from './ConfirmationModal';

function FormComponent() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    const handleConfirm = () => {
        alert('Action Confirmed');
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        handleShow();  // Show the modal
      };

    return (
      <Container className="mt-4">
          <h2 id='signUpTitle'>Sign Up</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="occupation" className="form-label">Occupation</label>
            <input type="text" className="form-control" id="occupation"/>
        </div>
          
          <Button type="submit" variant="primary">Submit</Button>
            </form>
            
            <ConfirmationModal
                show={showModal}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
            />
      </Container>
    )
}

export default FormComponent;