let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET","artist_Data.xml");
request.onreadystatechange = function() {
    if((request.status === 200) && (request.readyState === 4)){
        // console.log(request.responseXML);
        // console.log(request.responseXML.getElementsByTagName('artistName'));
        // let items = request.responseXML.getElementsByTagName('artistName');
        // console.log(items);
        // document.getElementById("artist").innerHTML = items[0].firstChild.nodeValue;
        getArtist(this);
    }
}
request.send();

function getArtist(aaa) {
    let i;
    let items = aaa.responseXML;
    let artistList = '';
    let x = items.getElementsByTagName('artist');
   
    let container = document.getElementById("container");
    // console.log(container);
    // console.log(x);
    // let sections = document.getElementsByClassName("artist-sections");
    // console.log(x.length);
//  console.log(x[0].getElementsByTagName('artistName')[0].childNodes[0].nodeValue);
    
    // let artistList;
    // for(i = 0; i < x.length; i++){
    //     artistList +=  "<section><h1>Artist: " + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + "</h1></section>";
    // }
    // document.getElementById("container").innerHTML = artistList;
    // document.querySelector(".container").innerHTML = artistList;
    for(i = 0; i < x.length; i++) {
        artistList += '<div class="artists" id="artist' + (i+1) + '">';
        artistList += '<section class="artist-section"><h1>Artist: ' + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + "</h1>";
        artistList += "<h3>Album: " + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + "</h3>";
        artistList += "<h4>Label: " + x[i].getElementsByTagName('label')[0].childNodes[0].nodeValue + "</h4>";
        artistList += "<h4>Release Year: " + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + "</h4>";
        artistList += '<h4>Artist Bio: </h4><section class="bio"><p>' + x[i].getElementsByTagName('bio')[0].childNodes[0].nodeValue + "</p>" + '<img src="images/' + x[i].getElementsByTagName('images')[0].childNodes[0].nodeValue + '.jpeg" alt="' + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + ' Album Image"></section>';
        artistList += "</section></div>";
        // let artistDiv = document.getElementsByClassName("artists");
        // console.log(artistDiv.item(0));
    }
    // container.innerHTML = artistList;
    container.innerHTML = artistList;
    let artistDiv = document.getElementsByClassName("artists");
      for (let i = 0; i < artistDiv.length; i++) {
        console.log(artistDiv[i]);
        artistDiv[i].style.backgroundColor = bg[i];
        artistDiv[i].style.backgroundImage = gradient[i];
    }
    // console.log(artistDiv.item(0));
}
let bg1 = "#8EC5FC";
let gradient1 = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
let bg2 = "#D9AFD9";
let gradient2 = "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)";
let bg3 = "#8BC6EC";
let gradient3 = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
let bg4 = "#A9C9FF";
let gradient4 = "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)";

let bg = [bg1, bg2, bg3, bg4];
let gradient = [gradient1, gradient2, gradient3, gradient4];



