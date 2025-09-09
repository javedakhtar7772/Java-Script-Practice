/*
var a = 10;
let b = 20;
const c = 30;
console.log("a:",a)
console.log("b:",b)
console.log("c:",c)
*/

var a = 1;
let b = 2;
const c = 3;
{
  console.log("Inside A Local Block");
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}
console.log("outside A Local Block");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
