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