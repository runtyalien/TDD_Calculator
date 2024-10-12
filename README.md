# String Calculator TDD Kata

## Description
I have created a simple "String Calculator" application that performs addition on a string of numbers, supporting various formats including custom delimiters, new lines, and error handling for negative numbers. 
This project follows all TDD principles.

## Features
- Handles an empty string and returns 0.
- Accepts single and multiple comma-separated numbers.
- Supports new line characters as delimiters.
- Allows custom delimiters specified at the start of the string.
- Throws errors for negative numbers with appropriate messages.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/runtyalien/tdd_calculator.git
   cd tdd_calculator
2. Install dependencies:
   ```bash
   npm install

## Running Tests
   ```bash
   npm test
   ```

## Usage
1.   ```bash
      npm start
2.   **To run the add function, you can include the following in `calculator.js`:**
  ```javascript
  console.log(add("1,2,3")); // Outputs: 6
  console.log(add("//;\n1;2;3")); // Outputs: 6
  console.log(add("1\n2,3")); // Outputs: 6
