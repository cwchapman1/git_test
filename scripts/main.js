var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "http://iconizer.net/files/3D_Cartoons_III/orig/Mozilla%20Firefox.png") {
        myImage.setAttribute("src", "http://megaicons.net/static/img/icons_title/44/116/title/app-firefox-icon.png");
    } else {
        myImage.setAttribute("src", "http://megaicons.net/static/img/icons_title/44/116/title/app-firefox-icon.png");
    }
}