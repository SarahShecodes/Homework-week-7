function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "46d856ad81bf24c97ff95fd0280e6d42";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
