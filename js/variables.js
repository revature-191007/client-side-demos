//  3 keywords used to define variables in javascript
// 1. var (original keyword)
// 2. let (added in es6)
// 3. const (added in es6)

// var and let do similar things, but var scopes are limited to 
// function scope and global scope, var declarations are hoisted to the top
// of their scope.

// let allows for block scope
// const behaves exactly like let, but cannot be reassigned (final)


const someFunction = function() {
    y = 20;
    x = 30;
    console.log(x);
    console.log('hello');
    var x = 20;
    console.log('goodbye');
    console.log(x);
}

someFunction();
console.log(y);
console.log(x);