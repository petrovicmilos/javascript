var smallData = `
1721
979
366
299
675
1456`;

var parseData = data.split("\n").map(a => parseInt(a));

// var intArray = [];

// for (var i=0; i<parseData.length; i++){
//     intArray.push(parseInt(parseData[i]));
// }

function find2020Triple (input){
    for(var i = 0; i < input.length; i++){
        for(var j = i+1; j < input.length; j++){
            for(var k = j+1; k < input.length; k++){
                if(input[i] + input[j] + input[k] == 2020){
                    return [input[i], input[j], input[k]];
                }

            }
        }
    }
}

var resultArray = find2020Triple(parseData);

console.log(resultArray, resultArray[0] + resultArray[1] + resultArray[2], resultArray[0] * resultArray[1] * resultArray[2]);
