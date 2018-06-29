//Returns number of change possiblities for a givin amount and coin possiblities
//Parameters => validCoins:array, amount:integar
//IN PROGRESS - This doesn't work yet :)
function countChangeOptions(validCoins, amount) {

    //sort validCoins in ascending order
    validCoins.sort((x, y) => x - y);

    var options = [];
    var k = validCoins.length-1;

    do {
        var newOption = [];
        var j = k;

        do {
            //this do while loop creates the newOption
            //this needs work - this is not a good way to add coins to newOption
            var newOptionTotal = 0;
            if (newOption.length > 0) {
                newOptionTotal = newOption.reduce((total, num) =>  total + num);
            }

            if (newOptionTotal + validCoins[j] > amount) {
                j--;
            } else {
                newOption.push(validCoins[j]);
            }

        }
        while(j > 0)

        if (newOption.reduce((total, num) =>  total + num) === amount) {
            var isUnique = true;
            //sort newOption in ascending order
            newOption.sort((x, y) => x - y);

            for (var i = 0; i < options.length; i++) {
                //compare newOption to other options - if there is a match set isUnique to false
                if (JSON.stringify(options[i]) === JSON.stringify(newOption)) {
                    isUnique = false;
                }
            }

            if (isUnique) {
                options.push(newOption);
            }
        }
        k--;
    }
    while(k > 0)

    return options;
}

console.log(countChangeOptions([2, 4, 1, 9, 3], 4));