/* 
Verifica que todas las secuencias independientes de sistemas de iluminación navideña estén en orden estrictamente creciente. Tenemos dos arrays: systemNames y stepNumbers.

systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.

Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente. Si esto es cierto, devuelve true; de lo contrario, devuelve false.

Por ejemplo:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true
*/

function checkStepNumbers(systemNames, stepNumbers) {
  /*   const systemWithSteps = systemNames.map((system, i) => {
    const nextStep = systemNames.findIndex(
        (element, indexEl) => element === system && indexEl > i,
      )

    return stepNumbers[i] >= stepNumbers[nextStep] ? false : true
  });

  return systemWithSteps.includes(false) ? false : true */

  return !systemNames.some((system, i) => {
    const nextStep = systemNames.indexOf(system, i + 1);
    return nextStep !== -1 && stepNumbers[i] >= stepNumbers[nextStep];
  });
}
