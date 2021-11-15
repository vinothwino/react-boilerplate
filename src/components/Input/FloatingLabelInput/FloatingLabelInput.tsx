import React from 'react';
import { FloatingLabel } from './style'
import { Form } from 'react-bootstrap'
import FormikWrapper from '../common/FormikWrapper'
import TextInput from '../common/TextInput'
import PasswordInput from '../common/PasswordInput'
import NumberInput from '../common/NumberInput'

interface FloatingLabelInputProps {
    type: any,
    name: string,
    label?: string,
    value?: string,
    placeholder?: string,
    size?: "lg" | "sm" | undefined,
    required?: boolean,
    isFastField?: boolean,
    isFormikField?: boolean,
    onChange?: Function
}

export const Input: React.FunctionComponent<FloatingLabelInputProps> = (props) => {
    const { type, isFormikField } = props
    let Input;
    switch (type) {
        case 'text':
            Input = TextInput;
            break;
        case 'number':
            Input = NumberInput;
            break;
        case 'password':
            Input = PasswordInput;
            break;
        default:
            Input = TextInput
            break;
    }
    if (isFormikField)
        return (
            <FormikWrapper {...props}>
                {Input}
            </FormikWrapper>
        )
    return (
        <Input
            type={type}
            placeholder={props.placeholder}
            size={props.size}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export const FloatingLabelInput: React.FunctionComponent<FloatingLabelInputProps> = (props) => {
    const { label, required, ...rest } = props

    return (
        <FloatingLabel>
            <Input
                {...rest}
            />
            <Form.Label htmlFor={rest.name}>
                {label}
                {required && <strong className="text-danger">*</strong>}
            </Form.Label>
        </FloatingLabel>
    );
}

FloatingLabelInput.defaultProps = {
    size: 'lg',
    placeholder: "  ",
    required: false,
    isFastField: true,
    isFormikField: true,
    onChange: () => { }
}