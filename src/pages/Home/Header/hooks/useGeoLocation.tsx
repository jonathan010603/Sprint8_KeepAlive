import { checkGeoPerms, getSearchWeather, getStdWeather } from '../WeatherApi';

export const useGeoLocation = (setData: any) => {
    confirm('Permitir a coleta de dados de geolocalização pela página?')
        ? navigator.permissions
            ? checkGeoPerms().then(r => r ? getSearchWeather(setData) : getStdWeather(setData))
            : getStdWeather(setData)
        : getStdWeather(setData)
}