 var smallData = `..##.........##.........##.........##.........##.........##.......
#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........#.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...##....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#`; 

var splitData = data.split('\n');




function treesEncountered (input){

    var x = 0;
    var trees = 0;

    for (var i = 1; i < input.length; i++){ 
        x += 3; 
        if(x >= input[i].length){
            x = x - input[i].length;
        }
    
        if(input[i][x] === "#"){
            trees++;
        }
        
    }

    return trees;
}


console.log(treesEncountered(splitData));

/* PART 2 */

function treesEncounteredWithMoves (input,x, y){
    var right = 0;
    var trees = 0;

    for(var i = y; i < input.length; i += y){
        right += x;

        if(right >= input[i].length){
            right = right - input[i].length;
        }

        if(input[i][right] === "#"){
            trees++;
        }
    }

    return trees;
}

console.log(treesEncounteredWithMoves(splitData, 1, 1) * treesEncounteredWithMoves(splitData, 3, 1) * treesEncounteredWithMoves(splitData, 5, 1) * treesEncounteredWithMoves(splitData, 7, 1) * treesEncounteredWithMoves(splitData, 1, 2));