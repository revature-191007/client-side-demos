const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Functional methods on arrays
// forEach - calls the provided callback function for each
// item in array
myArr.forEach(i => {
    console.log(i)
});

// map - Applies a mutative function to each item in the array
// filter - Removes all items from array which don't pass filter predicate

const result = myArr
    .map(i => i ** i) // mutate i values to i^i
    .filter(i => i % 2 === 0) // remove odd values
    .reduce((a, b) => a > b ? a : b); // finds maximum in array
// max value
    // 1 2 3 4 5
// (a = 1, b = 2) -> 2
// (a = 2, b = 3) -> 3
// ...
// 5

// sum value
    // 1 2 3 4 5
// (a = 1, b = 2) -> 3
// (a = 3, b = 3) -> 6
// (a = 6, b = 4) -> 10
// (a = 10, b = 5) -> 15
// reduced to: 15

// (a = 1, b = 2) -> 3*
// (a = 3, b = 4) -> 7*
// (a = 3, b = 5) -> 8*
// (a = 7, b = 8) -> 15


let max = 0;
for(let i of myArr) {
    i **= i;
    if (i % 2 !== 0) continue;
    if (max < i) max = i;
}

console.log(result);