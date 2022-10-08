import { Container, RightSide, LeftSide, Content, Message, LogoTop, LogoTopLeft } from "./RegisterComponents";
import LogoLight from "./assets/logoLight.svg";
import { RegisterCtxForm } from "./RegisterContext";

export const Register = () => {
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