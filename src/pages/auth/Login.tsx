import { Redirect } from "react-router-dom";
import { WelcomeCard, WelcomeContainer } from './style'
import { Row, Col } from 'react-bootstrap'
import Button from 'components/Button'

export default function Login() {
    // if user already "authenticated", redirect them to the app
    if (localStorage.getItem("user"))
        return <Redirect to={"/app"} />;

    return (
        <WelcomeContainer>
            <Row>
                <Col md="5">
                    <WelcomeCard>
                        <h1>Hello warrior</h1>
                        <p>
                            Let's start coding
                        </p>
                        <p>
                            Yahhh ⚔️
                        </p>
                        <Button>
                            Start battle
                        </Button>
                    </WelcomeCard>
                </Col>
            </Row>
        </WelcomeContainer >
    );
}