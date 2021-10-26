import React from 'react';
import { Form } from 'react-bootstrap'
import { textInputRegex } from 'constants/regex'

interface NumberInputProps {
    type: any,
    className: string,
    error: string,
    name: string,
    placeholder?: string,
    value?: string,
    size?: "lg" | "sm" | undefined,
    required?: boolean,
    invalid?: boolean,
    onChange: Function,
    onBlur: Function
}

const NumberInput: React.FunctionComponent<NumberInputProps> = (props) => {
    const {
        className,
        name,
        placeholder,
        value,
        size,
        invalid,
        onChange: handleChange,
        onBlur: handleBlur
    } = props
    return (
        <Form.Control
            type={"text"}
            className={`${invalid && 'is-invalid'} ${className}`}
            placeholder={placeholder}
            size={size}
            name={name}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(textInputRegex.TEXT_ONLY, '')
                handleChange(e)
            }}
            onBlur={(e) => handleBlur(e)}
        />
    );
}

NumberInput.defaultProps = {
    onChange: () => { },
    onBlur: () => { },
}

export default NumberInput;