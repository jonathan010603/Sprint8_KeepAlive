import { Container, RightSide, LeftSide, Content, Message, LogoTop, LogoTopLeft } from "./RegisterComponents";
import { onAuthStateChanged } from "firebase/auth";
import { RegisterCtxForm } from "./RegisterContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../utils/firebase/initialize";
import LogoLight from "./assets/logoLight.svg";

export const Register = () => {
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
                    <RegisterCtxForm />
                </Content>
            </LeftSide>
            <RightSide>
                <LogoTop src={LogoLight} />
            </RightSide>
        </Container>
    );
}