/**
 * This function gets the title from a collection of books
 * 
 * @param {object} books you find the titles from these book
 * 
 * @returns {object} the result is an array of titles
 *
 * @example 
 * 
 * const testArr = [
                   {title: 'Time waster', author: 'Sayed Kazimi'},
                    {title: 'All about health', author: 'Aziz Haidari'}
                ];
    console.log(testArr[0].title); // ['Time waster', 'All about health']

 */
const getTheTitles = (books) => {

    let lastArr = [];
    for (let i = 0; i < books.length; i++) {

        lastArr.push(books[i].title);

    }

    return lastArr;

}



module.exports = getTheTitles;
