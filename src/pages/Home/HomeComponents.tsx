import styled from 'styled-components';

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

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const GiantLogo = styled.img`
    width: 42.96vw;
    height: 76.38vh;
    position: fixed;
    left: -13vw;
    bottom: 1.5vh;
    z-index: 1;
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