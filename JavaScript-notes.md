# JavaScript Core Fundamentals

A comprehensive overview of JavaScript concepts, including execution patterns, data types, and operations.

---

## 1. Programming Paradigms
JavaScript is a versatile language that supports multiple programming styles:
* **Functional Programming:** Utilizing functions as first-class citizens.
* **Object-Oriented Programming (OOP):** Utilizing Classes and prototypes.

---

## 2. Execution Patterns

### Synchronous (Default)
JavaScript is single-threaded and executes code line-by-line.
* **Placement Matters:**
  * `<head>`: For critical scripts.
  * `<body>` (bottom): Standard placement.
  * `defer` / `async`: Modern script loading.

### Asynchronous
Handles time-consuming operations without freezing the UI:
* **Callbacks:** Functions passed as arguments.
* **Promises:** Future completion/failure of an operation.
* **Async/Await:** Readable syntax using `try-catch` for errors.
* **APIs:** Fetching external data.

---

## 3. Operations & Testing

### CRUD Operations
The four basic functions of persistent storage:
1. **C**reate
2. **R**ead
3. **U**pdate
4. **D**elete

### Testing
* **Jest:** A popular testing framework focused on simplicity.

---

## 4. Operators

| Category | Operators | Description |
| :--- | :--- | :--- |
| **Arithmetic** | `+`, `-`, `*`, `/` | Addition, Subtraction, Multiplication, Division |
| **Assignment** | `=` | Assigns a value |
| **Comparison** | `==`, `!=` | camparison between only data values |
| **Strict** | `===`, `!==` | camparison between both data values & data type |
|**concatenation** | `+` | used to add to number or string|

### Conversion of Operator (String to Decimal & Decimal to String)
* **String** to **Decimal** :- use `parseInt()` function [ Example=> parseInt(String, 10); ]
* **Decimal** to **String** :- use `toString()` function [ Example=> decival.toString(8); ]

* **RULE**:- Strings to Strings conversion not possible first convert number to decimal then convert it into string as required output.

* **NOTE**:- octa, hexa, hexdeci values are strings. 


## concatenation

*The process of joining two or more strings end-to-end to form a single, new string.

---

## 5. Data Types

### Primitive Data Types (Stored by Value)
* `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol`

### Non-Primitive (Stored by Reference)
* `Object`, `Array`, `Array of Objects`, `Function`