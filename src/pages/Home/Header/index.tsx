import { Container, Logo, TimeContainer, Hour, Day, WeatherContainer, City, Climate, Image, Temperature } from './headerComponents';
import { checkGeoPerms, getSearchWeather, getStdWeather } from '../../../utils/WeatherApi';
import { Time } from './Time';
import { useEffect, useState } from 'react';
import LogoDark from './assets/logoDark.svg';
import Cloudy from "./assets/cloudy.png";

export const Header = () => {
    const [locationData, setData] = useState<any>({
        city: '',
        temp: '',
    })

    useEffect(() => {
        confirm('Permitir a coleta de dados de geolocalização pela página?')
            ? navigator.permissions
                ? checkGeoPerms().then(r => r ? getSearchWeather(setData) : getStdWeather(setData))
                : getStdWeather(setData)
            : getStdWeather(setData)
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