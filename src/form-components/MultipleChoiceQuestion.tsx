import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const updateAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>Select An Answer</Form.Label>
                    <Form.Select value={answer} onChange={updateAnswer}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {answer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
