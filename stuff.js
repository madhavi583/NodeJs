var counter = function(arr){
return 'There are ' + arr.length + ' elements in this array';
};
//console.log(counter(['pathapati','madhavi','prema','madhu']));
 var adder = function(a,b){
 return `the sum of the 2 numbers is ${a+b}`;
 };
 var pi =3.142;
// module.exports=counter;
// module.exports.counter = counter ;
//  module.exports .adder =  adder ;
 
//  module.exports.pi = pi;
module.exports ={

    counter : counter,
    adder :adder,
    pi : pi
}