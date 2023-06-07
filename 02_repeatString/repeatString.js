const repeatString = function(string, num) {
let repeatedStr = "";
if (num <0) {return "ERROR"};
while (num>0){
    repeatedStr += string;
    num--;
}
return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
