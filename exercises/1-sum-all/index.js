/**
 * This function calculates the sum of small number all the way to the big number
 * @param {Number} startNum this is the one side of the range
 * @param {Number} endNum  this is the other side of the range
 * @returns {Number} the sum of all 
 * @returns {String} error if one or both of the range are not a number data type
 * 
 * @example
 * console.log(sumAll(1, 4)); //10
 * console.log(sumAll(-10, 4)); // ERROR
 * console.log(sumAll('p', 4)); // ERROR
 */
const sumAll = (startNum, endNum) => {

    let final_result = 0;

    if (typeof(startNum) !== 'number' || typeof(endNum) !== 'number' || startNum < 0 || endNum < 0) {
        final_result = "ERROR";
    } else {
        let smallNum, bigNum;

        if(startNum < endNum) {
            smallNum = startNum;
            bigNum = endNum;
        } else {
            smallNum = endNum;
            bigNum = startNum;
        }

        for(let i = smallNum; i <= bigNum; i++){
            final_result += i;
        }

    }

    return final_result;

}


module.exports = sumAll
