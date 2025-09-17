const mySymbol = Symbol("myValue");
const jsUser = {
    name: "Ravi",
    age: 22,
    email: "ravi@example.com",
    address: "lucknow",
    isLoggedIn: false,
    [mySymbol]: "mySymbolValue"
};
/*
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser.age);
console.log(jsUser.email);
console.log(jsUser.address);
console.log(jsUser.isLoggedIn);
 

console.log(jsUser["name"]);
console.log(jsUser["age"]);
console.log(jsUser["email"]);
console.log(jsUser["address"]);
console.log(jsUser["isLoggedIn"]);  

console.log(typeof jsUser[mySymbol]);
 

const obj= {
    "user Name": "Javed",
    age: 23,
    email: "javed@example.com",
    address: "Pratapgarh",
    isLoggedIn: true,
    greet: function(){
        console.log("Good Morning Javed");
        return "Greet function called";
    },  
    hobbies: ["cricket", "coding", "reading"]
}
console.log(obj.greet());
console.log(obj.hobbies);
console.log(obj.hobbies[1]);


const obj={
    4:"chombu",
    1:"Ravi",
    3:"Javed",
    2:"Ankit"
}
console.log(obj);
*/

/*
! user defined key name
const key1 = prompt("Enter your 1st key");
const obj = {
    [key1]: "Javed"
}
console.log(obj);

let phone = 8800425635;
let obj = {
    phone,
    phone:phone
};
console.log(obj);
*/

/**
 * ! If key-name is same as variable name which hold the value , instead of writing two times we can write varaiable name only once. 

const username = "Javed Akhtar";
const mobileNo = 8528781815;

const obj={
    username,
    mobileNo
}
console.log(obj);
*/

