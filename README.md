# js_chai_aur_code
JS Fundamental


Call Stack and Javascript Execution 


## 🧠 What is the **Call Stack**?

The **Call Stack** is a **data structure** used by JavaScript to keep track of **function calls**.

* It works like a **stack of plates** — **Last In, First Out (LIFO)**.
* When a function is called, it’s **pushed** onto the stack.
* When the function finishes, it’s **popped** off the stack.

---

### 📊 Example:

```js
function greet() {
  console.log("Hello!");
}

function start() {
  greet();
}

start();
```

### 🔁 Execution Flow:

1. `start()` is called → pushed to stack
2. `greet()` is called → pushed to stack
3. `console.log()` runs → pushed & popped
4. `greet()` finishes → popped
5. `start()` finishes → popped

✅ Now the stack is empty again.

---

### 🧱 Call Stack Diagram:

```
|              |   ← popped (empty)
| greet()      |
| start()      |   ← pushed first
```

---

## ⚙️ JavaScript Execution Flow

JavaScript runs in **two phases**:

### 1. **Memory Creation Phase (Hoisting)**

* Allocates memory for variables and functions.
* Functions are fully hoisted.
* Variables (`var`) are hoisted with value `undefined`.

### 2. **Execution Phase**

* Executes code **line by line**.
* Assigns real values to variables.
* Calls functions, which go to the **call stack**.

---

### 🔁 Execution Example:

```js
var x = 10;

function add(a, b) {
  return a + b;
}

var result = add(x, 5);
console.log(result);
```

#### 🔍 Memory Creation Phase:

* `x` → `undefined`
* `add` → function reference
* `result` → `undefined`

#### 🏃 Execution Phase:

* `x = 10`
* `result = add(10, 5)` → push `add` to stack
* `add` returns `15` → pop from stack
* `console.log(15)`

---

## 📌 Common Mistakes

### ❌ Infinite Recursion → Stack Overflow

```js
function loop() {
  loop(); // keeps calling itself
}

loop(); // ❌ Call stack overflow
```

---

## 🔚 Summary Table:

| Concept           | Meaning                                  |
| ----------------- | ---------------------------------------- |
| Call Stack        | Keeps track of function calls            |
| LIFO              | Last In, First Out                       |
| Hoisting          | Memory is allocated before execution     |
| Execution Context | Environment in which code runs           |
| Stack Overflow    | Too many nested calls, no base condition |

---

Let me know if you want a **real-time visualization tool** or interactive demo links to understand this better!



| Execution Context Type     | Description                                 |
| -------------------------- | ------------------------------------------- |
| Global Execution Context   | Created first, only one per program         |
| Function Execution Context | Created for each function call              |
| Eval Execution Context     | Created by `eval()` (rare, not recommended) |


 What is Hoisting in JavaScript?