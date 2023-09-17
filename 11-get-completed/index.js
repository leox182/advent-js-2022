/* 
Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5
*/

function getCompleted(part, total) {
  const partArray = part.split(":").map((item, index) => {
    const operador = index === 0 ? 3600 : index === 1 ? 60 : 0;
    return Number(item) * operador;
  });
  const totalArray = total.split(":").map((item, index) => {
    const operador = index === 0 ? 3600 : index === 1 ? 60 : 0;
    return Number(item) * operador;
  });
  
  function calMCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const mcd = calMCD(totalTime, partTime)

  return `${partTime / mcd}/${totalTime / mcd}`
}
