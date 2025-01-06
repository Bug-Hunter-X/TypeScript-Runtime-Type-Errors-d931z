# TypeScript Runtime Type Errors

This repository demonstrates a common misconception about TypeScript: type checking happens at compile time, not runtime.  Even though TypeScript catches many errors during development, type mismatches might still cause unexpected behaviour in the final JavaScript code.

The `bug.ts` file shows a function that incorrectly combines a string and a number. While TypeScript doesn't prevent compilation, the result is not what a developer might expect.

The `bugSolution.ts` file demonstrates how to improve code safety by adding runtime type validation.