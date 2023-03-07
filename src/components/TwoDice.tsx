import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieA, setDieA] = useState<number>(1);
    const [dieB, setDieB] = useState<number>(6);
    return (
        <div>
            <Button onClick={() => setDieA(d6)}>Roll Left</Button>
            <span data-testid="left-die">Die A: {dieA}</span>
            <Button onClick={() => setDieB(d6)}>Roll Right</Button>
            <span data-testid="right-die">Die B: {dieB}</span>
            <br />
            {dieA + dieB === 2 ? (
                <p>You Lose</p>
            ) : dieA === dieB ? (
                <p>You Win</p>
            ) : (
                <></>
            )}
        </div>
    );
}
