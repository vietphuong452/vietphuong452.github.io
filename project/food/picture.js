
var x = Math.floor(Math.random()*255);
var y = Math.floor(Math.random()*255);
var z = Math.floor(Math.random()*255);

var rightColor = `rbg(${x},${y},${z})`;

var colorStringEl = document.getElementById("color_string")
colorStringEl.textContent = rightColor;
 
var ballContainerEl = document.getElementById("ballContainer");
var ballEl = ballContainerEl.getElementsByClassName("ball")
console.log(ballEl);

var i = Math.floor(Math.random()*3)
ballEl[i].style.backgroundColor = "purple";

for (e = 0; e < ballEl.length; e++) {
    if (i!=e) {
        var error = Math.random()*200-100;
        var wrongcolor = `rgb(${x+error},${y+error},${z+error})`
        ballEl[e].style.backgroundColor = wrongcolor;
    }
}


var ballcontainerEl = document.getElementById("ball_container");
var ballEls = ballcontainerEl.getElementsByClassName("ball");
for (var w=0; w < ballEls.length; w++) {
    ballEls[i].addEventListener("click", function(e) {;
        console.log(e.target);
        var ball = e.target;
        var ballIndex = ball.getAttribute("index")
});
}