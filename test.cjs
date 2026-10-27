const assert = require('node:assert/strict');

function add(a, b) {
  return a + b;
}

assert.equal(add(1, 2), 3);
console.log('Test passed');
