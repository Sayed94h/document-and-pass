/**
 * This function determines if a year is a leap year
 * 
 * @param {Number} year this is the year to be checked
 * @returns {Boolean} the result
 * 
 * 
 */
const leapYears = function (year) {

    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

}

module.exports = leapYears
