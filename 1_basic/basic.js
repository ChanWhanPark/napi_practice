'use strict'

const exampleAddon = require('bindings')('basic');

console.log(exampleAddon.increment());
console.log(exampleAddon.increment());
console.log(exampleAddon.subObject.decrement());