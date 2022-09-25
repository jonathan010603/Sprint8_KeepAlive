import { ReactNode } from "react";
import { Container, RightSide, LeftSide, Content, Message, Form } from "./LoginComponents";
import LoginImage from "./assets/LoginImage.jpg";

export const Login = () => {
    return (
        <Container>
            <LeftSide>
                <Content>
                    <Message />
                    <Form />
                </Content>
            </LeftSide>
            <RightSide src={LoginImage} />
        </Container>
    );
}