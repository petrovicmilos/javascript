let smallData = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

let smallData2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

// let splitData = data.split('\n');

let count = 0;

//  let bags = {};

//  for (const line of splitData) {
//      let innerBagTypes = line.replace(/.*?bags/, "").split(",");
//      innerBagTypes = innerBagTypes.map(x => x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim());
//      bags[line.replace(/bags.*/, "").trim()] = innerBagTypes;
//  }

//  function checkForGoldBag (bags, bag){
//      if(!bags[bag]) 
//         return false;
//     if(bags[bag].includes("shiny gold")) 
//         return true;
//     for(const innerBag of bags[bag]){
//         if(checkForGoldBag(bags, innerBag))
//             return true;
        
//     }
//         return false;
//  }

//  for(const bag in bags){
//      count+= checkForGoldBag(bags, bag) ? 1 : 0;
//  }

// let test = `light red bags contain 1 bright white bag, 2 muted yellow bags.`;

// var innerBagTypes = test.replace(/.*?bags/, "").split(",");
// innerBagTypes = innerBagTypes.map(x => x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim());
// bags[test.replace(/bags.*/, "").trim()] = innerBagTypes;

// console.log(count);
// console.log(bags);

/* PART 2 */

// let bags = {};

//  for (const line of splitData) {
//      let innerBagTypes = line.replace(/.*?bags/, "").split(",");
//      innerBagTypes = innerBagTypes.map(x => [Number(x.replace(/[^\d]+/g, "")), x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim()]);
//      bags[line.replace(/bags.*/, "").trim()] = innerBagTypes;
//  }

// function countInnerBags (bags, bag){
//     if(!bags[bag])
//         return 0;

//     let innerBags = 0;

//     for(const innerBag of bags[bag]){
//         innerBags += innerBag[0] + innerBag[0] * countInnerBags(bags, innerBag[1]);
//     }

//     return innerBags;
// }

// console.log(countInnerBags(bags, "shiny gold"));

let bags = {};
let text = `light red bags contain 1 bright white bag, 2 muted yellow bags.`;
let innerBagTypes = text.replace(/.*?bags/, "").split(",");
innerBagTypes = innerBagTypes.map(x => x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim());
bags[text.replace(/bags.*/, "").trim()] = innerBagTypes;

console.log(bags);

