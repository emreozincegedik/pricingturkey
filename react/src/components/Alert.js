import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export function Alert(props) {
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      {/* <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal> */}
      <Modal
        // {...props}
        show={props.show} // dokunma
        onHide={props.handleClose} // dokunma
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {props.title && (
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          )}
        </Modal.Header>
        {props.body && (
          <Modal.Body>
            {props.body}
            {/* <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p> */}
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button
            variant={props.handleOk && "secondary"}
            onClick={props.handleClose} // dokunma
          >
            {props.handleOk ? "hayır" : "tamam"}
          </Button>
          {props.handleOk && (
            <Button
              onClick={props.handleOk} // dokunma
            >
              Tamam
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
