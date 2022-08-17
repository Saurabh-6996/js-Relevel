function checkOddEven(number) {
    // for (i = 1; i <= 10; i++) {
    if (number % 2 == 0) {
        console.log("this is even number")
    } else if (number % 2 !== 0) {
        console.log("this is odd number")
    } else {
        console.log("not even nor odd")
    }


}
checkOddEven(10) //even
checkOddEven(9) //odd
checkOddEven(35) //odd
checkOddEven(96) //even