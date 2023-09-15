/* 
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

/\_\
\/_/

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

A tener en cuenta:

Fíjate bien en los espacios en blanco que hay en el cubo.
El cubo tiene que ser simétrico.
Asegúrate de usar los símbolos correctos.
Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.
*/

function createCube(size) {
  const top = [];
  const bottom = [];

  for (let i = 1; i <= size; i++) {
    const repeatEt = " ".repeat(size - i)
    const repeatLp = "/\\".repeat(i);
    const repeatTp = "_\\".repeat(size);
    const repeatRp = "_/".repeat(size);
    const repeatBp = "\\/".repeat(i);
    const lastNl = i === 1 ? "" : "\n"

    const patternTop = `${repeatEt}${repeatLp}${repeatTp}\n`;
    const patternBottom = `${repeatEt}${repeatBp}${repeatRp}${lastNl}`;
    top.push(patternTop);
    bottom.unshift(patternBottom);
  }

  return [...top, ...bottom].join("");
}