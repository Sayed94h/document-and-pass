/**
 * This function is going to repeat the 'given string as its parameter' number of times
 * 
 * @param {string} str : this string is going to be repeated depend on the parameter 'repeatTimes'
 * @param {number} repeatTimes repeat time or number of times that the string has to be repeated
 * @returns {string} repeated string
 *
 * @example 
 * 
 * const test = repeatString('FakeNews', 2);
 * console.log(test); // FakeNewsFakeNews
 * 
 */
const repeatString = (str, repeatTimes) => {

    let repeatedStr = '';
    if (repeatTimes < 0) {
        repeatedStr = 'ERROR';
    } else if (repeatTimes == 0) {
        repeatedStr = '';
    } else{
    for (let i = 1; i <= repeatTimes; i++ ) {

        repeatedStr += str;
     }
    }
    return repeatedStr;
}

module.exports = repeatString;
