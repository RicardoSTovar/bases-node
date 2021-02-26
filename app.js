// 5x1 = 5
// 5x2 = 10

console.clear();
console.log("=================");
console.log("Tablas de multiplicar");
console.log("=======================");
const makeTable = (tableNumber) => {
  for (let index = 1; index < 11; index++) {
    console.log(`${tableNumber} * ${index} = ${tableNumber * index}`);
  }
}

makeTable(7)