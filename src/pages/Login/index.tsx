import { Container, RightSide, LeftSide, Content, Message } from "./LoginComponents";
import LoginImage from "./assets/LoginImage.jpg";
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
            <RightSide src={LoginImage} />
        </Container>
    );
}