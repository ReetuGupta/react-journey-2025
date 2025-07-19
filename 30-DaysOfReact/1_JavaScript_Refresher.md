# Day 1 – JavaScript Refresher 🚀  
Strengthening core JavaScript concepts to build a solid React foundation.



## 📌 What is ES6?

**ES6 (ECMAScript 2015)** is a major JavaScript update that introduced new features making code cleaner, shorter, and more powerful. It includes modern syntax like `let`, `const`, arrow functions, classes, modules, and more.



## 🔹 `let` vs `const`

- `let` is used for variables that can change later.
- `const` is for variables that should never change (constants).

```js
let score = 10;
score = 20; // valid

const PI = 3.14;
// PI = 3.15; ❌ Error: Assignment to constant variable
```

✅ Use const by default. Use let only when reassignment is needed.



## 🔹 Arrow Functions

Arrow functions are a shorter way to write functions, introduced in ES6.

```js
// Traditional
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow
const greet = (name) => `Hello, ${name}`;
```

✅ Useful for concise callbacks and when you want to avoid rebinding this.



## 🔹 Export & Import

Used to split code into reusable modules.

```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

✅ Use export/import in modular JS and in React projects for component reusability.



## 🔹 Classes, Properties & Methods

Classes are blueprints for creating objects with shared structure and behavior.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user = new Person("Reetu");
user.greet(); // Hi, I'm Reetu
```

✅ You'll often use classes in JS-based OOP and React class components (though function components are more common now).



## 🔹 Spread & Rest Operators

Spread ... – expands elements

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

Rest ... – collects remaining items

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
```

✅ Use in arrays, function params, props, and object immutability in React.



## 🔹  Destructuring

Unpack values from arrays or objects into variables.

```js
// Array
const [first, second] = [10, 20];
console.log(first); // 10

// Object
const user = { name: "Reetu", age: 24 };
const { name, age } = user;
console.log(name); // Reetu
```

✅ Cleaner access to props/state in React.



📝 Summary
Understanding modern JavaScript (ES6+) is essential before diving into React. Concepts like arrow functions, destructuring, classes, modules, and spread/rest operators are widely used in React components and application architecture.

✅ Strong JavaScript = Smooth React learning