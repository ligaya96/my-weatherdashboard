$(document).ready(function() {
     $("#search").empty();
  var APPKEY = "ad8618221b820a5c5d95b144d55511c9";
  //search button/bar
  $("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var weatherValue = $("#search").val();
    //$("#searchistory").append(searchedHistory);
    //console.log(weatherValue);
    getApi(weatherValue);
  });
  // Jquery API/ search results
 function getApi(weatherValue) {
   //createSearchHistory(searchedHistory);
   $.ajax({
    method: "GET",
    url : "http://api.openweathermap.org/data/2.5/weather?q=" + weatherValue + "&appid=" + APPKEY + "&units=imperial",
   })
    .then(function(data) {
       console.log(data)
    })
           $("#today").empty();
           var Citysearch = $("<h3>").text(data.name);
           $("#today").prepend(Citysearch)
           $("#today").append(
             displayMoment = $("").text("(" + new data().tolocaldateString() + ")")
           );
           
         // see current/ weather conditions
           $("#Temp").text("Temperature: " + data.main.temp + " °F");
           $("#Humidity").text("Humidity: " + data.main.humidity + "%");
           $("#Winds").text("Wind Speed: " + data.wind.speed + " MPH");

        weatherForcast(weatherValue);
        UValue(lat,lon);
  }
})

 // 5 day weather forecast / html addition
  function weatherForcast(weatherValue) {
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + weatherValue + "&appid" + APIKEY;
    fetch(requestUrl)
    .then(function(){
      return response.json();
    })
    //brings 5 day loops
    .then(function(data){
      for (var i = 0; i < data.list.length; i++) {
    } 
    var forecastDate = $("<h5>");
    $("#day-one" + forecastPosition).empty();
    $("#day-one" + forecastPosition).append(
      forecastDate.text(now.add(1, "days").format("M/D/YYYY"))
    );
    $("#Tempature-dayone" + forecastPosition).text(
      "Temp: " + data.list[i].main.temp + " °F"
    );
    $("#Humidity-dayone" + forecastPosition).text(
      "Humidity: " + data.list[i].main.humidity + "%"
    );
    var lat = weather.coord.lat;
    var lon = weather.coord.lon;
  })
     }

    //   // UV index
    function UValue(lat,lon) {
      $.ajax({
        method: "GET",
         url: "http://api.openweathermap.org/data/2.5/uvi?appid=" + APPKEY + "&lat=" + lat + "&lon=" + lon,
       })
      .then(function(UVdata) {
        var btn = $("<span>").addClass("btn btn-sm").text(data.value);
        $("#UV-Index").text("UV Index: "); 
        
        // change color depending on uv value
        if (UVdata.value < 3) {
          btn.addClass("btn-success");
        }
        else if (UVdata.value < 7) {
          btn.addClass("btn-warning");
        }
        else {
          btn.addClass("btn-danger");
        }
        
        $("UV-Index").append(uv.append(btn));{
      }
      }

      )}
    