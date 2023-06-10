/*
Instruction

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

const factorial = (n) => (n ? n * factorial(n - 1) : 1);
