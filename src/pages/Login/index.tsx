import { Container, RightSide, LeftSide, Content, Message, LogoTop, LogoTopLeft } from "./LoginComponents";
import LogoLight from "./assets/logoLight.svg";
import { Form } from "./Form";

export const Login = () => {
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