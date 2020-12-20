/* Prvi zadatak */

function celsiusToFahrenheit (){
    var x = document.getElementById("x").value;

    var result = x * 1.8 + 32;

    document.getElementById("prvi").textContent = `${result} F`;
}

function fahrenheitToCelsius(){
    var f = document.getElementById("f").value;

    var result = (5/9) * (f-32);

    document.getElementById("drugi").textContent = `${result} C`;
}

/* Drugi zadatak */

function chooseGender (){
    var gender = document.getElementById("gender").value;

    switch(gender){
        case 'male':
            document.body.style.backgroundColor = "blue";
            break;
        case 'female':
            document.body.style.backgroundColor = "pink";
            break;
        case 'other':
            document.body.style.backgroundColor = "gray";
            break;
        default:
            break;
    }
}


/* Treci zadatak */

function maxOfThree(a , b , c ) {
    if(a > b && a > c){
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}

document.getElementById("treci").textContent = maxOfThree(5,6,10); 

function chineseZodiac (year){
    
    var zodiacs = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
    var result = (year - 4) % 12;

    switch(result){
        case 0:
            return zodiacs[0];
            break;
        case 1:
            return zodiacs[1];
            break;
        case 2:
            return zodiacs[2];
            break;
        case 3:
            return zodiacs[3];
            break;
        case 4:
            return zodiacs[4];
            break;
        case 5:
            return zodiacs[5];
            break;
        case 6:
            return zodiacs[6];
            break;
        case 7:
            return zodiacs[7];
            break;
        case 8:
            return zodiacs[8];
            break;
        case 9:
            return zodiacs[9];
            break;
        case 10:
            return zodiacs[10];
            break;
        case 11:
            return zodiacs[11];
            break;
        default:
            return 0;
            break;
        
    }
    
}

console.log(chineseZodiac(1995));

