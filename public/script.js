const apiId = "69b0b99058c035044f842679ebf46825";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const url1 = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

async function checkWeather(city) {
  const { ans } = await axios.post("/", {
    city,
  });

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
  let ic1 = document.querySelector(".weather1");
  let ic2 = document.querySelector(".weather2");
  let ic3 = document.querySelector(".weather3");
  let ic4 = document.querySelector(".weather4");

  let id = data.list[0].weather[0].id;
  icon.src = iconSetter(id);

  id = data.list[1].weather[0].id;
  ic1.src = iconSetter(id);
  id = data.list[2].weather[0].id;
  ic2.src = iconSetter(id);
  id = data.list[3].weather[0].id;
  ic3.src = iconSetter(id);
  id = data.list[4].weather[0].id;
  ic4.src = iconSetter(id);

  temp1.innerText = data.list[1].main.temp + " °С";
  temp2.innerText = data.list[2].main.temp + " °С";
  temp3.innerText = data.list[3].main.temp + " °С";
  temp4.innerText = data.list[4].main.temp + " °С";
}

let temp1 = document.querySelector(".w1");
let temp2 = document.querySelector(".w2");
let temp3 = document.querySelector(".w3");
let temp4 = document.querySelector(".w4");

let i1 = document.querySelector(".weather1");
let i2 = document.querySelector(".weather2");
let i3 = document.querySelector(".weather3");
let i4 = document.querySelector(".weather4");

let city = document.querySelector(".inp");
// added enter functiionality
city.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(city.value);
    city.value = "";
  }
});

function iconSetter(id) {
  if (id >= 200 && id < 300) {
    src = "/images/thunderstorm.png";
  } else if (id >= 300 && id < 330) {
    src = "/images/drizzle.png";
  } else if (id >= 500 && id < 540) {
    src = "/images/rain.png";
  } else if (id >= 600 && id < 630) {
    src = "/images/snow.png";
  } else if (id >= 700 && id < 800) {
    src = "/images/mist.png";
  } else if (id == 800) {
    src = "/images/clear.png";
  } else {
    src = "/images/clouds.png";
  }
  return src;
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log(city.value);

  checkWeather(city.value);
  city.value = "";
});
