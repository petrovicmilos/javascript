let smallData = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;



let splitData = data.split('\n');

 function findSeatId (line){
    const binary = line.replace(/[FL]/g, "0").replace(/[BR]/g, "1"); //Replaces letters with 0 and 1
    const [m, row, col] = binary.match(/([01]{7})([01]{3})/); // Sets row to be first 7 numbers of 0 and 1 and col as last 3 numbers
    const rowNum = Number(`0b${row}`); // gives back dec number from binary (from first example 1000110 gives number 70)
    const colNum = Number(`0b${col}`); // gives back dec number from binary (from first example 111 gives number 7)
    return rowNum * 8 + colNum; // formula from adventofcode (from first example 70 * 8 + 7)
    
}

let highestSeatId = 0; 

for (const line of splitData) {
  const seatId = findSeatId(line); // we set the return value from function above in this const
  if (seatId > highestSeatId) { // checking to see if the value is greater then highestSeatId (at first it will be greater because its 0, then it will check all lines from data with for loop)
    highestSeatId = seatId; 
  }
}



console.log(highestSeatId); 

/* PART 2 */

let found = {};


    for (const line of splitData) {
        const seatId = findSeatId(line);
        found[seatId] = true; // storing all found seatIds in found object and giving them true value
        
      }
      
      for (const seatId in found) { //taking every seatId in found
        const seatNum = Number(seatId); // storing seatId as a number in seatNum const
        if (!found[seatNum + 1] && found[seatNum + 2]) { // checking: if seatNum+1 doesn't exist in found and seatNum+2 exists, then the number we are looking for is seatNumber+1 
          console.log(seatNum + 1);
          break;
        }
        
      }


