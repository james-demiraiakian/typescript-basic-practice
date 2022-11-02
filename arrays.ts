// Creating List Arrays

const stringArray1: Array<string> = []; // Can be instantiated as an empty array

const stringArray2: string[] = []; // Can also be instantiated as an empty array

const stringArray3: [string] = ['']; //Can not be instantiated as an empty array

// Works with numbers as well

const numArray4: Array<number> = [];

const numArray5: number[] = [];

const numArray6: [number] = [1];

// Create an array that takes any value

const anyArray1: any[] = []; // can be created empty, or with any value
const anyArray2: any[] = [false, 1, 'two'];

const anyArray3: [any] = [false];
anyArray3.push(1);
anyArray3.push('two');

const anyArray4: Array<any> = [
  1,
  2,
  '',
  true,
  undefined,
  null,
  { key: 'value' },
];

// Creating Tuple Arrays

const tupleArray2: [string, number][] = []; // Must take in entries that fit the type declaration exactly
tupleArray2.push(['string', 0]);

// Arrays that can take in different, specified types

const tupleArray1: Array<string | number> = ['two', 1]; // Can take any number or order of the specified types
