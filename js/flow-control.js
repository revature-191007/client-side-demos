/*
    Conditional Logic
*/

let x = 20;

if (x > 10) {
    // semi-colon injection - if you don't terminate an expression or line
    // with a semi-colon and it appears to be the end of the expression
    // then JavaScript will automatically 'inject' a semicolon to terminate
    // the expression.
    console.log('greater than ten');
} else {
    console.log('not greater than ten');
}

// switch statement - same syntax as Java
// typing more flexible than java
switch(x) {
    case 10: console.log('It\'s 10!'); break;
    case 20: console.log('It\'s 20!'); break;
    default: console.log('It\'s ' + x); break;
}

switch(true) {
    case true: console.log('true'); break;
    case false: console.log('false'); break;
}

x = true;

while(x) {
    x = Math.random() < 0.8;
    console.log('looping');
}

str = '';
do {
    str += String.fromCodePoint(Math.floor(Math.random() * 250));
} while(str.length < 10);

console.log(str);
console.log(str.length);

// Iterating over string and console.logging each character
for(let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// ternary operation
let y = str.length > 10 ? 10 : 20;
console.log(y);

const arr = [1, 2, 3, 4, 5];

// iterate over values
for(let item of arr) {
    console.log(item);
}

// iterate over keys
for(let item in arr) {
    console.log(item);
}