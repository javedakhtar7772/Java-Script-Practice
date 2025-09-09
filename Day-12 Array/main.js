/**
 * ! map() [callback, return new array]
 * ! it is a higher ordar function
 

const arr = [25,30,35]

const a = arr.map((element, index, array)=>{
    console.log(element,index,array)
    return element + array
})
console.log(a)
*/


/** 
 * ! filter() [callback , return new array]
const arr =[60,20,30,80,40,70,15,22,2,3,5]

const a=arr.filter((element,index,array)=>{
    if(element>15)
        return true;
})
console.log(a)


const arr =[60,20,30,80,40,70,15,22,2,3,5]

const a=arr.filter(function task(element,index,array){
    if(element>15)
        return true;
})
console.log("greater then 15:-",a,arr)
*/


/**
 * ! return () [ callback , initial valur ]
 * ! It returns a single value.
 * ! Here , single value is returned after complete iteration of array. Value is stored in a variable which is used to result , we refer it as accumulator.
 
*/

/**
const arr=[10,20,30,40,50];

const x=arr.reduce((acc,element,index,array)=>{
    if(element < 40)
    {
        acc.push(element * 10);
    }
    return acc;
},[])

console.log("x:",x);
 */
/** 
const arr = [1,2,3,4,5,6,7,8,9,10];

const Answer= arr.reduce((acc, element,index,array)=>{
    acc = acc+element;
    return acc;
},0)
console.log("Sum Of All Element=>",Answer);
*/

const age = 10
if(age>15){
    console.log("small")}
    else{
        console.log("big")
    }

const age1 = 23
if(age1>15){
    console.log("small")}
    else{
        console.log("big")
    }
