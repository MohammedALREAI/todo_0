import React, { ChangeEvent, ReactNode } from 'react'

interface Props {
    name?: string;
    label: string;
    errors?: string;
    defaultValue?: boolean;
    touched?: boolean;
    placeholder?: string;
    value?: boolean;
    icon?: ReactNode;
    onBlur?: (e: React.FocusEvent<any, Element>) => any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = (props: Props) => {
    return (
        <div className="cursor-pointer rounded-full flex items-center ">
            <input
                onChange={props.onChange}
                id={props.name}
                name={props.name}
                onBlur={props.onBlur}
                // checked={props.value}
                className=" checkbox w-6 h-6 rounded-full bg-white  cursor-pointer border border-dashed "
                type="checkbox"
            />
            <label htmlFor="toggle1" className=" px-2">
                {props.label}
            </label>
        </div>
    )
}
