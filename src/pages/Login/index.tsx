import { ReactNode } from "react";
import { Container, LeftSide, Content, Message, Form } from "./LoginComponents";

type children = { children: ReactNode }

export const Login = () => {
    return (
        <Container>
            <LeftSide>
                <Content>
                    <Message />
                    <Form />
                </Content>
            </LeftSide>
        </Container>
    );
}