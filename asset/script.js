$(document).ready(function () {
  var APIKEY = "ad8618221b820a5c5d95b144d55511c9";
  //search button/bar
  $("#searchBtn").on("click", function () {
    var weatherValue = $("#search").val("");
    $("#search").val("");
    console.log(weatherValue);
    getApi();
  });
  // Jquery API/ search results
  function getApi(weatherValue) {
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + weatherValue + "&appid" + APIKEY;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {

        }
        weatherForcast(weatherValue);
        UValue(lat,lon);
        console.log(weatherValue);
      })
  }

  // see current/future weather conditions

  // 5 day weather forecast / html addition
  function weatherForcast(weatherValue) {
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + weatherValue + "&appid" + APIKEY;
    fetch(requestUrl)
    .then

  };

  // search history/ local storage
  // if (searchistory)


  // UV index
  function UValue(lat,lon) {

  }

})