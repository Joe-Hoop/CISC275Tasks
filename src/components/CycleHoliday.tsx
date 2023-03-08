import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type favHoliday = "🐇" | "🇺🇸" | "👻" | "🦃" | "🎅🏻";
    const [holiday, setHoliday] = useState<favHoliday>("🎅🏻");
    const dates_record: Record<favHoliday, favHoliday> = {
        "🐇": "🇺🇸",
        "🇺🇸": "👻",
        "👻": "🦃",
        "🦃": "🎅🏻",
        "🎅🏻": "🐇"
    };
    const alphabet_record: Record<favHoliday, favHoliday> = {
        "🎅🏻": "🐇",
        "🐇": "🇺🇸",
        "🇺🇸": "👻",
        "👻": "🦃",
        "🦃": "🎅🏻"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(alphabet_record[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(dates_record[holiday])}>
                Advance by Year
            </Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
