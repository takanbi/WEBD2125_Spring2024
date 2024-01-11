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
    let output = "<tr><th>Artist</th><th>Album</th><th>Label</th><th>Year</th></tr>";
    let artistList;
    let x = items.getElementsByTagName('artist');
   
    // let container = document.getElementById("container");
    // console.log(container);
    console.log(x);
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
        output += '<tr><td>' + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('label')[0].childNodes[0].nodeValue + '</td>';
        output += '<td>' + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + '</td></tr>';
    }
    // container.innerHTML = artistList;
    document.getElementById("update").innerHTML = output;
}