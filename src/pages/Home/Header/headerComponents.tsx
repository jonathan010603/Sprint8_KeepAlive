import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 95.7vw;
    height: 15.6vh;

    @media screen and (min-width: 0px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Logo = styled.img`
    width: 7.81vw;
    height: 3.95vh;
    margin-top: 2.31vh;

    @media screen and (min-width: 0px) {
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

    @media screen and (min-width: 0px) {
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

    @media screen and (min-width: 0px) {
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

    @media screen and (min-width: 0px) {
        width: auto;
        height: auto;
        font-size: 15px;
    }

    @media screen and (min-width: 425px) {
        font-size: 18px;
    }

    @media screen and (min-width: 425px) {
        font-size: 25px;
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

    @media screen and (min-width: 0px) {
        height: auto;   
    }
`

export const Image = styled.img`
    width: 1.77vw;
    height: 3.14vh;
    margin-top: 1.11vh;

    @media screen and (min-width: 0px) {
        margin: 0;
        width: 10vw;
        height: 5vh;
    }

    @media screen and (min-width: 425px) {
        width: 6vw;
        height: 5vh;
    }

    media screen and (min-width: 768px) {
        width: 5vw;
        height: 5vh;
    }
`

export const Temperature = styled.span`
    width: 3.9vw;
    height: 5.64vh;

    @media screen and (min-width: 0px) {
        width: auto;
        height: auto;
        font-size: 35px;
    }

    @media screen and (min-width: 425px) {
        font-size: 43px;
    }

    @media screen and (min-width: 425px) {
        font-size: 55px;
    }
`