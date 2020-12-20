let input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

let lines = data.split("\n");

// let adapters = new Set();
// let max = 0;

// let countDiffs = {
//     1: 0,
//     2: 0,
//     3: 0, 
// };

// let outlet = 0;

// for (const line of lines){
//     adapters.add(Number(line));
//     if(Number(line > max)){
//         max = Number(line);
//     }
// } 

// adapters.add(max + 3);

// let found = true;

// while(found){
//     found = false;
//     for(const i in countDiffs){
//         if (adapters.has(outlet + Number(i))){
//             outlet += Number(i);
//             countDiffs[i]++;
//             found = true;
//             break;  
//         }
//     }
// }

// for (const i in countDiffs) {
//     console.log("Difference of "+ i + ":", countDiffs[i]);
//   }

//   console.log(countDiffs[1] + "*" + countDiffs[3] + "=" + countDiffs[1] * countDiffs[3]);

// sort adapters
let adapters = lines.sort((a, b) => a - b).map((x) => Number(x));

// put 0 at beginning of array
adapters.unshift(0);

// initialize with 1 for the first and 0 for the rest
ways = adapters.map((x, i) => (i == 0 ? 1 : 0));

for (let i = 0; i < ways.length; i++) {
  for (let j = i - 3; j < i; j++) {
    // add ways using previous 3 numbers
    if (adapters[i] <= adapters[j] + 3) {
      ways[i] += ways[j];
    }
  }
}

console.log("Ways to arrange adapters:", ways[ways.length - 1]);