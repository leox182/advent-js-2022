/* 
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

Cada 7 segundos, los leds cambian de estado de esta forma:

Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
Si el led está encendido, se mantiene siempre encendido.
Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. Por ejemplo:

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]
*/

function countTime(leds) {
  let ledsIteration = 0;
  let newLeds = [...leds];

  newLeds.forEach(() => {
    const allOn = newLeds.every((v) => v === 1);
    if (allOn) return ledsIteration * 7;

    newLeds = newLeds.map((led, i) => {
      const leftValue = i === 0 ? newLeds[newLeds.length - 1] : newLeds[i - 1];

      return led === 1 || leftValue ? 1 : 0;
    });
    ledsIteration += 1;
  });

  return ledsIteration * 7;
}
