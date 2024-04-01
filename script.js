const apiId = "69b0b99058c035044f842679ebf46825";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const url1 = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

async function checkWeather(city) {
  const response = await fetch(
    url1 + `&q=${city}` + `&cnt=5` + `&appid=${apiId}`
  );
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerText = data.city.name;
  document.querySelector(".temp").innerText = data.list[0].main.temp + " °С";
  document.querySelector(".humidity").innerText =
    data.list[0].main.humidity + " %";
  document.querySelector(".wind").innerText = data.list[0].wind.speed + " Km/h";
  let icon = document.querySelector(".weather-icon");
  let id=data.list[0].weather[0].id;
  if (id >= 200 && id < 300) {
    icon.src = "/images/thunderstorm.png";
  } else if (id >= 300 && id < 330) {
    icon.src = "/images/drizzle.png";
  } else if (id >= 500 && id < 540) {
    icon.src = "/images/rain.png";
  } else if (id >= 600 && id < 630) {
    icon.src = "/images/snow.png";
  } else if (id >= 700 && id < 800) {
    icon.src = "/images/mist.png";
  } else if (id == 800) {
    icon.src = "/images/clear.png";
  } else {
    icon.src = "/images/clouds.png";
  }
}


let city = document.querySelector(".inp");
// added enter functiionality
city.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(city.value);
    city.value = "";
  }
});

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  //   console.log(city.value);
  checkWeather(city.value);
  city.value = "";
});
