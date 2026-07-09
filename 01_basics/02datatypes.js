"use strict"
// Coding best practices  :-
console.log(3+3); console.log("hi");  // Bad (unreadable)


console.log(3 + 3);
console.log("hi");  // Good (readable)


// Primitive Datatypes :-
let userName = "sandeep"
let age = 19
let bigNumber = 5454727968589n
let isLoggedIn = true
let uniqueId = Symbol('1234')
let myJob = { name : "code"}


// Undefined Vs Null
let state; // --> undefined(forgot to aassign value)
let temperature = null // --> null(intentionally left empty)


// The typeof operator and the bug :-
console.log(typeof "sandeep"); // Output: "String"
console.log(typeof age);   // Output: "Number"
console.log(typeof undefined);   // Output: "undefined"
console.log(typeof null);    // Output: "Object"







