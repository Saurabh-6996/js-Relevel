function primeNumber(num) {

    var flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            console.log(num, "not a prime number")
            break;

        }

    }
    if (flag) {
        console.log(num, " a prime number")
    }
}
for (let i = 2; i < 100; i++)
    primeNumber(i)