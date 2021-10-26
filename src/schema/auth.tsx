import * as yup from 'yup';
import { regex } from 'constants/regex'

export const LoginValidation = yup.object().shape({
    userId: yup.string()
        .nullable(true)
        .required('User ID is required'),
    password: yup.string()
        .nullable(true)
        .required('Password is required')
})

export const UpdateProfileValidation = yup.object().shape({
    userName: yup.string()
        .nullable(true)
        .required('User name is required'),
    emailId: yup.string()
        .nullable(true)
        .email('Email id is invalid')
        .required('Email id is required'),
    mobileNumber: yup.string()
        .nullable(true)
        .required('Mobile number is required')
        .matches(regex.mobile, 'Mobile number is invalid')
})