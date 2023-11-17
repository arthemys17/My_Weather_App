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