import React from 'react';
import { AnchorLink } from './Link.style'

interface LinkProps {
    children: any,
    to: string,
    className?: string
}

export const Link: React.FunctionComponent<LinkProps> = (props) => {
    const { children, to, className } = props
    return (
        <AnchorLink
            className={className}
            to={to}
        >
            {children}
        </AnchorLink>
    );
}