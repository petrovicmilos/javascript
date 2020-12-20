/* var smallData = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`; */

 var splitData = data.split("\n").map(a => new Password(a));

function Password (input){
    this.password = input.split(": ")[1];
    this.letter = input.split(": ")[0].split(" ")[1];
    this.min = parseInt(input.split(": ")[0].split(" ")[0].split("-")[0]);
    this.max = parseInt(input.split(": ")[0].split(" ")[0].split("-")[1]);

    // this.isValid = function (){

    //     var counter = 0; 
    //     var letterArr = this.password.split("");
    //     for (var i = 0; i<letterArr.length; i++){
    //         if(letterArr[i] === this.letter){
    //             counter++;
    //         }
    //     }
    //     if(counter >= this.min && counter <= this.max){
    //         return true;
    //     } 

    //     return false;
    // }

    // this.isValidPosition = function () {
    //     var letterArr = this.password.split("");

    //     return (letterArr[this.min - 1] == this.letter ^ letterArr[this.max - 1] == this.letter)
            
    //  }

}

// console.log(splitData.filter(x => x.isValid()).length); 
console.log(splitData.filter(x => x.isValidPosition()).length);

/* PART 2 */

/* var splitData = data.split("\n").map(a => new Password(a));

class Password {
    constructor(input){ 
    var[policy, password] = input.split(": ");
    var[minMax, letter] = policy.split(" ");
    [this.min, this.max] = minMax.split("-").map(x => parseInt(x));
    this.password = password;
    this.letter = letter;

    this.isValid = function () {
        var counter = 0; 
        var letterArr = this.password.split("");
        for (var i = 0; i<letterArr.length; i++){
            if(letterArr[i] === this.letter){
                counter++;
            }

        }
        if(counter >= this.min && counter <= this.max){
            return true;
        } 

        return false;
    
     }

     this.isValidPosition = function () {
        var letterArr = this.password.split("");

        if(letterArr[this.min - 1] ^ letterArr[this.max - 1]){
            return true;
        }

        return false;
     }
 }

    
} */

