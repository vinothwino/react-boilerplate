import { render, waitFor } from 'test.utils'
import { Route } from 'react-router-dom'
import FloatingLabelInput from './index'
import { Formik } from 'formik'
import userEvent from '@testing-library/user-event'

const submitEvent = jest.fn();

let Component = <Route path="/" render={
    (props) =>
        <Formik initialValues={{ emailId: '' }} onSubmit={submitEvent}>
            {
                props => (
                    <FloatingLabelInput
                        {...props}
                        type="text"
                        name="emailId"
                        label="Email ID"

                    >
                        Primary
                    </FloatingLabelInput>
                )
            }
        </Formik>
}
/>

describe('FloatingLabelInput', () => {
    test('FloatingLabelInput | Renders without errors', async () => {
        render(Component)
    })
    test('FloatingLabelInput | Onclick event is working', async () => {
        let { getByLabelText } = render(Component)
        const inputElement = getByLabelText("Email ID")
        userEvent.type(inputElement, 'test')
        expect(inputElement).toContain('test')
    })
})