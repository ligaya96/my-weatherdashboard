$(document).ready(function () {
  // $("#search").empty();
  var APIKEY = "ad8618221b820a5c5d95b144d55511c9";
  var cityList = JSON.parse(localStorage.getItem("cityNameList")) || [];
  var currentObj, forecastObj, cityData = {};


  //search button/bar
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var weatherValue = $("#search").val();
    // $("#Currentweather").empty()
    // console.log(weatherValue);
    getApi(weatherValue);
  });
 // search history
function searchedHistory(){
$(".search-history").empty();
for (let i = 0; i < cityList.length; i++) {
  var city = $("<div>");
  var name = $("<span>");
  // Adding a class, attribute and text
  city.addClass("city d-block border p-2 text-truncate");
  city.attr("data-name", cityList[i].cityName);
  city.attr("data-lat", cityList[i].lat);
  city.attr("data-lon", cityList[i].lon);
  name.addClass("city-text");
  name.text(cityList[i].cityName);
  cityEl.append(name);
  // Adding the new element to the HTML
  $(".search-history").append(city);
}
}

  // Jquery API/ search results
  function getApi(weatherValue) {
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + weatherValue + "&appid=" + APIKEY + "&units=imperial",
      dataType: "json"
    }).then(function (data) {
      // see current/ weather conditions
      $("#Temp").text("Temperature: " + data.main.temp + " °F");
      $("#Humidity").text("Humidity: " + data.main.humidity + "%");
      $("#Winds").text("Wind Speed: " + data.wind.speed + " MPH");
      var lat = data.coord.lat;
      var long = data.coord.lon;
      console.log(lat, long)
      //  console.log(data)
      // $("#5dayforcast").empty()
       weatherForcast(weatherValue);
       UValue(lat, long);
    })
  }

  // 5 day weather forecast / html addition
  function weatherForcast(weatherValue) {
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + weatherValue + "&appid=" + APIKEY + "&units=imperial ",
      dataType: "json",
    })
      //brings 5 day loops
      .then(function (data2) {
        // $("#5dayforcast").empty()
        for (var i = 0; i < data2.list.length; i++) {
         $("#today").text(data2.name + " (" + new Date().toLocaleDateString() + ")");
          $("#tempatureone").text("Temp: " + data2.list[i].main.temp_max)
          $("#humidityone").text("Humidity: " + data2.list[i].main.humidity)
          $("#UV-Index").empty()
        }
      }
      )
  }
  // UV index
  function UValue(lat, long) {
}
})
// Displays Search history 

// Clearing Previous Search History 

// 