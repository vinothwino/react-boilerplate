import React, { useState } from 'react';
import { Form } from 'react-bootstrap'

interface PasswordInputProps {
    type: any,
    name: string,
    className?: string,
    placeholder?: string,
    value?: string,
    size?: "lg" | "sm" | undefined,
    required?: boolean,
    invalid?: boolean,
    onChange: Function,
    onBlur: Function
}

export const PasswordInput: React.FunctionComponent<PasswordInputProps> = (props) => {
    const [showPassword, togglePassword] = useState(false)
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
        <>
            <Form.Control
                type={showPassword ? 'text' : 'password'}
                className={`${invalid && 'is-invalid'} ${className}`}
                placeholder={placeholder}
                size={size}
                name={name}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
            />
            <i
                className={`icon-eye-${showPassword ? 'closed' : 'open'} right-icon`}
                onClick={() => togglePassword(!showPassword)}
            ></i>
        </>


    );
}

PasswordInput.defaultProps = {
    onChange: () => { },
    onBlur: () => { },
}