import styled from 'styled-components'
// import breakpoints from 'styles/breakpoints';
// import { lighten } from 'polished'

export const HomeContainer = styled.div`
    height:100vh;
    overflow:hidden;
    background-color: ${props => props.theme.primary};
    display:flex;
    color:white;
    justify-content:center;
    align-items:center;
    font-size:4rem;
`