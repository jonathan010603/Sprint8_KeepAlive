import styled from 'styled-components';

const variables = {
    newTab: "#C13216"
}

export const Container = styled.footer`
    display: flex;
    width: 100vw;
    height: 12.32vh;
    color: #FFFFFF;
    background-image: linear-gradient(to bottom, #33383d, #2d3136, #272a2e, #222327, #1c1d20);
`

export const TextContainer = styled.div`
    display: flex;
    width: 30vw;
    height: 5vh;
    margin-left: 18.43vw;
    margin-top: 1.57vh;
    text-align: right;
    border-right: 1px solid #FFFFFF;
`

export const Text = styled.span`
    font-size: 0.6vw;
    font-weight: 300;
    margin-top: 1.48vh;
    margin-right: 1.82vw;
`

export const RefreshContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 12.44vw;
    height: 6.66vh;
    margin-left: 6.4vw;
    margin-top: 0.8vh;
`

export const RefreshText = styled.div`
    width: 5.67vw;
    height: 4.53vh;
    font-size: 0.7vw;
    font-weight: 300;
    line-height: 1.66vh;
    text-align: right;
    margin-top: 2.4vh;
`

export const SecondsContainer = styled.div`
    
`

export const NewTabContainer = styled.div`
    height: 100%;
    width: 6.8vw;
    display: flex;
    margin-left: auto;
    font-size: 0.625vw;
    font-weight: 400;
    line-height: 1.38vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: ${variables.newTab}
`

export const Logout = styled.div`
    height: 100%;
    width: 6.8vw;
    display: flex;
    font-size: 0.625vw;
    font-weight: 400;
    line-height: 1.38vh;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const Footer = () => {
    return (
        <Container>
            <TextContainer>
                <Text>
                    Essa janela do navegador é usada para manter
                    sua sessão de autenticação ativa. Deixe-a
                    aberta em segundo plano e abra uma nova
                    janela para continuar a navegar.
                </Text>
            </TextContainer>
            <RefreshContainer>
                <RefreshText>Application refresh in</RefreshText>
            </RefreshContainer>
            <NewTabContainer>
                Continuar<br />
                Navegando
            </NewTabContainer>
            <Logout>Logout</Logout>
        </Container>
    );
}