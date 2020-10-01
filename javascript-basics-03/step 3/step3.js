var a = document.getElementsByClassName("color");

var d = document.getElementById("text")

a[0].addEventListener("click", function () { d.style.color = "green" });
a[1].addEventListener("click", function () { d.style.color = "red" });
a[2].addEventListener("click", function () { d.style.color = "blue" });