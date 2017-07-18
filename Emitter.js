var events = require('events');
// var myEmitter = new events.EventEmmitter();
// myEmitter.on('someEvent',function(mssg){
// console.log(mssg);
// });

// myEmitter.emit('someEvent','the events was emitted');
var util = require('util');
var Person =function(name){
    this.name = name;
};
util.inherits(Person,events.EventEmitter);
var madhavi = new Person('madhavi');
var prema = new Person('prema');
var madhu = new Person('madhu');
var people =[madhavi,prema,madhu];
people.forEach(function(Person){
Person.on('speak',function(mssg){
    console.log(Person.name + 'said :' + mssg)

});
});
madhavi.emit('speak','hey dudes');
madhu.emit('speak','I want curry');
