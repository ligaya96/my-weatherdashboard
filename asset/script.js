$(document).ready(function() {

 // var APPKEY = 
  var weatherValue = $("#search").val();
 //search button/bar
 $("#searchBtn").on("click", function() {
   $("#search").val ("")
 });
// Jquery API/ search results
function getApi(){
 var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + weatherValue;
  fetch(requestUrl)
  .then(function(response) { 
    return response.json();

   })
   .then(function (data) {
     })
}
  //searchbutton.on("click", getApi);



// see current/future weather conditions

// 5 day weather forecast / html addition
  function weatherforcast(weatherValue) {

  };

 // search history/ local storage
  // if (searchistory)


  // UV index
})