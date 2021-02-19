$(document).ready(function () {
  // $("#search").empty();
  var APIKEY = "ad8618221b820a5c5d95b144d55511c9";
  //search button/bar
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var weatherValue = $("#search").val();
    // $("#Currentweather").empty()
    // console.log(weatherValue);
    getApi(weatherValue);
  });
  // Jquery API/ search results
  function getApi(weatherValue) {
    //createSearchHistory(searchedHistory);
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
    console.log(lat, long)
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/uvi?appid="  + APIKEY + "&lat=" + lat + "&lon=" + long,
      dataType: "json"
    })
      .then(function (data2) {
       $("#UV-Index").text("UV-Index: " + data2.value)
        console.log(data2)
        // changing the colors of UV Index
          if (data2.value < 3) {
            $("#btn").addClass("btn-success")
        }
          else if (data2.value < 7) {
            $("#btn").addClass("btn-warning");
          }
          else {
            $("#btn").addClass("btn-danger");
          }
         
        //   // Pulls search history
      }
      )
  }
})