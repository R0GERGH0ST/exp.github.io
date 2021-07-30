var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;


upbtn.oneclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}