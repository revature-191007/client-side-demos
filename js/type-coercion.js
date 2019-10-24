/*
    Type coercion is a feature in JavaScript whereby a value can
    be implicitly converted to another value when it needs to be interpreted
    that way.  Specifically, this will happen when certain operators
    are used with mixed types or when the type does not make sense
    with the operator as is.
*/

// Multiplication operator: *

let result = 2 * 4;
console.log(result);

result = 2 * '4';
console.log(result);

// Addition operator: +
// String concat operator: +
// JavaScript will prefer string concat. because it's always safe
// to convert a number to a string, but it's not necessary possible
// to convert a string to a number. Therefore, if there is any string
// involved, it will coerce the number to a string.

result = 2 + 4;
console.log(result);

result = 2 + '4';
console.log(result);

result = '2' + 4;
console.log(result);
result = '2' + '4';
console.log(result);

result = 3 + 6 * ('8' + 2); // '982'
console.log(result); 



result = '2' == '3' - '1'; // true
result = 'b' - 'a'; // NaN
console.log(result);


// == vs ===
// == - equals using type coercion
// === - equals without type coercion (exactly equal) (type + value equality)
// Best practice: Always use ===.

console.log(1 == '1'); // true
console.log(1 === '1'); // false

// Explicit conversion to number (safe with number as well)
let sample = parseInt(2);
let sample2 = +'2';

++sample;
console.log(sample);

