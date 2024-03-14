function getElementWidth(content, padding, border) {
  let number1 = Number.parseFloat(content);
  let number2 = Number.parseFloat(padding);
  let number3 = Number.parseFloat(border);
  return number1 + number2 * 2 + number3 * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
