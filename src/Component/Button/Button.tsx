import React from 'react'
import './Styles.css'
// handleEventAction it will take id or text
interface Props {
    text: string;
    handleEventAction(text: string): void;
}

export const Button = ({ text, handleEventAction }: Props) => {
    return (
        <button
            className={`${text === 'Add' ? 'btn' : 'btn backgrounded-button'}`}
            onClick={() => handleEventAction(text)}
        >
            {text}
        </button>
    )
}
