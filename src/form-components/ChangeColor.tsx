import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "brown"
    ];
    const [colorIndex, setColorIndex] = useState<number>(0);
    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = COLORS.indexOf(event.target.value);
        setColorIndex(index);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={color}
                    label={color}
                    value={color}
                    checked={color === COLORS[colorIndex]}
                />
            ))}
            <div>
                <span>You have chosen </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: COLORS[colorIndex] }}
                >
                    {COLORS[colorIndex]}
                </span>
            </div>
        </div>
    );
}
