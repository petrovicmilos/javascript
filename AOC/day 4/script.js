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

var splitData = data.split('\n\n');
/* 
   function checkPassport (input) {
    let validPassports = 0;
    for(let i = 0; i < input.length; i++){
        let keys = {};

        const passport = input[i].split(/\s+/);
        passport.forEach(element => {
            const values = element.split(':');
            keys[values[0]] = values[1];
        });
        if('byr' in keys && 'iyr' in keys && 'eyr' in keys && 'hgt' in keys && 'hcl' in keys && 'ecl' in keys && 'pid' in keys){
            validPassports++;
        }
    }
    return validPassports;
}   */

/* BOLJI NACIN */

/* let fields = `byr
iyr
eyr
hgt
hcl
ecl
pid`.split("\n");

let validPassports = 0;

function checkPassport (input){
    for(const line of input){
        if(fields.every((x) => line.includes(x))){
            ++validPassports;
        }    
    }
    return validPassports;
}

console.log(checkPassport(splitData));  */

 /* PART 2 */

 let fields = `byr
iyr
eyr
hgt
hcl
ecl
pid`.split("\n");

 let validPassports = 0;

function validation (x, v){
    if(x == 'byr') return v >= 1920 && v <= 2002;
    if(x == 'iyr') return v >= 2010 && v <= 2020;
    if(x == 'eyr') return v >= 2020 && v <= 2030;
    if(x == 'hgt') {
        u = v.match(/^(\d+)(cm|in)$/);
        if(u && u[2] && u[2] == 'in'){
            return u[1] >= 52 && u[1] <= 76;
        }

        if(u && u[2] && u[2] == 'cm'){
            return u[1] >= 150 && u[1] <= 193;
        } 
        return false;
    }

    if(x == 'hcl') return /^#[0-9a-f]{6}$/.test(v);
    if(x == 'ecl') return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(v);
    if(x == 'pid') return /^\d{9}$/.test(v);
    
}



function checkPassportValidation (input){
    for(const line of input){
        if(
            fields.every((x) => {
            let re = new RegExp(x + ":(\\S+)");
            let m = line.replace(/\n/g, " ").match(re);
            if (m) return validation(x, m[1]);

        }) 

        ) {
            ++validPassports;
        }
            
        
    }
    
    return validPassports;

} 

console.log(checkPassportValidation(splitData));