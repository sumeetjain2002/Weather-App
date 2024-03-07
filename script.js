const apiId = "69b0b99058c035044f842679ebf46825";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
  const response = await fetch(url + `&q=${city}` + `&appid=${apiId}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = data.main.temp + " °С";
  document.querySelector(".humidity").innerText = data.main.humidity + " %";
  document.querySelector(".wind").innerText = data.wind.speed + " Km/h";
  let icon = document.querySelector(".weather-icon");
  console.log(data.weather[0].id);
  if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
    icon.src = "/images/thunderstorm.png";
  } else if (data.weather[0].id >= 300 && data.weather[0].id < 330) {
    icon.src = "/images/drizzle.png";
  } else if (data.weather[0].id >= 500 && data.weather[0].id < 540) {
    icon.src = "/images/rain.png";
  } else if (data.weather[0].id >= 600 && data.weather[0].id < 630) {
    icon.src = "/images/snow.png";
  } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
    icon.src = "/images/mist.png";
  } else if (data.weather[0].id == 800) {
    icon.src = "/images/clear.png";
  } else {
    icon.src = "/images/clouds.png";
  }
}
let city = document.querySelector(".inp");

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  //   console.log(city.value);
  checkWeather(city.value);
  city.value = "";
});
