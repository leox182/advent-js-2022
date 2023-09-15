/* 
Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.

Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.

Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).

¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.

carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

*/

function carryGifts(gifts, maxWeight) {
  const result = [];
  let bag = "";

  gifts.forEach(gift => {
    const bagL = bag.replace(/\s/g, "").length
    const giftL = gift.length

    if (giftL > maxWeight) return
    else if (bagL + giftL <= maxWeight)
      bag += (bag.length ? ` ` : ``) + gift
    else {
      result.push(bag);
      bag = gift;
    }
  })

  if (bag.length) {
    result.push(bag);
  }

  return result;
}