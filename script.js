const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dda3c6ae1msh5f8a8dd2db30213p12c0f4jsn4c0a87a1e8a3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city
    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        temp.innerHTML = response.temp+"°"
        mini_temp.innerHTML =  response.min_temp+"°"
        maxi_temp.innerHTML = response.max_temp+"°"
        wind_speed.innerHTML = response.wind_speed + " km/h"
        wind_degree.innerHTML = response.wind_degrees
        humidity.innerHTML = response.humidity
        feels_like.innerHTML = response.feels_like
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        cloud_pct.innerHTML = response.cloud_pct

        console.log(response)})
    .catch(err => console.error(err))
}

document.getElementById('bekarForm').onsubmit = (e)=>{
    e.preventDefault()    
   getWeather(city.value)
}

getWeather('Delhi');