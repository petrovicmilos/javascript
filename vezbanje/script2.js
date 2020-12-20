var smallData = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

var splitData = smallData.split('\n\n').map(a => new Fields(a));


function Fields (input){
    let [passport] = input.split(/\s+/);
    [this.key, this.value] = passport.split(':');
    this.validPassport = 0;
     this.checkPass = function (){
         var validPassport = 0;
         for(let i = 0; i<input.length; i++){
             if(input[i].includes(this.key)){
                 validPassports++;
             }
         }
         return validPassports;
     }
}

console.log(splitData.filter(x => x.checkPass()));

