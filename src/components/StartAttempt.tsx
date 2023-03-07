import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setAttempts(attempts - 1);
        setInProgress(true);
    };
    return (
        <div>
            <Button disabled={inProgress || attempts <= 0} onClick={startQuiz}>
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={() => setInProgress(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => setAttempts(attempts + 1)}
            >
                Mulligan
            </Button>
            <span>Attempts: {attempts}</span>
        </div>
    );
}
