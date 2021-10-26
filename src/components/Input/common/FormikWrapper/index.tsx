import React from 'react'
import Proptypes from 'prop-types'
import { FastField, Field } from 'formik'

interface FormikWrapperProps {
    children: any,
    type?: string,
    label?: string,
    name: string,
    isFastField?: boolean,
    value?: string,
    placeholder?: string
}

const isInvalidField = (meta) => {
    return meta.error &&
        meta.touched
}

const FormikWrapper: React.FunctionComponent<FormikWrapperProps> = (props) => {
    const { type, children: InputComponent, isFastField, name, placeholder } = props
    let FormikField = isFastField ? FastField : Field
    return (
        <FormikField name={name}>
            {
                ({ field, meta }) => {
                    let isInvalid = isInvalidField(meta)
                    return (
                        <>
                            <InputComponent
                                type={type}
                                id={field.name}
                                name={field.name}
                                value={field.value}
                                invalid={isInvalid}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                placeholder={placeholder}
                            />
                            <div className="invalid-feedback">{meta.error}</div>
                        </>
                    )
                }
            }
        </FormikField>
    );
}

FormikWrapper.propTypes = {
    children: Proptypes.element,
    isFastField: Proptypes.bool
}

FormikWrapper.defaultProps = {
    isFastField: false
}

export default FormikWrapper;