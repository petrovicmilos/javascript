let smallData = `abc

a
b
c

ab
ac

a
a
a
a

b`;

 let splitData = data.split('\n\n');

function countUnique(string) {
    string = string.replace(/[^a-z]/g, "");
    return new Set(string).size;
  }
let counter = 0;

function countYesAnswers (input){
    for(let i of input){
        counter += countUnique(i);
    }

    return counter;
}
  
console.log(countYesAnswers(splitData));

/* PART 2 */


 function countCommon (string){
    let resp = string.split('\n');
    const ans = new Set(string.replace(/[^a-z]/g, ""));
    const comm = Array.from(ans).filter((q) =>
        resp.every((res) => res.includes(q))

    );

    return comm.length;
}

let count = 0;

function countCommmonYesAnswers(input){
    for(let i of input){
        count += countCommon(i);
    }

    return count;
}

console.log(countCommmonYesAnswers(splitData)); 

