var input = window.prompt("Enter a number: ");
var digits = [];
var toString = input.toString();

for(i=0;i<=toString.length;i++){
    digits.push(+toString.charAt(i));
}

console.log(digits);