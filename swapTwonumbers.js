// function swapNumber() {
//     let a = 10
//     let b = 20
//     let r = a;
//     a = b;
//     b = r;
//     console.log(a, b)
// }
// swapNumber(50, 10)
let a = 10;
b = 20;

function swap() {
    a = a + b; //30
    b = a - b; //10
    a = a - b; //20
    console.log(a, b)
}
swap()