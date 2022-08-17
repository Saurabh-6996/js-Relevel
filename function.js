// How to create a function
// circular brackrt are used takes input into function.
//cirly bracket are used to define body of a function


function addTwoNumber(x, y) {

    var result = x + y;
    //return is used to return output to caller

    return result;

}

// how to call a function.
// Here circular bracket used to pass parameter.

var output = addTwoNumber(10, 20);
console.log(output);
output = addTwoNumber(20, 20);
console.log(output);
output = addTwoNumber(20, -50);
console.log(output)