import React from 'react';
import { Form } from 'react-bootstrap'

interface TextInputProps {
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

const TextInput: React.FunctionComponent<TextInputProps> = (props) => {
    const {
        type,
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
            id={name}
            type={type}
            className={`${invalid && 'is-invalid'} ${className}`}
            placeholder={placeholder}
            size={size}
            name={name}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
        />
    );
}

TextInput.defaultProps = {
    onChange: () => { },
    onBlur: () => { },
}

export default TextInput;