
function delimiterCheck(str) {
    
    var isDelimiter = true;
    var validSets = [['(', ')'], ['[', ']'], ['{', '}']];
    var needsMatch = [];
    
    str.split('').forEach(function(char) {

        //check if some child array in validSets contains char
        var isValidChar = validSets.some(x => x.indexOf(char) >= 0);
      
        if (!isValidChar) {
            //the character is not a valid set character - return false
            isDelimiter = false;
            return false;
        }
      
        validSets.forEach(function(set) {
            if (set[0] === char) {
                //if the character is an opening character then push to needsMatch
                needsMatch.push(char);
            } else if (set.indexOf(char) > 0) {
                //the character is not an opener, but does exist in the set
                //check if the last needsMatch item is the closing item for the set
                if (needsMatch[needsMatch.length-1] === set[0]) {
                    //remove the last item from needsMatch - we have found its closing set character
                    needsMatch.pop();
                } else {
                    //the closing bracket was incorrectly placed so we return false
                    isDelimiter = false;
                    return false;
                }
            }

            return true;
        })

    });
   
    if (needsMatch.length === 0 && isDelimiter) {
        //all characters have been matched and removed from needsMatch - return true
        return true;
    }

    return false;
}
  
delimiterCheck("()[{()}][{()}]");