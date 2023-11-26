//update all the weather infos with the API
function updateWeather(response){
  console.log(response.data);
  let changeDegrees = document.querySelector("#current-degree");
  let degrees = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let currentWeatherDescription = document.querySelector("#weather-description");
  let imageCurrentWeather = document.querySelector("#img-current-weather");
  let currentHumidity = document.querySelector("#humidity");
  let currentWindSpeed = document.querySelector("#wind-speed");
  
  imageCurrentWeather.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.icon}" class="current-img">`;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  currentWindSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  changeDegrees.innerHTML = `${degrees}º`;
  cityElement.innerHTML = response.data.city;
  currentWeatherDescription.innerHTML = response.data.condition.description;
}

//search for a city in the API
function searchCity(city){
  let apiKey = "0t54a8o1afb5bf5b4dd0813b70dd9503";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(updateWeather);
}

//search form
function handleSearchSubmit(event) {
  event.preventDefault();
  
  let searchInput = document.querySelector("#input-search-form");
  
  /*let onlyLetters = /([a-zA-Z]+[\s]*)/i;
  let formattedString = searchInput.value.match(onlyLetters);
  
  if (formattedString != null && searchInput.value != "") {
    if (searchInput.value.length == formattedString[0].length) {
  
      if (searchInput === null || cityElement === null) {
        return;
      }
  
      cityElement.innerHTML = searchInput.value;
      return;
    }
  }*/

  searchCity(searchInput.value);
  searchInput.value = null;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");



/*
//Update the date
let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeekDay = document.querySelector("#current-week-day");
currentWeekDay !== null && (currentWeekDay.innerHTML = `${days[now.getDay()]},`);

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

let currentMonth = document.querySelector("#current-month");
currentMonth !== null && (currentMonth.innerHTML = months[now.getMonth()]);

let currentDay = document.querySelector("#current-day");
currentDay !== null && (currentDay.innerHTML = now.getDate());

//Search engine

function newSearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#input-search-form");
  let valueInputInString = `${searchInput.value}`;
/*
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", newSearch);


//inject html from javascript
function displayForecast(){

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHTML = "";

  days.forEach(function (day){
    forecastHTML = forecastHTML + 
    `<div class="weather-forecast-day">
    <div class="weather-forecast-date">
    <p class="forecast-date">${day}</p>
    </div>
    <div class="forecast-icn">
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="clear-sky-day">
    </div>
    <div class="forecast-temperatures">
    <span class="forecast-temperatures-max">
    18ª
    </span>
    <span class="forecast-temperatures-min">
    12ª
    </span>
    </div>
    </div>`
  })

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

displayForecast();*/
