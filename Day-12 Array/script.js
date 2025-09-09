/**
 * ! Array Inbuild Methods
 */

/**
* ! push & pop
let arr = [10,20,30,40];
arr.push(50);
arr.pop()
console.log(arr);
*/

/** 
 * ! unshift & shift 
const arr1= [10,20,30,40];
// arr1.unshift(5);
arr1.shift();
console.log(arr1)
*/

/**
 * ! indexOf()
const arr = [10,20,30,40,50]
const idx= arr.indexOf(40);
console.log("Index:",idx);
 */

/** 
 * ! include()
const s1= ["html","CSS","JavaScript"];
const res = s1.includes("React");
console.log("res:",res);
*/

/** 
 * ! reverse(  )
const arr1 = [10,20,30,40,50]
arr1.reverse()
console.log(arr1)
*/

/**
 * ! Splice:- Insertion, Deletion and Updation
 * a:- starting index
 * b:- No of elements to be deleted
 * c:- New values to be added
 * ! It modifies the original array 
 * ! It return array of deleted elements
*/

/**Deletion in array use Splice  

let arr = ["ironman","Thor","Loki","Hulk","Black Panthor"];
arr.splice(2,1);
console.log(arr)
*/

/** Insertion in array use Splice  2

let arr = ["ironman","Thor","Loki","Hulk","Black Panthor"];
arr.splice(2,0,"Superman","Batman")
*/

/** Updation in array use Splice 

let arr = ["ironman","Thor","Loki","Hulk","Black Panthor"];
arr.splice(4,1,"Black Adam")
console.log(arr)
*/

/**
 * ! slice(a,b)
 * a:- starting index
 * b:- last index + 1
 * ! It returns a new array
 * ! It doen't modify the original array
 

const arr = ["html", "Css", "JavaScript", "Node.js", "Express.js", "Sql","MongoDB"]
const newArray=arr.slice(0,3);
console.log("newArray",newArray);
*/

/**
 * ! sort(callback)
 * ! Ascending:- (a,b)=> a - b
 * ! Descending:- (a,b)=> b - a 


const arr=[10,7,9,1,8,3,6,4,2,5];
console.log(arr.sort((a,b)=>a-b));
// arr.sort((a,b)=>b-a);



const arr=[10,20,30,40,50];
const obj={
    a:10
}

const output=[ ];

arr.forEach(function task(element,index,array)
            {
                console.log(this)
                output.push(element * this.a);
            },obj)


console.log("output:",output)
*/




