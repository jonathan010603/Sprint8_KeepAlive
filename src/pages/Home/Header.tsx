import styled from 'styled-components';
import LogoDark from './assets/logoDark.svg';

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
    width: 17.03vw;
    height: 15.64vh;
    background-color: black;
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
            <TimeContainer />
            <WeatherContainer />
        </Container>
    );
}