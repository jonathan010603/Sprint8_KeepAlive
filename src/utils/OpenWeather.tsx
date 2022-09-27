const KEY = '9e760fdbd058740ef81e5146dbb7297b';

const fetchUrl = async (url: string) => {
    await fetch(url)
        .then(r => r.json())
        .then(data => {
            return {
                city: data.name,
                temp: data.main.temp,
                weather: data.weather[0].main
            }
        })
        .catch(err => console.log(err))
}

export const getWeather = async (position: any) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}`;
    const stdUrl = `https://api.openweathermap.org/data/2.5/weather?lat=28.2623&lon=52.4103&appid=${KEY}`;

    if (navigator.geolocation) return console.log("Deu");
    //fetchUrl(stdUrl)
    console.log("Não deu")
}