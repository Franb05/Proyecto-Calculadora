let num1;
let operador;
let num2;

function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
console.log(suma(3, 8));

function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}
console.log(resta(12, 8));

function multiplicacion(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}
console.log(multiplicacion(4, 5));

function division(num1, num2) {
  let resultado = num1 / num2;
  return resultado;
}
console.log(division(12, 4));

function operate(operador, num1, num2) {
  let resultado;
  if (operador === "+") {
    resultado = num1 + num2;
  } else if (operador === "-") {
    resultado = num1 - num2;
  } else if (operador === "*") {
    resultado = num1 * num2;
  } else if (operador === "/") {
    resultado = num1 / num2;
  }
  return resultado;
}
console.log(operate("+", 3, 3));
