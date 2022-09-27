import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeather } from '../../utils/OpenWeather';
import LogoDark from './assets/logoDark.svg';
import { Time } from './Time';
import Cloudy from "./assets/cloudy.png";

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
    width: 6.30vw;
    height: 7.22vh;
    margin-top: 2.31vh;
`

export const City = styled.span`
    width: 100%;
    height: 1.66vh;
    font-size: 0.7vw;
    font-weight: 400;
    line-height: 1.66vh;
    text-align: center;
`

export const Climate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5.64vh;
    font-size: 2.5vw;
    font-weight: 700;
    text-align: center;
    line-height: 5.64vh;
`

export const Image = styled.img`
    width: 1.77vw;
    height: 3.14vh;
    margin-top: 1.11vh;
`

export const Temperature = styled.span`
    width: 3.9vw;
    height: 5.64vh;
`

export const Header = () => {
    const [locationData, setData] = useState<any>({
        city: '',
        temp: '',
    })

    useEffect(() => navigator.geolocation.getCurrentPosition(async position => {
        console.log(position.coords.latitude)
        const KEY = '9e760fdbd058740ef81e5146dbb7297b';
        const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=-28.2580551&lon=-52.4096252&appid=${KEY}`;

        navigator.geolocation && (url = queryUrl);

        await fetch(url)
            .then(r => r.json())
            .then(data => {
                setData({
                    city: `${data.name}`,
                    temp: parseFloat(data.main.temp) - 273.15
                })
            })
            .catch(err => console.log(err))
    }), []);

    return (
        <Container>
            <Logo src={LogoDark} />
            <TimeContainer>
                <Hour>{Time().hours}</Hour>
                <Day>{Time().date}</Day>
            </TimeContainer>
            <WeatherContainer>
                <City>{locationData.city} - SC</City>
                <Climate>
                    <Image src={Cloudy}/>
                    <Temperature>{parseInt(locationData.temp)}º</Temperature>
                </Climate>
            </WeatherContainer>
        </Container>
    );
}