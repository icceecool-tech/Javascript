// Conversion to Number

let scoreStr= "33"
let valueInNumber = Number(scoreStr)
console.log(valueInNumber)
console.log(typeof valueInNumber);


let scoreStr1= "33abc"
let valueInNumber1 = Number(scoreStr1)
console.log(valueInNumber1)
console.log(typeof valueInNumber1);


let scoreStr2= null
let valueInNumber2 = Number(scoreStr2)
console.log(valueInNumber2)
console.log(typeof valueInNumber2);


let scoreStr3= undefined
let valueInNumber3 = Number(scoreStr3)
console.log(valueInNumber3)
console.log(typeof valueInNumber3);


let scoreStr4= true
let valueInNumber4= Number(scoreStr4)
console.log(valueInNumber4)
console.log(typeof valueInNumber4);


let scoreStr5= false
let valueInNumber5 = Number(scoreStr5)
console.log(valueInNumber5)
console.log(typeof valueInNumber5);


let scoreStr6= "Sandeep"
let valueInNumber6 = Number(scoreStr6)
console.log(valueInNumber6)
console.log(typeof valueInNumber6);


// Conversion to Boolean
let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);


// Conversion to String 
let someNumber = "23"
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//-----------------------------> TRICKY CONVERSIONS <----------------------------------//

// String conatenation
let str1 = "Hello "
let str2 = "Sandeep"
let str3 = str1 + str2
console.log(str3);


// The string + Number trap
console.log("1" + 2)
console.log(1 + "2");
console.log("1" + 2 + 2); // ---> If string comes first, everything after it becomes a string
console.log(1 + 2 + "2");


// Increment Operators
let a = 10;
console.log(a++);
console.log(a);


let b = 10
console.log(++b);
console.log(b);











