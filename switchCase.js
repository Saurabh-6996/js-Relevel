// print a program for grading system using switch case.
//grADE "D"
//grADE "A+"
//grADE "B"
//grADE "C+"

function printGrade(grade) {

    switch (grade) {

        case "D":
            {
                console.log("Distinction")
                break;
            }
        case "A+":
            {
                console.log("First class")
                break;

            }
        case "B":
            {
                console.log("Pass")
                break;
            }
        case "C":
            {
                console.log("Fail")
                break;
            }
        default:
            {

                console.log("invalid result")
            }

    }
}
printGrade("B")
printGrade("D")
printGrade("E")