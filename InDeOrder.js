function InDeOrder(a, b, c) {
    // a = 45, b = 85, c = 97;
    if (a > b && b > c) {
        console.log("decreasing order");
    } else if (a < b && b < c) {
        console.log("increasing order");
    } else {
        console.log(invalid);
    }
}

InDeOrder(12, 25, 37);
InDeOrder(12, 8, 4);