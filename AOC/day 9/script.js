var smallData = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

var lines = data.split("\n");

// function check(line, i) {
//     if(i < 25){
//         return true;
//     }

//     var found = {};
//     for(var j = i - 25; j < i; j++){
//         if(found[Number(line) - lines[j]]) {
//             return true;
//         }
//         found[lines[j]] = true;
//     }
//     return false;
// }

// for (var i = 0; i < lines.length; i++){
//     if (!check(lines[i], i)){
//         console.log(lines[i]);
//         break;
//     }
// }

const goal = 756008079;

map = {};

for (let i = 0; i < lines.length; i++) {
  let numI = Number(lines[i]);
    map[i] = {
    sum: numI,
    min: numI,
    max: numI,
  };
  while (map[i].sum < goal) {
    for (let j = i + 1; j < lines.length; j++) {
      let numJ = Number(lines[j]);
      // increment sum
      map[i].sum += numJ;
      // update min and max
      if (numJ < map[i].min) map[i].min = numJ;
      if (numJ > map[i].max) map[i].max = numJ;
      // reached goal
      if (map[i].sum == goal) {
        console.log(`Number range: ${lines[i]} to ${lines[j]}`);
        console.log(`Min: ${map[i].min}`);
        console.log(`Max: ${map[i].max}`);
        console.log(
          `Encryption weakness: ${map[i].min} + ${map[i].max} = ${
            map[i].min + map[i].max
          }`
        );
        break;
      }
      // passed goal
      else if (map[i] > goal) {
        break;
      }
    }
  }
}

