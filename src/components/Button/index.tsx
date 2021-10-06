import React from 'react'
import { ThemeButton } from './style'
import PropTypes from 'prop-types'

interface ButtonProps {
    children: any,
    variant?: string,
    size?: string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <ThemeButton
            variant={props.variant}
            size={props.size}
        >
            {props.children}
        </ThemeButton>
    );
}

Button.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};

Button.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default Button;