/**
 * JavaScript supports closures.
 * Closures are a special feature in a language whereby a variable
 * declared in an outer function but referenced in an inner function
 * can be still be accessed when the outer function has completed,
 * if the inner function is returned.
 */

const a = () => {

    const str = 'my-string';

    const b = () => {
        console.log(str);
    }
    return b;
}

a()();

const Person = function(fName, lName) {
    let firstName = fName;
    let lastName = lName;

    return {
        getFirstName: () => firstName,
        setFirstName: (fName) => firstName = fName,
        getLastName: () => lastName,
        setLastName: (lName) => lastName = lName
    };
}

const myPerson = Person('Abby', 'Adams');
console.log(myPerson);
