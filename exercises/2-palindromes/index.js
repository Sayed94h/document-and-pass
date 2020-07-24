/**
 * This function checks if each character from the left side is the same with each character from the right side
 * @param {String} str : this is the string that you need to check
 * @returns {Boolean} : returns if that is the same
 * 
 * @example
 *  const str = 'A car, a man, a maraca.';
 *  console.log(palindromes(str)); // true
 */
const palindromes = (str) => {

    let newArr = str.split('').reverse();
 
    let trueArray = [];
    for(let i = 0; i < newArr.length; i++){
       
        if (newArr[i] === str[i]){
          trueArray.push(true);
        }
    }

    return trueArray.every(ele => ele === true);


};


module.exports = palindromes;
