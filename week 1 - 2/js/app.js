let text = document.getElementById("text");
console.log(text);
function getData() {
    let myDataRequest;
    if (window.XMLHttpRequest) {
        myDataRequest = new XMLHttpRequest();
    }
    else {
        myDataRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // myDataRequest.onload = function() {
    //     text.innerHTML = this.responseText;
    //     // document.getElementById("text").innerHTML = this.responseText;
    // }
    myDataRequest.onload = ()=> {
        text.innerHTML = myDataRequest.responseText;
        // document.getElementById("text").innerHTML = this.responseText;
    }
    myDataRequest.open("GET", "data.txt", true);
    myDataRequest.send();
}