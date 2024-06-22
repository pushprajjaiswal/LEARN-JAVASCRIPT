const accountId = 12345
let accountEmail = "pushpa@gmail.com"
var accountPassword = "pushpa123"
accountCity = "Bhopal"

let accountState;
// accountId = 2 // not allowed

accountEmail = "hey@gmail.com"
accountPassword = "hey123"
accountCity = "Indore"
console.log(accountId);

/**
 * Prefered not use var - becoz in issue of scope in block and function
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);