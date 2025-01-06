function combine(a: string, b: number): string {
  if (typeof a !== 'string' || typeof b !== 'number') {
    throw new Error('Invalid input types');
  }
  return a + b;
}

let result = combine("hello", 5); // Correct usage, no error
console.log(result); // Output: "hello5"

try {
  let badResult = combine(5, "hello");
  console.log(badResult);
} catch (error) {
  console.error(error.message); // Output: Invalid input types
}

// Alternative using type guards:
function isString(value: any): value is string {
  return typeof value === 'string';
}
function isNumber(value: any): value is number {
  return typeof value === 'number';
}
function combineSafe(a: any, b: any): string {
  if (!isString(a) || !isNumber(b)) {
    throw new Error('Invalid input types');
  }
  return a + b;
}

let result2 = combineSafe("hello", 5); // Correct usage, no error
console.log(result2); // Output: "hello5"

try {
  let badResult2 = combineSafe(5, "hello");
  console.log(badResult2);
} catch (error) {
  console.error(error.message); // Output: Invalid input types
}