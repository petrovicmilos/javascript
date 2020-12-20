var counter = 0;
var array = [];
max = -Infinity;
const MAX_ELEMENT = window.prompt(`How many elements do u want in an array?`)
while(counter < MAX_ELEMENT){
    
    var input = window.prompt(`Please enter ${counter + 1} element`);
    array[counter] = isNaN(input) ? 0 : parseInt(input);
    max = max < array[counter] ? array[counter] : max;
    counter++;
}



document.getElementById("array").innerHTML = array.toString();

document.getElementById("final").innerHTML = `The greatest number is ${max}`;

