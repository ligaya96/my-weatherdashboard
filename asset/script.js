$(document).ready(function () {
  // $("#search").empty();
  var APIKEY = "ad8618221b820a5c5d95b144d55511c9";
  var searchedHistory = document.querySelector('#search-history');
  var windText = document.querySelector('#currentWind');
  var cityText = document.querySelector('#currentCity');
  var tempText = document.querySelector('#currentTemp');
  var humidityText = document.querySelector('#currentHum');
  var UVText = document.querySelector('#currentUV');
  $("#search-city").on("click", function() {
    displayWeather();
  })

  // Display weather
  function displayWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchedHistory.value + '&units=imperial&appid=ad8618221b820a5c5d95b144d55511c9')
    .then(response => response.json())
    .then(data => {
    var cityVal = data.name;
    var tempatureVal = data.main.temp; 
    var humidityVal = data.main.humidity;
    var windVal = data.wind.speed;
    var long = data.coord.lon;
    var lat = data.coord.lat;
    cityText.textContent = cityVal;
    tempText.textContent = "Temperature: " + tempatureVal + "° F";
    humidityText.textContent = "Humidity: " + humidityVal + "%";
    windText.textContent = "Wind Speed: " + windVal + " MPH";
  // 5 day weather forecast / html addition
  var fivedayforcast = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + long + APIKEY;
  $.ajax({
    url: fivedayforcast,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 5 ; i++) {
    var date = moment.unix(data.daily[i+1].dt).format("dddd, MMMM Do YYYY");
    var temp = data.daily[i].temp.day;
    var hum = data.daily[i].humidity;
    var idNumber = i + 1;
    var dateFore = document.getElementById("date" + idNumber);
    var tempFore = document.getElementById("tempature" + idNumber);
    var humFore = document.getElementById("humidity" + idNumber);
    dateFore.textContent = date;
    tempFore.textContent = "Temperature: " + temp + "° F";
    humFore.textContent = "Humidity: " + hum + "%";
    $(".show").removeClass("hidden");
    }
  // trying to make UW work finally
  var UVI = data.current.uvi;
  UVText.textContent = "currentUV : " + UVI;
  if (UVI <= 2){
  UVIndexText.classList.add("lowUVI");
  }
  if(UVI <= 5){
  UVIndexText.classList.add("midUVI");
  }
  if(UVI >= 6){
  UVIndexText.classList.add("highUVI");
  }
})
})
}
});
