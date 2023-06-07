const reverseString = function(str) {
    // const splittedStr = str.split("");
    // let reverseArray = splittedStr.reverse();
    // const reversedStr = reverseArray.join("");
    // return reversedStr;

    //return str.split("").reverse().join("")

    //or [use decrementing for loop]

    let newStr = "";
    for (let i = str.length-1; i>=0; i--){
        newStr += str[i]
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
