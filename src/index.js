//update all the weather infos with the API
function updateWeather(response){
  let changeDegrees = document.querySelector("#current-degree");
  let degrees = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let currentWeatherDescription = document.querySelector("#weather-description");
  let imageCurrentWeather = document.querySelector("#img-current-weather");
  let currentHumidity = document.querySelector("#humidity");
  let currentWindSpeed = document.querySelector("#wind-speed");
  let date = new Date (response.data.time * 1000);
  let weekDayElement = document.querySelector("#current-week-day");
  let monthElement = document.querySelector("#current-month");
  let dayElement = document.querySelector ("#current-day");
  
  dayElement.innerHTML = date.getDate();
  monthElement.innerHTML = formatMonth(date);
  weekDayElement.innerHTML = formatWeekDay(date);
  imageCurrentWeather.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.icon}" class="current-img">`;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  currentWindSpeed.innerHTML = `${response.data.wind.speed} km/h`;
  changeDegrees.innerHTML = `${degrees}º`;
  cityElement.innerHTML = response.data.city;
  currentWeatherDescription.innerHTML = response.data.condition.description;
  
  getForecast(response.data.city);
}


//format date with API
function formatWeekDay(date){
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekDay = days[date.getDay()];

  return `${weekDay},`;
}

function formatMonth(date){
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[date.getMonth()];

  return currentMonth;

}

//search for a city in the API
function searchCity(city){
  let apiKey = "0t54a8o1afb5bf5b4dd0813b70dd9503";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios
    .get(apiURL)
    .then(updateWeather)
    .catch(() => alert("Please, search only for the city name"));
}

//search form
function handleSearchSubmit(event) {
  event.preventDefault();
  
  let searchInput = document.querySelector("#input-search-form");

  searchCity(searchInput.value);
  searchInput.value = null;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

//formating the date for the forecast
function formatDate(timestamp){
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

//get the forecast from API
function getForecast(city){
  let apiKey = "0t54a8o1afb5bf5b4dd0813b70dd9503";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric
  `;
  
  axios.get(apiURL).then(displayForecast);
}

//inject html from javascript
function displayForecast(response){
  let forecastHTML = "";
  
  response.data.daily.forEach(function (day, index){
    if(index > 0 && index < 6){
      forecastHTML = forecastHTML + 
      `<div class="weather-forecast-day">
      <div class="weather-forecast-date">
      <p class="forecast-date">${formatDate(day.time)}</p>
      </div>
      <div class="forecast-icn">
      <img src="${day.condition.icon_url}" alt="${day.condition.description}">
      </div>
      <div class="forecast-temperatures">
      <span class="forecast-temperatures-max">
      ${Math.round(day.temperature.maximum)}º
      </span>
      <span class="forecast-temperatures-min">
      ${Math.round(day.temperature.minimum)}º
      </span>
      </div>
      </div>`
    }
  })
  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

searchCity("Lisbon");
