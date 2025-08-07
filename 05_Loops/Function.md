In **JavaScript**, functions are one of the core building blocks, and they can be declared in **multiple ways**, each with different behavior depending on the use case (e.g., hoisting, `this` binding, etc.).

---

## ✅ 1. **Basic Function Declaration Syntax**

```javascript
function functionName(parameters) {
  // function body
  return value;
}
```

**Example:**

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

---

## 🔢 Types of Functions in JavaScript

JavaScript supports various ways to define functions:

---

### 1. **Function Declaration (Named Function)** ✅

```javascript
function sayHello() {
  console.log("Hello!");
}
```

* **Hoisted:** Yes (can be used before declaration)
* **Best for:** General-purpose functions

---

### 2. **Function Expression** 🧾

```javascript
const sayHi = function() {
  console.log("Hi!");
};
```

* **Named or Anonymous**
* **Not hoisted** like declarations

---

### 3. **Arrow Function (ES6+)** ➡️

```javascript
const add = (a, b) => {
  return a + b;
};
```

* Shorter syntax
* Does **not have its own `this`, arguments, or super**
* Ideal for **callbacks**, **array methods**, etc.

#### ✅ Short-hand version (if only one line):

```javascript
const square = x => x * x;
```

---

### 4. **Anonymous Function** 🙈

* Function **without a name**
* Often used as **arguments** or **immediately invoked**

```javascript
setTimeout(function() {
  console.log("This is anonymous!");
}, 1000);
```

---

### 5. **Immediately Invoked Function Expression (IIFE)** 🚀

Runs as soon as it's defined.

```javascript
(function() {
  console.log("IIFE runs instantly!");
})();
```

---

### 6. **Constructor Function** 👷

Used to create objects (with `new` keyword):

```javascript
function Person(name) {
  this.name = name;
}
const p1 = new Person("Pranav");
```

---

### 7. **Generator Function** 🌀

Function that can pause and resume using `yield` keyword:

```javascript
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}
```

Usage:

```javascript
const gen = generatorFunc();
console.log(gen.next().value); // 1
```

---

### 8. **Async Function** ⏳

Returns a Promise, used with `await` keyword:

```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com');
  let data = await response.json();
  return data;
}
```

---

## ✅ Summary Table

| Type                 | Syntax Example                          | Hoisted | Notes                           |
| -------------------- | --------------------------------------- | ------- | ------------------------------- |
| Function Declaration | `function greet() {}`                   | Yes     | Classic and hoisted             |
| Function Expression  | `const greet = function() {}`           | No      | Stored in variable, not hoisted |
| Arrow Function       | `const greet = () => {}`                | No      | No own `this`                   |
| Anonymous Function   | `setTimeout(function() {}, 1000)`       | No      | No name, used in callbacks      |
| IIFE                 | `(function() {})();`                    | No      | Runs immediately                |
| Constructor Function | `function Car() { this.name = 'BMW'; }` | Yes     | Used with `new`                 |
| Generator Function   | `function* gen() { yield 1; }`          | No      | Supports `yield`, `next()`      |
| Async Function       | `async function load() { await ... }`   | Yes     | Always returns a Promise        |

---

Let me know if you want a complete working example for each type!
