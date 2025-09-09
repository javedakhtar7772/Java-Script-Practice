/**
 * ! For loops
 * 
let heros = ["Thor", "IronMan", "Hulk", "Capt America", "Antman"];
for (let i = 0; i < length.heros; i++);
{
  console.log(heros[i]);
}

*/

/**
 * ! For of
 

let cities = ["Delhi", "Lucknow", "Hyderabad", "Pune", "Tamilnadu", "Uttar Pradesh"];
for (let city of cities);
{
    console.log(city.toUpperCase());
}
*/

/**
 * ! For A giving array with mark of student -> [85, 97, 44, 37, 76, 60] for find the average mark of the entire class
 

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let value of marks){
    sum = sum + value;
}

let avg = sum / marks.length;

console.log(`avg mark of the class ${avg}` );
*/

/**
 * ! For a giving array with prices of 5 items -> [250, 645, 300, 900, 50] --
 * ! All items have an offer of 10% OFF on them. Chenge the array to store final price after appling offer.


let items = [250, 645, 300, 900, 50];
let i=0;
for( let val of items){
  console.log(`value of items ${i} = ${val}`)
  let offer = val/10; 

  items[i] = items[i] - offer;
  console.log(`After 10% off on items = ${items[i]}`);
  i++;
}
   */
/** 
let items = [250, 645, 300, 900, 50];
for(let i=0 ; i< items.length; i++){
  let offer = items[i] /10;
  items[i]= items[i] - offer
}

console.log(`After offering 10% off on items = ${items}`)
*/

/**
 * ! forEach(callback, thisarg)
 * ! It is used to iterate over an array
 * ! It is Higher order function
 * ! It doesn't return anything
 

let num = [5 ,10,50,20,30,4]
num.forEach((element,index,array)=>{
  console.log(element*element);
})
*/

/**
 * ! Example : Print Even numbers from given array.
 

const arr =[ 2 ,5,9,8,6,3,4,1,7]
arr.forEach((element,index,array)=>{
      if(element %2 ===0)
      {
        console.log(element+" "+"is even number;")
      }
      else{
        console.log(element+" "+"is odd number;")
      }
})
      */
