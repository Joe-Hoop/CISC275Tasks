import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode?"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formEnterName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </div>
            ) : (
                <></>
            )}
            {isStudent ? (
                <p>{name} is a student</p>
            ) : (
                <p>{name} is not a student</p>
            )}
        </div>
    );
}
