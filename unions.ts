// Can set a variable to accept multiple data types using a Union ( | ).
// Instantiate 'someData' with Types string and number
let someData: string | number;

// Assign 'someData' a string value
someData = 'This is a string';

console.log(someData);

// Reassign 'someData' a number value
someData = 1234;

console.log(someData);

// Works with function param and return types as well
function someFunction(someVariable: string | number): string | boolean {
  if (typeof someVariable === 'string') {
    return someVariable;
  } else {
    return false;
  }
}

console.log(someFunction('This is a string'));
console.log(someFunction(2022));

// 'null' and 'undefined' are not included in variable/parameter/return types. Must be explicitly stated, and combined with a union.

let maybeNum: number | null = null;

maybeNum = 12;
