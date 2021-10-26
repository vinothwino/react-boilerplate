import React from 'react';
import { Spinner } from "react-bootstrap";
import { SuspenseContainer } from './style'

interface SuspenseFallbackProps {

}

const SuspenseFallback: React.FunctionComponent<SuspenseFallbackProps> = () => {
    return (
        <SuspenseContainer>
            <Spinner animation="border" />
        </SuspenseContainer>
    );
}

export default SuspenseFallback;