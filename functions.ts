// Declare function -  (  The Function Type  ) - FUNCTION PARAMS - return
const convertToString: (num: number) => string = (num: number) => String(num);

console.log(convertToString(10));

//               (Param Type) (Return Type)
function toString(num: number): string {
  return String(num);
}

console.log(toString(100));

// TypeScript functions can usually infer the return type of a function.
// The following function infers the type of the return as a number
function numbify(str: string) {
  return Number(str);
}

console.log(numbify('1000'));

// TypeScript infers the type of the return as a union, number|string
const multipleReturn = (num: number, str: string) => {
  if (num > 5) {
    return num;
  } else {
    return str;
  }
};

console.log(multipleReturn(1, 'foo'));
console.log(multipleReturn(10, 'foo'));

// Void type of return means the function returns undefined
const voidFunction = (num: number) => {
  console.log('Console log from the void function', num);
};

voidFunction(19);

// Support for Conditional Operators ----- conditional param must come last in params
const conditionalFunction = (str2: string, str?: string) => {
  if (str) {
    return str;
  } else {
    return str2;
  }
};

console.log(conditionalFunction('foo'));
console.log(conditionalFunction('foo', 'bar'));

// Support for default values
const defaultPoints = (x: number = 0, y: number = 0): [number, number] => {
  return [x, y];
};

console.log(defaultPoints(), defaultPoints(3, 7));

// Rest parameters
const nums = [1, 2, 3, 4, 5];
function restPush(num: number, [...numArr]: Array<number>) {
  const newNumArr: number[] = [...numArr, num];
  return newNumArr;
}

console.log(restPush(6, nums));
