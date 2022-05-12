const addon = require('bindings')('callback');

addon(function(message){
    console.log(message);
});