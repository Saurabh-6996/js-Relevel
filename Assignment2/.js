// define the promt
const ps = require("prompt-sync");
const prompt = ps();
var x = prompt('enter first number ');
var y = prompt('enter second number ');

function findLarge(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
    console.log("largest no")
}
console.log("largest no", findLarge(20, 30))