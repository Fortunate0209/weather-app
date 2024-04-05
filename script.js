let cityName;

const checkWeather = async () =>{
    cityName = document.getElementById('city').value
    const endpoint =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7b3446e7c76c48c9e4a1d44294e2152f`
    let response = await fetch(endpoint)
    let result = await response.json()
    console.log(result);
    let finalTemp = result.main.temp
    let temperature = Math.floor((Number(finalTemp)-272))
    show.innerHTML = `
    <img src="https://api.openweathermap.org/img/w/${result.weather[0].icon}.png" alt"">
    <h4>Country: ${result.sys.country}</h4>
    <h4>City: ${result.name}</h4>
    <h4>Date: ${new Date().toLocaleDateString()}</h4>
    <h4>Time: ${new Date().toLocaleTimeString()}</h4>
    <h4>Temp: ${temperature}°C</h4>
    <h4>Description: ${result.weather[0].description}</h4>

    <h4>${result.id}</h4>
    <h4>${result.sys.sunrise}</h4>
    
    `

}