/**
 *  Find or calculate the fibonacci number
 * 
 * @param {string} lastDigit this is the number that you want to find the Fibonacci number from
 * @returns {number} calcFibonacci: it is the result of the calculation
 * 
 * @example 
 * 
 * const test = fibonacci(6);
 * console.log(test); // 8
 *
 */
const fibonacci = (lastDigit) => {

    const numbered = Number(lastDigit);
    let calcFibonacci;

    if (numbered < 0) {
        calcFibonacci = "OOPS";
    } else {

    let startDigit = 0;
    let growDigit  = 1;
    for (let i = 0; i <= numbered; i++) {

        let resultFib = startDigit + growDigit;
        calcFibonacci = startDigit;
        startDigit = growDigit;
        growDigit = resultFib;

         }
    }

    return calcFibonacci;
}


module.exports = fibonacci;
