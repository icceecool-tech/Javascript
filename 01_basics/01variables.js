const accountId = 144553   
// accountId = 45627 -->  Not Allowed 


let accountEmail = "sandeep@gmail.com"
accountEmail = "sandeep@google.com" // --> Allowed
console.log(accountEmail);


var accountPass = "21256"
accountPass = "59876"  // --> Allowed, But avoid using var.
console.log(accountPass);

console.table([accountId,accountEmail,accountPass]) // Used to print variables in tabular form
