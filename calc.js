function remove() {
  //   const strng = document.calc.display.value;
  //   document.calc.display.value = strng.substring(0, strng.length - 1);
  const strng = document.calc.display.value;
  document.calc.display.value = strng.slice(0, -1);
}

