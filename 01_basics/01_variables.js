const accountId = 1445533
let accountEmail = "shrinivas@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 4 --> not allowd 
console.log(accountId)
console.table([accountId , accountEmail , accountPassword , accountCity,accountState])
/* 
prefer not to use var
because of issue in block scope and functional scope
*/
