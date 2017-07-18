//console.log(_dirname);
//console.log(_filename);
console.log('dir');
//normal function statement
function sayHi(){
console.log('Hai');
}
sayHi();
function callFunction(fun){
fun();
}
// function expression
var sayBye = function(){
console.log('bye');
} 
//sayBye();
callFunction(sayBye);