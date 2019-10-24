// JavaScript does not have classes.
// It sort of has classes, but definitely does not have classes.
// JavaScript has no classes. You can use the 'class' keyword to define
// a class.
// The 'class' keyword can define a class, but it won't be a class.

const person = {
    firstName: 'Abby',
    lastName: 'Adams'
};

// A prototype is an object
// that is the basis for later objects
console.log(person.firstName);

// Simple extension, earliest version of extension in JS

const billy = Object.create(person);
billy.firstName = 'Billy';
console.log(billy.firstName);
console.log(billy.lastName);

obj = Object.create(person);
for(let i = 0; i < 20; i++) {
    obj = Object.create(obj);
    if (i === 10) obj.lastName = 'dslkjfadslkjf';
}

console.log(obj.firstName, obj.lastName);

// Constructor Functions
// Are functions which use the 'this' keyword to assign fields
// and are then called with the 'new' keyword
// and will then assign an object with the fields defined in the function

const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const abby = new Person('Abby', 'Adams');
console.log(abby);


// ES6 class syntax (it's not a real class)
// 'syntactical sugar'
class Cat {

    constructor(furColor, breed, firstName) {
        this.furColor = furColor;
        this.breed = breed;
        this.firstName = firstName;
    }

    meow() {
        console.log(Math.random() > 0.5 ? 'meow' : 'mrreeeeewooowowowww');
    }
}

const socks = new Cat('brown', 'persian', 'Socks');
socks.meow();