var makeRequest = function (url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}



var populatelist = function (albums){
  var ul = document.querySelector("#albums");

  albums.forEach(function (artists){
    var option = document.createElement("option");
    option.text = artists.name;
    option.value = artists.name;
    select.appendChild(option);
    // var li = document.createElement("li");
    // li.innerText = artists.name;
    // ul.appendChild(li);
  });
}

var artistsDisplay = function(selecetedArtist){
  albums.forEach( function(artists){

    if (artist.name === selecetedArtist) {
      var ul = document.querySelector("#albums");
      ul.innerText = null;
    }
    var nameLi = document.createElement("li");
    nameLi.innerText = artists/name;
    ul.appendChild(nameLi);
  })
}


var requestComplete = function (){
  if (this.status != 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);

  populatelist(albums);
}

// var handleButtonClick = function (){
//   var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
//   makeRequest(url, requestComplete);
// }

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";

//   var div = document.querySelector("div");
//   div.onclick = handleButtonClick;
//   makeRequest(url, requestComplete);
}

window.onload = app;




// AJAX Homework


// Learning Objectives


// Practice making AJAX requests and display data on the HTML page
// Practice traversing the data structure received from an API
// Display a list of album titles using the endpoint 'https://api.spotify.com/v1/search?q=christmas&type=album'.


// You'll have to study the structure of the data that the API returns and work out what pieces of data you'll need to pull out of it to use.

// We have provided a skeleton start point.

// Further

// Make each title link to the album in Spotify.