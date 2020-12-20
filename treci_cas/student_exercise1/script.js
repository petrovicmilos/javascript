
var sum = 0;

for(i=101; i<=150; i++){

    var p =  Math.pow(i,2);

    sum = sum + p;
    
    
}

document.getElementById("sum").innerHTML = `Sum of squares between 101 and 150 is ${sum}`;