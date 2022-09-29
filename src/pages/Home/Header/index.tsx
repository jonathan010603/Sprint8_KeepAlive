import { Container, Logo, TimeContainer, Hour, Day, WeatherContainer, City, Climate, Image, Temperature } from './HeaderComponents';
import { checkGeoPerms, fetchUrl, getSearchWeather, getStdWeather } from '../../../utils/WeatherApi';
import { Time } from '../Time';
import { useEffect, useState } from 'react';
import LogoDark from './assets/logoDark.svg';
import Cloudy from "./assets/cloudy.png";

export const Header = () => {
    const [locationData, setData] = useState<any>({
        city: '',
        temp: '',
    })

    useEffect(() => {
        navigator.permissions
            ? checkGeoPerms().then(r => r ? getSearchWeather(setData) : getStdWeather(setData))
            : setData(fetchUrl(-15.7801, -47.9292))
    }, []);

    return (
        <Container>
            <Logo src={LogoDark} />
            <TimeContainer>
                <Hour>{Time().hours}</Hour>
                <Day>{Time().date}</Day>
            </TimeContainer>
            <WeatherContainer>
                <City>{locationData.city || 'Procurando'}</City>
                <Climate>
                    <Image src={Cloudy} />
                    <Temperature>{parseInt(locationData.temp) || ''}º</Temperature>
                </Climate>
            </WeatherContainer>
        </Container>
    );
}