//returns fibonacci number at n
//Parameters => n:integar
function getFibonacci(n) {
    if (n === 0) {
        throw "invalid input";
    }

    //I am opting to start the array with these values because it is less code than adding it dynamically
    var fibs = [1, 1];

    for (var i = 2; i < n; i++) {
        fibs.push(fibs[i-1] + fibs[i-2])
    }
    
    return fibs[fibs.length-1];
}

getFibonacci(30);