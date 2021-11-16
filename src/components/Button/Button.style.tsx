import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import breakpoints from 'styles/breakpoints';
import { lighten } from 'polished'

export const ThemeButton = styled(Button)`
    box-shadow: 0.2rem 0.3rem 0.3rem rgba(0, 0, 0, 0.15);
    transition:all .3s ease;
    &.btn-primary{
        color: #fff;
        background-color: ${props => props.theme.primary};
        border-color: ${props => props.theme.primary};
        &:not(.disabled):not(:disabled){
            &:hover{
                color: #fff;
                background-color: ${props => lighten(.1, props.theme.primary)} !important;
                border-color: ${props => lighten(.1, props.theme.primary)} !important;
            }
            &:active{
                color: #fff;
                background-color: ${props => lighten(.15, props.theme.primary)} !important;
                border-color: ${props => lighten(.15, props.theme.primary)} !important;
            }
        }
        &.disabled,
        &:disabled{
            opacity:.3
        }
    }
    &.btn-secondary{
        color: #fff;
        background-color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
        &:not(.disabled):not(:disabled){
            &:hover{
                color: #fff;
                background-color: ${props => lighten(.1, props.theme.secondary)} !important;
                border-color: ${props => lighten(.1, props.theme.secondary)} !important;
            }
            &:active{
                color: #fff;
                background-color: ${props => lighten(.15, props.theme.secondary)} !important;
                border-color: ${props => lighten(.15, props.theme.secondary)} !important;
            }
        }
        &.disabled,
        &:disabled{
            opacity:.3
        }
    }
    &:hover {
        box-shadow: 0.2rem 0.3rem 0.35rem rgba(0, 0, 0, 0.16);
    }
    &:focus,
    &:active {
        box-shadow: 0.2rem 0.3rem 0.45rem rgba(0, 0, 0, 0.17) !important;

    }
    &:active{
        transform:translateY(2px)
    }
    &.btn-lg{
        @media only screen and ${breakpoints.xs}{
            min-width: 12rem;
            font-size: 1rem;
            padding: 0.75rem;
            font-weight:300;
        }
        @media only screen and ${breakpoints.md}{
            min-width: 15rem;
            font-size: 1rem;
            padding: 0.9rem;
        }
        @media only screen and ${breakpoints.lg}{
            min-width: 17rem;
            font-size: 1.15rem;
            padding: .9rem;
        }
        @media only screen and ${breakpoints.xl}{
            min-width: 18rem;
            font-size: 1.15rem;
            padding: .9rem;
        }
        @media only screen and ${breakpoints.xxl}{
            min-width: 20rem;
            font-size: 1.15rem;
            padding: 1rem;
        }
    }
`