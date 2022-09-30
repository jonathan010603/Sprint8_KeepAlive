import { Container, Content, GiantLogo, TextContainer, BigText, FirstText, LittleText, LinesWrapper } from "./HomeComponents";
import { Header } from "./Header";
import { Footer } from "./Footer";
import circleLogo from './assets/circleLogo.svg';

export const Home = () => {
    return (
        <Container>
            <Header />
            <Content>
                <GiantLogo src={circleLogo}/>
                <TextContainer>
                    <LinesWrapper>
                        <FirstText>Our mission is</FirstText>
                        <LittleText>Nossa missão é</LittleText>
                    </LinesWrapper>
                    <LinesWrapper>
                        <BigText>to transform the world</BigText>
                        <LittleText>transformar o mundo</LittleText>
                    </LinesWrapper>
                    <LinesWrapper>
                        <BigText>building digital experiences</BigText>
                        <LittleText>construindo experiências digitais</LittleText>
                    </LinesWrapper>
                    <LinesWrapper>
                        <BigText>that enable our client’s growth</BigText>
                        <LittleText>que permitam o crescimento dos nossos clientes</LittleText>
                    </LinesWrapper>
                </TextContainer>
            </Content>
            <Footer />
        </Container>
    );
}