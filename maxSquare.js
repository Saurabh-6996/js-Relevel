// finding the max squre value till number
function findMaxNum(num) {

    for (let a = 0; a * a <= num; a++) {

        for (let b = 0; b * b <= a; b++) {
            if (a * a + b * b == num) {
                if (a <= b) {
                    console.log("number pair is " + (a) + "and" + (b));
                }
            }
        }
    }
}
findMaxNum(170)