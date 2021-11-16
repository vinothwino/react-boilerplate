import React from 'react';
import { Spinner } from "react-bootstrap";
import { SuspenseContainer } from './SuspenseFallback.style'

interface SuspenseFallbackProps {

}

export const SuspenseFallback: React.FunctionComponent<SuspenseFallbackProps> = () => {
    return (
        <SuspenseContainer>
            <Spinner animation="border" />
        </SuspenseContainer>
    );
}