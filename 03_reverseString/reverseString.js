const reverseString = function(str) {
    splitString = str.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");


// eerst splitten zodat alle char los zijn split()
// dan de char volgorde omdraaien met reverse()
// dan joinen met join()
// dan returnen

return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
