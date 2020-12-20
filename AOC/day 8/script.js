let smallData = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

let splitData = data.split('\n');

function parse(line) {
    [m, m1, m2] = line.match(/(\w+) ([\+\-][\d]+)/);
    return [m1, m2];
  }
  
  const commands = splitData.map((line) => parse(line));
  
  for (let i = 0; i < commands.length; i++) {
    let temp = commands.map((x) => x.map((y) => y));
    if (commands[i][0] == "nop") {
      temp[i][0] = "jmp";
    }
    else if (commands[i][0] == "jmp") {
      temp[i][0] = "nop";
    }
    let jmp = 0;
    let acc = 0;
    let visited = {};
    while (temp[jmp] && !visited[jmp]) {
      visited[jmp] = true;
      let [cmd, amt] = temp[jmp];
      if (cmd == "acc") {
        acc += Number(amt);
      }
      else if (cmd == "jmp") {
        jmp += Number(amt) - 1;
      }
      jmp += 1;
    }
    if (jmp >= temp.length)
      console.log("Accumulator when program terminates: ", acc);
  }
