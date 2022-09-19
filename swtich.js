const STYLESHEET_KEY = "styles.css"

function timeDay(){
    var element = document.getElementById("style-sheet");
    element.setAttribute("href", "styles.css");

    localStorage.setItem(STYLESHEET_KEY, "styles.css");
}
function timeNight(){
    var element = document.getElementById("style-sheet");
    element.setAttribute("href","darkmode.css" )

    localStorage.setItem(STYLESHEET_KEY, "darkmode.css");
}

window.onload = function(){
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "styles.css";
    var styleElement = document.getElementById("style-sheet");
    styleElement.setAttribute("href", stylesheetValue);
}
