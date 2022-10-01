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

    @media screen and (min-width: 0px) {
        width: 60vw;
        height: 80vh;
        left: -20vw;
        bottom: 0;
        top: 23vh;
        min-height: 600px;
    }

    @media screen and (min-width: 425px) {
        top: 36vh;
        min-height: 730px;
    }

    @media screen and (min-width: 600px) {
        top: 42vh;
        min-height: 800px;
    }

    @media screen and (min-width: 768px) {
        top: 42vh;
        min-height: 800px;
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
    
    @media screen and (min-width: 0px) {
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

    @media screen and (min-width: 0px) {
        font-size: 6.42vw;
        line-height: 13px;
    }
    
    @media screen and (min-width: 425px) {
        line-height: 40px;
    }

    @media screen and (min-width: 768px) {
        font-size: 45px;
        line-height: 40px;
    }
`

export const FirstText = styled(BigText)`
    font-size: 1.875vw;
    font-weight: 700;
    line-height: 3.51vh;
    text-align: right;
    color: ${variables.bigText};

    @media screen and (min-width: 0px) {
        font-size: 5.35vw;
    }
    
    @media screen and (min-width: 0px) {
        font-size: 35px;
    }
`

export const LittleText = styled.span`
    font-size: 1.25vw;
    font-weight: 400;
    text-align: right;
    color: ${variables.littleText};

    @media screen and (min-width: 0px) {
        font-size: 3.92vw;
    }

    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
`

export const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.03vh;
`