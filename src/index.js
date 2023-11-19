//Update the date
let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeekDay = document.querySelector("#current-week-day");
currentWeekDay !== null && (currentWeekDay.innerHTML = days[now.getDay()]);

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
let apiKey = "0t54a8o1afb5bf5b4dd0813b70dd9503";

function newSearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#input-search-form");
  let valueInputInString = `${searchInput.value}`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${valueInputInString}&key=${apiKey}&units=metric`;
  let onlyLetters = /([a-zA-Z]+[\s]*)*/i;

  function changeCity(response) {
    let degrees = Math.round(response.data.temperature.current);
    let changeDegrees = document.querySelector("#current-degree");

    changeDegrees.innerHTML = `${degrees}º`;

    let formattedString = valueInputInString.match(onlyLetters);

    if (formattedString != null && valueInputInString != "") {
      if (valueInputInString.length == formattedString[0].length) {
        let city = document.querySelector("#city");

        if (searchInput === null || city === null) {
          return;
        }

        city.innerHTML = valueInputInString;
        return;
      }
    }
  }
  axios
    .get(apiURL)
    .then(changeCity)
    .catch(() => alert("Please, search only for the city name!"));

  searchInput.value = null;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", newSearch);
