export const checkGeoPerms = async () => {
    return await navigator.permissions.query({ name: 'geolocation' })
        .then(permission => permission.state === "granted")
}

export const getStdWeather = async (setData: any) => {
    setData(await fetchUrl(-15.7801, -47.9292))
};

export const getSearchWeather = async (setData: any) => {
    navigator.geolocation.getCurrentPosition(async position => setData(await fetchUrl(
        position.coords.latitude,
        position.coords.longitude
    )))
}

export const fetchUrl = async (lat: any, lon: any) => {
    let result = {}
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9e760fdbd058740ef81e5146dbb7297b`)
        .then(r => r.json())
        .then(data => {
            result = {
                city: data.name,
                temp: data.main.temp - 273.15
            }
        })
        .catch(e => console.log(e))
        
    return result;
}