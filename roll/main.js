const numeral = require('numeral');

var number = numeral(1000.3123);

console.log(number.format('0,0.[00]'));
