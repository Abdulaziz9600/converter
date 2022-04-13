var elUzs = document.querySelector ("#usd");
var elUsd = document.querySelector ("#uzs");
var elChangebtn = document.querySelector (".changbtn");
var elGobtn = document.querySelector("#gobtn");
var elList = document.querySelector(".convert-list");
var som = 11400;

elGobtn.addEventListener('click', function () {
  var jami = elUsd.value * som;
  elUzs.value = jami;


var newLi = document.createElement("li");
var newPi = document.createElement("p");

newPi.textContent = 'Hozirda Kurs:' + jami;
newLi.appendChild (newPi);
elList.appendChild (newLi);

newPi.style.fontWeight ="bold";
newPi.style.color ="green";

jami = Number;

if(isNaN(jami))
return

})