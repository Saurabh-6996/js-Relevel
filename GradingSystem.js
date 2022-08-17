function GS(Score) {
    if (Score >= 90) {
        console.log("grade A")
    } else if (Score > 79 && Score < 90) {
        console.log("grade B")
    } else if (Score > 60 && Score < 79) {
        console.log("grade C")
    } else if (Score > 33 && Score < 60) {
        console.log("grade D")
    } else {
        console.log("grade F")
    }
}

GS(15)