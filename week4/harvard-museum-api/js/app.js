"use strict";

$("#submit").on('click', function(event) {
    event.preventDefault();
    let search = $("#search").val().trim();
    console.log(search);
    runSearch(search);
    search = "";
});

function runSearch(searchs) {
// Find all of the objects that are paintings and have the word "rabbit" in the title
// let classfications = ["Paintings", ""];
let apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
let queryString = $.param({
    apikey: "7a940fc0-5a62-11ea-b877-8f943796feb8",
    title: searchs,
    // title: "rabbit",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data.records); 
   let output = '<ul>';
   for(let i = 0; i < data.records.length; i++) {
    let newArt = data.records[i].primaryimageurl;
    output += "<li>";
    output += '<img src="' + newArt + '" alt="#">';
    output += "</li>";
   }
   output += "</ul>";
   $("#harvard").html(output);
});
// form.reset();
}