import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 95.7vw;
    height: 15.6vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        align-items: flex-start !important;
        width: 96.1vw !important;
        //margin-left: 1vw! important;
        //margin-right: auto !important;
        flex-direction: row !important;
        height: auto !important;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Logo = styled.img`
    width: 7.81vw;
    height: 3.95vh;
    margin-top: 2.31vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        width: auto !important;
        height: auto !important;
    }

    @media screen and (max-width: 1024px) {
        width: 80vw;
        height: 10vh;
    }
`

export const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17.03vw;
    height: 15.64vh;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Hour = styled.span`
    height: 13.51vh;
    font-size: 7vw;
    font-weight: 700;
    line-height: 16.94vh;
    text-align: center;
`

export const Day = styled.span`
    height: 1.6vh;
    font-size: 0.75vw;
    font-weight: 300;
    text-align: center;
`

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 7.30vw;
    height: 7.22vh;
    margin-top: 2.31vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        width: auto !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-left: 5vw !important;
        margin-top: 5.6vh !important;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 2vh;
        width: auto;
        height: auto;
    }
`

export const City = styled.span`
    width: 100%;
    height: 1.66vh;
    font-size: 0.7vw;
    font-weight: 400;
    line-height: 1.66vh;
    text-align: center;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 2vw !important;
        width: auto !important;
        line-height: 100% !important;
    }

    @media screen and (max-width: 1024px) {
        width: auto;
        height: auto;
        font-size: 15px;
    }

    @media screen and (min-width: 425px) and (max-width: 1024px) {
        font-size: 20px;
    }
`

export const Climate = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5.64vh;
    font-size: 2.5vw;
    font-weight: 700;
    text-align: center;
    line-height: 5.64vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        width: auto !important;
        margin-left: 1vw !important;
        line-height: 100% !important;
    }

    @media screen and (max-width: 1024px) {
        height: auto;   
        margin-top: 2vh;
    }
`

export const Image = styled.img`
    width: 1.77vw;
    height: 3.14vh;
    margin-top: 1.11vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        width: 2vw !important;
        height: 5vh !important;
    }

    @media screen and (max-width: 1024px) {
        margin: 0;
        width: 7vw;
        height: 5vh;
    }

    @media screen and (min-width: 425px) and (max-width: 767px) {
        width: 4.5vw;
        height: 5vh;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 3vw;
        height: 5vh;
    }
`

export const Temperature = styled.span`
    width: 3.9vw;
    height: 5.64vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 18px !important;
    }

    @media screen and (max-width: 1024px) {
        width: auto;
        height: auto;
        font-size: 35px;
    }
`