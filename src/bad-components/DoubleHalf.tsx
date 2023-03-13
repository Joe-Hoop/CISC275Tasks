import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (newValue: number) => null;
}): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (newValue: number) => null;
}): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const changeDhValue = (newValue: number) => {
        setDhValue(newValue);
        return null;
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={changeDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={changeDhValue}></Halver>
        </div>
    );
}
