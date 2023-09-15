/* 
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

Bolas de colores : B
Regalos pequeños : R
Piñas de pino : P
El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

   R
  P B
 R B B
B P R P
Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
 */

function decorateTree(base) {
  const tree = [base];

  for (let row = 0; row < Math.floor(base.length / 2); row++) {
    let decoration = "";

    for (let col = 0; col < tree[row].length - 2; col += 2) {
      const tl = tree[row][col];
      const tr = tree[row][col + 2];

      if (tl === tr) {
        decoration += `${tl} `;
      } else if (![tl, tr].includes("B")) {
        decoration += "B ";
      } else if (![tl, tr].includes("R")) {
        decoration += "R ";
      } else {
        decoration += "P ";
      }
    }

    tree.push(decoration.trim());
  }

  return tree.reverse();
}