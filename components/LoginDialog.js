"use client"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { setOpen, setUserData } from "@/lib/features/userSlice.js";

function LoginDialog() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(setUserData(name));
    dispatch(setOpen(false));
  }
  
  return (
    <>
      <Modal show={open} onHide={() => dispatch(setOpen(false))}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="form.ControlInput1">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(setOpen(false))}>
            Close
          </Button>
          <Button variant="primary" disabled={!name} onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginDialog;