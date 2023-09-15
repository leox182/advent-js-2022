/* 
Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
*/

function printTable(gifts) {
  let tableContent = "";

  // get max length
  const { maxLengthName, maxLengthQuantity } = gifts.reduce(
    (maxValues, obj) => {
      if (obj.name.length > maxValues.maxLengthName) {
        maxValues.maxLengthName = obj.name.length;
      }

      if (obj.quantity.toString().length > maxValues.maxLengthQuantity) {
        maxValues.maxLengthQuantity = obj.quantity.toString().length;
      }

      return maxValues;
    },
    { maxLengthName: 0, maxLengthQuantity: 0 },
  );

  const nameSpace = maxLengthName > 4 ? maxLengthName : 4;
  const quantitySpace = maxLengthQuantity > 8 ? maxLengthQuantity : 8;
  const wrapper = 7 + nameSpace + quantitySpace;

  let tableHead = `\n| Gift${" ".repeat(nameSpace - 4)} | Quantity${" ".repeat(
    quantitySpace - 8,
  )} |`;
  const tableDivider = `\n| ${"-".repeat(nameSpace)} | ${"-".repeat(
    quantitySpace,
  )} |`;

  gifts.forEach((item) => {
    const qtyLength = item.quantity.toString().length;
    const nameLength = item.name.length;

    const str = `\n| ${item.name}${" ".repeat(nameSpace - nameLength)} | ${
      item.quantity
    }${" ".repeat(quantitySpace - qtyLength)} |`;

    tableContent += str;
  });

  return `${"+".repeat(
    wrapper,
  )}${tableHead}${tableDivider}${tableContent}\n${"*".repeat(wrapper)}`;
}