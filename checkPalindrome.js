function palindromes(n) {
    var rev = 0;
    origin = n;
    while (n > 0) {
        x = n % 10;
        rev = rev * 10 + x;
        n = parseInt(n / 10);
    }
    if (origin == rev) {
        console.log(rev);
    }
}
for (let i = 0; i <= 1000; i++) {
    palindromes(i);
}