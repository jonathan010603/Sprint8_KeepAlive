export const checkGeoPerms = async () => {
    return await navigator.permissions.query({ name: 'geolocation' })
        .then(permission => permission.state === "granted")
}

export const getStdWeather = async (setData: any) => {
    setData(await fetchUrl(-15.78, -47.92))
};

export const getSearchWeather = async (setData: any) => {
    navigator.geolocation.getCurrentPosition(async position => setData(await fetchUrl(
        position.coords.latitude.toFixed(2),
        position.coords.longitude.toFixed(2)
    )))
}

export const fetchUrl = async (lat: any, lon: any) => {
    let result = {}
    await fetch(`https://api.weatherapi.com/v1/current.json?key=f78cfb0b1d2944f1803173629220502&q=${lat},${lon}&aqi=no`)
        .then(r => r.json())
        .then(data => {
            let initials = data.location.region.match(/\b(\w)/g);

            result = {
                city: `${data.location.name} - ${initials.join('')}`,
                temp: parseInt(data.current.feelslike_c)
            }
        })
        .catch(e => console.log(e))

    return result;
}