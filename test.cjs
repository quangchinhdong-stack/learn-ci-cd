const assert = require('node:assert/strict');

function add(a, b) {
  return a + b;
}

assert.equal(add(1, 2), 4);
console.log('Test passed');
