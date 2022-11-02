const num: number = 10;
const bool: boolean = true;
const str: string = 'string';
const undef: undefined = undefined;
const nul: null = null;
const obj: object = {
  string: 'string',
  boolean: true,
  number: 1,
  undefined: undefined,
  null: null,
};

console.log('num', num);
console.log('bool', bool);
console.log('str', str);
console.log('undef', undef);
console.log('nul', nul);
console.log('obj', obj);

// Do not need to initialize a variable with a value immediately, as long as it is assigned a value before being read

let aNumber: number;

aNumber = 12;

console.log(aNumber);
