import { Container, Header, Content, GiantLogo, TextContainer, BigText, FirstText, LittleText, Footer } from "./HomeComponents";
import circleLogo from './assets/circleLogo.svg';

export const Home = () => {
    return (
        <Container>
            <Header />
            <Content>
                <GiantLogo src={circleLogo}/>
                <TextContainer>
                    <FirstText>Our mission is</FirstText>
                    <LittleText>Nossa missão é</LittleText>
                    <BigText>to transform the world</BigText>
                    <LittleText>transformar o mundo</LittleText>
                    <BigText>building digital experiences</BigText>
                    <LittleText>construindo experiências digitais</LittleText>
                    <BigText>that enable our client’s growth</BigText>
                    <LittleText>que permitam o crescimento dos nossos clientes</LittleText>
                </TextContainer>
            </Content>
            <Footer />
        </Container>
    );
}