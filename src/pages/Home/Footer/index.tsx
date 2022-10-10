import { Container, TextContainer, Text, RefreshContainer, RefreshText, SecondsContainer, Seconds, UnderText, NewTabContainer, Logout, Greetings } from './footerComponents';
import { useNavigate } from 'react-router-dom';
import { userSignOut } from '../../../utils/firebase/auth';
import { TimeOut } from './TimeOut';
import { auth } from '../../../utils/firebase/initialize';

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Greetings>{auth.currentUser ? `Olá, ${auth.currentUser?.displayName.split(' ')[0]}`: ''}</Greetings>
            <TextContainer>
                <Text>
                    Essa janela do navegador é usada para manter
                    sua sessão de autenticação ativa. Deixe-a
                    aberta em segundo plano e abra uma nova
                    janela para continuar a navegar.
                </Text>
            </TextContainer>
            <RefreshContainer>
                <RefreshText>Application<br />refresh in</RefreshText>
                <SecondsContainer>
                    <Seconds>{TimeOut()}</Seconds>
                    <UnderText>seconds</UnderText>
                </SecondsContainer>
            </RefreshContainer>
            <NewTabContainer onClick={() => open('//www.google.com', '_blank')}>
                Continuar<br />
                Navegando
            </NewTabContainer>
            <Logout onClick={() => userSignOut(navigate)}>
                Logout
            </Logout>
        </Container >
    );
}