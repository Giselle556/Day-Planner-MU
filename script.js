var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;

var activities = document.querySelector("textarea");
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

