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

    @media screen and (max-width: 424px) {
        width: 60vw;
        height: 80vh;
        left: -20vw;
        bottom: 0;
        top: 23vh;
        min-height: 600px;
    }

    @media screen and (min-width: 425px) and (max-width: 599px) {
        top: 30vh;
        min-height: 550px;
        left: -20vw;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        top: 35vh;
        min-height: 520px;
        left: -20vw;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        top: 25vh;
        min-height: 550px;
        left: -20vw;
    }
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
    
    @media screen and (max-width: 1024px) {
        margin-right: 2vw; 
        margin-top: 7vh;
        width: auto;
        height: 30px;
    }
`

export const BigText = styled.span`
    display: inline-grid;
    align-items: center;
    font-size: 3.33vw;
    font-weight: 700;
    text-align: right;
    line-height: 6.2vh;
    color: ${variables.bigText};

    @media screen and (max-width: 424px) {
        font-size: 6.42vw;
        line-height: 13px;
    }
    
    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 5.3vw;
        line-height: 25px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 4vw;
        line-height: 30px;
    }
`

export const FirstText = styled(BigText)`
    font-size: 1.875vw;
    font-weight: 700;
    line-height: 3.51vh;
    text-align: right;
    color: ${variables.bigText};

    @media screen and (max-width: 424px) {
        font-size: 4.5vw;
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 4vw;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 3.5vw;
    }
`

export const LittleText = styled.span`
    font-size: 1.25vw;
    font-weight: 400;
    text-align: right;
    color: ${variables.littleText};

    @media screen and (max-width: 767px) {
        font-size: 3.92vw;
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        font-size: 3vw;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.8vw;
    }
`

export const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.03vh;
`