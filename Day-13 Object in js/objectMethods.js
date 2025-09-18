/**
 * ! Array Method
 * ! Array Inbuild Methods


const arr=[
    function(){console.log("Hello JS Developers");},
    function(){console.log("Hello World");},
    function(){console.log("Hello Everyone");}
]
arr[2]();
console.log(arr)
*/

/**
 * ! Object Methods
 */

const user = {
    username: "Javed Akhtar",
    email: "javedakhtar123@gmail.com",
    designation: "Software Engineer",
    intro:()=> {
        console.log(`I am ${user.username} My email is ${user.email} and I am working as ${user.designation}`);
        let bag = "10 cror rupees";
        const inner = () => {
            console.log("I am Inner Function");
            console.log(bag);
        }
        return inner();
    }

}

const x = user.intro();
console.log("X:", x);

/**
 * ! Add a new key value pair, 
 * ! Delete a key value pair(delete keyword)
 * ! Update a value
 * ! in keyword 
*/