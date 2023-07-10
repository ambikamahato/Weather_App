const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const descrption = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector(".location_not_found")


async function checkWeather(city) {
    const api_key = "fe4cc45f70657a3b77ac5b00dbc4123c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    

    const weather_data = await fetch(`${url}`).then(response => response.json());
    // console.log(weather_data);  

    if(weather_data.cod === `404`){
        weather_img.src = "./404.jpeg"
        location_not_found.innerHTML = "Sorry location not found!"
        return;
    }else if(location_not_found.innerHTML = "Sorry location not found!"){
        location_not_found.innerHTML = ""
        // console.log("first")
    }

    

    //temperature
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.13)}ºC`

    //weather Type 
    descrption.innerHTML = `${weather_data.weather[0].main}`
    console.log(weather_data);

    //humidity
    humidity.innerHTML = `${weather_data.main.humidity}`

    //wind Speed
    wind_speed.innerHTML = `${weather_data.wind.speed} km/h`

    //weather_img
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./imgs/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./imgs/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./imgs/rain.png";
            break; 
        case 'Mist':
            weather_img.src = "./imgs/mist.png";
            break; 
        case 'Snow':
            weather_img.src = "./imgs/snow.png";
            break;
        case '404':
            weather_img.src = "./404.jpeg";
            break;

    }


}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})