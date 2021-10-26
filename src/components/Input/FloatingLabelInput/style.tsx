import styled from "styled-components";
import { FormGroup } from 'react-bootstrap'
import breakpoint from 'styles/breakpoints';

export const FloatingLabel = styled(FormGroup)`
    position:relative;
    margin-bottom:1.5rem !important;
    padding-bottom:1.5rem;
    .invalid-feedback{
        position:absolute;
        left:0;
        bottom:0;
        text-align:left;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    input{
        border-width: 1px;
        border-color: ${props => props.theme.grey};
        font-size: 1rem;
        padding: 1.6rem 3rem 1.6rem 1rem;
        box-shadow:none !important;
        -webkit-background-clip: text;
        &:focus,
        &:not(:placeholder-shown){
            border-color: ${props => props.theme.primary};
        }
        &:focus,
        &:not(:placeholder-shown),
        &:-webkit-autofill{
            & ~ label{
                transform: scale(0.9) translateY(-50%) translateX(-10%);
                top:0;
                color: ${props => props.theme.primary};
            }
            & ~ .right-icon{
                color: ${props => props.theme.primary} !important;
            } 
        }
        &.is-invalid{
            border-color: ${props => props.theme.danger};
            & ~ label{
                color: ${props => props.theme.danger};
            } 
        }
    }
        .right-icon{
            position: absolute;
            top: 36%;
            right: 1.1rem;
            font-size: 1.4rem;
            color: ${props => props.theme.lightBlue};
            transform: translateY(-50%);
            cursor:pointer;
        }
        label{
            position: absolute;
            left: 1rem;
            top: 36%;
            transform: translateY(-50%);
            margin-bottom: 0;
            color: ${props => props.theme.lightBlue};
            background: white;
            transition: all .2s ease;
            z-index: 0;
            pointer-events: none;
            font-size: 1rem;
        }
    
        @media only screen and ${breakpoint.xs}{
            label{
                font-size: 0.9rem;
            }
            input{
                font-size: 0.9rem;
                padding: 1.6rem 2.8rem 1.6rem 1rem;
            }
        }
    
        @media only screen and ${breakpoint.lg}{
            label{
                font-size: 0.95rem;
            }
            input{
                font-size: 0.9rem;
                padding: 1.6rem 2.8rem 1.6rem 1rem;
            }
        }
    
        @media only screen and ${breakpoint.xl}{
            label{
                font-size: 1rem;
            }
            input{
                font-size: 1rem;
                padding: 1.75rem 2.8rem 1.75rem 1rem;
            }
        }
    
        @media only screen and ${breakpoint.xxl}{
            label{
                font-size: 1.1rem;
            }
            input{
                font-size: 1rem;
                padding: 1.9rem 2.8rem 1.9rem 1rem;
            }
    }

`