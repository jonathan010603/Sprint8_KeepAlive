import { Container, RightSide, LeftSide, Content, Message, LogoTop } from "./LoginComponents";
import LogoLight from "./assets/logoLight.svg";
import { Form } from "./Form";

export const Login = () => {
    return (
        <Container>
            <LeftSide>
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