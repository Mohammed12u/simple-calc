function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  const result = document.getElementById("result").value;
  if (result.length > 0 && !isOperator(result[result.length - 1])) {
    document.getElementById("result").value += operator;
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  const expression = document.getElementById("result").value;
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function isOperator(char) {
  return char === "+" || char === "-" || char === "*" || char === "/";
}
