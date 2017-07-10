var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "http://iconizer.net/files/3D_Cartoons_III/orig/Mozilla%20Firefox.png") {
        myImage.setAttribute("src", "http://megaicons.net/static/img/icons_title/44/116/title/app-firefox-icon.png");
    } else {
        myImage.setAttribute("src", "http://iconizer.net/files/3D_Cartoons_III/orig/Mozilla%20Firefox.png");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem('name', myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}