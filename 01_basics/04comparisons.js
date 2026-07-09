// Loose equality(==) Vs Strict equality(===)
console.log("2" == 2);  // Output : true (String "2" converted into number 2).
console.log("2" === 2); // Output : false (String Vs number, types doesn't match).


//------------------------------- The null trap --------------------------------------//
// Comparsion Operators(null converts to 0)
console.log(null >= 0);
console.log(null > 0);

// Equality check(null does not convert to 0)
console.log(null == 0);


//-------------------------------- The undefined Behavior --------------------------------//
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined >= 0);
