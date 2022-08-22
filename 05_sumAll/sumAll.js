const sumAll = function(a, b) {
if (a < 0 || b < 0) return "ERROR";
if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
if (a>b) {
    var t = a;
    a = b;
    b = t;
}

    let finSum = 0; 
     for (let i = a; i <= b; i++){
       finSum += i}
    return finSum;
     }


;

// Do not edit below this line
module.exports = sumAll;
