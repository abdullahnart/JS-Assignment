let APIkey = "791dc45d55be621514bdb2196de6d4c0";
let search= document.getElementById("search");
let btn = document.getElementById("btn");
let wrapper = document.getElementById("wrapper");

function checkWeather(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${APIkey}`;
if(search.value.trim() === ""){
    wrapper.innerHTML = `<p class = "error">Input a City Name</p>`;
}else{
    fetch(apiUrl)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        showWeatherData(data)
    })
    .catch((err)=>{
        wrapper.innerHTML = `<p class = "error">${err}</p>`;
    });
}
search.value = "";
}

btn.addEventListener("click",checkWeather);

function showWeatherData(data){
    console.log(data);
    const {name} = data;
    const {country} = data.sys;
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    let temprature = Math.floor(temp);
    const {main,icon, id} = data.weather[0];
    let img ;
    if(id>=200 && id<=232){
        url = "https://cdn-icons-png.flaticon.com/512/3104/3104612.png";
    }
    else if(id>=300 && id<=321){
        url = "https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png";
    }
    else if(id>=500 && id<=531){
        url = "https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png";
    }
    else if(id>=600 && id<=622){
        url = "https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png";
    }
    else if(id>=701 && id<=781){
        url = "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png";
    }
    else if(id>=801 && id<=804){
        url = "https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png";
    }
    else {
        url = "https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png";
    }
    wrapper.innerHTML = `        <div class="weather">
          <img class="weather-icon" src="${url}" alt="...">
          <h3 class="weather_type">${main}</h3>
          <h1 class="temp">${temprature}°C </h1>
          <h2 class="city">${name}</h2>
          <h3 class="city">${country}</h3>
          <div class="details">
            <div style="display: flex;" class="col">
              <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png">
              <div class="info">
                <p class="humidity">${humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div class="col">
              <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png">
              <div class="info">
                <p class="wind">${speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>`;
}

search.addEventListener('keyup',(e)=>{
   if(e.key === "Enter") {
    checkWeather();
   }
})

let currentLocation = document.getElementById("current_location");

function getCurrentLocation(){

    navigator.geolocation.getCurrentPosition((position)=>{
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        let currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${APIkey}`;
        fetch(currentUrl)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            showWeatherData(data);
        })
        .catch((err)=>{
            wrapper.innerHTML = `<p class = "error">${err}</p>`;
        })
    },(error)=>{
        console.log(error);
        wrapper.innerHTML = `<p class = "error">${error.message}</p>`;
    })
}

currentLocation.addEventListener("click",getCurrentLocation);