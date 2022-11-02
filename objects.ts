// Objects-as-records (Fixed number of properties known at development)

// Objects Via Interface

interface Point {
  x: number;
  y: number;
  z: number;
}

const point: Point = { x: 1, y: 2, z: 3 };

console.log(point);

// TypeScript works structurally, instead of nominally. Meaning that you can test equality for things that have the correct structure.

function pointToString(pt: Point): string {
  return `${pt.x}, ${pt.y}, ${pt.z}`;
}

console.log(pointToString(point));

console.log(pointToString(point) === '1, 2, 3');

// Objects Via Object Literal

type otherPoint = {
  x: number;
  y: number;
};

const point1: otherPoint = { x: 2, y: 2 };

console.log(point1);

// Can be declared inline
function makePoint(pt: { x: number; y: number }) {
  return pt;
}

console.log(makePoint({ x: 2, y: 5 }));

// Conditional properties - Both john and jane match the person type, because they both have the required properties

type Person = {
  name: string;
  company?: string;
};

const john: Person = {
  name: 'John',
};

const jane: Person = {
  name: 'Jane',
  company: 'Widget Inc.',
};

// Methods

interface Triangle {
  base: number;
  height: number;
  area(base: number, height: number): number;
}

// I... I guess I got this working?? I'm not sure.
const twoXThree: Triangle = {
  base: 2,
  height: 3,
  area(base, height): number {
    const area = (base * height) / 2;
    return area;
  },
};

console.log(twoXThree);
