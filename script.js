console.log("Script loaded");

/* Prvi zadatak */

document.getElementById("paragraph").textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam magnam aliquam provident facere sapiente. Impedit amet tempora deleniti iste. Molestias velit cupiditate delectus. Aperiam ipsam inventore nostrum est error vitae.";


/* Drugi zadatak */

var prva = 20;
var druga = "Milos";
var treca = true;


/* document.write(prva);
document.write(druga);
document.write(treca); */

document.getElementById("par1").textContent = prva;
document.getElementById("par2").textContent = druga;
document.getElementById("par3").textContent = treca; 

/* Treci zadatak */

var distance = 168;
var fuel = 5.7;
var price = 64;

var value;

value = Math.floor((distance / fuel)*price);

document.getElementById("value").textContent = `Cena goriva za predjenih ${distance} km je: ${value} mkd`;

/* treci zadatak pt. 2 */

function potrosnja (){
    var d = document.getElementById("distance").value;
    var f = document.getElementById("fuel").value;
    var p = document.getElementById("price").value;

    var v = Math.floor((d / f)*p);

    document.getElementById("value2").textContent = `Cena goriva za predjenih ${d} km je: ${v} mkd`;
}

/* Cetvrti zadatak */

var numberOfLaptops = 20;
var priceOfLaptop = 999.99;

var result = numberOfLaptops * priceOfLaptop;

document.getElementById("value3").textContent = `Price without discount is: ${result} $`;

var resultWithDisc = parseFloat(result - (result * 5/100)).toFixed(2);

document.getElementById("value4").textContent = `Price with discount is: ${resultWithDisc} $`;