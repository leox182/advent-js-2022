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

export default function getCompleted(part, total) {
  const validation = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  if (!validation.test(part) || !validation.test(total)) 
    throw new Error("parameters should be provided in valid 'hh:mm:ss' format");
  

  const partArray = part.split(":").map(Number)
  const totalArray = total.split(":").map(Number)

  const partTime = partArray[0] * 3600 + partArray[1] * 60 + partArray[2];
  const totalTime = totalArray[0] * 3600 + totalArray[1] * 60 + totalArray[2];

  if (partTime <= 0 || totalTime <= 0)
    throw new Error("parameters should be greater than '0'")
  
  const calMCD = (a, b) => {
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
