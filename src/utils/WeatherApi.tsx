export const checkGeoPerms = async () => {
    return await navigator.permissions.query({ name: 'geolocation' })
        .then(permission => permission.state === "granted")
}

export const getStdWeather = async (setData: any) => {
    setData(await fetchUrl(0, 0, true))
};

export const getSearchWeather = async (setData: any) => {
    navigator.geolocation.getCurrentPosition(async position => setData(await fetchUrl(
        position.coords.latitude.toFixed(2),
        position.coords.longitude.toFixed(2),
        false
    )))
}

export const fetchUrl = async (lat: any, lon: any, std: boolean) => {
    let result = {}
    let url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${lat},${lon}&aqi=no`;
    std && (url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=brasilia&aqi=no`);

    await fetch(url)
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