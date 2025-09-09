/**
 * ! Example-1
 
        b=20;
    let b=200;    // Reference Error can't access b before initialization
    console.log(b);
*/

/**
 * ! Example-2
 
console.log("Start");
var a = 1;
let b = 2;

{
    console.log("Inside A Local Block");
    b = 10;
    c = 20;
    console.log("a",a);
    console.log("b",b);
}
let a = 3;
console.log("Outside A Local Block");
console.log("a",a);
console.log("b",b);
console.log("End");
*/