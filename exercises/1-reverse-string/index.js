/**
 * This function is going to reverse the given string as its parameter
 * 
 * @param {String} str THis is the string to be reversed
 * @returns {String} the reversed Strings
 * 
 * @example
 * 
 * console.log(reverseString('123! abc!')); //'!cba !321'
 *
 */
const reverseString = (str) => {

    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {

        reversedStr += str[i];
    }

    return reversedStr;
}



module.exports = reverseString;
