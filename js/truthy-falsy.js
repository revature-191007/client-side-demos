/*
    Truthy-Falsy is a feature of JavaScript.
    This feature stipulates that any value in JavaScript can be 
    evaluated for 'truthiness', meaning that they can be used singularly
    as a predicate.

    Pretty much everything is truthy, except a few values:
    0 or (-0)
    NaN
    null
    undefined
    ''
    false
*/

if('cat') {
    console.log('yes')
} else {
    console.log('no');
}

// Truthy-falsy means that all values can be evaluated for truthiness
// but also that logical operations on these values will return the value
// that is the deciding value in the expression
let x = undefined && 'dog';
console.log(x); // true

//                          modern parameter default
const myFun = function(a, b = 'default') {
    // older style 'default operator'
    b = b || 'default';
}

// || - default operator
// && - guard operator

// guard operator usage
obj = {
    a: {
        value: 'hello'
    },
    // b: {

    // }
}

const a = obj.a && obj.a.value;
const b = obj.b && obj.b.value;

console.log(a, b);