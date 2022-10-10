import { Container, RightSide, LeftSide, Content, Message, LogoTop, LogoTopLeft } from "./LoginComponents";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Form } from "./Form";
import { auth } from "../../utils/firebase/initialize";
import LogoLight from "./assets/logoLight.svg";

export const Login = () => {
    const navigate = useNavigate();
    useEffect(() => onAuthStateChanged(auth, user =>
        user && navigate('/home')
    ), [])

    return (
        <Container>
            <LeftSide>
                <LogoTopLeft src={LogoLight} />
                <Content>
                    <Message />
                    <Form />
                </Content>
            </LeftSide>
            <RightSide>
                <LogoTop src={LogoLight} />
            </RightSide>
        </Container>
    );
}