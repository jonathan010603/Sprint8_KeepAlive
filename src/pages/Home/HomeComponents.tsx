import styled from 'styled-components';
import circleLogo from './assets/circleLogo.svg';

const variables = {
    bigText: "#C12D18",
    littleText: "#222222"
}

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;
`

export const Header = styled.header`
    align-self: center;
    width: 95.7vw;
    height: 15.6vh;
    background-color: black;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const GiantLogo = styled.img`
    width: 30.8vw;
    height: 69.3vh;
    align-self: flex-end;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 52.5vw;
    height: 35.5vh;
    margin-top: 15.3vh;
    margin-left: auto;
    margin-right: 6.9vw; 
`

export const BigText = styled.span`
    display: inline-grid;
    align-items: center;
    font-size: 3.33vw;
    font-weight: 700;
    text-align: right;
    line-height: 6.2vh;
    color: ${variables.bigText};
`

export const FirstText = styled(BigText)`
    font-size: 1.875vw;
    font-weight: 700;
    line-height: 3.51vh;
    text-align: right;
    color: ${variables.bigText};
`

export const LittleText = styled.span`
    font-size: 1.25vw;
    font-weight: 400;
    text-align: right;
    color: ${variables.littleText};
`

export const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.03vh;
`

export const Footer = styled.footer`
    width: 100vw;
    height: 9.2vh;
    background-color: yellow;
`