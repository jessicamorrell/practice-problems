//returns factorial for a number
//Parameters => n:integar
function getFactorial(n) {
    var factorial = n;

    //iterate down from n to multiple each number - stop before 0
    for (var i = n-1; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}

getFactorial(10);