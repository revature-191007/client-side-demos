let x = {
    key: 'value',
    a: 'Hello',
    b: 'Goodbye',
    c: function() {
        console.log(this.a, this.b);
    }
};

let y = {
    cat: 'yes',
    dog: 'yes'
};

let z = {
    ...x, // spread operator
    ...y
};

let arr = [1, 2, 3];

let newArr = [...arr, 4, 5, 6];


console.log(z);
console.log(newArr);

// JSON - JavaScript Object Notation
let json = {
    "abc": "Hello",
    "de-f": "Goodbye"
};

console.log(json.abc);
console.log(json['abc']);
console.log(json['de-f']);

console.log(arr.length);
arr[-1] = 2;
console.log(arr[-1]);
console.log(arr.length);
console.log(arr);
arr[10] = 1000;

console.log(arr.length);
