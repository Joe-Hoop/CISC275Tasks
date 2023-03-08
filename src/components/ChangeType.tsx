import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const q_changer = (theType: QuestionType) => {
        theType === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType("short_answer_question");
    };
    return (
        <div>
            <Button onClick={() => q_changer(type)}>Change Type</Button>
            {type === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
