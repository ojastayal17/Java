const accountId=144553
let accountEmail="ojastayal@gmail.com"
var accountPassword="12345"
accountCity="Jaipur" //not preferable to use

let accountState

// accountId=2 not allowed to change const value

accountEmail="oj@gmail.com"
accountPassword="212121"
accountCity="bengaluru"

console.log(accountId);

/* prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])