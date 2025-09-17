/**
 * ! Ways to create an Object?
 

// 1. Using Object Literal
const obj1 = {
    username: "chombu"
};

// 2. Using the Object Constructor
const obj2 = new Object(); // Object Constructor
obj2.username = "chombu";
*/

/**
 * ! Using the Object Constructor with properties
 * ! By using new Keyword and Inbuild Object Constructor
 
const obj = new Object({
    username: "Javed Akhtar",
    age: 23,
    emailid: "javedakhtar7772@gmail.com",
});
// console.log(obj["emailid"]);
obj.emailid="jaddu7772@gmail.com" // update the value of emailid
// console.log(obj.emailid);   // access the value of emailid
// console.log(obj);

// Object.freeze(obj);  // freeze the object
// obj.emailid="javedakhtar789@gmail.com"
// console.log(obj)

obj.student = function(){
    console.log("Hello Js Developers");
}
console.log(obj.student());

obj.student1 = function(){
    console.log(`hello JS developers ${this.username}, ${this.emailid}`); // this keyword refers to current object
}
console.log(obj.student1());
*/







