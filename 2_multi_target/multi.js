const test1 = require('bindings')('one');
const test2 = require('bindings')('two');

console.log(test1.increment(10));
console.log(test1.decrement(5));

console.log(test2.increase());
console.log(test2.subObject.decrease());