import { Redirect } from "react-router-dom";
import * as  S from './style'
import { Row, Col } from 'react-bootstrap'
import Button from 'components/Button'


export function Login(props) {

    const login = () => {
        localStorage.setItem('token', 'token')
        props.history.push('/app')
    }

    // if user already "authenticated", redirect them to the app
    if (localStorage.getItem("token"))
        return <Redirect to={"/app"} />;

    return (
        <S.WelcomeContainer>
            <Row>
                <Col md="5">
                    <S.WelcomeCard>
                        <h1>Hello warrior</h1>
                        <p>
                            Let's start coding
                        </p>
                        <p>
                            Yahhh ⚔️
                        </p>
                        <Button onClick={login}>
                            Start battle
                        </Button>
                    </S.WelcomeCard>
                </Col>
            </Row>
        </S.WelcomeContainer >
    );
}