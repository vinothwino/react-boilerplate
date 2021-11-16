import styled from "styled-components";

export const SuspenseContainer = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    .spinner-border{
        border: 0.25em solid ${props => props.theme.primary};
        border-right-color: white;
        width:3rem;
        height:3rem;
    }
`