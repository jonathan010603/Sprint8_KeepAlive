import styled from 'styled-components';
import LogoDark from './assets/logoDark.svg';
import { Time } from './Time';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 95.7vw;
    height: 15.6vh;
`

export const Logo = styled.img`
    width: 7.81vw;
    height: 3.95vh;
    margin-top: 2.31vh;
`

export const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17.03vw;
    height: 15.64vh;
`

export const Hour = styled.span`
    width: 17.03vw;
    height: 13.51vh;
    font-size: 7.5vw;
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
    width: 6.30vw;
    height: 7.22vh;
    margin-top: 2.31vh;
    background-color: black;
`

export const Header = () => {
    return (
        <Container>
            <Logo src={LogoDark} />
            <TimeContainer>
                <Hour>{Time().hours}</Hour>
                <Day>{Time().date}</Day>
            </TimeContainer>
            <WeatherContainer />
        </Container>
    );
}