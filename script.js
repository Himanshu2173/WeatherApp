let button_clicked = false;
async function getWeather(city) {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "03b52183f2msh98e480b34bf2ddcp1c21dcjsn0cb504272488",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    // document.getElementById("cloud_pct").innerHTML= weatherData.cloud_pct;
    if (button_clicked) {
      const url =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
      cityName.innerHTML = city;
      const response = await fetch(url, options);
      const weatherData = await response.json();
      document.getElementById("temp").innerHTML = weatherData.temp;
      document.getElementById("feels_like").innerHTML = weatherData.feels_like;
      document.getElementById("humidity").innerHTML = weatherData.humidity;
      document.getElementById("min_temp").innerHTML = weatherData.min_temp;
      document.getElementById("max_temp").innerHTML = weatherData.max_temp;
      document.getElementById("wind_speed").innerHTML = weatherData.wind_speed;
      document.getElementById("wind_degrees").innerHTML =
        weatherData.wind_degrees;
      document.getElementById("sunrise").innerHTML = weatherData.sunrise;
      document.getElementById("sunset").innerHTML = weatherData.sunset;
      button_clicked = false;
    } else {
      const url1 =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nashik";
      const url2 =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai";
      const response1 = await fetch(url1, options);
      const response2 = await fetch(url2, options);

      const weatherData1 = await response1.json();
      const weatherData2 = await response2.json();
      document.getElementById("n_temp").innerHTML = weatherData1.temp;
      document.getElementById("n_fl").innerHTML = weatherData1.feels_like;
      document.getElementById("n_h").innerHTML = weatherData1.humidity;
      document.getElementById("n_min").innerHTML = weatherData1.min_temp;
      document.getElementById("n_max").innerHTML = weatherData1.max_temp;

      document.getElementById("m_temp").innerHTML = weatherData2.temp;
      document.getElementById("m_fl").innerHTML = weatherData2.feels_like;
      document.getElementById("m_h").innerHTML = weatherData2.humidity;
      document.getElementById("m_min").innerHTML = weatherData2.min_temp;
      document.getElementById("m_max").innerHTML = weatherData2.max_temp;
    }
  } catch (error) {
    console.error(error);
  }
}
// getWeather();
submit.addEventListener("click", (e) => {
  e.preventDefault();
  button_clicked = true;
  getWeather(city.value);
});

document.onload = getWeather("Nashik");
document.onload = getWeather("Mumbai");
