function fetchWeatherData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderAllWeatherData(data);
    });
}

let inputValue = document.getElementById("cityInput").value;
let body = document.querySelector("body");
let weatherDisplay = document.querySelector("div");
let alerts = document.getElementById("alertMessage");
let url;

function getWeatherByCity() {
  weatherDisplay.innerHTML = " ";
  let inputValue = document.getElementById("cityInput").value;
  if (inputValue == 0 || inputValue == " ") {
    alerts.innerHTML = "Please enter a city name";
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e2c7bff8026b7ce14083be4b97fa4f5b&units=metric`;
    fetchWeatherData(url);
  }
}

function cityName() {
  const cityParagraph = document.createElement("p");
  let inputValue = document.getElementById("cityInput").value;
  cityParagraph.innerHTML = "<h1>" + inputValue + "</h1>";
  weatherDisplay.appendChild(cityParagraph);
}

function weatherImageIcon(icon) {
  const image = document.createElement("img");
  image.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherDisplay.appendChild(image);
}

function temperature(temp) {
  const temperatureParagraph = document.createElement("p");
  temperatureParagraph.innerHTML =
    "The temperaure is currently " + Math.round(temp) + "°";
  weatherDisplay.appendChild(temperatureParagraph);
}

function windSpeed(speed) {
  const windSpeedParagraph = document.createElement("p");
  windSpeedParagraph.innerHTML = "The current wind speed is " + speed + "km/h";
  weatherDisplay.appendChild(windSpeedParagraph);
}

function cloudy(clouds) {
  const cloudyParagraph = document.createElement("p");
  cloudyParagraph.innerHTML = "Cloudiness: " + clouds + "%";
  weatherDisplay.appendChild(cloudyParagraph);
}

function sunriseTime(data) {
  const sunriseParagraph = document.createElement("p");
  let unixTimeStampRise = data.sys.sunrise;
  const date = new Date(unixTimeStampRise * 1000);
  const sunriseDate = new Date(date);
  const formattedSunrise = sunriseDate.toLocaleString("de-DE", {
    hour: "numeric",
    minute: "numeric",
  });
  sunriseParagraph.innerHTML = "Sunrise: " + formattedSunrise;
  weatherDisplay.appendChild(sunriseParagraph);
}

function sunsetTime(data) {
  const sunsetParagraph = document.createElement("p");
  let unixTimeStampRise = data.sys.sunset;
  const date = new Date(unixTimeStampRise * 1000);
  const sunsetDate = new Date(date);
  const formattedSunset = sunsetDate.toLocaleString("de-DE", {
    hour: "numeric",
    minute: "numeric",
  });
  sunsetParagraph.innerHTML = "Sunrise: " + formattedSunset;
  weatherDisplay.appendChild(sunsetParagraph);
}

function renderAllWeatherData(data) {
  cityName();
  weatherImageIcon(data.weather[0].icon);
  temperature(data.main.temp);
  windSpeed(data.wind.speed);
  cloudy(data.clouds.all);
  sunriseTime(data);
  sunsetTime(data);
}
