// Function Declaration Syntax:
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5)); // 6

// Function Expression Syntax:
const add2 = function addFunction(num1, num2) {
  return num1 + num2;
};

// (anonym)
const add3 = function (num1, num2) {
  return num1 + num2;
};

console.log(add2(1, 5)); // 6
console.log(add3(1, 5)); // 6

// Arrow Function Expression Syntax (anonym):
const add4 = (num1, num2) => {
  return num1 + num2;
};

console.log(add4(1, 5)); // 6

// Impure because we cannot predict the outcome
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let otherResult = 0;

// Impure because it chances an outside value
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  otherResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cookies'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount);
console.log(calculateIncomeTaxAmount);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser(); // Hi Maximilian

function powerOf(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    // result = result * x;
    result *= x;
  }

  return result;
}

console.log(powerOf(2, 3)); // 8