// There are two main categories of datatypes --> i) Primitive  ii) Non Primitive


// Primitive data types (Call by value)
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // Output :- false (They are unique)

const bigInt = 12345678n // BigInt example


// Non primitive data types (Call by reference)

// Array
const heros = ["Ironman","Thor","Spidy"]


// Objects
const myObj = {
    accountId = "2314",
    age = 19,
    isLoggedIn = true
}


// Functions
const myFunction = function(){
    console.log("hello world");
    
}