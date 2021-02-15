$(document).ready(function () {
  // $("#search").empty();
  // var APPKEY = "ad8618221b820a5c5d95b144d55511c9";
  //search button/bar
  $("#searchBtn").on("click", function() {
   $("#Currentweather").empty()
    //$("#searchistory").append(searchedHistory);
    // console.log(weatherValue);
    getApi(weatherValue);
  });
  // Jquery API/ search results
  function getApi(weathervalue) {
    //createSearchHistory(searchedHistory);
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + weathervalue + "&units=imperial&appid=ad8618221b820a5c5d95b144d55511c9",
    }).then(function (data) {
        // see current/ weather conditions
        $("#Temp").text("Temperature: " + data.main.temp + " °F");
        $("#Humidity").text("Humidity: " + data.main.humidity + "%");
        $("#Winds").text("Wind Speed: " + data.wind.speed + " MPH");
        var long = data.coord.lon;
        var lat = data.coord.lat;
        //  console.log(data)
        $("#5dayforcast").empty()
        weatherForcast();
        UValue(lat, long);
      })
  }
})

// 5 day weather forecast / html addition
function weatherForcast() {
   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + long + "&units=imperial&appid=ad8618221b820a5c5d95b144d55511c9")
    .then(function () {
      return response.json();
    })
    //brings 5 day loops
    .then(function (data2) {
      $("#5dayforcast").empty()
      for (var i = 0; i < data2.list.length; i++) {
        $("#today").text(data2.name + " (" + new Date().toLocaleDateString() + ")");
        $("#tempatureone").text("Temp: " + data2.daily[i].temp.day)
        $("#humidityone").text("Humidity: " + data2.daily[i].humidity)
        $("#UV-Index").empty()
      }
    }
)}

// UV index
function UValue(lat,long) {
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + long + "&units=imperial&appid=ad8618221b820a5c5d95b144d55511c9")
  return response.json()
   .then(function (data2) {
      $("#UV-Index").text("UV-Index: " + data2.current.uvi)
   // changing the colors of UV Index
  if (data2.current.uvi < 3) {
    $("#UV-Index").addClass("btn-success")
}
  else if (data2.current.uvi < 7) {
    $("#UV-Index").addClass("btn-warning");
  }
  else {
    $("#UV-Index").addClass("btn-danger");
  }
  $("#today .cardtext").append(btn)
   }
   )}