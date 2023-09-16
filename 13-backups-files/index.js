/* 
Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el timestamp de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene dos elementos: el id del archivo modificado y el timestamp de la modificación.

Tienes que crear un programa que devuelva un array con las id de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y ordenados de forma ascendente. Ejemplo:

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
*/

// Hay una validación que tiene que ver en como funciona el metodo sort

export default function getFilesToBackup(lastBackup, changes) {
  if (typeof lastBackup !== "number" || !Array.isArray(changes))
    throw new Error("parameters must be provided")

  const changesFiles = changes
    .flatMap((file) => {
      return file[1] > lastBackup ? file[0] : [];
    })
    .sort((a, b) => a - b);

  return [...new Set(changesFiles)];
}