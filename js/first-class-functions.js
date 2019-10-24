// In Java functions are more limited in their usage.
// Java functions must be methods and so are always attached to some object.
// And cannot be passed around.

// However, in JavaScript functions are first-class objects.
// This means that anything that you can do with object, you 
// can also do with a function.

// This includes passing them around to other functions. Returning
// them from functions. And even assigning properties.

// A very common pattern in JavaScript, is the 'callback function'.
// In a callback function, you provide a function as a parameter to
// function call, and that function call will generally call the function
// you pass to it. Why would we do this?

// http()
// ourFunction()

// vs http(ourFunction) <-- callback passed

const originalLog = console.log;
const fun = (i) => { originalLog(i*2)};
fun('hello');
fun.x = 10;
fun.y = 20;
fun('goodbye');
fun(fun.x);
// console.log = fun;

setTimeout(() => console.log('delayed output'), 5000);

const obj = {
    firstName: 'Billy',
    lastName: 'Batson',
    sayHello: function() {
        setTimeout(() => { // good, meaning of 'this' is maintained
            console.log(this);
            console.log(this.firstName)
        }, 2000);
    }
};

obj.sayHello();

const person = {
    firstName: 'Abby',
    lastName: 'Adams',
    sayHello: () => {
        // template literal (tick marks)
        // template literals facilitate value injection, multiline strings
        // es6 feature
        console.log(this);
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
    }
}

person.sayHello();

// bad, meaning of 'this' is not maintained
setTimeout(person.sayHello, 3000);

// => vs function
// => does not have its own context of this in the defining object
// but instead uses the outer context where the function is defined