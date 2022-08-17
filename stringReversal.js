// var x = "Saurabh";
// var output = x[6] + x[5] + x[4] + x[3] + x[2] + x[1] + x[0]
// console.log(output)


function stringReversal(str) {
    var output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        output = output + str[i]
    }
    console.log(output)
}
stringReversal("Saurabh")