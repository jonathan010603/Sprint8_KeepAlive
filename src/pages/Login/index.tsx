import { ReactNode } from "react";
import { Container, FormContainer, Message, InsertUser, InsertPassword } from "./LoginComponents";

type children = { children: ReactNode }

export const Login = () => {
    return (
        <Container>
            <FormContainer>
                <Message />
                <InsertUser />
                <InsertPassword />
            </FormContainer>
        </Container>
    );
}