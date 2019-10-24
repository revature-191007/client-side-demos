// Destructuring is the process of destructuring an array or object in
// discrete variables

// [1, 2, 3]
const myArr = [1, 2, 3];

//  0  1  2     0  1  2
// [a, b, c] = [1, 2, 3]
let [a, b, c] = myArr;
console.log(a, b, c);

[a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c); 

const obj = {
    firstName: 'Billy',
    lastName: 'Biceps'
};

let {firstName: d, lastName: e} = obj;
console.log(d, e);

const obj2 = {
    firstName: 'Chad',
    lastName: ', The'
};

({firstName: d, lastName: e} = obj2);
console.log(d, e);