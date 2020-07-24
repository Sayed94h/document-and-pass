/**
 *
 */
let findTheOldest = function (arr) {

    
   // let oldestAge;
    let currentAge = 0;
    let arrAge = []; let arrName = [];
    var d = new Date(); var n = d.getFullYear();
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i]);
        currentAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if(!arr[i].yearOfDeath){
            currentAge = n - arr[i].yearOfBirth;
        }
        arrAge.push(currentAge);
        arrName.push(arr[i].name);
    }

    let big = arrAge[0];
    let oldName;
    for(let i = 1; i < arrAge.length; i++){
    
        if(arrAge[i] > big){
            big = arrAge[i];
            oldName = arrName[i];
        } 
    }
    //console.log(current, next, big, oldName);

    return oldName;

}
/*
const people = [
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ];

  console.log((findTheOldest(people))); //'Ray'
*/

module.exports = findTheOldest;
