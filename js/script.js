var fans =document.querySelector(".fans");
var fish =document.querySelector(".fish");
var pets =document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
fans.innerText = "123K";
fans.style.color = "#ff0066";
});

fish.addEventListener("mouseover", function () {
fish.innerText = "47K";
fish.style.color = "#66ffff";
});

pets.addEventListener("mouseover", function () {
pets.innerText = "20K";
pets.style.color = "#99ff99";
});