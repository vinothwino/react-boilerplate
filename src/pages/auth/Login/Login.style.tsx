import styled from 'styled-components'
import { Card, Container } from 'react-bootstrap'

export const WelcomeContainer = styled(Container)`
  height:100vh;
  .row{
    height:100%;
    justify-content:center;
    [class^="col-"]{
      align-self:center;
    }
  }
`;

export const WelcomeCard = styled(Card)`
  text-align:center;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0rem 0rem .5rem rgba(0,0,0,.3);
  h1{
    margin-bottom:2rem;
  }
  p{
    font-size:1.5rem;
    font-style:italic;
    margin-bottom:.8rem;
  }
`;
