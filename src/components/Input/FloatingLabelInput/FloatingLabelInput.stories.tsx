// FloatingLabelInput.stories.js | FloatingLabelInput.stories.jsx

import { FloatingLabelInput } from './FloatingLabelInput';
import withFormik from 'storybook-formik';
import * as yup from 'yup'

const Template = (args) => <FloatingLabelInput {...args} />;


interface ThemeFloatingLabelInputProps {
    [key: string]: any;
}

//👇 Each story then reuses that template
export const ThemeFloatingLabelInput: ThemeFloatingLabelInputProps = Template.bind({});

ThemeFloatingLabelInput.args = { label: 'Email ID', type: 'text', name: 'emailId' };

ThemeFloatingLabelInput.storyName = "Input"

export default {
    component: FloatingLabelInput,
    title: 'components/Input/FloatingLabel',
    decorators: [withFormik],
    parameters: {
        formik: {
            initialValues: { emailId: '' },
            validationSchema: yup.object().shape({
                emailId: yup.string()
                    .nullable(true)
                    .email('Email id is invalid')
                    .required('Email id is required')
            }),
        },
    },
    argTypes: {
        name: {
            control: {
                disable: true
            }
        },
        type: {
            options: ['text', 'number', 'password'],
            control: { type: 'radio' }
        }
    }
}

