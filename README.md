Arrays in JavaScript :

This repository covers the basics and practical use of arrays in JavaScript. Arrays are ordered collections used to store multiple values in a single variable. They are widely used for handling lists of data such as numbers, strings, or objects.

Key Topics Covered :

Array Creation – Declaring arrays with literals and constructors.

Accessing Elements – Using index numbers to read or update values.

Common Methods :

push() → Add element at the end.

pop() → Remove last element (if you pass an argument inside parentheses, it will be ignored).

shift() → Remove first element.

unshift() → Add element at the beginning.

slice() → Returns a shallow copy without changing the original array.

splice() → Adds or removes elements directly in the array. For example:

let fruits = ["apple", "mango", "banana", "orange", "grapes"];
fruits.splice(2, 1); // removes "banana"
console.log(fruits); // ["apple", "mango", "orange", "grapes"]


Primitive vs Non-Primitive Types :

Primitives (like numbers, strings) are copied by value.

Arrays (non-primitives) are copied by reference.

Why Arrays Matter ??

Arrays form the backbone of most data handling in JavaScript. They allow easy manipulation, iteration, and transformation of data, making them essential for both beginners and advanced developers.
