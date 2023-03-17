import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { useForm } from '../hooks/useForm'


export const AddTodoModal = ({ show, onTodoAddSubmit, onTodoAddClose }) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({ text: '', }, onTodoAddSubmit);

    return (
        <Modal show={show} onEscapeKeyDown={onTodoAddClose}>
            <Modal.Header closeButton onHide={onTodoAddClose}>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Do the dishes"
                            value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                        Submit
                    </Button>

                    <Button variant="secondary" onClick={onTodoAddClose}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal >
    )
}