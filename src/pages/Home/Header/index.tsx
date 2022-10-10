import { Container, Logo, TimeContainer, Hour, Day, WeatherContainer, City, Climate, Image, Temperature } from './headerComponents';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useGeoLocation } from './hooks/useGeoLocation';
import { useNavigate } from 'react-router-dom';
import { Time } from './Time';
import { auth } from '../../../utils/firebase/initialize';
import LogoDark from './assets/logoDark.svg';
import Cloudy from "./assets/cloudy.png";

export const Header = () => {
    const navigate = useNavigate();
    const [locationData, setData] = useState<any>({
        city: '',
        temp: '',
    });

    useEffect(() => {
        auth.currentUser
            ? useGeoLocation(setData)
            : navigate('/')
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