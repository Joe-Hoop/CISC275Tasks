import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);
    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        const toNumber = parseInt(event.target.value) || 0;
        setRequests(toNumber);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={updateRequests}
                />
            </Form.Group>
            <span>
                <Button onClick={() => setAttempts(attempts + requests)}>
                    gain
                </Button>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
            </span>
        </div>
    );
}
