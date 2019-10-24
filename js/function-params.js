// OOP in JavaScript, polymorphism
// Can overload functions in JS?

// ... -> rest operator
myFunction = function(a, b, c = 2, ...d) {
    console.log(a, b, c);
    console.log(d);
}

myFunction();
myFunction(1, 2, 3, 4, 5);
myFunction('a', 2, [1, 2, 3]);
