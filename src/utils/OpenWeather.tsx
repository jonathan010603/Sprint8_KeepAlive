const KEY = '9e760fdbd058740ef81e5146dbb7297b';

const fetchUrl = async (url: string) => {
    await fetch(url)
        .then(r => r.json())
        .then(data => {
            console.log( {
                city: data.name,
                temp: data.main.temp,
                weather: data.weather[0].main
            })
        })
        .catch(err => console.log(err))
}

export const getWeather = async (position: any) => {
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=28.2623&lon=52.4103&appid=${KEY}`;

    navigator.geolocation && (url = queryUrl);

    await fetch(url)
        .then(r => r.json())
        .then(data => {
            return data.name
            return {
                city: data.name,
                temp: data.main.temp,
                weather: data.weather[0].main
            }
        })
        .catch(err => console.log(err))
}